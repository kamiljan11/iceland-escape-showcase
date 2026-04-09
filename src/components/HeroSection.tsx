import { motion } from "framer-motion";
import { MapPin, Compass } from "lucide-react";
import heroImg from "@/assets/hero-iceland.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Iceland volcanic beach with aurora" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-primary font-body text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6">
          {t(tr.hero.subtitle, lang)}
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-heading text-4xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 md:mb-6">
          Norðan
          <span className="text-gradient-aurora block text-5xl md:text-8xl lg:text-9xl">Travel</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-muted-foreground text-sm md:text-xl max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 font-body leading-relaxed">
          {t(tr.hero.desc, lang)}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 md:px-0">
          <a href="#tours" className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-lg bg-gradient-aurora font-body font-semibold text-sm text-primary-foreground hover:opacity-90 transition-opacity">
            <MapPin className="w-4 md:w-5 h-4 md:h-5" />
            {t(tr.hero.cta_tours, lang)}
          </a>
          <a href="#routes" className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-lg bg-glass font-body font-semibold text-sm text-foreground hover:bg-secondary transition-colors">
            <Compass className="w-4 md:w-5 h-4 md:h-5" />
            {t(tr.hero.cta_routes, lang)}
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-1.5 md:pt-2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
