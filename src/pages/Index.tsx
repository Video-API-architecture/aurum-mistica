import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WebsiteSeo from "@/components/WebsiteSeo";
import { useLocale } from "@/contexts/LocaleContext";
import { getSiteUrl } from "@/lib/siteUrl";
import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EnergeticServicesSection from "@/components/EnergeticServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SoundCloudPlayerProvider } from "@/contexts/SoundCloudPlayerContext";

const Index = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { locale } = useLocale();
  const canonicalUrl = `${getSiteUrl()}${pathname}`;

  return (
    <>
      <WebsiteSeo
        title={t("meta.homeTitle")}
        description={t("meta.homeDesc")}
        canonicalUrl={canonicalUrl}
        locale={locale}
      />
      <SoundCloudPlayerProvider>
        <main className="min-h-screen overflow-x-hidden bg-background">
          <StickyHeader />
          <HeroSection />
          <ServicesSection />
          <EnergeticServicesSection />
          <HowItWorksSection />
          <AboutSection />
          <SocialProofSection />
          <FAQSection />
          <FinalCTASection />
          <FooterSection />
          <FloatingWhatsApp />
        </main>
      </SoundCloudPlayerProvider>
    </>
  );
};

export default Index;
