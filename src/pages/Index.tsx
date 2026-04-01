import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RitualsSection from "@/components/RitualsSection";
import SocialProofSection from "@/components/SocialProofSection";
import ResultsSection from "@/components/ResultsSection";
import ForWhoSection from "@/components/ForWhoSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <HowItWorksSection />
      <RitualsSection />
      <SocialProofSection />
      <ResultsSection />
      <ForWhoSection />
      <FinalCTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
