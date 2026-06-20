"use client";

import Image from "next/image";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CAL_NAMESPACE, CAL_LINK, HOVER_CSS } from "@/components/landing/LandingPage";
import { Solution } from "@/lib/solutions";

const CAL_CONFIG = JSON.stringify({ layout: "month_view", useSlotsViewOnSmallScreen: "true" });
const calAttrs = {
  "data-cal-namespace": CAL_NAMESPACE,
  "data-cal-link": CAL_LINK,
  "data-cal-config": CAL_CONFIG,
} as const;

export default function SolutionsIndexClient({ solutions }: { solutions: Solution[] }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view", theme: "dark" });
    })();
  }, []);

  return (
    <main style={{ background: "#09090b", color: "#fafafa", fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif", WebkitFontSmoothing: "antialiased" }}>
      <style dangerouslySetInnerHTML={{ __html: HOVER_CSS + `
        .sol-tile { padding: 32px 32px 36px; border-right: 1px solid rgba(255,255,255,0.07); border-bottom: 1px solid rgba(255,255,255,0.07); display: block; text-decoration: none; color: inherit; transition: background 0.2s ease; }
        .sol-tile:hover { background: rgba(255,255,255,0.02); }
        .sol-tile .num { font-size: 10px; color: #71717a; font-family: monospace; letter-spacing: 0.07em; margin-bottom: 16px; }
        .sol-tile .name { font-size: 18px; font-weight: 500; color: #fafafa; margin-bottom: 10px; letter-spacing: -0.01em; }
        .sol-tile .desc { font-size: 13.5px; color: #a1a1aa; line-height: 1.6; margin-bottom: 14px; }
        .sol-tile .arrow { font-size: 12px; color: #52525b; font-family: monospace; }
        .sol-tile:hover .arrow { color: #fafafa; }
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

      {/* HERO */}
      <section style={{ padding: "56px 0 40px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 20, textTransform: "uppercase" }}>Solutions</div>
          <h1 className="lp-h1" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 20, maxWidth: 1120 }}>
            <span className="lp-h1-line" style={{ display: "block", whiteSpace: "nowrap", color: "#fafafa" }}>One engine. {solutions.length} trucking-adjacent industries.</span>
            <span className="lp-h1-line" style={{ display: "block", whiteSpace: "nowrap", color: "#71717a" }}>Every pipeline is built on the same CarrieX data layer.</span>
          </h1>
          <p style={{ fontSize: 16, color: "#a1a1aa", lineHeight: 1.65, marginBottom: 6, maxWidth: 760 }}>
            If your business sells to motor carriers, owner-operators, or fleet decision-makers, Asamblor builds the outbound. Pick your audience below — each page covers the ICP, filters, sample outreach, and FAQ specific to that industry.
          </p>
          <p style={{ fontSize: 13.5, color: "#52525b", lineHeight: 1.6 }}>
            Powered by{" "}
            <a href="https://carriex.io/" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none" }}>CarrieX</a>
            {" "}— 4.5M+ verified motor carrier records.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderLeft: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
            {solutions.map((s, i) => (
              <a key={s.slug} href={`/solutions/${s.slug}`} className="sol-tile">
                <div className="num">SOL {String(i + 1).padStart(2, "0")}</div>
                <div className="name">{s.name}</div>
                <div className="desc">{s.short}</div>
                <div className="arrow">Explore →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "radial-gradient(circle at center, rgba(37,99,235,0.06) 0%, rgba(9,9,11,0) 70%), #0a0a0d", padding: "88px 0", borderBottom: "1px solid rgba(255,255,255,0.07)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
          <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 24 }}>BOOK A DISCOVERY CALL</div>
          <h2 style={{ fontSize: 32, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 18, color: "#fafafa" }}>
            Not sure which fits?
          </h2>
          <p style={{ fontSize: 15.5, color: "#a1a1aa", lineHeight: 1.65, marginBottom: 32, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
            30 minutes. We review your ICP, pull a live{" "}
            <a href="https://carriex.io/" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none" }}>CarrieX</a>
            {" "}sample for your exact target, and outline the engine.
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
            <a href="https://carriex.io/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>CarrieX Labs LLC</a>.
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="/privacy" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>Privacy</a>
            <a href="/terms" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
