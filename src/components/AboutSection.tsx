import { motion } from "framer-motion";
import { Shield, Heart, MapPin, Headphones } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t } from "@/i18n/translations";

const icons = [MapPin, Heart, Shield, Headphones];
const values = ["1 200+", "8 500+", "12", "24/7"];

const AboutSection = () => {
  const { lang } = useLanguage();
  const statKeys = ["tours", "clients", "years", "support"] as const;

  return (
    <section id="about" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">{t(tr.about.label, lang)}</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">{t(tr.about.heading, lang)}</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">{t(tr.about.p1, lang)}</p>
            <p className="text-muted-foreground font-body leading-relaxed">{t(tr.about.p2, lang)}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {statKeys.map((key, i) => {
              const Icon = icons[i];
              return (
                <motion.div key={key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-glass rounded-xl p-6 text-center">
                  <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <div className="font-heading text-3xl font-bold text-gradient-aurora mb-1">{values[i]}</div>
                  <div className="text-muted-foreground text-xs font-body">{t(tr.about.stats[key], lang)}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
