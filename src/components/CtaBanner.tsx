import { motion } from "framer-motion";
import { MapPin, Camera, Users, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const CtaBanner = () => {
  const { lang } = useLanguage();

  const features = [
    { icon: MapPin, label: t({ en: "Custom Itineraries", pl: "Własne trasy", is: "Sérsniðnar leiðir" }, lang) },
    { icon: Camera, label: t({ en: "Photo Stops", pl: "Punkty foto", is: "Ljósmyndastaðir" }, lang) },
    { icon: Users, label: t({ en: "Local Guides", pl: "Lokalni przewodnicy", is: "Staðbundnir leiðsögumenn" }, lang) },
    { icon: Zap, label: t({ en: "Instant Booking", pl: "Błyskawiczna rezerwacja", is: "Tafarlaus bókun" }, lang) },
  ];

  return (
    <section className="py-28 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          {t({ en: "Your adventure awaits", pl: "Twoja przygoda czeka", is: "Ævintýrið þitt bíður" }, lang)}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3"
        >
          {t({ en: "Ready to Explore", pl: "Gotowy na Odkrywanie", is: "Tilbúinn að Uppgötva" }, lang)}
          <span className="text-gradient-aurora block font-heading italic">
            {t({ en: "Iceland?", pl: "Islandii?", is: "Íslands?" }, lang)}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 font-body"
        >
          {t({
            en: "Handcrafted tours with local guides. Every detail planned — routes, stops, experiences. One booking. Zero stress.",
            pl: "Ręcznie tworzone wycieczki z lokalnymi przewodnikami. Każdy szczegół zaplanowany — trasy, przystanki, doświadczenia. Jedna rezerwacja. Zero stresu.",
            is: "Handgerðar ferðir með staðbundnum leiðsögumönnum. Allt skipulagt — leiðir, stopp, upplifun. Ein bókun. Enginn streittur.",
          }, lang)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12"
        >
          {features.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2 text-muted-foreground text-sm font-body">
              <Icon className="w-4 h-4 text-primary" />
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#tours"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-lg bg-gradient-aurora font-body font-bold text-sm tracking-widest uppercase text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {t({ en: "Browse tours", pl: "Zobacz wycieczki", is: "Skoða ferðir" }, lang)}
            <ArrowRight className="w-4 h-4" />
          </a>
          <span className="text-muted-foreground text-sm font-body">
            {t({ en: "From only", pl: "Już od", is: "Frá aðeins" }, lang)}{" "}
            <span className="text-primary font-semibold">9 900 ISK/{t({ en: "person", pl: "osoba", is: "manneskja" }, lang)}</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-muted-foreground/60 text-xs font-body"
        >
          ⚡ {t({
            en: "Book in 2 minutes · Free cancellation · Local guides",
            pl: "Rezerwacja w 2 minuty · Darmowe anulowanie · Lokalni przewodnicy",
            is: "Bókaðu á 2 mínútum · Ókeypis afpöntun · Staðbundnir leiðsögumenn",
          }, lang)}
        </motion.p>
      </div>
    </section>
  );
};

export default CtaBanner;
