import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import EmotionalBurdenSection from "@/components/EmotionalBurdenSection";
import SolutionSection from "@/components/SolutionSection";
import SocialProofSection from "@/components/SocialProofSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import IntegrationSection from "@/components/IntegrationSection";
import ConversionForm from "@/components/ConversionForm";
import UrgencySection from "@/components/UrgencySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <HeroSection />
      <ProblemSection />
      <EmotionalBurdenSection />
      <SolutionSection />
      <SocialProofSection />
      <CapabilitiesSection />
      <IntegrationSection />
      <ConversionForm />
      <UrgencySection />
      <FooterSection />
    </div>
  );
};

export default Index;