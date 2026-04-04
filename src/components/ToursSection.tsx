import { motion } from "framer-motion";
import { Clock, Users, Star } from "lucide-react";
import goldenCircle from "@/assets/tour-golden-circle.jpg";
import iceCave from "@/assets/tour-ice-cave.jpg";
import northernLights from "@/assets/tour-northern-lights.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t } from "@/i18n/translations";

const images = [goldenCircle, iceCave, northernLights];
const ratings = ["4.9", "5.0", "4.8"];
const prices = ["12 900 ISK", "19 900 ISK", "9 900 ISK"];

const ToursSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="tours" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">{t(tr.tours.label, lang)}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">{t(tr.tours.heading, lang)}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tr.tours.items.map((tour, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="relative overflow-hidden h-56">
                <img src={images[i]} alt={t(tour.title, lang)} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-primary font-body font-bold text-sm px-3 py-1 rounded-full">
                  {prices[i]}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">{t(tour.title, lang)}</h3>
                <p className="text-muted-foreground text-sm font-body mb-4">{t(tour.desc, lang)}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{t(tour.duration, lang)}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{t(tour.group, lang)}</span>
                  <span className="flex items-center gap-1 text-volcanic"><Star className="w-3.5 h-3.5 fill-volcanic" />{ratings[i]}</span>
                </div>
                <button className="mt-5 w-full py-3 rounded-lg bg-secondary text-secondary-foreground font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  {t(tr.tours.book, lang)}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
