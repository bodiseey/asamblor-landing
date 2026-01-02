import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AdvantageSection from "@/components/AdvantageSection";
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
    <main className="relative min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <AdvantageSection />
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