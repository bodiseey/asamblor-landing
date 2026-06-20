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

export default function CityClient({
  s,
  state,
  city,
  siblings,
}: {
  s: Solution;
  state: StateData;
  city: City;
  siblings: City[];
}) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view", theme: "dark" });
    })();
  }, []);

  const isOwnerOp = s.slug === "owner-operator-recruiting";
  const audienceWord = isOwnerOp ? "owner-operators" : "CDL drivers";
  const offerWord = isOwnerOp ? "lease-on opportunity" : "company-driver hiring";

  return (
    <main style={{ background: "#09090b", color: "#fafafa", fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif", WebkitFontSmoothing: "antialiased" }}>
      <style dangerouslySetInnerHTML={{ __html: HOVER_CSS + `
        .cy-section { padding: 56px 0; border-bottom: 1px solid rgba(255,255,255,0.07); }
        .cy-eyebrow { font-size: 10.5px; color: #71717a; font-family: monospace; letter-spacing: 0.07em; margin-bottom: 14px; text-transform: uppercase; }
        .cy-h2 { font-size: 28px; font-weight: 400; line-height: 1.2; letter-spacing: -0.025em; margin-bottom: 18px; color: #fafafa; }
        .cy-h2 .grey { color: #71717a; }
        .cy-h3 { font-size: 17px; font-weight: 500; color: #fafafa; margin: 24px 0 10px; letter-spacing: -0.01em; }
        .cy-p { font-size: 15px; color: #a1a1aa; line-height: 1.7; margin-bottom: 14px; }
        .cy-chip { display: inline-block; padding: 6px 12px; border-radius: 999px; background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #d4d4d8; margin: 0 6px 8px 0; font-family: monospace; }
        .cy-tile { padding: 20px 24px; border-right: 1px solid rgba(255,255,255,0.07); border-bottom: 1px solid rgba(255,255,255,0.07); text-decoration: none; color: inherit; display: block; transition: background 0.2s ease; }
        .cy-tile:hover { background: rgba(255,255,255,0.02); }
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
          <a href={`/solutions/${s.slug}/${state.slug}`} className="lp-nav-link" style={{ textDecoration: "none" }}>{state.name}</a>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#a1a1aa" }}>{city.name}</span>
        </div>
      </section>

      {/* HERO */}
      <section style={{ padding: "56px 0 56px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="cy-eyebrow">{s.name} · {city.name}, {state.abbr}{city.isCapital ? " (state capital)" : ""}</div>
          <h1 className="lp-h1" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 20, maxWidth: 1120 }}>
            <span style={{ display: "block", color: "#fafafa" }}>{s.name} in {city.name}, {state.name}.</span>
            <span style={{ display: "block", color: "#71717a" }}>Built, run, and owned by your fleet.</span>
          </h1>
          <p style={{ fontSize: 16, color: "#a1a1aa", lineHeight: 1.65, marginBottom: 16, maxWidth: 820 }}>
            Asamblor builds a {s.name.toLowerCase()} pipeline for motor carriers operating in or hiring out of <strong style={{ color: "#fafafa", fontWeight: 500 }}>{city.name}, {state.name}</strong>. We mine CarrieX for the right audience, run multi-channel outbound on your behalf, and deliver qualified {audienceWord} directly into your CRM. You stop paying per-applicant and start owning a permanent acquisition asset.
          </p>
          <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.65, marginBottom: 28, maxWidth: 820 }}>
            <strong style={{ color: "#a1a1aa", fontWeight: 500 }}>{state.name} context:</strong> {state.notes}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button type="button" {...calAttrs} className="lp-btn-primary" style={{ color: "#fff", fontSize: 14, fontWeight: 500, padding: "12px 24px", borderRadius: 6, border: "none", cursor: "pointer" }}>
              Book a Discovery Call →
            </button>
            <a href={`/solutions/${s.slug}/${state.slug}`} className="lp-btn-outline" style={{ color: "#a1a1aa", fontSize: 14, fontWeight: 500, padding: "12px 22px", borderRadius: 6, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
              ← All {state.name} pages
            </a>
          </div>
        </div>
      </section>

      {/* WHY THIS CITY */}
      <section className="cy-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="cy-eyebrow">Why {city.name}</div>
              <h2 className="cy-h2"><span>The {city.name} </span><span className="grey">acquisition map.</span></h2>
              <p className="cy-p">
                {city.name} sits within the {state.name} freight network anchored by {state.corridors.slice(0, 2).map((c) => c.split(" ")[0]).join(" and ")}. The metro&apos;s position relative to {state.hubs.slice(0, 2).map((h) => h.split(" (")[0]).join(" and ")} means the local {audienceWord.replace("operators", "operator").replace("drivers", "driver")} pool is shaped by regional lane mix, equipment density, and the kinds of freight that move through here.
              </p>
              <p className="cy-p">
                For motor carriers running {offerWord} programs in {city.name}, the targeting layer matters more than message volume. A pipeline tuned for {state.name} commodity flow and {city.name}-radius home-base profiles outperforms generic national campaigns 3–8×, measured in cost-per-signed.
              </p>
              <h3 className="cy-h3">{city.name} pipeline highlights</h3>
              <ul style={{ paddingLeft: 22, marginTop: 6 }}>
                {isOwnerOp ? (
                  <>
                    <li className="cy-p" style={{ marginBottom: 6 }}>Outreach targets {audienceWord} domiciled in {city.name} with operating activity on {state.corridors[0].split(" ")[0]}.</li>
                    <li className="cy-p" style={{ marginBottom: 6 }}>Authority-age filter (typically 180–730 days) prioritizes lease-on-ready operators.</li>
                    <li className="cy-p" style={{ marginBottom: 6 }}>Equipment match scoped to your dispatch (reefer, dry van, flatbed, step-deck, power-only).</li>
                    <li className="cy-p" style={{ marginBottom: 6 }}>Adjacent-state coverage in {state.adjacentStates.slice(0, 3).join(", ")} keeps the regional flow intact.</li>
                  </>
                ) : (
                  <>
                    <li className="cy-p" style={{ marginBottom: 6 }}>Geo-targeted outreach centered on {city.name} with 50/100/200-mile home-base radii.</li>
                    <li className="cy-p" style={{ marginBottom: 6 }}>CarrieX mining surfaces under-driver carriers and owner-ops considering a company-driver role in {city.name}.</li>
                    <li className="cy-p" style={{ marginBottom: 6 }}>Endorsement &amp; equipment match (hazmat, tanker, doubles, reefer, flatbed) before any reply lands in your CRM.</li>
                    <li className="cy-p" style={{ marginBottom: 6 }}>Driver-vetting form captures CDL class, experience, MVR consent, and home-base ZIP up front.</li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <div className="cy-eyebrow">Regional infrastructure</div>
              <h2 className="cy-h2"><span>{state.name} corridors &amp; hubs </span><span className="grey">that shape {city.name} freight.</span></h2>
              <h3 className="cy-h3">Primary corridors serving {city.name}</h3>
              <div>
                {state.corridors.map((c) => <span key={c} className="cy-chip">{c}</span>)}
              </div>
              <h3 className="cy-h3">Major {state.name} trucking hubs</h3>
              <div>
                {state.hubs.map((h) => <span key={h} className="cy-chip">{h}</span>)}
              </div>
              <h3 className="cy-h3">Adjacent-state operating area</h3>
              <div>
                {state.adjacentStates.map((a) => <span key={a} className="cy-chip">{a}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="cy-section" style={{ background: "#0a0a0d" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="cy-eyebrow">How an Asamblor {city.name} pipeline runs</div>
          <h2 className="cy-h2"><span>The same engine </span><span className="grey">that runs nationally — tuned to {city.name}.</span></h2>
          <div className="lp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderLeft: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)", borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 24 }}>
            {[
              { tag: "STAGE 01", title: "CarrieX mining strategy", body: `We extract the right ${audienceWord} audience for ${city.name} using ${isOwnerOp ? "authority-age, equipment type, OOS status, and domicile filters" : "carrier hiring intent signals, driver-to-power-unit ratios, and home-base radius filters"}.` },
              { tag: "STAGE 02", title: "Outbound delivery", body: `Multi-channel outreach (email, SMS, vetting forms) launches under your brand, with sending domains and 10DLC numbers we provision and you keep.` },
              { tag: "STAGE 03", title: "CRM-ready intake", body: `Every reply lands in your CRM with full context: ${isOwnerOp ? "MC#, USDOT#, equipment, insurance, lane preference" : "CDL class, endorsements, experience, MVR consent, home-base ZIP"}.` },
            ].map((stage) => (
              <div key={stage.tag} style={{ padding: "28px 28px 32px", borderRight: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 12 }}>{stage.tag}</div>
                <div style={{ fontSize: 16, fontWeight: 500, color: "#fafafa", marginBottom: 10, letterSpacing: "-0.01em" }}>{stage.title}</div>
                <div style={{ fontSize: 13.5, color: "#a1a1aa", lineHeight: 1.6 }}>{linkifyCarrieX(stage.body)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE STACK */}
      <section className="cy-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="cy-eyebrow">Your Asamblor infrastructure</div>
          <h2 className="cy-h2"><span>The complete acquisition infrastructure—</span><span className="grey">{" "}fully managed for your {city.name} fleet.</span></h2>
          <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.65, marginBottom: 32, maxWidth: 760 }}>
            Six components, one engine — built, run, and owned for motor carriers operating in {city.name}, {state.name}. No per-applicant fees, no agency commissions, no rented infrastructure.
          </p>
          <InfrastructureStack />
        </div>
      </section>

      {/* CITY-SPECIFIC FAQ */}
      <section className="cy-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="cy-eyebrow">FAQ — {city.name}</div>
              <h2 className="cy-h2"><span>Questions from </span><span className="grey">{city.name} motor carriers.</span></h2>
            </div>
            <div>
              {[
                {
                  q: `Can Asamblor target ${audienceWord} based specifically in ${city.name}?`,
                  a: `Yes. The CarrieX mining strategy filters by domicile / home-base ZIP at the metro level, so outreach reaches ${audienceWord} in ${city.name} and configurable surrounding radius (50, 100, or 200 miles). We can include or exclude adjacent metros depending on your terminal map.`,
                },
                {
                  q: `What ${state.name} freight corridors does the ${city.name} pipeline cover?`,
                  a: `${city.name} sits in the ${state.name} freight network anchored by ${state.corridors.map((c) => c.split(" ")[0]).join(", ")}. Pipelines target ${audienceWord} with operating activity on these corridors plus regional flow into ${state.adjacentStates.slice(0, 3).join(", ")}.`,
                },
                {
                  q: `How is this different from posting on Indeed or a load-board carrier-recruiting feature?`,
                  a: `Job boards and load-board recruiting tools charge per click or per applicant and the audience is whoever happens to be browsing. Asamblor builds a proactive outbound pipeline mined from CarrieX — reaching ${audienceWord} in ${city.name} who would never have found your ad. The CRM, domains, and historical lead data stay yours.`,
                },
                {
                  q: `How fast can we launch in ${city.name}?`,
                  a: `Standard launch is 14–21 days from kickoff: ICP onboarding, CarrieX mining for ${city.name} + adjacent states, sending-domain warmup, CRM build, and first live outbound. First qualified reply typically lands in week 3.`,
                },
                {
                  q: `Can we run owner-op recruiting and CDL driver hiring in ${city.name} at the same time?`,
                  a: `Yes — most growing motor carriers do exactly that. Asamblor runs both pipelines on shared infrastructure with separate sequences. See the ${isOwnerOp ? "[CDL driver hiring solution](/solutions/cdl-driver-hiring)" : "[owner-operator recruiting solution](/solutions/owner-operator-recruiting)"} for the parallel track.`,
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

      {/* OTHER CITIES IN STATE */}
      {siblings.length > 0 && (
        <section className="cy-section">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
            <div className="cy-eyebrow">More {state.name} cities</div>
            <h2 className="cy-h2"><span>{s.name} pipelines in </span><span className="grey">other {state.name} metros.</span></h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px 1px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, overflow: "hidden", marginTop: 24 }} className="cy-city-grid">
              {siblings.map((sib) => (
                <a key={sib.slug} href={`/solutions/${s.slug}/${state.slug}/${sib.slug}`} style={{ background: "#0a0a0d", padding: "14px 16px", textDecoration: "none", color: "#a1a1aa", fontSize: 13, display: "flex", justifyContent: "space-between", alignItems: "center" }} className="cy-city-link">
                  <span>{sib.name}{sib.isCapital ? " ★" : ""}</span>
                  <span style={{ color: "#52525b", fontSize: 11, fontFamily: "monospace" }}>{state.abbr}</span>
                </a>
              ))}
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
              .cy-city-link:hover { background: #141418 !important; color: #fafafa !important; }
              @media (max-width: 900px) { .cy-city-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            ` }} />
          </div>
        </section>
      )}

      {/* CTA — Discovery Call */}
      <section style={{ background: "radial-gradient(circle at center, rgba(37,99,235,0.06) 0%, rgba(9,9,11,0) 70%), #0a0a0d", padding: "88px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
          <div className="cy-eyebrow">Book a Discovery Call</div>
          <h2 style={{ fontSize: 32, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 18, color: "#fafafa" }}>
            Scope your {city.name} {s.name.toLowerCase()} pipeline.
          </h2>
          <p style={{ fontSize: 15.5, color: "#a1a1aa", lineHeight: 1.65, marginBottom: 32, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            30 minutes. We review your ICP, run a live{" "}
            <a href="https://carriex.io/" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none" }}>CarrieX</a>
            {" "}mining preview for {city.name} + adjacent {state.name} metros, and outline the Asamblor engine we&apos;d build for your fleet.
          </p>
          <button type="button" {...calAttrs} className="lp-btn-primary" style={{ color: "#fff", fontSize: 14, fontWeight: 500, padding: "14px 32px", borderRadius: 6, border: "none", cursor: "pointer" }}>
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
            <a href={`/solutions/${s.slug}`} className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>{s.name}</a>
            <a href="/privacy" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>Privacy</a>
            <a href="/terms" className="lp-nav-link" style={{ fontSize: 12, textDecoration: "none" }}>Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
