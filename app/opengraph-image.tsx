import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Asamblor — Acquisition infrastructure for modern fleets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "80px", background: "radial-gradient(circle at 80% 0%, rgba(37,99,235,0.18), transparent 50%), linear-gradient(180deg, #09090b 0%, #050507 100%)", color: "#fafafa", fontFamily: "Inter, system-ui" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg, #27272a 0%, #0a0a0c 100%)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 28, fontWeight: 600, color: "#60a5fa" }}>A</span>
          </div>
          <span style={{ fontSize: 26, fontWeight: 500, color: "#fafafa", letterSpacing: "-0.01em" }}>Asamblor</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 16, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>Acquisition infrastructure for modern fleets</div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.025em", color: "#fafafa", maxWidth: 980 }}>Find, vet, and route owner-operators &amp; CDL drivers — done-for-you, owned by your fleet.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 18, color: "#71717a" }}>
          <span>Powered by CarrieX · 4.5M+ verified carrier records</span>
          <span style={{ color: "#a1a1aa", fontFamily: "monospace" }}>asamblor.com</span>
        </div>
      </div>
    ),
    size,
  );
}
