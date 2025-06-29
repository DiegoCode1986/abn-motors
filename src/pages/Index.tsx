
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { JoinTeamSection } from "@/components/JoinTeamSection";
import { OpenPositionsSection } from "@/components/OpenPositionsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-ride-dark text-white">
      <Header />
      <HeroSection />
      <JoinTeamSection />
      <OpenPositionsSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Index;
