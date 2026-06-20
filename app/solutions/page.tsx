import type { Metadata } from "next";
import SolutionsIndexClient from "./SolutionsIndexClient";
import { SOLUTIONS } from "@/lib/solutions";

const SITE_URL = "https://www.asamblor.com";

export const metadata: Metadata = {
  title: "Solutions — Acquisition pipelines for every trucking-adjacent business",
  description: "Asamblor builds done-for-you outbound pipelines for freight brokers, insurance, factoring, dispatch, fuel cards, tire dealers, equipment suppliers, CDL schools, compliance consultants, and more — powered by CarrieX (4.5M+ verified records).",
  alternates: { canonical: `${SITE_URL}/solutions` },
};

export default function SolutionsIndexPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/solutions#list`,
    name: "Asamblor Solutions",
    numberOfItems: SOLUTIONS.length,
    itemListElement: SOLUTIONS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/solutions/${s.slug}`,
      name: s.name,
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [itemList, breadcrumb],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <SolutionsIndexClient solutions={SOLUTIONS} />
    </>
  );
}
