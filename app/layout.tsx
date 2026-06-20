import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Preloader from "@/components/Preloader";
import { ThemeProvider } from "@/components/theme-provider";
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
    "owner-operator recruitment",
    "lease-on owner operators",
    "cdl driver recruitment",
    "trucking fleet recruiting",
    "fleet acquisition infrastructure",
    "trucking outbound engine",
    "done-for-you driver recruiting",
    "carriex",
    "asamblor",
    "trucking growth",
    "alternative to driver recruiting agency",
    "cost per acquisition trucking",
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
          {/* <Preloader /> */}
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
