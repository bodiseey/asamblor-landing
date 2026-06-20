import { ImageResponse } from "next/og";
import { SOLUTIONS, getSolution } from "@/lib/solutions";
import { STATES, getState } from "@/lib/states";

export const runtime = "edge";
export const alt = "Asamblor state pipeline";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  const out: { slug: string; state: string }[] = [];
  for (const s of SOLUTIONS) for (const st of STATES) out.push({ slug: s.slug, state: st.slug });
  return out;
}

export default async function OG({ params }: { params: { slug: string; state: string } }) {
  const s = getSolution(params.slug);
  const state = getState(params.state);
  const title = `${s?.name ?? "Solution"} — ${state?.name ?? ""}${state?.abbr ? ` (${state.abbr})` : ""}`;
  const hubs = state?.hubs?.slice(0, 3).map((h) => h.split(" (")[0]).join(" · ") ?? "";
  const eyebrow = `Acquisition pipeline · ${state?.region ?? "USA"}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "80px", background: "radial-gradient(circle at 80% 0%, rgba(37,99,235,0.18), transparent 50%), linear-gradient(180deg, #09090b 0%, #050507 100%)", color: "#fafafa", fontFamily: "Inter, system-ui" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg, #27272a 0%, #0a0a0c 100%)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 28, fontWeight: 600, color: "#60a5fa" }}>A</span>
          </div>
          <span style={{ fontSize: 26, fontWeight: 500 }}>Asamblor</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 16, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>{eyebrow}</div>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.025em", maxWidth: 1020 }}>{title}</div>
          {hubs ? <div style={{ display: "flex", fontSize: 22, color: "#a1a1aa" }}>{`Hubs: ${hubs}`}</div> : null}
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
