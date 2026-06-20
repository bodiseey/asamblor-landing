import { MetadataRoute } from "next";

const SITE_URL = "https://www.asamblor.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/", "/admin/"] },

      // Explicitly opt in to AI training/search crawlers — citations and
      // inclusion in AI answers are higher-value than crawl restrictions.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "GoogleOther", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
      { userAgent: "MistralAI-User", allow: "/" },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`],
    host: SITE_URL,
  };
}
