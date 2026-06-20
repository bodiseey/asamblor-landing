"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CAL_NAMESPACE, CAL_LINK, HOVER_CSS } from "@/components/landing/LandingPage";
import { Solution } from "@/lib/solutions";
import { StateData } from "@/lib/states";
import { City } from "@/lib/cities";
import { InfrastructureStack } from "@/components/InfrastructureStack";

function linkifyCarrieX(text: string): React.ReactNode {
  const parts = text.split("CarrieX");
  if (parts.length === 1) return text;
  const out: React.ReactNode[] = [];
  parts.forEach((p, i) => {
    out.push(p);
    if (i < parts.length - 1) {
      out.push(
        <a key={i} href="https://carriex.io/" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none" }}>
          CarrieX
        </a>
      );
    }
  });
  return out;
}

const CAL_CONFIG = JSON.stringify({ layout: "month_view", useSlotsViewOnSmallScreen: "true" });
const calAttrs = {
  "data-cal-namespace": CAL_NAMESPACE,
  "data-cal-link": CAL_LINK,
  "data-cal-config": CAL_CONFIG,
} as const;

export default function StateSolutionClient({
  s,
  state,
  adjacent,
  cities = [],
}: {
  s: Solution;
  state: StateData;
  adjacent: StateData[];
  cities?: City[];
}) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view", theme: "dark" });
    })();
  }, []);

  return (
    <main style={{ background: "#09090b", color: "#fafafa", fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif", WebkitFontSmoothing: "antialiased" }}>
      <style dangerouslySetInnerHTML={{ __html: HOVER_CSS + `
        .ss-section { padding: 56px 0; border-bottom: 1px solid rgba(255,255,255,0.07); }
        .ss-eyebrow { font-size: 10.5px; color: #71717a; font-family: monospace; letter-spacing: 0.07em; margin-bottom: 14px; text-transform: uppercase; }
        .ss-h2 { font-size: 28px; font-weight: 400; line-height: 1.2; letter-spacing: -0.025em; margin-bottom: 18px; color: #fafafa; }
        .ss-h2 .grey { color: #71717a; }
        .ss-kv-row { display: flex; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .ss-kv-row:last-child { border-bottom: none; }
        .ss-kv-k { font-size: 12.5px; color: #71717a; font-family: monospace; letter-spacing: 0.04em; text-transform: uppercase; }
        .ss-kv-v { font-size: 13.5px; color: #e4e4e7; text-align: right; max-width: 60%; }
        .ss-chip { display: inline-block; padding: 6px 12px; border-radius: 999px; background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #d4d4d8; margin: 0 6px 8px 0; font-family: monospace; }
        .ss-tile { padding: 24px 28px; border-right: 1px solid rgba(255,255,255,0.07); border-bottom: 1px solid rgba(255,255,255,0.07); text-decoration: none; color: inherit; display: block; transition: background 0.2s ease; }
        .ss-tile:hover { background: rgba(255,255,255,0.02); }
      ` }} />

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(9,9,11,0.88)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image src="/logo.png" alt="Asamblor" width={32} height={32} priority style={{ display: "block", objectFit: "contain" }} />
            <span style={{ fontSize: 14.5, fontWeight: 500, color: "#fafafa", letterSpacing: "-0.01em" }}>Asamblor</span>
          </a>
          <div className="lp-nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="/#how-it-works" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>How It Works</a>
            <a href="/#engine" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>Infrastructure</a>
            <a href="/solutions" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none", color: "#fafafa" }}>Solutions</a>
            <a href="/#pricing" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>Pricing</a>
            <a href="/#faq" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>FAQ</a>
          </div>
          <a href="/book" {...calAttrs} className="lp-btn-light" style={{ color: "#09090b", fontSize: 13, fontWeight: 500, padding: "8px 16px", borderRadius: 6, textDecoration: "none", whiteSpace: "nowrap" }}>
            Book a Discovery Call
          </a>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "16px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", fontSize: 12, color: "#52525b", fontFamily: "monospace" }}>
          <a href="/" className="lp-nav-link" style={{ textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 8px" }}>/</span>
          <a href="/solutions" className="lp-nav-link" style={{ textDecoration: "none" }}>Solutions</a>
          <span style={{ margin: "0 8px" }}>/</span>
          <a href={`/solutions/${s.slug}`} className="lp-nav-link" style={{ textDecoration: "none" }}>{s.name}</a>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#a1a1aa" }}>{state.name}</span>
        </div>
      </section>

      {/* HERO */}
      <section style={{ padding: "56px 0 64px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="ss-eyebrow">{s.hero.eyebrow} · {state.name.toUpperCase()}</div>
          <h1 className="lp-h1" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 20, maxWidth: 1120 }}>
            <span className="lp-h1-line" style={{ display: "block", color: "#fafafa" }}>{s.name} acquisition pipeline,</span>
            <span className="lp-h1-line" style={{ display: "block", color: "#71717a" }}>tuned for carriers domiciled in {state.name}.</span>
          </h1>
          <p className="lp-subhero" style={{ fontSize: 16, color: "#a1a1aa", lineHeight: 1.65, marginBottom: 16, maxWidth: 760 }}>
            {linkifyCarrieX(s.hero.sub)}
          </p>
          <p style={{ fontSize: 14.5, color: "#a1a1aa", lineHeight: 1.65, marginBottom: 28, maxWidth: 760 }}>
            <strong style={{ color: "#fafafa", fontWeight: 500 }}>{state.name} context:</strong> {state.notes}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button type="button" {...calAttrs} className="lp-btn-primary" style={{ color: "#fff", fontSize: 14, fontWeight: 500, padding: "12px 22px", borderRadius: 6, border: "none", cursor: "pointer" }}>
              Book a Discovery Call →
            </button>
            <a href={`/solutions/${s.slug}`} className="lp-btn-outline" style={{ color: "#a1a1aa", fontSize: 14, fontWeight: 500, padding: "12px 22px", borderRadius: 6, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
              ← All {s.name} resources
            </a>
          </div>
        </div>
      </section>

      {/* STATE FILTER STRIP — corridors + hubs */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderLeft: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ padding: "28px 32px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="ss-eyebrow">Primary {state.name} corridors</div>
              <div style={{ marginTop: 6 }}>
                {state.corridors.map((c) => <span key={c} className="ss-chip">{c}</span>)}
              </div>
            </div>
            <div style={{ padding: "28px 32px" }}>
              <div className="ss-eyebrow">Top trucking hubs in {state.abbr}</div>
              <div style={{ marginTop: 6 }}>
                {state.hubs.map((h) => <span key={h} className="ss-chip">{h}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS — inherited from industry but framed for state */}
      <section className="ss-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="ss-eyebrow">Why {s.name.toLowerCase()} in {state.name} is hard</div>
          <h2 className="ss-h2"><span>Three reasons</span><span className="grey">{" "}your acquisition stalls in {state.abbr}.</span></h2>
          <div className="lp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderLeft: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)", borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 24 }}>
            {s.painPoints.map((p, i) => (
              <div key={i} style={{ padding: "28px 28px 32px", borderRight: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 12 }}>PROBLEM {String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontSize: 15.5, fontWeight: 500, color: "#fafafa", marginBottom: 8, letterSpacing: "-0.01em" }}>{p.title}</div>
                <div style={{ fontSize: 13.5, color: "#a1a1aa", lineHeight: 1.6 }}>{linkifyCarrieX(p.body)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE ICP — state-specific filter */}
      <section className="ss-section" style={{ background: "#0a0a0d" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="ss-eyebrow">{state.name} sample ICP</div>
              <h2 className="ss-h2" style={{ fontSize: 22 }}>
                {s.name} ICP for {state.name}, with operating area in adjacent {state.region}.
              </h2>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "8px 20px", marginTop: 18 }}>
                <div className="ss-kv-row">
                  <div className="ss-kv-k">Industry</div>
                  <div className="ss-kv-v">{s.name}</div>
                </div>
                <div className="ss-kv-row">
                  <div className="ss-kv-k">Domicile state</div>
                  <div className="ss-kv-v">{state.name} ({state.abbr})</div>
                </div>
                <div className="ss-kv-row">
                  <div className="ss-kv-k">Operating area</div>
                  <div className="ss-kv-v">{state.abbr} + {state.adjacentStates.join(", ")}</div>
                </div>
                <div className="ss-kv-row">
                  <div className="ss-kv-k">Primary corridors</div>
                  <div className="ss-kv-v">{state.corridors.map((c) => c.split(" ")[0]).join(", ")}</div>
                </div>
                <div className="ss-kv-row">
                  <div className="ss-kv-k">Top hubs (radius)</div>
                  <div className="ss-kv-v">{state.hubs.slice(0, 2).map((h) => h.split(" (")[0]).join(", ")}</div>
                </div>
                {s.sampleTarget.filters.slice(0, 3).map((kv) => (
                  <div key={kv.k} className="ss-kv-row">
                    <div className="ss-kv-k">{kv.k}</div>
                    <div className="ss-kv-v">{kv.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="ss-eyebrow">Why {state.name}</div>
              <h2 className="ss-h2" style={{ fontSize: 22 }}>What makes {state.name} different.</h2>
              <p style={{ fontSize: 14.5, color: "#a1a1aa", lineHeight: 1.7, marginTop: 12 }}>
                {state.notes}
              </p>
              <p style={{ fontSize: 14.5, color: "#a1a1aa", lineHeight: 1.7, marginTop: 14 }}>
                A typical {s.name.toLowerCase()} pipeline run on {state.name}-domiciled carriers will reach companies operating out of <strong style={{ color: "#fafafa", fontWeight: 500 }}>{state.hubs.slice(0, 2).map((h) => h.split(" (")[0]).join(" and ")}</strong>, with route exposure on the corridors above. Adjacent-state coverage ({state.adjacentStates.join(", ")}) keeps the regional flow intact for carriers with multi-state operating areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE STACK */}
      <section className="ss-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="ss-eyebrow">Your Asamblor infrastructure</div>
          <h2 className="ss-h2"><span>The complete acquisition infrastructure—</span><span className="grey">{" "}fully managed for your fleet.</span></h2>
          <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.65, marginBottom: 32, maxWidth: 760 }}>
            Six components, one engine — built, run, and owned for {state.name} motor carriers. No per-applicant fees, no agency commissions, no rented infrastructure.
          </p>
          <InfrastructureStack />
        </div>
      </section>

      {/* STATE-SPECIFIC FAQ */}
      <section className="ss-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="ss-eyebrow">FAQ — {state.name}</div>
              <h2 className="ss-h2"><span>Questions</span><span className="grey">{" "}from {state.name} operators.</span></h2>
            </div>
            <div>
              {[
                {
                  q: `How many ${s.name.toLowerCase()} prospects can Asamblor reach in ${state.name}?`,
                  a: `It depends on the ICP filter, but a typical pipeline targeting ${s.name.toLowerCase()} in ${state.name} (with adjacent-state coverage in ${state.adjacentStates.join(", ")}) reaches a meaningful subset of the verified carrier records in CarrieX for the ${state.region} region. We pull a live count for your exact filter on the discovery call — no guessing.`,
                },
                {
                  q: `Do you cover carriers running through ${state.name} on long-haul lanes, or only ${state.abbr}-domiciled?`,
                  a: `Both. You can filter by domicile (carriers based in ${state.name}) or by operating activity (carriers whose inspections cluster on ${state.corridors[0].split(" ")[0]} or other ${state.name} corridors). Different pipelines for different ICP definitions.`,
                },
                {
                  q: `What's special about ${state.name} for ${s.name.toLowerCase()}?`,
                  a: state.notes,
                },
                {
                  q: `Can we run a regional campaign covering ${state.abbr} + adjacent states?`,
                  a: `Yes — most clients run multi-state pipelines aligned to their service footprint. For ${state.name}, the natural cluster is ${state.abbr} + ${state.adjacentStates.slice(0, 3).join(", ")} (matching shared corridors and economic regions).`,
                },
              ].map((item, i) => (
                <details key={i} style={{ borderTop: i === 0 ? "1px solid rgba(255,255,255,0.07)" : undefined, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <summary style={{ listStyle: "none", cursor: "pointer", padding: "18px 0", fontSize: 15.5, color: "#fafafa", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
                    <span>{item.q}</span>
                    <span style={{ color: "#71717a", fontSize: 18, flexShrink: 0 }}>+</span>
                  </summary>
                  <div style={{ padding: "0 0 20px", fontSize: 14, color: "#a1a1aa", lineHeight: 1.7, maxWidth: 720 }}>{linkifyCarrieX(item.a)}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BY CITY — only for CORE solutions */}
      {cities.length > 0 && (
        <section className="ss-section">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
            <div className="ss-eyebrow">{state.name} cities</div>
            <h2 className="ss-h2"><span>{s.name} pipelines </span><span className="grey">in {state.name} metros.</span></h2>
            <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.6, marginBottom: 24, maxWidth: 760 }}>
              Each city page covers the local hiring radius, regional corridors, and adjacent-metro coverage relevant to {s.name.toLowerCase()} in that market.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px 1px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, overflow: "hidden" }} className="ss-city-grid">
              {cities.map((c) => (
                <a key={c.slug} href={`/solutions/${s.slug}/${state.slug}/${c.slug}`} style={{ background: "#0a0a0d", padding: "14px 16px", textDecoration: "none", color: "#a1a1aa", fontSize: 13, display: "flex", justifyContent: "space-between", alignItems: "center" }} className="ss-city-link">
                  <span>{c.name}{c.isCapital ? " ★" : ""}</span>
                  <span style={{ color: "#52525b", fontSize: 11, fontFamily: "monospace" }}>{state.abbr}</span>
                </a>
              ))}
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
              .ss-city-link:hover { background: #141418 !important; color: #fafafa !important; }
              @media (max-width: 900px) { .ss-city-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            ` }} />
          </div>
        </section>
      )}

      {/* ADJACENT STATES — internal linking */}
      {adjacent.length > 0 && (
        <section className="ss-section">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
            <div className="ss-eyebrow">{s.name} in adjacent states</div>
            <h2 className="ss-h2"><span>Same playbook,</span><span className="grey">{" "}neighboring carrier markets.</span></h2>
            <div className="lp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderLeft: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)", borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 24 }}>
              {adjacent.map((a) => (
                <a key={a.slug} href={`/solutions/${s.slug}/${a.slug}`} className="ss-tile">
                  <div style={{ fontSize: 16, fontWeight: 500, color: "#fafafa", marginBottom: 6 }}>{s.name} — {a.name}</div>
                  <div style={{ fontSize: 13, color: "#71717a", lineHeight: 1.55 }}>Hubs: {a.hubs.slice(0, 2).map((h) => h.split(" (")[0]).join(", ")}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "radial-gradient(circle at center, rgba(37,99,235,0.06) 0%, rgba(9,9,11,0) 70%), #0a0a0d", padding: "88px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
          <div className="ss-eyebrow">Book a Discovery Call</div>
          <h2 style={{ fontSize: 32, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 18, color: "#fafafa" }}>
            Scope your {state.name} {s.name.toLowerCase()} pipeline.
          </h2>
          <p style={{ fontSize: 15.5, color: "#a1a1aa", lineHeight: 1.65, marginBottom: 32, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
            30 minutes. We pull a live{" "}
            <a href="https://carriex.io/" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none" }}>CarrieX</a>
            {" "}sample for {state.name}-domiciled {s.name.toLowerCase()} prospects, and outline the engine.
          </p>
          <button type="button" {...calAttrs} className="lp-btn-primary" style={{ color: "#fff", fontSize: 14, fontWeight: 500, padding: "14px 30px", borderRadius: 6, border: "none", cursor: "pointer" }}>
            Book a Discovery Call →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "24px 0", background: "#09090b" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 12, color: "#52525b" }}>
            © {new Date().getFullYear()} Asamblor is a product of{" "}
            <a href="https://carriex.io/" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none" }}>CarrieX Labs LLC</a>.
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="/solutions" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>All solutions</a>
            <a href="/privacy" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>Privacy</a>
            <a href="/terms" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
