import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Preloader from "@/components/Preloader";
import { ThemeProvider } from "@/components/theme-provider";
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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asamblor.com'),
  title: {
    default: "Asamblor | Hire CDL Drivers & Owner Operators on Autopilot",
    template: "%s | Asamblor - Fleet Recruitment"
  },
  description: "Asamblor is the AI-driven recruitment platform for trucking fleet owners. Automatically hire qualified CDL drivers and owner operators to fill your fleet faster.",
  keywords: [
    "hire cdl drivers",
    "owner operators",
    "truck driver recruitment",
    "fleet recruiting",
    "cdl driver jobs",
    "trucking automated recruitment",
    "asamblor",
    "driver hiring platform",
    "trucking business growth",
    "automated driver vetting"
  ],
  authors: [{ name: "Asamblor Team" }],
  creator: "Asamblor",
  publisher: "Asamblor",
  openGraph: {
    title: "Asamblor | Intelligent Fleet Recruitment for CDL Drivers",
    description: "Scale your trucking business by hiring the best CDL drivers and owner operators with AI-powered automation.",
    url: 'https://www.asamblor.com',
    siteName: 'Asamblor',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Asamblor | Hire CDL Drivers Fast",
    description: "Automate your fleet recruitment. Hire qualified CDL drivers and owner operators effortlessly.",
    creator: "@asamblor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        </ThemeProvider>
      </body>
    </html>
  );
}
