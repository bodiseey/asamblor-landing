import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} ${playfair.variable} bg-transparent antialiased tracking-tight selection:bg-purple-500/30 selection:text-purple-200 relative min-h-screen`}>
        <div data-us-project="cqcLtDwfoHqqRPttBbQE" className="fixed inset-0 -z-50 w-full h-full pointer-events-none"></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();`
          }}
        />
        {children}
      </body>
    </html>
  );
}
