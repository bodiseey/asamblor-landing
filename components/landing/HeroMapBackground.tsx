"use client";

import { useEffect, useRef } from "react";

type Dot = [number, number];
type DotData = {
  canvas: { w: number; h: number };
  dots: Dot[];
  metros: Record<string, [number, number]>;
};

type Arc = {
  fromKey: string;
  toKey: string;
  start: number;
  drawMs: number;
  holdMs: number;
  fadeMs: number;
  lift: number;
};

const ACCENT = "rgba(37, 99, 235, "; // brand blue
const DOT_RGB = "rgba(255, 255, 255, ";
const METRO_KEYS = ["Seattle", "Los Angeles", "Chicago", "New York", "Dallas", "Atlanta", "Miami"];

function qb(p0: [number, number], p1: [number, number], p2: [number, number], t: number): [number, number] {
  const u = 1 - t;
  return [u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0], u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]];
}

export default function HeroMapBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let isMobile = false;

    let data: DotData | null = null;
    let dotPhases: Float32Array | null = null;
    let dotStride = 1; // skip every Nth dot on mobile
    let rafId = 0;
    let visible = true;
    let running = false;
    const arcs: Arc[] = [];
    let nextSpawn = 0;
    let lastPair: { f: string; t: string } | undefined;

    let cssW = 0;
    let cssH = 0;
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    // Perspective parameters — recompute on resize
    const layout = {
      horizonY: 0,
      bottomY: 0,
      centerX: 0,
      bandWidth: 0,
      focal: 0.7,
      horizonWidth: 0.55,
      waveAmp: 6,
    };

    function recomputeLayout() {
      if (isMobile) {
        layout.horizonY = cssH * 0.72; // Push the horizon way down on mobile to clear the text
        layout.bottomY = cssH * 1.15;
        layout.centerX = cssW * 0.5;
        layout.bandWidth = cssW * 1.6;
        layout.focal = 0.5;
        layout.horizonWidth = 0.45;
        layout.waveAmp = 3;
      } else {
        // Map band: horizon sits just below the CTA pill, terrain fills the lower half
        layout.horizonY = cssH * 0.50;
        layout.bottomY = cssH * 1.05;
        layout.centerX = cssW * 0.5;
        // Band at front (south) bleeds off the sides; at horizon (north) compresses to horizonWidth of cssW
        layout.bandWidth = cssW * 1.30;
        layout.focal = 0.55;
        layout.horizonWidth = 0.48;
        layout.waveAmp = Math.min(10, cssH * 0.016);
      }
    }

    // Perspective curve: 0 (near, south) → 0; 1 (far, north) → 1; compresses middle toward horizon
    function persp(depth: number): number {
      return (depth * (layout.focal + 1)) / (layout.focal + depth);
    }

    function project(n: [number, number], now: number): { x: number; y: number; f: number; depth: number; h: number } {
      const depth = 1 - n[1]; // ny=1 (south) → depth 0 (near); ny=0 (north) → depth 1 (far)
      const f = persp(depth);
      // Y interpolation: bottomY at depth 0, horizonY at depth 1
      let y = layout.bottomY + (layout.horizonY - layout.bottomY) * f;
      // X scale narrows toward horizon
      const xScale = 1 - f * (1 - layout.horizonWidth);
      const x = layout.centerX + (n[0] - 0.5) * layout.bandWidth * xScale;

      // Realistic US Topography Elevation Profile (n[0] is West-East, n[1] is North-South)
      const nx = n[0];
      const ny = n[1];

      // 1. Rocky Mountains: Very high, peaking around nx = 0.22, running North-South
      const rockiesCenter = 0.22 + ny * 0.04;
      const rockies = Math.exp(-Math.pow((nx - rockiesCenter) / 0.11, 2)) * 2.3;

      // 2. Cascades & Sierra Nevada: High range on the far West Coast (nx = 0.07)
      const cascades = Math.exp(-Math.pow((nx - 0.07) / 0.03, 2)) * 1.4;

      // 3. Great Basin Plateau: High flat-ish area in between West Coast and Rockies
      let plateau = 0;
      if (nx > 0.07 && nx < rockiesCenter) {
        const t = (nx - 0.07) / (rockiesCenter - 0.07);
        plateau = (0.5 + 0.5 * Math.sin(t * Math.PI - Math.PI / 2)) * 0.8;
      }

      // 4. Appalachian Mountains: Medium range on the East Coast, tilting West as it runs South
      const appCenter = 0.83 - ny * 0.08;
      const appalachians = Math.exp(-Math.pow((nx - appCenter) / 0.06, 2)) * 0.85;

      // Combine ranges: Central Plains (nx = 0.40 to 0.75) naturally stay flat/low
      let h = Math.max(rockies, cascades, plateau) + appalachians;

      // Add high-frequency fractal noise to create rugged, voxel-like mountain ridges
      const noise =
        Math.sin(nx * 55 + ny * 35) * 0.15 +
        Math.sin(nx * 130 - ny * 85) * 0.08 +
        Math.cos(nx * 240 + ny * 160) * 0.05;

      // Apply noise mostly to mountain areas, keeping plains clean
      h = Math.max(0, h + noise * (h > 0.12 ? 1.0 : 0.2));

      // Displace Y screen coordinate upwards based on topography height, scaled by perspective depth
      y -= h * layout.waveAmp * 4.6 * (1 - f * 0.6);

      // Undulation — slow, low amplitude, fades toward horizon
      if (!reduced) {
        const t = now * 0.00026;
        const wave =
          Math.sin(nx * 4.6 + t * 1.2) * 0.55 +
          Math.sin(ny * 3.4 - t * 1.5 + 1.7) * 0.45;
        y += wave * layout.waveAmp * (1 - f * 0.7);
      }
      return { x, y, f, depth, h };
    }

    function resize() {
      if (!wrap || !canvas) return;
      isMobile = window.matchMedia("(max-width: 900px)").matches;
      dotStride = isMobile ? 2 : 1;
      const rect = wrap.getBoundingClientRect();
      cssW = rect.width;
      cssH = rect.height;
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      canvas.style.width = cssW + "px";
      canvas.style.height = cssH + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      recomputeLayout();
    }

    function drawDots(now: number) {
      if (!data || !dotPhases) return;
      const t = now / 1000;
      const len = data.dots.length;
      for (let i = 0; i < len; i += dotStride) {
        const p = project(data.dots[i], now);
        // Skip dots above the horizon plane
        if (p.y < layout.horizonY - 2) continue;
        // Depth attenuation: bigger + brighter near, smaller + dimmer at horizon
        const nearF = 1 - p.f;
        const size = 1.0 + nearF * 1.8;
        const baseAlpha = 0.16 + nearF * 0.42;
        // Shimmer
        const shimmer = reduced
          ? 1
          : 0.78 + 0.22 * Math.sin(t * 0.45 + dotPhases[i]);
        const alpha = baseAlpha * shimmer;

        // Dynamic 3D elevation color palette matching the brand colors:
        // Peaks -> Glowing White, Mountains -> Light blue, Low hills -> Royal blue, Plains -> Faint zinc gray
        let colorRGB = "255, 255, 255, ";
        if (p.h > 0.85) {
          colorRGB = "250, 250, 250, "; // white peaks
        } else if (p.h > 0.35) {
          colorRGB = "96, 165, 250, "; // light blue highlands
        } else if (p.h > 0.08) {
          colorRGB = "37, 99, 235, ";  // brand royal blue lowlands
        } else {
          colorRGB = "113, 113, 122, "; // faint zinc gray plains
        }

        ctx!.fillStyle = "rgba(" + colorRGB + alpha.toFixed(3) + ")";
        ctx!.fillRect(p.x - size * 0.5, p.y - size * 0.5, size, size);
      }
    }

    function drawArc(arc: Arc, now: number) {
      if (!data) return;
      const from = data.metros[arc.fromKey];
      const to = data.metros[arc.toKey];
      if (!from || !to) return;
      const elapsed = now - arc.start;
      const totalDraw = arc.drawMs;
      const totalHold = arc.drawMs + arc.holdMs;
      const totalLife = totalHold + arc.fadeMs;
      if (elapsed >= totalLife) return;

      const a = project(from, now);
      const b = project(to, now);
      const p0: [number, number] = [a.x, a.y];
      const p2: [number, number] = [b.x, b.y];
      const dx = p2[0] - p0[0];
      const dy = p2[1] - p0[1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      // Lift control point above the higher of the two endpoints, scaled by horizontal span (not raw dist)
      const horizSpan = Math.abs(dx);
      const liftPx = Math.max(55, Math.min(horizSpan * arc.lift, cssH * 0.45));
      const baseY = Math.min(p0[1], p2[1]);
      const mx = (p0[0] + p2[0]) / 2;
      const p1: [number, number] = [mx, baseY - liftPx];

      const tProgress = reduced ? 1 : Math.min(1, elapsed / totalDraw);
      const fadeAlpha =
        elapsed > totalHold ? Math.max(0, 1 - (elapsed - totalHold) / arc.fadeMs) : 1;

      const SAMPLES = 64;
      const last = Math.max(2, Math.floor(SAMPLES * tProgress));

      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";

      // Soft outer glow
      ctx!.strokeStyle = ACCENT + (0.20 * fadeAlpha).toFixed(3) + ")";
      ctx!.lineWidth = 5;
      ctx!.beginPath();
      for (let i = 0; i <= last; i++) {
        const t = i / SAMPLES;
        const [x, y] = qb(p0, p1, p2, t);
        if (i === 0) ctx!.moveTo(x, y);
        else ctx!.lineTo(x, y);
      }
      ctx!.stroke();

      // Sharp inner stroke
      ctx!.strokeStyle = ACCENT + (0.88 * fadeAlpha).toFixed(3) + ")";
      ctx!.lineWidth = 1.4;
      ctx!.beginPath();
      for (let i = 0; i <= last; i++) {
        const t = i / SAMPLES;
        const [x, y] = qb(p0, p1, p2, t);
        if (i === 0) ctx!.moveTo(x, y);
        else ctx!.lineTo(x, y);
      }
      ctx!.stroke();

      // Origin node from the start
      drawNode(p0[0], p0[1], 1 * fadeAlpha);

      // Destination node pops in when arc lands
      if (tProgress >= 0.98) {
        const landAge = Math.max(0, elapsed - totalDraw);
        const pop = Math.min(1, landAge / 240);
        drawNode(p2[0], p2[1], pop * fadeAlpha, 1 + (1 - pop) * 0.9);
      }

      // Moving head packet while drawing
      if (tProgress < 1) {
        const head = qb(p0, p1, p2, tProgress);
        ctx!.fillStyle = ACCENT + (0.95 * fadeAlpha).toFixed(3) + ")";
        ctx!.beginPath();
        ctx!.arc(head[0], head[1], 2.6, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = ACCENT + (0.30 * fadeAlpha).toFixed(3) + ")";
        ctx!.beginPath();
        ctx!.arc(head[0], head[1], 6, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function drawNode(x: number, y: number, alpha: number, scale = 1) {
      ctx!.fillStyle = ACCENT + (0.25 * alpha).toFixed(3) + ")";
      ctx!.beginPath();
      ctx!.arc(x, y, 7 * scale, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.fillStyle = ACCENT + (0.95 * alpha).toFixed(3) + ")";
      ctx!.beginPath();
      ctx!.arc(x, y, 2.6 * scale, 0, Math.PI * 2);
      ctx!.fill();
    }

    function pickArc(now: number): Arc | null {
      if (!data) return null;
      const minSpanPx = cssW * 0.22; // enforce graceful curves only
      for (let tries = 0; tries < 30; tries++) {
        const from = METRO_KEYS[Math.floor(Math.random() * METRO_KEYS.length)];
        let to = METRO_KEYS[Math.floor(Math.random() * METRO_KEYS.length)];
        if (to === from) continue;
        if (lastPair && lastPair.f === from && lastPair.t === to) continue;
        const fromXY = data.metros[from];
        const toXY = data.metros[to];
        if (!fromXY || !toXY) continue;
        const a = project(fromXY, now);
        const b = project(toXY, now);
        if (Math.abs(a.x - b.x) < minSpanPx) continue;
        return {
          fromKey: from,
          toKey: to,
          start: now,
          drawMs: 2200 + Math.random() * 900,
          holdMs: 500 + Math.random() * 400,
          fadeMs: 1100 + Math.random() * 500,
          lift: 0.26 + Math.random() * 0.10,
        };
      }
      return null;
    }

    function frame(now: number) {
      if (!visible || !data) {
        rafId = requestAnimationFrame(frame);
        return;
      }
      ctx!.clearRect(0, 0, cssW, cssH);
      drawDots(now);

      if (!reduced && now >= nextSpawn && arcs.length < 3) {
        const a = pickArc(now);
        if (a) {
          arcs.push(a);
          lastPair = { f: a.fromKey, t: a.toKey };
          nextSpawn = now + 1600 + Math.random() * 1400;
        } else {
          nextSpawn = now + 300;
        }
      }

      for (let i = arcs.length - 1; i >= 0; i--) {
        const arc = arcs[i];
        const totalLife = arc.drawMs + arc.holdMs + arc.fadeMs;
        if (now - arc.start >= totalLife) {
          arcs.splice(i, 1);
          continue;
        }
        drawArc(arc, now);
      }

      rafId = requestAnimationFrame(frame);
    }

    function staticRender() {
      if (!data) return;
      ctx!.clearRect(0, 0, cssW, cssH);
      drawDots(performance.now());
      const pairs: [string, string][] = [
        ["Los Angeles", "New York"],
        ["Seattle", "Miami"],
        ["Dallas", "Chicago"],
      ];
      const now = performance.now();
      pairs.forEach((pair, i) => {
        drawArc(
          {
            fromKey: pair[0],
            toKey: pair[1],
            start: now - 5000,
            drawMs: 1,
            holdMs: 60_000,
            fadeMs: 1,
            lift: 0.32 + i * 0.05,
          },
          now,
        );
      });
    }

    // ---- bootstrap ----
    let cancelled = false;
    fetch("/us-dots.json", { cache: "force-cache" })
      .then((r) => r.json())
      .then((json: DotData) => {
        if (cancelled) return;
        const originalDots = json.dots;
        const denserDots: Dot[] = [];
        for (const dot of originalDots) {
          denserDots.push(dot);
          // Generate 2 extra jittered dots to make the map look 3x denser and more detailed
          denserDots.push([dot[0] + (Math.random() - 0.5) * 0.005, dot[1] + (Math.random() - 0.5) * 0.005]);
          denserDots.push([dot[0] + (Math.random() - 0.5) * 0.005, dot[1] + (Math.random() - 0.5) * 0.005]);
        }
        json.dots = denserDots;
        data = json;
        dotPhases = new Float32Array(json.dots.length);
        for (let i = 0; i < dotPhases.length; i++) dotPhases[i] = Math.random() * Math.PI * 2;
        dotStride = isMobile ? 2 : 1;
        resize();
        if (reduced) {
          staticRender();
        } else {
          running = true;
          rafId = requestAnimationFrame(frame);
        }
      })
      .catch(() => {});

    const onResize = () => {
      resize();
      if (reduced) staticRender();
    };
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          visible = e.isIntersecting;
          if (visible && !running && !reduced) {
            running = true;
            rafId = requestAnimationFrame(frame);
          }
        }
      },
      { threshold: 0 },
    );
    io.observe(wrap);

    return () => {
      cancelled = true;
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="lp-hero-map-wrap"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}
