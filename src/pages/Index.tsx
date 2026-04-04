import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToursSection from "@/components/ToursSection";
import FleetSection from "@/components/FleetSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <LanguageProvider>
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ToursSection />
      <FleetSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  </LanguageProvider>
);

export default Index;
