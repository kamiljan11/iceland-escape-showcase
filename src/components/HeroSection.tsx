import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-iceland.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Iceland volcanic beach with aurora" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
          {t(tr.hero.subtitle, lang)}
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          Norðan
          <span className="text-gradient-aurora block text-6xl md:text-8xl lg:text-9xl">Travel</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
          {t(tr.hero.desc, lang)}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#tours" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-aurora font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            <MapPin className="w-5 h-5" />
            {t(tr.hero.cta_tours, lang)}
          </a>
          <a href="#fleet" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-glass font-body font-semibold text-foreground hover:bg-secondary transition-colors">
            <Calendar className="w-5 h-5" />
            {t(tr.hero.cta_fleet, lang)}
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
