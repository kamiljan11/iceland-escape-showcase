import { motion } from "framer-motion";
import { Route, Clock, MapPin, Mountain } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, type Lang } from "@/i18n/translations";

interface RouteItem {
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
  distance: string;
  duration: Record<Lang, string>;
  stops: Record<Lang, string[]>;
  difficulty: Record<Lang, string>;
  colorClass: string;
}

const routes: RouteItem[] = [
  {
    name: { en: "Golden Circle", pl: "Złoty Krąg", is: "Gullni hringurinn" },
    desc: {
      en: "Iceland's most famous route — Þingvellir, Geysir & Gullfoss in one day. Perfect for first-timers.",
      pl: "Najsłynniejsza trasa Islandii — Þingvellir, Geysir i Gullfoss w jeden dzień.",
      is: "Frægasta leiðin — Þingvellir, Geysir og Gullfoss á einum degi.",
    },
    distance: "230 km",
    duration: { en: "6–8 hours", pl: "6–8 godzin", is: "6–8 klst." },
    stops: {
      en: ["Þingvellir", "Geysir", "Gullfoss", "Kerið Crater"],
      pl: ["Þingvellir", "Geysir", "Gullfoss", "Krater Kerið"],
      is: ["Þingvellir", "Geysir", "Gullfoss", "Kerið"],
    },
    difficulty: { en: "Easy – any car", pl: "Łatwa – dowolny samochód", is: "Auðveld – allir bílar" },
    colorClass: "from-[hsl(var(--aurora-green))] to-[hsl(var(--glacier-blue))]",
  },
  {
    name: { en: "South Coast", pl: "Południowe Wybrzeże", is: "Suðurströnd" },
    desc: {
      en: "Black sand beaches, mighty waterfalls & glacier lagoons. The most photogenic drive in Iceland.",
      pl: "Czarne plaże, potężne wodospady i laguna lodowcowa. Najbardziej fotogeniczna trasa.",
      is: "Svartir sandstrandir, stórkostlegir fossar og jökullón.",
    },
    distance: "360 km",
    duration: { en: "2 days", pl: "2 dni", is: "2 dagar" },
    stops: {
      en: ["Seljalandsfoss", "Skógafoss", "Reynisfjara", "Jökulsárlón"],
      pl: ["Seljalandsfoss", "Skógafoss", "Reynisfjara", "Jökulsárlón"],
      is: ["Seljalandsfoss", "Skógafoss", "Reynisfjara", "Jökulsárlón"],
    },
    difficulty: { en: "Easy – any car", pl: "Łatwa – dowolny samochód", is: "Auðveld – allir bílar" },
    colorClass: "from-[hsl(var(--glacier-blue))] to-[hsl(var(--volcanic-warm))]",
  },
  {
    name: { en: "Ring Road", pl: "Ring Road", is: "Hringvegurinn" },
    desc: {
      en: "The ultimate Iceland road trip — 1,322 km circling the entire island.",
      pl: "Najlepsza trasa dookoła Islandii — 1322 km wokół całej wyspy.",
      is: "Fullkomna Íslandsferðin — 1.322 km í kringum landið.",
    },
    distance: "1,322 km",
    duration: { en: "7–10 days", pl: "7–10 dni", is: "7–10 dagar" },
    stops: {
      en: ["Reykjavík", "Akureyri", "Mývatn", "Eastfjords"],
      pl: ["Reykjavík", "Akureyri", "Mývatn", "Fiordy Wschodnie"],
      is: ["Reykjavík", "Akureyri", "Mývatn", "Austfirðir"],
    },
    difficulty: { en: "Moderate – SUV recommended", pl: "Umiarkowana – zalecany SUV", is: "Miðlungs – SUV ráðlagður" },
    colorClass: "from-[hsl(var(--volcanic-warm))] to-[hsl(var(--aurora-green))]",
  },
  {
    name: { en: "Snæfellsnes", pl: "Snæfellsnes", is: "Snæfellsnes" },
    desc: {
      en: "\"Iceland in miniature\" — volcanoes, lava fields, fishing villages & Snæfellsjökull.",
      pl: "\"Islandia w miniaturze\" — wulkany, pola lawy, wioski rybackie i Snæfellsjökull.",
      is: "\"Ísland í smáu\" — eldfjöll, hraunbreiður, sjávarbæir og Snæfellsjökull.",
    },
    distance: "170 km",
    duration: { en: "1–2 days", pl: "1–2 dni", is: "1–2 dagar" },
    stops: {
      en: ["Kirkjufell", "Arnarstapi", "Djúpalónssandur", "Snæfellsjökull"],
      pl: ["Kirkjufell", "Arnarstapi", "Djúpalónssandur", "Snæfellsjökull"],
      is: ["Kirkjufell", "Arnarstapi", "Djúpalónssandur", "Snæfellsjökull"],
    },
    difficulty: { en: "Easy – any car", pl: "Łatwa – dowolny samochód", is: "Auðveld – allir bílar" },
    colorClass: "from-[hsl(var(--aurora-green))] to-[hsl(160,70%,30%)]",
  },
];

const heading = {
  label: { en: "Driving routes", pl: "Trasy samochodowe", is: "Akstursleiðir" },
  title: { en: "Explore Iceland's iconic routes", pl: "Odkryj kultowe trasy Islandii", is: "Uppgötvaðu helstu leiðir Íslands" },
  desc: {
    en: "Plan your road trip with our route guides. Each includes distance, recommended vehicle type, and must-see stops.",
    pl: "Zaplanuj swoją podróż z naszymi przewodnikami tras.",
    is: "Skipuleggðu vegferðina þína. Hver leið inniheldur vegalengd, ráðlagðan bíl og áfangastaði.",
  },
};

const PopularRoutes = () => {
  const { lang } = useLanguage();

  return (
    <section id="routes" className="py-16 md:py-24 bg-gradient-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4 md:mb-6">
          <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">{t(heading.label, lang)}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">{t(heading.title, lang)}</h2>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground font-body text-sm md:text-base text-center max-w-2xl mx-auto mb-10 md:mb-14">
          {t(heading.desc, lang)}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {routes.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border/50 rounded-xl p-4 md:p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${r.colorClass} flex items-center justify-center flex-shrink-0`}>
                  <Route className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold">{t(r.name, lang)}</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3 mt-1 text-[10px] md:text-xs text-muted-foreground font-body">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{r.distance}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{t(r.duration, lang)}</span>
                    <span className="flex items-center gap-1"><Mountain className="w-3 h-3" />{t(r.difficulty, lang)}</span>
                  </div>
                </div>
              </div>
              <p className="text-secondary-foreground text-xs md:text-sm font-body leading-relaxed mb-3 md:mb-4">{t(r.desc, lang)}</p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {r.stops[lang].map((stop) => (
                  <span key={stop} className="text-[10px] md:text-xs px-2 md:px-2.5 py-0.5 md:py-1 rounded-full bg-secondary text-secondary-foreground font-body">{stop}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
