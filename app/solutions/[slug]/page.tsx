import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionClient from "./SolutionClient";
import { SOLUTIONS, getSolution, getRelated } from "@/lib/solutions";
import { STATES } from "@/lib/states";

const SITE_URL = "https://www.asamblor.com";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getSolution(params.slug);
  if (!s) return {};
  const url = `${SITE_URL}/solutions/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url,
      siteName: "Asamblor",
      type: "website",
      images: [{ url: "/logo.png", width: 1200, height: 630, alt: s.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: s.metaTitle,
      description: s.metaDescription,
      images: ["/logo.png"],
    },
    keywords: [
      `${s.name.toLowerCase()} prospecting`,
      `${s.name.toLowerCase()} acquisition`,
      `trucking outreach for ${s.name.toLowerCase()}`,
      "carrier acquisition pipeline",
      "carriex",
      "asamblor",
      "verified motor carrier data",
      "owner-operator targeting",
    ],
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const s = getSolution(params.slug);
  if (!s) notFound();

  const related = getRelated(s.related);
  const url = `${SITE_URL}/solutions/${s.slug}`;
  const states = STATES;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Asamblor for ${s.name}`,
    serviceType: `Acquisition infrastructure for ${s.name.toLowerCase()}`,
    description: s.metaDescription,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "CarrieX Labs LLC",
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "BusinessAudience", audienceType: s.audience },
    url,
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
      { "@type": "ListItem", position: 3, name: s.name, item: url },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [service, faq, breadcrumb],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <SolutionClient s={s} related={related} states={states} />
    </>
  );
}
