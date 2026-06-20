import { MetadataRoute } from "next";
import { SOLUTIONS } from "@/lib/solutions";
import { STATES } from "@/lib/states";

const SITE_URL = "https://www.asamblor.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/owner-operators`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/drivers`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const industryEntries: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${SITE_URL}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryStateEntries: MetadataRoute.Sitemap = [];
  for (const s of SOLUTIONS) {
    for (const st of STATES) {
      industryStateEntries.push({
        url: `${SITE_URL}/solutions/${s.slug}/${st.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: st.tier === "tier1" ? 0.7 : st.tier === "tier2" ? 0.6 : 0.5,
      });
    }
  }

  return [...base, ...industryEntries, ...industryStateEntries];
}
