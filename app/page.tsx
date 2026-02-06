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
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
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