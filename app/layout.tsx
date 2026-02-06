import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import UnicornStudio from "@/components/UnicornStudio";
import Preloader from "@/components/Preloader";
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
  title: "Asamblor | Intelligent Fleet Recruitment",
  description: "AI-driven recruitment platform for trucking fleet owners. Fill your fleet on autopilot.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} ${playfair.variable} bg-background text-foreground antialiased tracking-tight selection:bg-primary/30 selection:text-primary-foreground relative min-h-screen overflow-x-hidden`}>
        <Preloader />
        <div data-us-project="cqcLtDwfoHqqRPttBbQE" className="fixed inset-0 -z-50 w-full h-full pointer-events-none"></div>
        <UnicornStudio />
        {children}
      </body>
    </html>
  );
}
