import { motion } from "framer-motion";
import { Sun, Snowflake, Leaf, Flower2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, type Lang } from "@/i18n/translations";

interface Season {
  icon: typeof Sun;
  name: Record<Lang, string>;
  months: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
  temp: string;
  colorClass: string;
}

const seasons: Season[] = [
  {
    icon: Snowflake,
    name: { en: "Winter", pl: "Zima", is: "Vetur" },
    months: { en: "Nov – Feb", pl: "Lis – Lut", is: "Nóv – Feb" },
    highlights: {
      en: ["Northern Lights", "Ice caves", "Snorkeling Silfra", "Hot springs"],
      pl: ["Zorza polarna", "Jaskinie lodowe", "Snorkeling Silfra", "Gorące źródła"],
      is: ["Norðurljós", "Íshellar", "Snorkl í Silfru", "Heitar laugar"],
    },
    temp: "-5° – 3°C",
    colorClass: "from-[hsl(var(--glacier-blue))] to-[hsl(var(--aurora-green))]",
  },
  {
    icon: Flower2,
    name: { en: "Spring", pl: "Wiosna", is: "Vor" },
    months: { en: "Mar – May", pl: "Mar – Maj", is: "Mar – Maí" },
    highlights: {
      en: ["Puffins arriving", "Fewer tourists", "Waterfalls in full flow", "Whale watching"],
      pl: ["Przylot maskonurów", "Mniej turystów", "Wodospady w pełni", "Obserwacja wielorybów"],
      is: ["Lundar koma", "Færri ferðamenn", "Fossar í fullu flæði", "Hvalaskoðun"],
    },
    temp: "2° – 10°C",
    colorClass: "from-[hsl(var(--aurora-green))] to-[hsl(var(--volcanic-warm))]",
  },
  {
    icon: Sun,
    name: { en: "Summer", pl: "Lato", is: "Sumar" },
    months: { en: "Jun – Aug", pl: "Cze – Sie", is: "Jún – Ágú" },
    highlights: {
      en: ["Midnight Sun", "Highland F-roads open", "Camping paradise", "Ring Road trips"],
      pl: ["Słońce o północy", "Otwarte drogi F", "Raj kempingowy", "Trasy Ring Road"],
      is: ["Miðnætursól", "F-vegir opnir", "Tjaldsvæði", "Hringvegurinn"],
    },
    temp: "10° – 18°C",
    colorClass: "from-[hsl(var(--volcanic-warm))] to-[hsl(160,70%,45%)]",
  },
  {
    icon: Leaf,
    name: { en: "Autumn", pl: "Jesień", is: "Haust" },
    months: { en: "Sep – Oct", pl: "Wrz – Paź", is: "Sep – Okt" },
    highlights: {
      en: ["Northern Lights begin", "Autumn colours", "Fewer crowds", "Best photo light"],
      pl: ["Początek zorzy polarnej", "Jesienne kolory", "Mniej tłumów", "Najlepsze światło do zdjęć"],
      is: ["Norðurljós byrja", "Haustlitir", "Færri fjöldi", "Besta ljós fyrir ljósmyndir"],
    },
    temp: "2° – 10°C",
    colorClass: "from-[hsl(var(--glacier-blue))] to-[hsl(var(--volcanic-warm))]",
  },
];

const heading = {
  label: { en: "When to visit", pl: "Kiedy przyjechać", is: "Hvenær á að heimsækja" },
  title: { en: "Iceland in every season", pl: "Islandia w każdej porze roku", is: "Ísland í hverju árstíð" },
  desc: {
    en: "There's no bad time to visit Iceland — each season offers unique experiences you won't find anywhere else.",
    pl: "Nie ma złego czasu na wizytę na Islandii — każda pora roku oferuje unikalne doświadczenia, których nie znajdziesz nigdzie indziej.",
    is: "Enginn slæmur tími til að heimsækja Ísland — hvert árstíð býður upp á einstaka upplifun.",
  },
};

const SeasonsSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">{t(heading.label, lang)}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">{t(heading.title, lang)}</h2>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground font-body text-center max-w-2xl mx-auto mb-14">
          {t(heading.desc, lang)}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${s.colorClass} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-1">{t(s.name, lang)}</h3>
                <p className="text-muted-foreground text-xs font-body mb-1">{t(s.months, lang)}</p>
                <p className="text-primary text-xs font-body font-semibold mb-4">{s.temp}</p>
                <ul className="space-y-2">
                  {s.highlights[lang].map((h) => (
                    <li key={h} className="text-sm text-secondary-foreground font-body flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SeasonsSection;
