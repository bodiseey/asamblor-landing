"use client";

import Image from "next/image";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CAL_NAMESPACE, CAL_LINK, HOVER_CSS } from "@/components/landing/LandingPage";
import { Solution } from "@/lib/solutions";
import { StateData } from "@/lib/states";
import React from "react";

function linkifyCarrieX(text: string): React.ReactNode {
  const parts = text.split("CarrieX");
  if (parts.length === 1) return text;
  const out: React.ReactNode[] = [];
  parts.forEach((p, i) => {
    out.push(p);
    if (i < parts.length - 1) {
      out.push(
        <a key={i} href="https://carriex.io/" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none", borderBottom: "none" }}>
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

export default function SolutionClient({ s, related, states = [] }: { s: Solution; related: Solution[]; states?: StateData[] }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view", theme: "dark" });
    })();
  }, []);

  return (
    <main style={{ background: "#09090b", color: "#fafafa", fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif", WebkitFontSmoothing: "antialiased" }}>
      <style dangerouslySetInnerHTML={{ __html: HOVER_CSS + `
        .sol-card { padding: 32px 32px 36px; border-right: 1px solid rgba(255,255,255,0.07); }
        .sol-card .num { font-size: 10.5px; color: #71717a; font-family: monospace; letter-spacing: 0.07em; margin-bottom: 14px; }
        .sol-card .title { font-size: 16px; font-weight: 500; color: #fafafa; margin-bottom: 10px; letter-spacing: -0.01em; }
        .sol-card .body { font-size: 13.5px; color: #a1a1aa; line-height: 1.6; }
        .sol-filter-pill { display: inline-block; padding: 7px 12px; border-radius: 999px; background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); font-size: 12.5px; color: #d4d4d8; margin: 0 6px 8px 0; font-family: monospace; letter-spacing: 0.02em; }
        .sol-kv-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .sol-kv-row:last-child { border-bottom: none; }
        .sol-kv-k { font-size: 12.5px; color: #71717a; font-family: monospace; letter-spacing: 0.04em; text-transform: uppercase; }
        .sol-kv-v { font-size: 13.5px; color: #e4e4e7; text-align: right; }
        .sol-email { background: linear-gradient(180deg, #0e0e11 0%, #0a0a0c 100%); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; overflow: hidden; }
        .sol-email-hdr { padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; gap: 10px; align-items: center; font-size: 12px; color: #71717a; font-family: monospace; }
        .sol-email-dot { width: 7px; height: 7px; border-radius: 50%; }
        .sol-email-subj { padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 14px; color: #fafafa; font-weight: 500; }
        .sol-email-body { padding: 20px; font-size: 14px; color: #d4d4d8; line-height: 1.65; white-space: pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
        .sol-faq summary { list-style: none; cursor: pointer; padding: 20px 0; font-size: 16px; color: #fafafa; display: flex; justify-content: space-between; align-items: center; gap: 24px; }
        .sol-faq summary::-webkit-details-marker { display: none; }
        .sol-faq[open] .faq-i { transform: rotate(45deg); color: #fff; }
        .sol-faq .faq-i { color: #71717a; font-size: 18px; flex-shrink: 0; transition: transform 0.2s ease; }
        .sol-faq .faq-a { padding: 0 0 22px; font-size: 14.5px; color: #a1a1aa; line-height: 1.7; max-width: 760px; }
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
          <span style={{ color: "#a1a1aa" }}>{s.name}</span>
        </div>
      </section>

      {/* HERO */}
      <section style={{ padding: "56px 0 64px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 20, textTransform: "uppercase" }}>{s.hero.eyebrow}</div>
          <h1 className="lp-h1" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 20, maxWidth: 1120 }}>
            <span className="lp-h1-line" style={{ display: "block", whiteSpace: "nowrap", color: "#fafafa" }}>{s.hero.headlineWhite}</span>
            <span className="lp-h1-line" style={{ display: "block", whiteSpace: "nowrap", color: "#71717a" }}>{s.hero.headlineGrey}</span>
          </h1>
          <p className="lp-subhero" style={{ fontSize: 16, color: "#a1a1aa", lineHeight: 1.65, marginBottom: 28, maxWidth: 760 }}>
            {linkifyCarrieX(s.hero.sub)}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button type="button" {...calAttrs} className="lp-btn-primary" style={{ color: "#fff", fontSize: 14, fontWeight: 500, padding: "12px 22px", borderRadius: 6, border: "none", cursor: "pointer" }}>
              Book a Discovery Call →
            </button>
            <a href="/#how-it-works" className="lp-btn-outline" style={{ color: "#a1a1aa", fontSize: 14, fontWeight: 500, padding: "12px 22px", borderRadius: 6, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
              How the engine works
            </a>
          </div>
          <p style={{ fontSize: 13, color: "#52525b", marginTop: 24, lineHeight: 1.6 }}>
            Powered by{" "}
            <a href="https://carriex.io/" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none" }}>CarrieX</a>
            {" "}— 4.5M+ verified trucking records. {s.audience}
          </p>
        </div>
      </section>

      {/* PAIN POINTS — 3-col grid */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 40px 0" }}>
          <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 14 }}>WHY THIS AUDIENCE IS HARD TO REACH</div>
          <h2 className="lp-h2" style={{ fontSize: 30, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 40, maxWidth: 720 }}>
            <span style={{ color: "#fafafa" }}>Three reasons</span>
            <span style={{ color: "#71717a" }}>{" "}your acquisition stalls.</span>
          </h2>
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 56px" }}>
          <div className="lp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderLeft: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {s.painPoints.map((p, i) => (
              <div key={i} className="sol-card">
                <div className="num">PROBLEM {String(i + 1).padStart(2, "0")}</div>
                <div className="title">{p.title}</div>
                <div className="body">{linkifyCarrieX(p.body)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ASAMBLOR — 2x2 grid */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 40px 0" }}>
          <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 14 }}>WHY ASAMBLOR FOR {s.name.toUpperCase()}</div>
          <h2 className="lp-h2" style={{ fontSize: 30, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 40, maxWidth: 760 }}>
            <span style={{ color: "#fafafa" }}>The same engine </span>
            <span style={{ color: "#71717a" }}>tuned for your ICP.</span>
          </h2>
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 72px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderLeft: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)", borderTop: "1px solid rgba(255,255,255,0.07)" }} className="lp-2col">
            {s.whyAsamblor.map((w, i) => (
              <div key={i} style={{ padding: "32px 36px 36px", borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.07)" : "none", borderBottom: i < s.whyAsamblor.length - 2 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ fontSize: 17, fontWeight: 500, color: "#fafafa", marginBottom: 12, letterSpacing: "-0.01em" }}>{w.title}</div>
                <div style={{ fontSize: 14.5, color: "#a1a1aa", lineHeight: 1.65 }}>{linkifyCarrieX(w.body)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARRIEX FILTERS */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <div>
              <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 14 }}>CARRIEX FILTERS</div>
              <h2 className="lp-h2" style={{ fontSize: 28, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 18 }}>
                <span style={{ color: "#fafafa" }}>The filters</span>
                <span style={{ color: "#71717a" }}>{" "}you can pull on.</span>
              </h2>
              <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.65 }}>
                Every filter comes from{" "}
                <a href="https://carriex.io/" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none" }}>CarrieX</a>
                {" "}— structured, de-duped, and refreshed continuously from public regulatory and state-level authority filings.
              </p>
            </div>
            <div>
              {s.carriexFilters.map((f, i) => (
                <span key={i} className="sol-filter-pill">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE ICP + EXAMPLE OUTREACH */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "72px 0", background: "#0a0a0d" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 14 }}>SAMPLE ICP</div>
              <h2 style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.3, color: "#fafafa", marginBottom: 24, letterSpacing: "-0.015em" }}>
                {s.sampleTarget.label}
              </h2>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "8px 20px" }}>
                {s.sampleTarget.filters.map((kv, i) => (
                  <div key={i} className="sol-kv-row">
                    <div className="sol-kv-k">{kv.k}</div>
                    <div className="sol-kv-v">{kv.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, padding: "16px 20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, fontSize: 13.5, color: "#a1a1aa" }}>
                <span style={{ color: "#71717a", fontFamily: "monospace", fontSize: 11, letterSpacing: "0.06em" }}>ESTIMATED REACH</span>
                <div style={{ marginTop: 6, color: "#fafafa", fontSize: 18, fontWeight: 500, fontFamily: "monospace" }}>{s.sampleTarget.estimatedRecords}</div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 14 }}>SAMPLE OUTREACH</div>
              <h2 style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.3, color: "#fafafa", marginBottom: 24, letterSpacing: "-0.015em" }}>
                A real outbound message — not a template you&apos;d be embarrassed to send.
              </h2>
              <div className="sol-email">
                <div className="sol-email-hdr">
                  <span className="sol-email-dot" style={{ background: "#ef4444" }} />
                  <span className="sol-email-dot" style={{ background: "#f59e0b" }} />
                  <span className="sol-email-dot" style={{ background: "#10b981" }} />
                  <span style={{ marginLeft: "auto" }}>asamblor.engine</span>
                </div>
                <div className="sol-email-subj">{s.exampleOutreach.subject}</div>
                <div className="sol-email-body">{s.exampleOutreach.body}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <div>
              <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 14 }}>FAQ</div>
              <h2 className="lp-h2" style={{ fontSize: 30, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em" }}>
                <span style={{ color: "#fafafa" }}>What {s.name.toLowerCase()} </span>
                <span style={{ color: "#71717a" }}>ask us.</span>
              </h2>
            </div>
            <div>
              {s.faqs.map((item, i) => (
                <details key={i} className="sol-faq" style={{ borderTop: i === 0 ? "1px solid rgba(255,255,255,0.07)" : undefined, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <summary><span>{item.q}</span><span className="faq-i">+</span></summary>
                  <div className="faq-a">{linkifyCarrieX(item.a)}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BY STATE — pSEO index */}
      {states.length > 0 && (
        <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "72px 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 14 }}>BY STATE</div>
            <h2 className="lp-h2" style={{ fontSize: 26, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 8, color: "#fafafa" }}>
              {s.name} pipelines in every US state.
            </h2>
            <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.6, marginBottom: 28, maxWidth: 760 }}>
              Each state page covers the local corridors, hubs, and adjacent-state coverage relevant to {s.name.toLowerCase()} acquisition in that market.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px 1px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, overflow: "hidden" }} className="lp-state-grid">
              {states.map((st) => (
                <a key={st.slug} href={`/solutions/${s.slug}/${st.slug}`} style={{ background: "#0a0a0d", padding: "14px 16px", textDecoration: "none", color: "#a1a1aa", fontSize: 13, display: "flex", justifyContent: "space-between", alignItems: "center", transition: "background 0.15s ease" }} className="lp-state-link">
                  <span>{st.name}</span>
                  <span style={{ color: "#52525b", fontSize: 11, fontFamily: "monospace" }}>{st.abbr}</span>
                </a>
              ))}
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
              .lp-state-link:hover { background: #141418 !important; color: #fafafa !important; }
              @media (max-width: 900px) { .lp-state-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            ` }} />
          </div>
        </section>
      )}

      {/* RELATED SOLUTIONS */}
      {related.length > 0 && (
        <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "72px 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 14 }}>RELATED SOLUTIONS</div>
            <h2 className="lp-h2" style={{ fontSize: 26, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 32, color: "#fafafa" }}>
              Same engine, different ICP.
            </h2>
            <div className="lp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderLeft: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              {related.map((r) => (
                <a key={r.slug} href={`/solutions/${r.slug}`} style={{ padding: "28px 32px", borderRight: "1px solid rgba(255,255,255,0.07)", display: "block", textDecoration: "none", color: "inherit", transition: "background 0.2s ease" }} className="lp-related-card">
                  <div style={{ fontSize: 15.5, fontWeight: 500, color: "#fafafa", marginBottom: 8 }}>{r.name} →</div>
                  <div style={{ fontSize: 13, color: "#71717a", lineHeight: 1.55 }}>{r.short}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "radial-gradient(circle at center, rgba(37,99,235,0.06) 0%, rgba(9,9,11,0) 70%), #0a0a0d", padding: "88px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
          <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 24 }}>BOOK A DISCOVERY CALL</div>
          <h2 style={{ fontSize: 32, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 18, color: "#fafafa" }}>
            Scope your {s.name.toLowerCase()} acquisition pipeline.
          </h2>
          <p style={{ fontSize: 15.5, color: "#a1a1aa", lineHeight: 1.65, marginBottom: 32, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
            30 minutes. We review your ICP, pull a live{" "}
            <a href="https://carriex.io/" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none" }}>CarrieX</a>
            {" "}sample matching your exact target, and outline the engine we&apos;d build.
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
            <a href="/solutions" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>All solutions</a>
            <a href="/privacy" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>Privacy</a>
            <a href="/terms" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
