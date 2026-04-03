import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <AboutSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;