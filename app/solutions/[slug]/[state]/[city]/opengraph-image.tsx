import { ImageResponse } from "next/og";
import { getSolution } from "@/lib/solutions";
import { getState } from "@/lib/states";
import { CITIES_BY_STATE, getCity } from "@/lib/cities";

export const runtime = "edge";
export const alt = "Asamblor city pipeline";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CORE_SLUGS = ["owner-operator-recruiting", "cdl-driver-hiring"];

export function generateStaticParams() {
  const out: { slug: string; state: string; city: string }[] = [];
  for (const slug of CORE_SLUGS) {
    for (const [stateSlug, cities] of Object.entries(CITIES_BY_STATE)) {
      for (const c of cities) out.push({ slug, state: stateSlug, city: c.slug });
    }
  }
  return out;
}

export default async function OG({ params }: { params: { slug: string; state: string; city: string } }) {
  const s = getSolution(params.slug);
  const state = getState(params.state);
  const city = getCity(params.state, params.city);
  const title = `${s?.name ?? "Solution"} in ${city?.name ?? ""}, ${state?.abbr ?? ""}`;
  const eyebrow = `City pipeline · ${state?.name ?? ""}${city?.isCapital ? " · State capital" : ""}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "80px", background: "radial-gradient(circle at 80% 0%, rgba(37,99,235,0.18), transparent 50%), linear-gradient(180deg, #09090b 0%, #050507 100%)", color: "#fafafa", fontFamily: "Inter, system-ui" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg, #27272a 0%, #0a0a0c 100%)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 28, fontWeight: 600, color: "#60a5fa" }}>A</span>
          </div>
          <span style={{ fontSize: 26, fontWeight: 500 }}>Asamblor</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 16, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>{eyebrow}</div>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.025em", maxWidth: 1020 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 22, color: "#a1a1aa", maxWidth: 980 }}>Built, run, and owned by your fleet — done-for-you acquisition infrastructure for motor carriers.</div>
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
