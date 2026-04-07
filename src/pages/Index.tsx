import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.homeTitle")}</title>
        <meta name="description" content={t("meta.homeDesc")} />
      </Helmet>
      <main className="min-h-screen overflow-x-hidden bg-background">
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
    </>
  );
};

export default Index;
