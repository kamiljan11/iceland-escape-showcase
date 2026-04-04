import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToursSection from "@/components/ToursSection";
import FleetSection from "@/components/FleetSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ToursSection />
    <FleetSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
