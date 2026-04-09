import { useRef } from "react";
import { motion } from "framer-motion";
import { Sun, Snowflake, Leaf, Flower2, ChevronLeft, ChevronRight } from "lucide-react";
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
    pl: "Nie ma złego czasu na wizytę na Islandii — każda pora roku oferuje unikalne doświadczenia.",
    is: "Enginn slæmur tími til að heimsækja Ísland — hvert árstíð býður upp á einstaka upplifun.",
  },
};

const SeasonsSection = () => {
  const { lang } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4 md:mb-6">
          <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">{t(heading.label, lang)}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">{t(heading.title, lang)}</h2>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground font-body text-sm md:text-base text-center max-w-2xl mx-auto mb-10 md:mb-14">
          {t(heading.desc, lang)}
        </motion.p>

        <div className="flex lg:hidden justify-end gap-2 mb-4 px-1">
          <button onClick={() => scroll("left")} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground"><ChevronLeft className="w-4 h-4" /></button>
          <button onClick={() => scroll("right")} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground"><ChevronRight className="w-4 h-4" /></button>
        </div>

        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0"
        >
          {seasons.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-[70vw] sm:w-[45vw] lg:w-auto snap-start bg-card border border-border/50 rounded-xl p-5 md:p-6 hover:border-primary/30 transition-colors group"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${s.colorClass} flex items-center justify-center mb-3 md:mb-4`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold mb-1">{t(s.name, lang)}</h3>
                <p className="text-muted-foreground text-[11px] md:text-xs font-body mb-1">{t(s.months, lang)}</p>
                <p className="text-primary text-[11px] md:text-xs font-body font-semibold mb-3 md:mb-4">{s.temp}</p>
                <ul className="space-y-1.5 md:space-y-2">
                  {s.highlights[lang].map((h) => (
                    <li key={h} className="text-xs md:text-sm text-secondary-foreground font-body flex items-center gap-2">
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
