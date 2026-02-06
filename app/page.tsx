import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AdvantageSection from "@/components/AdvantageSection";
import CapacityTracks from "@/components/CapacityTracks";
import SolutionSection from "@/components/SolutionSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import IncludedSection from "@/components/IncludedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

import ContactSection from "@/components/ContactSection";
import TelegramNotification from "@/components/TelegramNotification";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Asamblor",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web browser",
    "description": "AI-driven recruitment platform for trucking fleet owners to hire CDL drivers and owner operators.",
    "url": "https://www.asamblor.com",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Trucking Fleet Owners"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "120"
    }
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <AdvantageSection />
      <CapacityTracks />
      <SolutionSection />

      {/* Replaced old FeaturesSection with new FeatureHighlights */}
      <FeatureHighlights />



      <IncludedSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <TelegramNotification />
    </main>
  );
}