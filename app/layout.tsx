import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Preloader from "@/components/Preloader";
import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from "@/components/PostHogProvider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const SITE_URL = "https://www.asamblor.com";
const SITE_NAME = "Asamblor";
const SITE_TITLE = "Asamblor | Acquisition infrastructure for modern fleets";
const SITE_DESCRIPTION =
  "Asamblor is the done-for-you owner-operator acquisition infrastructure for trucking fleets. Build, run, and own your pipeline powered by 4.5M+ verified records.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Asamblor",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "Business",
  keywords: [
    // Core entity terms
    "asamblor",
    "carriex",
    "owner operator acquisition infrastructure",
    "truck driver hiring infrastructure",
    // Owner-operator long-tail
    "how to recruit owner operators for trucking company",
    "owner operator recruiting pipeline",
    "lease on owner operator recruitment",
    "find owner operators with their own authority",
    "owner operator lead generation for motor carriers",
    "alternative to owner operator recruiting agency",
    "owner operator recruiting cost per hire",
    "lease on driver recruitment services",
    // CDL driver long-tail
    "cdl driver hiring pipeline",
    "how to hire cdl truck drivers without indeed",
    "cdl-a driver recruiting services",
    "company driver hiring infrastructure",
    "geo targeted cdl driver outreach",
    "truck driver sourcing for motor carriers",
    // Fleet operator long-tail
    "scale trucking fleet asset light",
    "scale lease on fleet without buying trucks",
    "motor carrier growth without agency commissions",
    // Cost / comparison long-tail
    "alternative to driver recruiting agency",
    "cost per signed owner operator",
    "owner operator recruiting vs agency",
    "cdl driver acquisition cost",
    "trucking recruitment automation",
    // Compliance long-tail
    "tcpa compliant trucking outreach",
    "10dlc sms trucking recruiting",
    "can-spam compliant cdl driver email outreach",
    // Industry / adjacent
    "freight broker carrier acquisition",
    "trucking insurance new mc outreach",
    "freight factoring new mc leads",
    "trucking fleet decision maker outreach",
  ],
  authors: [{ name: "Asamblor", url: SITE_URL }],
  creator: "CarrieX Labs LLC",
  publisher: "CarrieX Labs LLC",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: SITE_URL,
    types: { "application/rss+xml": [], "text/plain": [{ url: "/llms.txt", title: "LLMs index" }] },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      { url: "/logo.png", width: 1200, height: 630, alt: "Asamblor — acquisition infrastructure for modern fleets" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@asamblor",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/logo.png" }],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#09090b",
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} ${playfair.variable} bg-background text-foreground antialiased tracking-tight selection:bg-primary/30 selection:text-primary-foreground relative min-h-screen overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PostHogProvider>
            {/* <Preloader /> */}
            {children}
            <Analytics />
          </PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
