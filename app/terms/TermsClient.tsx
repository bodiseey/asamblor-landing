"use client";

import Image from "next/image";
import { HOVER_CSS } from "@/components/landing/LandingPage";

const EFFECTIVE_DATE = "June 20, 2026";

export default function TermsClient() {
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
        .legal-section .caps { text-transform: uppercase; font-weight: 500; color: #e4e4e7; font-size: 13.5px; letter-spacing: 0.02em; }
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
            Terms of Service
          </h1>
          <p style={{ fontSize: 14.5, color: "#71717a", lineHeight: 1.6, marginBottom: 6 }}>Effective date: {EFFECTIVE_DATE}</p>
          <p style={{ fontSize: 14.5, color: "#71717a", lineHeight: 1.6 }}>
            Asamblor is a product of <strong style={{ color: "#fafafa", fontWeight: 500 }}>CarrieX Labs LLC</strong>, powered by the CarrieX trucking data platform.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section style={{ padding: "32px 0 80px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 40px" }}>

          <div className="legal-section">
            <p>These Terms of Service (&ldquo;<strong style={{ color: "#fafafa" }}>Terms</strong>&rdquo;) form a binding agreement between you, the entity you represent (&ldquo;<strong style={{ color: "#fafafa" }}>Client</strong>,&rdquo; &ldquo;<strong style={{ color: "#fafafa" }}>you</strong>&rdquo;), and CarrieX Labs LLC, a New Mexico limited liability company (&ldquo;<strong style={{ color: "#fafafa" }}>CarrieX Labs</strong>,&rdquo; &ldquo;<strong style={{ color: "#fafafa" }}>we</strong>,&rdquo; &ldquo;<strong style={{ color: "#fafafa" }}>us</strong>&rdquo;) governing your access to and use of the Asamblor service, the CarrieX trucking data platform, the website at <a href="https://www.asamblor.com">www.asamblor.com</a>, and any related deliverables (collectively, the &ldquo;<strong style={{ color: "#fafafa" }}>Services</strong>&rdquo;).</p>
            <p>By accessing, signing up for, or paying for the Services, you accept these Terms. If you do not accept them, do not use the Services.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">01</span> Eligibility</h2>
            <p>The Services are intended only for businesses and their authorized representatives. You represent that you are at least 18 years old, are authorized to bind the entity you represent, and that your use of the Services complies with all laws and regulations applicable to your business.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">02</span> The Services</h2>
            <p>Asamblor is a done-for-you acquisition infrastructure for trucking carriers. Depending on the engagement, the Services may include: ICP onboarding; data extraction from the CarrieX platform; provisioning of sending domains, mailboxes, telephony, and SMS infrastructure; CRM pipeline build; outbound campaign execution; vetting forms; team notification automations; and ongoing optimization.</p>
            <p>Specific scope, deliverables, fees, term length, and any service-level commitments will be set out in an order form, statement of work, or proposal accepted by both parties (&ldquo;<strong style={{ color: "#fafafa" }}>Order</strong>&rdquo;). If an Order conflicts with these Terms, the Order controls for the conflicting subject only.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">03</span> Accounts &amp; access</h2>
            <p>You are responsible for maintaining the confidentiality of any credentials issued to you and for all activity under your account. Notify us immediately at <a href="mailto:office@asamblor.com">office@asamblor.com</a> of any unauthorized use.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">04</span> Fees, billing &amp; taxes</h2>
            <p>Fees are stated in the applicable Order, billed in USD, and due on the schedule specified. Unless otherwise stated:</p>
            <ul>
              <li>Fees are <strong style={{ color: "#e4e4e7" }}>non-refundable</strong> once a billing period or service window has commenced, given the immediate allocation of infrastructure (domains, mailboxes, telephony registrations, CarrieX data extractions) and engineering work.</li>
              <li>Late payments accrue interest at the lesser of 1.5% per month or the maximum rate allowed by law.</li>
              <li>You are responsible for all sales, use, VAT, and similar taxes other than taxes on our net income.</li>
              <li>We may suspend the Services for non-payment after written notice and a reasonable cure period.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2><span className="num">05</span> Client responsibilities &amp; compliance</h2>
            <p>You are the sender, advertiser, and / or controller of communications dispatched on your behalf and the data used in your pipelines. You agree to:</p>
            <ul>
              <li>Comply with all laws and regulations applicable to your outbound, including the CAN-SPAM Act, the Telephone Consumer Protection Act (TCPA), 10DLC requirements, applicable state telemarketing and Do-Not-Call laws, CCPA/CPRA, and similar state and federal laws.</li>
              <li>Provide accurate ICP information, an accurate physical mailing address for use in email footers, and accurate brand identification.</li>
              <li>Maintain proper consents, suppression lists, and DNC compliance where applicable, and process opt-out requests promptly. Reasonable suppression of STOP / unsubscribe requests is honored automatically across the platform.</li>
              <li>Refrain from using the Services for prohibited content, including but not limited to: deceptive headers or subject lines, illegal goods or services, adult content, content that infringes third-party rights, malware, or any content that violates applicable law.</li>
              <li>Cooperate in good faith with reasonable security, deliverability, and abuse-prevention measures.</li>
            </ul>
            <p>You will defend, indemnify, and hold us harmless from claims arising out of your failure to comply with this Section, in accordance with Section 12.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">06</span> Acceptable use</h2>
            <p>You may not, and may not permit any third party to: (a) reverse engineer, decompile, or copy the Services other than as expressly permitted; (b) interfere with or disrupt the integrity or performance of the Services; (c) use the Services to send unsolicited bulk communications in violation of applicable law; (d) misrepresent the source or identity of any message sent through the Services; or (e) access the Services to build a competing product.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">07</span> Data &amp; ownership</h2>
            <h3>Client Data</h3>
            <p>As between the parties, you own all data you upload, provide, or that is generated specifically for your pipelines (including leads qualified for you, vetting-form submissions, and historical CRM records associated with your pipelines) (&ldquo;<strong style={{ color: "#e4e4e7" }}>Client Data</strong>&rdquo;). You grant us a non-exclusive, worldwide, royalty-free license to use Client Data solely to provide and improve the Services for you.</p>
            <h3>Infrastructure you may retain</h3>
            <p>Subject to payment of all amounts due, upon termination you may retain ownership and operational control of: sending domains we registered in your name; CRM pipelines and forms built within your CRM tenant; and the historical lead database accumulated during the engagement. Mailboxes, third-party service subscriptions, and telephony registrations remain governed by the underlying provider&apos;s terms and may transfer subject to those providers&apos; processes.</p>
            <h3>Our Intellectual Property</h3>
            <p>We retain all right, title, and interest in and to the Services, the CarrieX platform, our proprietary data pipelines, software, models, workflows, playbooks, and any improvements thereto. The CarrieX dataset itself (as a whole and as updated) is licensed, not sold; your right to use CarrieX-derived contact data is limited to operating your own outbound pipelines during the engagement and any post-termination period expressly granted.</p>
            <h3>Feedback</h3>
            <p>If you give us feedback or suggestions, you grant us a perpetual, irrevocable, royalty-free license to use it without restriction.</p>
            <h3>Aggregated &amp; anonymized data</h3>
            <p>We may collect and use aggregated and anonymized data derived from the operation of the Services, provided such data does not identify you or any individual.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">08</span> Privacy &amp; data processing</h2>
            <p>Our processing of personal information is described in the <a href="/privacy">Privacy Policy</a>, which is incorporated by reference. To the extent we process personal information on your behalf, you are the &ldquo;business&rdquo; / &ldquo;controller&rdquo; and we act as a &ldquo;service provider&rdquo; / &ldquo;processor.&rdquo; A Data Processing Addendum will apply where required by law and is available on request.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">09</span> Confidentiality</h2>
            <p>Each party may receive non-public information of the other (&ldquo;Confidential Information&rdquo;). The receiving party will use the same degree of care it uses to protect its own confidential information (and no less than reasonable care), will use Confidential Information only to perform under these Terms, and will limit access to personnel with a need to know who are bound by confidentiality obligations. Confidentiality obligations survive termination for three (3) years, except for trade secrets, which survive as long as they remain trade secrets under applicable law.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">10</span> Term, suspension &amp; termination</h2>
            <p>These Terms remain in effect for the term stated in the applicable Order. Either party may terminate for the other party&apos;s material breach if the breach is not cured within thirty (30) days of written notice. We may suspend or terminate immediately for non-payment, security or abuse incidents, or where required by law.</p>
            <p>Upon termination: (a) your right to access the Services ends; (b) we will reasonably cooperate in transitioning Client Data and infrastructure that you are entitled to retain under Section 7; (c) fees already invoiced or due for the current billing period remain payable; and (d) Sections that by their nature should survive (including Sections 4, 5, 7, 9, 11, 12, 13, 15, and 16) survive termination.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">11</span> Warranties &amp; disclaimer</h2>
            <p>We warrant that we will perform the Services in a professional and workmanlike manner consistent with industry standards.</p>
            <p className="caps">EXCEPT AS EXPRESSLY STATED IN THESE TERMS, THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTY ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.</p>
            <p className="caps">WE DO NOT GUARANTEE ANY SPECIFIC RECRUITING OUTCOME, NUMBER OF LEADS, INBOX PLACEMENT RATE, DRIVER SIGN-ON, RETENTION, OR REVENUE RESULT. ALL HIRING AND BUSINESS DECISIONS REMAIN SOLELY YOURS.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">12</span> Indemnification</h2>
            <p>You will defend, indemnify, and hold harmless CarrieX Labs and its officers, directors, employees, and agents from and against any third-party claim, loss, damage, liability, cost, or expense (including reasonable attorneys&apos; fees) arising out of or related to: (a) your or your end-recipients&apos; use of the Services; (b) Client Data or your ICP instructions; (c) communications sent through the Services on your behalf, including TCPA, CAN-SPAM, DNC, or similar claims; or (d) your breach of these Terms or violation of law.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">13</span> Limitation of liability</h2>
            <p className="caps">TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS, EVEN IF ADVISED OF THE POSSIBILITY.</p>
            <p className="caps">EACH PARTY&apos;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS WILL NOT EXCEED THE FEES PAID OR PAYABLE BY YOU TO US UNDER THE APPLICABLE ORDER IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.</p>
            <p>The above limitations do not apply to: (i) your payment obligations; (ii) your indemnification obligations; (iii) breaches of confidentiality; or (iv) liability that cannot be limited under applicable law.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">14</span> Modifications</h2>
            <p>We may update these Terms from time to time. Material changes will be posted on this page with a new effective date and, where reasonable, communicated by email. Your continued use of the Services after the effective date constitutes acceptance.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">15</span> Governing law &amp; disputes</h2>
            <p>These Terms are governed by the laws of the State of New Mexico, United States, without regard to its conflict-of-laws rules. The state and federal courts located in Santa Fe County, New Mexico have exclusive jurisdiction over any dispute that is not subject to arbitration or small-claims, and the parties consent to personal jurisdiction and venue there.</p>
            <p>The United Nations Convention on Contracts for the International Sale of Goods does not apply. To the extent permitted by law, each party waives any right to a jury trial and to participate in any class or representative action.</p>
          </div>

          <div className="legal-section">
            <h2><span className="num">16</span> General</h2>
            <ul>
              <li><strong style={{ color: "#e4e4e7" }}>Entire agreement.</strong> These Terms together with any Order and the Privacy Policy are the entire agreement between the parties and supersede all prior agreements on the same subject.</li>
              <li><strong style={{ color: "#e4e4e7" }}>Severability.</strong> If any provision is held unenforceable, the remaining provisions remain in full force and the unenforceable provision will be reformed to the minimum extent necessary.</li>
              <li><strong style={{ color: "#e4e4e7" }}>Assignment.</strong> You may not assign these Terms without our prior written consent, except to a successor in a merger or sale of substantially all assets. We may assign freely.</li>
              <li><strong style={{ color: "#e4e4e7" }}>Force majeure.</strong> Neither party is liable for delays or failures caused by events beyond reasonable control.</li>
              <li><strong style={{ color: "#e4e4e7" }}>No waiver.</strong> Failure to enforce any right is not a waiver of that right.</li>
              <li><strong style={{ color: "#e4e4e7" }}>Independent contractors.</strong> The parties are independent contractors; nothing creates an agency, partnership, or joint venture.</li>
              <li><strong style={{ color: "#e4e4e7" }}>Notices.</strong> Notices to us must be sent to <a href="mailto:legal@asamblor.com">legal@asamblor.com</a> and to the address below. Notices to you may be sent to the email associated with your account.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2><span className="num">17</span> Contact</h2>
            <p>Legal: <a href="mailto:legal@asamblor.com">legal@asamblor.com</a><br />General: <a href="mailto:office@asamblor.com">office@asamblor.com</a></p>
            <p style={{ marginTop: 6 }}>
              <strong style={{ color: "#fafafa" }}>CarrieX Labs LLC</strong><br />
              1012 Marquez Place, Ste. 106-B<br />
              Santa Fe, NM 87505<br />
              United States
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
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
