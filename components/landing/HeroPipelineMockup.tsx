"use client";

const MOCKUP_CSS = `
@keyframes lp-cardMount {
  from { opacity: 0; transform: perspective(1600px) rotateY(-5deg) rotateX(2deg) translateY(24px); }
  to   { opacity: 1; transform: perspective(1600px) rotateY(-5deg) rotateX(2deg) translateY(0); }
}
@keyframes lp-leadIn {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes lp-floatIn {
  from { opacity: 0; transform: translateY(14px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes lp-floatY {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-7px); }
}
@keyframes lp-floatY-2 {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-5px); }
}
@keyframes lp-pulseGlow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50%      { opacity: 1;   transform: scale(1.08); }
}
@keyframes lp-bar {
  from { width: 0; }
  to   { width: var(--w, 70%); }
}

.lp-mockup-wrap {
  position: relative;
  width: 100%;
  max-width: 540px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
}
.lp-mockup-card {
  position: absolute;
  top: 8%;
  left: 4%;
  width: 88%;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(20,24,36,0.96), rgba(10,13,22,0.94));
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow:
    0 40px 100px -25px rgba(0,0,0,0.75),
    0 0 0 1px rgba(255,255,255,0.02),
    inset 0 1px 0 rgba(255,255,255,0.06);
  padding: 18px 18px 16px;
  transform: perspective(1600px) rotateY(-5deg) rotateX(2deg);
  transform-origin: center center;
  animation: lp-cardMount 0.75s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}
.lp-mockup-glow {
  position: absolute;
  inset: 10%;
  background: radial-gradient(60% 60% at 50% 50%, rgba(6,182,212,0.22) 0%, rgba(6,182,212,0) 70%);
  filter: blur(28px);
  pointer-events: none;
}
.lp-mockup-grid {
  position: absolute;
  inset: 0;
  opacity: 0.35;
  pointer-events: none;
}
.lp-stat-chip {
  position: absolute;
  top: -2%;
  left: -2%;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(20,26,42,0.96), rgba(12,16,28,0.96));
  border: 1px solid rgba(255,255,255,0.09);
  box-shadow:
    0 20px 60px -18px rgba(0,0,0,0.7),
    inset 0 1px 0 rgba(255,255,255,0.06);
  padding: 11px 15px;
  backdrop-filter: blur(12px);
  animation: lp-floatIn 0.6s ease-out both 0.9s, lp-floatY 6s ease-in-out infinite 1.5s;
  z-index: 5;
}
.lp-notif {
  position: absolute;
  bottom: 4%;
  right: -2%;
  width: 56%;
  min-width: 240px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(18,28,48,0.97), rgba(12,18,32,0.97));
  border: 1px solid rgba(6,182,212,0.35);
  box-shadow:
    0 30px 70px -20px rgba(6,182,212,0.30),
    0 0 0 1px rgba(6,182,212,0.08),
    inset 0 1px 0 rgba(255,255,255,0.06);
  padding: 13px 15px;
  backdrop-filter: blur(12px);
  animation: lp-floatIn 0.6s ease-out both 1.15s, lp-floatY-2 5.5s ease-in-out infinite 1.75s;
  z-index: 5;
}
@media (max-width: 900px) {
  .lp-mockup-wrap { max-width: 460px; }
}
@media (max-width: 560px) {
  .lp-stat-chip { display: none; }
  .lp-notif { right: 0; width: 70%; }
}
@media (prefers-reduced-motion: reduce) {
  .lp-mockup-card,
  .lp-stat-chip,
  .lp-notif { animation: none; }
}
`;

const STAGES = [
  { code: "01", label: "OUTREACH", count: "2,847", leads: [["MR", "#2563eb"], ["TS", "#0891b2"]] },
  { code: "02", label: "REPLIED",  count: "312",   leads: [["JD", "#7c3aed"], ["AB", "#06b6d4"]] },
  { code: "03", label: "VETTED",   count: "84",    leads: [["KP", "#f59e0b"], ["DR", "#10b981"]] },
  { code: "04", label: "SIGNED",   count: "17",    leads: [["LN", "#22c55e"], ["EM", "#06b6d4"]] },
] as const;

const METRICS = [
  { label: "REPLY RATE",   value: "11.2%", trend: "+2.4"  },
  { label: "COST / HIRE",  value: "$23",   trend: "−12%"  },
  { label: "TIME TO SIGN", value: "4.1d",  trend: "−1.8d" },
];

