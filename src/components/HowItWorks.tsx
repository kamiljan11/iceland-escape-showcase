import { motion } from "framer-motion";
import { Search, CalendarCheck, Mountain } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, type Lang } from "@/i18n/translations";

interface Step {
  icon: typeof Search;
  num: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
}

const steps: Step[] = [
  {
    icon: Search,
    num: "01",
    title: { en: "Choose your adventure", pl: "Wybierz swoją przygodę", is: "Veldu ævintýrið þitt" },
    desc: {
      en: "Browse our curated tours — Golden Circle, Ice Caves, Northern Lights, South Coast and more. Filter by season, activity type, or duration.",
      pl: "Przeglądaj nasze wycieczki — Złoty Krąg, Jaskinie Lodowe, Zorza Polarna i więcej. Filtruj po sezonie, aktywności lub czasie.",
      is: "Skoðaðu ferðirnar okkar — Gullni hringurinn, Íshellar, Norðurljós og fleira. Síaðu eftir árstíð, tegund eða lengd.",
    },
  },
  {
    icon: CalendarCheck,
    num: "02",
    title: { en: "Book instantly", pl: "Zarezerwuj natychmiast", is: "Bókaðu samstundis" },
    desc: {
      en: "Secure your spot with free cancellation up to 48 hours. No deposit needed. Small group sizes guaranteed.",
      pl: "Zarezerwuj miejsce z darmowym anulowaniem do 48h. Bez depozytu. Gwarantowane małe grupy.",
      is: "Tryggðu þér sæti með ókeypis afpöntun allt að 48 klst. Enginn innborgun. Litlir hópar tryggðir.",
    },
  },
  {
    icon: Mountain,
    num: "03",
    title: { en: "Explore Iceland", pl: "Odkrywaj Islandię", is: "Uppgötvaðu Ísland" },
    desc: {
      en: "Meet your local guide at the pickup point. They'll share hidden gems, local stories, and ensure an unforgettable experience.",
      pl: "Spotkaj swojego lokalnego przewodnika. Podzieli się ukrytymi perełkami, lokalnymi historiami i zapewni niezapomniane wrażenia.",
      is: "Hittu leiðsögumanninn þinn á afhendingarstaðnum. Hann deilir faldum perlum og tryggir ógleymanlega upplifun.",
    },
  },
];

const heading = {
  label: { en: "How it works", pl: "Jak to działa", is: "Hvernig virkar þetta" },
  title: { en: "Three steps to your Icelandic adventure", pl: "Trzy kroki do islandzkiej przygody", is: "Þrjú skref að íslensku ævintýri" },
};

const HowItWorks = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
          <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">{t(heading.label, lang)}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">{t(heading.title, lang)}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center group"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t border-dashed border-border/40" />
                )}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[hsl(var(--aurora-green))] to-[hsl(var(--glacier-blue))] flex items-center justify-center mx-auto mb-4 md:mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <span className="text-primary/40 text-[10px] md:text-xs font-body font-bold tracking-widest">{s.num}</span>
                <h3 className="font-heading text-lg md:text-xl font-bold mt-1 mb-2 md:mb-3">{t(s.title, lang)}</h3>
                <p className="text-muted-foreground text-xs md:text-sm font-body leading-relaxed">{t(s.desc, lang)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
