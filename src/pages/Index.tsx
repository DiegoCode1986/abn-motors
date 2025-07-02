
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BrandsSection } from "@/components/BrandsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-ride-dark text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BrandsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
