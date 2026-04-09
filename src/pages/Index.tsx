import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ToursSection from "@/components/ToursSection";
import SeasonsSection from "@/components/SeasonsSection";
import FleetSection from "@/components/FleetSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => (
  <LanguageProvider>
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ToursSection />
      <SeasonsSection />
      <FleetSection />
      <TestimonialsSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <CtaBanner />
      <Footer />
    </div>
  </LanguageProvider>
);

export default Index;
