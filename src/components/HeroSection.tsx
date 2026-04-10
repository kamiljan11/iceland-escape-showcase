import { motion } from "framer-motion";
import { MapPin, Compass } from "lucide-react";
import heroImg from "@/assets/hero-people.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-end md:items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Our guide showing guests a hidden waterfall in Iceland" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16 md:pb-0">
        <div className="max-w-2xl">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-heading text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 md:mb-6">
            {t({
              en: "We show you the Iceland",
              pl: "Pokazujemy Islandię,",
              is: "Við sýnum þér Íslandið",
            }, lang)}
            <span className="text-gradient-aurora block">
              {t({
                en: "tourists never see.",
                pl: "której turyści nie znają.",
                is: "sem ferðamenn sjá aldrei.",
              }, lang)}
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-muted-foreground text-sm md:text-lg max-w-lg mb-8 md:mb-10 font-body leading-relaxed">
            {t({
              en: "Small groups. Local guides who are fishermen, geologists, and photographers. No tourist traps — just the real Iceland.",
              pl: "Małe grupy. Lokalni przewodnicy — rybacy, geologowie, fotografowie. Żadnych turystycznych pułapek — prawdziwa Islandia.",
              is: "Litlir hópar. Staðbundnir leiðsögumenn sem eru sjómenn, jarðfræðingar og ljósmyndarar. Engar ferðamannagildrur — bara hið raunverulega Ísland.",
            }, lang)}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a href="#tours" className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-lg bg-gradient-aurora font-body font-semibold text-sm text-primary-foreground hover:opacity-90 transition-opacity">
              <MapPin className="w-4 md:w-5 h-4 md:h-5" />
              {t(tr.hero.cta_tours, lang)}
            </a>
            <a href="#story" className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-lg bg-glass font-body font-semibold text-sm text-foreground hover:bg-secondary transition-colors">
              <Compass className="w-4 md:w-5 h-4 md:h-5" />
              {t({ en: "Our story", pl: "Nasza historia", is: "Sagan okkar" }, lang)}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
