"use client";

import Image from "next/image";
import { HOVER_CSS } from "@/components/landing/LandingPage";

const EFFECTIVE_DATE = "June 20, 2026";

export default function PrivacyClient() {
  return (
    <main style={{ background: "#09090b", color: "#fafafa", fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif", WebkitFontSmoothing: "antialiased" }}>
      <style dangerouslySetInnerHTML={{ __html: HOVER_CSS + `
        .legal-section { padding: 28px 0; border-top: 1px solid rgba(255,255,255,0.06); }
        .legal-section:first-of-type { border-top: none; }
        .legal-section h2 { font-size: 18px; color: #fafafa; font-weight: 500; letter-spacing: -0.015em; margin-bottom: 14px; display: flex; align-items: center; gap: 12px; }
        .legal-section h2 .num { font-family: monospace; font-size: 11px; color: #71717a; letter-spacing: 0.06em; }
        .legal-section h3 { font-size: 14px; color: #e4e4e7; font-weight: 500; margin-top: 18px; margin-bottom: 8px; }
        .legal-section p, .legal-section li { font-size: 14.5px; color: #a1a1aa; line-height: 1.7; }
        .legal-section p { margin-bottom: 12px; }
        .legal-section ul { padding-left: 22px; margin: 10px 0 14px; }
        .legal-section li { margin-bottom: 6px; }
        .legal-section a { color: #d4d4d8; border-bottom: 1px dotted rgba(255,255,255,0.25); text-decoration: none; }
        .legal-section a:hover { color: #fff; }
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
            <a href="/solutions" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>Solutions</a>
            <a href="/#pricing" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>Pricing</a>
            <a href="/#faq" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>FAQ</a>
          </div>
          <a href="/" className="lp-nav-link" style={{ fontSize: 13, textDecoration: "none", whiteSpace: "nowrap" }}>← Back home</a>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ padding: "56px 0 32px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 20, textTransform: "uppercase" }}>Legal</div>
          <h1 style={{ fontSize: 40, fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 16, color: "#fafafa" }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 14.5, color: "#71717a", lineHeight: 1.6, marginBottom: 6 }}>
            Effective date: {EFFECTIVE_DATE}
          </p>
          <p style={{ fontSize: 14.5, color: "#71717a", lineHeight: 1.6 }}>
            Asamblor is a product of <strong style={{ color: "#fafafa", fontWeight: 500 }}>CarrieX Labs LLC</strong>, powered by the CarrieX trucking data platform.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section style={{ padding: "32px 0 80px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 40px" }}>

          <div className="legal-section">
            <p>This Privacy Policy describes how CarrieX Labs LLC (&ldquo;<strong style={{ color: "#fafafa" }}>CarrieX Labs</strong>,&rdquo; &ldquo;<strong style={{ color: "#fafafa" }}>we</strong>,&rdquo; &ldquo;<strong style={{ color: "#fafafa" }}>us</strong>,&rdquo; or &ldquo;<strong style={{ color: "#fafafa" }}>our</strong>&rdquo;) collects, uses, discloses, and protects information in connection with the Asamblor service, our website at <a href="https://www.asamblor.com">www.asamblor.com</a>, and the CarrieX trucking data platform (collectively, the &ldquo;<strong style={{ color: "#fafafa" }}>Services</strong>&rdquo;).</p>
            <p>If you have questions, contact us at <a href="mailto:privacy@asamblor.com">privacy@asamblor.com</a> or at the address at the end of this policy.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">01</span> Information we collect</h2>
            <h3>Information you provide</h3>
            <ul>
              <li><strong style={{ color: "#e4e4e7" }}>Account &amp; client information</strong> — business name, role, work email, phone, billing details, and Ideal Customer Profile (ICP) parameters you share during onboarding.</li>
              <li><strong style={{ color: "#e4e4e7" }}>Communications</strong> — messages you send us through forms, email, calendar bookings, or our team channels.</li>
            </ul>
            <h3>Information collected automatically</h3>
            <ul>
              <li><strong style={{ color: "#e4e4e7" }}>Usage &amp; device data</strong> — IP address, browser/OS, pages viewed, referrer URL, timestamps, and basic analytics about how you interact with the site and any client portals.</li>
              <li><strong style={{ color: "#e4e4e7" }}>Cookies and similar technologies</strong> — strictly necessary cookies for session and security, and limited analytics cookies (see Section 7).</li>
            </ul>
            <h3>Information collected from third parties and public sources</h3>
            <ul>
              <li><strong style={{ color: "#e4e4e7" }}>Carrier / driver business contact data</strong> sourced through the CarrieX platform from public regulatory filings, state authority records, and other publicly available business directories. This data is used to operate B2B outbound recruiting campaigns on behalf of our clients.</li>
              <li><strong style={{ color: "#e4e4e7" }}>Service-provider data</strong> — payment status from our payment processor, deliverability metrics from our email infrastructure, calendar events from our booking provider.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2><span className="num">02</span> How we use information</h2>
            <p>We use information to:</p>
            <ul>
              <li>Provide, operate, and improve the Services and our clients&apos; recruitment pipelines.</li>
              <li>Mine, dedupe, and verify trucking carrier and owner-operator records through CarrieX.</li>
              <li>Send B2B outbound communications (email, SMS, web forms, telephony) on behalf of clients, subject to the recipient&apos;s rights and applicable law.</li>
              <li>Manage billing, accounts, fraud prevention, security, and infrastructure (SPF/DKIM/DMARC, 10DLC registration, etc.).</li>
              <li>Communicate with you about the Services, including service updates, security alerts, and administrative messages.</li>
              <li>Comply with legal obligations, enforce our Terms, and protect our rights and the rights of others.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2><span className="num">03</span> Roles under data protection law</h2>
            <p>For data we process to run our own business (e.g., your account information), CarrieX Labs is the <strong style={{ color: "#e4e4e7" }}>controller / business</strong>.</p>
            <p>For data we process on behalf of clients to operate their recruiting pipelines (e.g., leads they qualify, vetting-form submissions, lead status in their CRM), the client is the controller / business and CarrieX Labs acts as the <strong style={{ color: "#e4e4e7" }}>processor / service provider</strong>. Our processing is governed by the client&apos;s service agreement and applicable Data Processing Addendum.</p>
            <p>Under the California Consumer Privacy Act (CCPA/CPRA), we do not &ldquo;sell&rdquo; or &ldquo;share&rdquo; personal information as those terms are defined, and we do not process personal information for cross-context behavioral advertising.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">04</span> How we share information</h2>
            <p>We share information only as needed to operate the Services and only with:</p>
            <ul>
              <li><strong style={{ color: "#e4e4e7" }}>Our clients</strong>, who receive the qualified leads, vetting-form data, and CRM records generated by their pipelines.</li>
              <li><strong style={{ color: "#e4e4e7" }}>Subprocessors</strong> bound by written confidentiality and security obligations — including hosting (Vercel), email infrastructure (deliverability / warmup providers), telephony / SMS (10DLC carriers), CRM platforms, payment processors, analytics, and scheduling (Cal.com).</li>
              <li><strong style={{ color: "#e4e4e7" }}>Professional advisors</strong> (legal, tax, accounting, insurance) under confidentiality.</li>
              <li><strong style={{ color: "#e4e4e7" }}>Authorities</strong> when required by law, subpoena, court order, or to protect our rights, our clients, or the public.</li>
              <li><strong style={{ color: "#e4e4e7" }}>Successors</strong> in a merger, acquisition, financing, reorganization, or sale of assets, subject to standard confidentiality.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2><span className="num">05</span> Your rights</h2>
            <p>Depending on where you live, you may have rights to:</p>
            <ul>
              <li>Know what personal information we hold about you and how we process it.</li>
              <li>Request access to, correction of, or deletion of your personal information.</li>
              <li>Opt out of certain uses (e.g., direct marketing).</li>
              <li>Withdraw consent where consent is the legal basis.</li>
              <li>Receive a copy of your information in a portable format.</li>
              <li>Not be discriminated against for exercising these rights.</li>
            </ul>
            <p>To exercise a right, email <a href="mailto:privacy@asamblor.com">privacy@asamblor.com</a> from the address associated with the request. We may need to verify your identity. If we process information on behalf of a client, we will route requests to that client when appropriate. We respond within the timelines required by applicable law (typically 45 days under CCPA, with one 45-day extension if necessary).</p>
            <p><strong style={{ color: "#e4e4e7" }}>Authorized agents.</strong> California residents may use an authorized agent; the agent must provide proof of authorization and we may contact you to verify the request.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">06</span> Communications &amp; opt-outs</h2>
            <p>If you are a recipient of outbound email or SMS sent through Asamblor on behalf of a client:</p>
            <ul>
              <li>Every email includes a clearly marked unsubscribe link and the sender&apos;s physical mailing address, per the CAN-SPAM Act.</li>
              <li>SMS replies of STOP, UNSUBSCRIBE, END, QUIT, or CANCEL are processed immediately and the recipient&apos;s number is suppressed across all client pipelines on the platform.</li>
              <li>You may also email <a href="mailto:privacy@asamblor.com">privacy@asamblor.com</a> with the address or phone number you want suppressed.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2><span className="num">07</span> Cookies and analytics</h2>
            <p>We use strictly necessary cookies for site security and session management, and may use limited first-party analytics to understand site usage in aggregate. You can control cookies through your browser settings. We do not use third-party advertising cookies or cross-site tracking pixels.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">08</span> Data retention</h2>
            <p>We retain information only as long as needed to provide the Services, comply with legal obligations, resolve disputes, and enforce our agreements. Carrier business contact data is refreshed and pruned on a continuous basis. Client account records are retained for the duration of the engagement and for a commercially reasonable period thereafter for tax, audit, and dispute purposes.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">09</span> Security</h2>
            <p>We use administrative, technical, and physical safeguards designed to protect information, including TLS in transit, encryption at rest where supported by infrastructure providers, role-based access controls, and least-privilege access to sending and CRM infrastructure. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">10</span> International data transfers</h2>
            <p>The Services are operated from the United States. If you access them from outside the United States, you understand that information will be processed in the United States, which may have different data-protection laws than your country.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">11</span> Children&apos;s privacy</h2>
            <p>The Services are a B2B product for trucking businesses and are not directed to children under 16. We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will delete it.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">12</span> Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Effective date&rdquo; above and, for material changes, provide additional notice (such as a site banner or email). Your continued use of the Services after the effective date constitutes acceptance of the updated policy.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">13</span> Contact us</h2>
            <p>Privacy inquiries: <a href="mailto:privacy@asamblor.com">privacy@asamblor.com</a></p>
            <p style={{ marginTop: 6 }}>
              <strong style={{ color: "#fafafa" }}>CarrieX Labs LLC</strong><br />
              1012 Marquez Place, Ste. 106-B<br />
              Santa Fe, NM 87505<br />
              United States
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER strip */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "24px 0", background: "#09090b" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 12, color: "#52525b" }}>© {new Date().getFullYear()} Asamblor is a product of CarrieX Labs LLC.</div>
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
