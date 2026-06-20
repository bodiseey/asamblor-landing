import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StateSolutionClient from "./StateSolutionClient";
import { SOLUTIONS, getSolution } from "@/lib/solutions";
import { STATES, getState, getAdjacentStates } from "@/lib/states";
import { citiesForState } from "@/lib/cities";

const CORE_SLUGS = ["owner-operator-recruiting", "cdl-driver-hiring"];

const SITE_URL = "https://www.asamblor.com";

export function generateStaticParams() {
  const out: { slug: string; state: string }[] = [];
  for (const s of SOLUTIONS) {
    for (const st of STATES) {
      out.push({ slug: s.slug, state: st.slug });
    }
  }
  return out;
}

export function generateMetadata({ params }: { params: { slug: string; state: string } }): Metadata {
  const s = getSolution(params.slug);
  const state = getState(params.state);
  if (!s || !state) return {};
  const url = `${SITE_URL}/solutions/${s.slug}/${state.slug}`;
  const title = `${s.name} Acquisition Pipeline in ${state.name} (${state.abbr}) — Asamblor`;
  const description = `Targeted outbound for ${s.name.toLowerCase()} reaching motor carriers domiciled in ${state.name}. Filter by ${state.name} corridors (${state.corridors.slice(0, 2).map((c) => c.split(" ")[0]).join(", ")}), hubs (${state.hubs.slice(0, 2).map((h) => h.split(" (")[0]).join(", ")}), and adjacent states. Powered by CarrieX.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Asamblor",
      type: "website",
      images: [{ url: "/logo.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
    keywords: [
      `${s.name.toLowerCase()} ${state.name}`,
      `${s.name.toLowerCase()} prospects ${state.abbr}`,
      `motor carrier outreach ${state.name}`,
      `${state.name} trucking sales leads`,
      `carrier acquisition ${state.abbr}`,
      ...state.hubs.slice(0, 2).map((h) => `${s.name.toLowerCase()} ${h.split(" (")[0]}`),
      "carriex",
      "asamblor",
    ],
  };
}

export default function Page({ params }: { params: { slug: string; state: string } }) {
  const s = getSolution(params.slug);
  const state = getState(params.state);
  if (!s || !state) notFound();

  const adjacent = getAdjacentStates(state.adjacentStates).slice(0, 3);
  const cities = CORE_SLUGS.includes(s.slug) ? citiesForState(state.slug) : [];
  const url = `${SITE_URL}/solutions/${s.slug}/${state.slug}`;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Asamblor for ${s.name} in ${state.name}`,
    serviceType: `${s.name} acquisition pipeline targeting carriers in ${state.name}`,
    description: `Targeted outbound for ${s.name.toLowerCase()} reaching motor carriers domiciled in ${state.name}.`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "CarrieX Labs LLC",
      url: SITE_URL,
    },
    areaServed: { "@type": "State", name: state.name, containedInPlace: { "@type": "Country", name: "United States" } },
    audience: { "@type": "BusinessAudience", audienceType: s.audience },
    url,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
      { "@type": "ListItem", position: 3, name: s.name, item: `${SITE_URL}/solutions/${s.slug}` },
      { "@type": "ListItem", position: 4, name: state.name, item: url },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [service, breadcrumb],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <StateSolutionClient s={s} state={state} adjacent={adjacent} cities={cities} />
    </>
  );
}