export default function HeroPipelineMockup() {
  return (
    <div className="lp-mockup-wrap">
      <style dangerouslySetInnerHTML={{ __html: MOCKUP_CSS }} />

      <div className="lp-mockup-glow" />

      <svg className="lp-mockup-grid" width="100%" height="100%" aria-hidden="true">
        <defs>
          <pattern id="hero-grid" width="38" height="38" patternUnits="userSpaceOnUse">
            <path d="M38 0H0V38" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </pattern>
          <radialGradient id="hero-grid-mask" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-mask">
            <rect width="100%" height="100%" fill="url(#hero-grid-mask)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#hero-mask)" />
      </svg>

      {/* Floating stat chip */}
      <div className="lp-stat-chip">
        <div style={{ fontSize: 9, color: "#52525b", fontFamily: "monospace", letterSpacing: "0.06em", marginBottom: 4 }}>
          EMAILS SENT TODAY
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontSize: 18, fontWeight: 600, color: "#fafafa", letterSpacing: "-0.02em", lineHeight: 1 }}>2,418</span>
          <span style={{ fontSize: 10, color: "#22c55e", fontFamily: "monospace" }}>+184/h</span>
        </div>
      </div>

      {/* Main pipeline card */}
      <div className="lp-mockup-card">
        {/* Card header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 10px #22c55e" }} />
              <span style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "1.5px solid #22c55e", animation: "lp-pulseGlow 2.2s ease-in-out infinite" }} />
            </span>
            <span style={{ fontSize: 10.5, color: "#a1a1aa", fontFamily: "monospace", letterSpacing: "0.07em" }}>OUTREACH PIPELINE · LIVE</span>
          </div>
          <span style={{ fontSize: 9.5, color: "#52525b", fontFamily: "monospace", letterSpacing: "0.05em" }}>LAST 30 DAYS</span>
        </div>

        {/* Stages grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 16 }}>
          {STAGES.map((s, si) => (
            <div key={s.code} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 9, padding: "10px 9px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
                <span style={{ fontSize: 8.5, color: "#52525b", fontFamily: "monospace", letterSpacing: "0.05em" }}>{s.label}</span>
                <span style={{ fontSize: 8, color: "#3f3f46", fontFamily: "monospace" }}>{s.code}</span>
              </div>
              <div style={{ fontSize: 19, fontWeight: 600, color: "#fafafa", letterSpacing: "-0.025em", lineHeight: 1, marginBottom: 10 }}>
                {s.count}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {s.leads.map(([initials, bg], li) => (
                  <div
                    key={li}
                    style={{
                      display: "flex", alignItems: "center", gap: 6,
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.04)",
                      borderRadius: 6,
                      padding: "4px 5px",
                      animation: `lp-leadIn 0.5s ease-out both ${0.45 + si * 0.08 + li * 0.07}s`,
                    }}
                  >
                    <div style={{ width: 15, height: 15, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 6.5, fontWeight: 600, color: "#fff", letterSpacing: "0.02em" }}>{initials}</span>
                    </div>
                    <div style={{ flex: 1, height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2 }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Metric strip */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {METRICS.map((m) => (
            <div key={m.label}>
              <div style={{ fontSize: 8.5, color: "#52525b", fontFamily: "monospace", letterSpacing: "0.06em", marginBottom: 4 }}>{m.label}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#fafafa", letterSpacing: "-0.015em" }}>{m.value}</span>
                <span style={{ fontSize: 9.5, color: "#22c55e", fontFamily: "monospace" }}>{m.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating notification */}
      <div className="lp-notif">
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#06b6d4", boxShadow: "0 0 10px #06b6d4", animation: "lp-pulseGlow 1.6s ease-in-out infinite" }} />
          <span style={{ fontSize: 9.5, color: "#06b6d4", fontFamily: "monospace", letterSpacing: "0.07em", fontWeight: 500 }}>NEW QUALIFIED LEAD</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #2563eb, #06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 14px rgba(37,99,235,0.45)" }}>
            <span style={{ fontSize: 11.5, fontWeight: 600, color: "#fff", letterSpacing: "0.02em" }}>MR</span>
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 12.5, color: "#fafafa", fontWeight: 500, letterSpacing: "-0.005em" }}>Marcus R. · Dry Van</div>
            <div style={{ fontSize: 10.5, color: "#71717a", marginTop: 2 }}>2 trucks · MC active · TX → CA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
