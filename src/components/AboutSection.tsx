import { motion } from "framer-motion";
import { Shield, Heart, MapPin, Headphones } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t, type Lang } from "@/i18n/translations";

const icons = [MapPin, Heart, Shield, Headphones];
const values = ["1 200+", "8 500+", "12", "24/7"];

const aboutContent = {
  p1: {
    en: "We started with one van and a philosophy: show people the Iceland that locals love, not the one tour buses visit. Twelve years later, the vans are newer, but the philosophy hasn't changed.",
    pl: "Zaczęliśmy od jednego vana i filozofii: pokazywać ludziom Islandię, którą kochają lokalni, a nie tę, którą odwiedzają turystyczne autobusy. Dwanaście lat później, vany są nowsze, ale filozofia się nie zmieniła.",
    is: "Við byrjuðum með einn sendibíl og heimspeki: sýna fólki Íslandið sem heimamenn elska, ekki það sem túristarúturnar heimsækja. Tólf árum síðar eru bílarnir nýrri, en heimspekin er sú sama.",
  },
  p2: {
    en: "Every guide on our team lives in Iceland year-round. They're not seasonal hires reading from a script — they're neighbours, friends, and storytellers who happen to know where the hidden hot springs are.",
    pl: "Każdy przewodnik w naszym zespole mieszka na Islandii cały rok. To nie sezonowi pracownicy czytający ze skryptu — to sąsiedzi, przyjaciele i gawędziarze, którzy przypadkiem wiedzą, gdzie są ukryte gorące źródła.",
    is: "Allir leiðsögumenn okkar búa á Íslandi allt árið. Þeir eru ekki árstíðabundnir ráðningar sem lesa af handriti — þeir eru nágrannar, vinir og sögumenn sem vita hvar faldu heitu laugarnar eru.",
  },
};

const AboutSection = () => {
  const { lang } = useLanguage();
  const statKeys = ["tours", "clients", "years", "support"] as const;

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">{t(tr.about.label, lang)}</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 md:mb-6">{t(tr.about.heading, lang)}</h2>
            <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed mb-3 md:mb-4">{t(aboutContent.p1, lang)}</p>
            <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">{t(aboutContent.p2, lang)}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3 md:gap-4">
            {statKeys.map((key, i) => {
              const Icon = icons[i];
              return (
                <motion.div key={key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-glass rounded-xl p-4 md:p-6 text-center">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2 md:mb-3" />
                  <div className="font-heading text-2xl md:text-3xl font-bold text-gradient-aurora mb-1">{values[i]}</div>
                  <div className="text-muted-foreground text-[10px] md:text-xs font-body">{t(tr.about.stats[key], lang)}</div>
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
