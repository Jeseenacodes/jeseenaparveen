import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
      <footer className="py-8 text-center text-xs text-muted-foreground tracking-widest border-t border-border">
        © 2026 Jeseena Parveen K — Built with passion
      </footer>
    </div>
  );
};

export default Index;
