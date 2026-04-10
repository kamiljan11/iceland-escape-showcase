import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NorthernLightsAccent } from "@/components/SvgAccents";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const CtaBanner = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <NorthernLightsAccent className="absolute top-6 right-8 w-48 md:w-72 text-white" />
      <NorthernLightsAccent className="absolute bottom-6 left-8 w-40 md:w-56 text-white rotate-180" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 text-white"
        >
          {t({ en: "Ready to see the real", pl: "Gotowy zobaczyć prawdziwą", is: "Tilbúinn að sjá hið raunverulega" }, lang)}
          <span className="block font-heading italic text-white/80">
            {t({ en: "Iceland?", pl: "Islandię?", is: "Ísland?" }, lang)}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-white/80 text-sm md:text-lg max-w-xl mx-auto mb-8 md:mb-10 font-body"
        >
          {t({
            en: "Small groups, local guides, hidden spots. Book in 2 minutes.",
            pl: "Małe grupy, lokalni przewodnicy, ukryte miejsca. Rezerwacja w 2 minuty.",
            is: "Litlir hópar, staðbundnir leiðsögumenn, faldir staðir. Bókaðu á 2 mínútum.",
          }, lang)}
        </motion.p>

        <motion.a
          href="#tours"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-3.5 md:py-4 rounded-lg bg-white text-primary font-body font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
        >
          {t({ en: "Browse tours", pl: "Zobacz wycieczki", is: "Skoða ferðir" }, lang)}
          <ArrowRight className="w-3.5 md:w-4 h-3.5 md:h-4" />
        </motion.a>
      </div>
    </section>
  );
};

export default CtaBanner;
