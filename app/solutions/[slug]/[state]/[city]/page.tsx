import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityClient from "./CityClient";
import { getSolution } from "@/lib/solutions";
import { getState } from "@/lib/states";
import { CITIES_BY_STATE, getCity, citiesForState } from "@/lib/cities";

const SITE_URL = "https://www.asamblor.com";
const CORE_SLUGS = ["owner-operator-recruiting", "cdl-driver-hiring"] as const;

export function generateStaticParams() {
  const out: { slug: string; state: string; city: string }[] = [];
  for (const slug of CORE_SLUGS) {
    for (const [stateSlug, cities] of Object.entries(CITIES_BY_STATE)) {
      for (const c of cities) {
        out.push({ slug, state: stateSlug, city: c.slug });
      }
    }
  }
  return out;
}

export function generateMetadata({ params }: { params: { slug: string; state: string; city: string } }): Metadata {
  const s = getSolution(params.slug);
  const state = getState(params.state);
  const city = getCity(params.state, params.city);
  if (!s || !state || !city || !CORE_SLUGS.includes(params.slug as typeof CORE_SLUGS[number])) return {};

  const url = `${SITE_URL}/solutions/${s.slug}/${state.slug}/${city.slug}`;
  const audienceWord = s.slug === "owner-operator-recruiting" ? "owner-operators" : "CDL drivers";
  const title = `${s.name} in ${city.name}, ${state.abbr} — Acquisition Pipeline for Motor Carriers`;
  const description = `Asamblor builds and runs a ${s.name.toLowerCase()} pipeline for motor carriers operating in ${city.name}, ${state.name}. CarrieX-mined ${audienceWord} delivered into your CRM, with corridors ${state.corridors.slice(0, 2).map((c) => c.split(" ")[0]).join(" and ")} covered.`;

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
      `${s.name.toLowerCase()} ${city.name}`,
      `${s.name.toLowerCase()} ${city.name} ${state.abbr}`,
      `${audienceWord} hiring ${city.name}`,
      `${audienceWord} recruiting ${city.name} ${state.name}`,
      `trucking company hiring ${city.name}`,
      `motor carrier acquisition pipeline ${city.name}`,
      "carriex",
      "asamblor",
    ],
  };
}

export default function Page({ params }: { params: { slug: string; state: string; city: string } }) {
  if (!CORE_SLUGS.includes(params.slug as typeof CORE_SLUGS[number])) notFound();
  const s = getSolution(params.slug);
  const state = getState(params.state);
  const city = getCity(params.state, params.city);
  if (!s || !state || !city) notFound();

  const siblings = citiesForState(state.slug).filter((c) => c.slug !== city.slug);
  const url = `${SITE_URL}/solutions/${s.slug}/${state.slug}/${city.slug}`;
  const audienceWord = s.slug === "owner-operator-recruiting" ? "owner-operators" : "CDL drivers";

  // JSON-LD: Service with areaServed = City, BreadcrumbList 5-level, FAQPage
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Asamblor ${s.name} pipeline — ${city.name}, ${state.abbr}`,
    serviceType: `${s.name} acquisition pipeline for motor carriers operating in ${city.name}, ${state.name}`,
    description: `Done-for-you ${s.name.toLowerCase()} infrastructure built for motor carriers in ${city.name}, ${state.name}. CarrieX-mined ${audienceWord} delivered into your CRM via outbound, SMS, and vetting forms.`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "CarrieX Labs LLC",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: state.name,
        containedInPlace: { "@type": "Country", name: "United States" },
      },
    },
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
      { "@type": "ListItem", position: 4, name: state.name, item: `${SITE_URL}/solutions/${s.slug}/${state.slug}` },
      { "@type": "ListItem", position: 5, name: city.name, item: url },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: `Can Asamblor target ${audienceWord} based specifically in ${city.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `Yes. The CarrieX mining strategy filters by domicile / home-base ZIP at the metro level, so outreach reaches ${audienceWord} in ${city.name} and configurable surrounding radius (50, 100, or 200 miles).` },
      },
      {
        "@type": "Question",
        name: `What ${state.name} freight corridors does the ${city.name} pipeline cover?`,
        acceptedAnswer: { "@type": "Answer", text: `${city.name} sits in the ${state.name} freight network anchored by ${state.corridors.map((c) => c.split(" ")[0]).join(", ")}. Pipelines target ${audienceWord} with operating activity on these corridors plus regional flow into ${state.adjacentStates.slice(0, 3).join(", ")}.` },
      },
      {
        "@type": "Question",
        name: `How fast can we launch in ${city.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `Standard launch is 14–21 days from kickoff: ICP onboarding, CarrieX mining for ${city.name} + adjacent states, sending-domain warmup, CRM build, and first live outbound. First qualified reply typically lands in week 3.` },
      },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [service, breadcrumb, faq],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <CityClient s={s} state={state} city={city} siblings={siblings} />
    </>
  );
}
