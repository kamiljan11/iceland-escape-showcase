import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import AuroraBar from "@/components/AuroraBar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import OurStory from "@/components/OurStory";
import HowItWorks from "@/components/HowItWorks";
import ToursSection from "@/components/ToursSection";
import SeasonsSection from "@/components/SeasonsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => (
  <LanguageProvider>
    <div className="min-h-screen">
      <Navbar />
      <AuroraBar />
      <HeroSection />
      <TrustBar />
      <OurStory />
      <HowItWorks />
      <ToursSection />
      <TestimonialsSection />
      <SeasonsSection />
      <FaqSection />
      <ContactSection />
      <CtaBanner />
      <Footer />
    </div>
  </LanguageProvider>
);

export default Index;
