"use client";

import Image from "next/image";
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CAL_NAMESPACE, CAL_LINK, HOVER_CSS } from "@/components/landing/LandingPage";

export default function BookClient() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view", theme: "dark" });
    })();
  }, []);

  return (
    <main style={{ background: "#09090b", color: "#fafafa", fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif", WebkitFontSmoothing: "antialiased" }}>
      <style dangerouslySetInnerHTML={{ __html: HOVER_CSS }} />

      {/* NAV — identical to landing */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(9,9,11,0.88)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image src="/logo.png" alt="Asamblor" width={32} height={32} priority style={{ display: "block", objectFit: "contain" }} />
            <span style={{ fontSize: 14.5, fontWeight: 500, color: "#fafafa", letterSpacing: "-0.01em" }}>Asamblor</span>
          </a>
          <div className="lp-nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="/#how-it-works" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>How It Works</a>
            <a href="/#engine" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>Infrastructure</a>
            <a href="/solutions" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>Solutions</a>
            <a href="/#pricing" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>Pricing</a>
            <a href="/#faq" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>FAQ</a>
          </div>
          <a href="/" className="lp-nav-link" style={{ fontSize: 13, textDecoration: "none", whiteSpace: "nowrap" }}>
            ← Back home
          </a>
        </div>
      </nav>

      {/* HEADER — landing-style split typography */}
      <section style={{ padding: "56px 0 40px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 24, textTransform: "uppercase" }}>
            Book a discovery call
          </div>
          <h1 className="lp-h1" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 20, maxWidth: 1120 }}>
            <span className="lp-h1-line" style={{ display: "block", whiteSpace: "nowrap", color: "#fafafa" }}>30 minutes. We&apos;ll scope your acquisition engine end-to-end—</span>
            <span className="lp-h1-line" style={{ display: "block", whiteSpace: "nowrap", color: "#71717a" }}>ICP, live CarrieX preview, mailbox count, CRM pipeline, launch path.</span>
          </h1>
          <p className="lp-subhero" style={{ fontSize: 16, color: "#71717a", lineHeight: 1.6, marginBottom: 8, maxWidth: 760 }}>
            No pitch deck, no sales script. We open CarrieX live, pull a sample matching your exact target, and walk you through what your engine would look like.
          </p>
        </div>
      </section>

      {/* META STRIP — feature row in landing style */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderLeft: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { tag: "STEP 01", title: "ICP review", body: "Authority type, lanes, equipment, fleet-size filters." },
              { tag: "STEP 02", title: "Live data preview", body: "We pull a CarrieX sample for your exact target — no NDA." },
              { tag: "STEP 03", title: "Engine scope", body: "Domains, mailbox count, monthly capacity, CRM pipeline, 14–21 day launch." },
            ].map((s) => (
              <div key={s.tag} style={{ padding: "32px 32px 36px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: 10, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 14 }}>{s.tag}</div>
                <div style={{ fontSize: 15.5, fontWeight: 500, color: "#fafafa", marginBottom: 8, letterSpacing: "-0.01em" }}>{s.title}</div>
                <div style={{ fontSize: 13.5, color: "#71717a", lineHeight: 1.55 }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAL EMBED */}
      <section id="embed" style={{ padding: "56px 0 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ position: "relative", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "linear-gradient(180deg, #0e0e11 0%, #0a0a0c 100%)", overflow: "hidden", minHeight: 820, boxShadow: "0 30px 80px rgba(0,0,0,0.45)" }}>
            <Cal
              namespace={CAL_NAMESPACE}
              calLink={CAL_LINK}
              style={{ width: "100%", height: "100%", minHeight: 820, overflow: "scroll" }}
              config={{ layout: "month_view", theme: "dark" }}
            />
          </div>
        </div>
      </section>

      {/* FOOTER strip — minimal */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "24px 0", background: "#09090b" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 12, color: "#52525b" }}>© {new Date().getFullYear()} Asamblor — operated by CarrieX Labs LLC.</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="/privacy" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>Privacy</a>
            <a href="/terms" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>Terms</a>
            <a href="mailto:office@asamblor.com" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>office@asamblor.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
