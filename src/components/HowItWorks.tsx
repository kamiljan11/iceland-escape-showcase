import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, type Lang } from "@/i18n/translations";
import vanImg from "@/assets/moment-van.jpg";
import hotspringImg from "@/assets/moment-hotspring.jpg";
import guideFreyjaImg from "@/assets/guide-freyja.jpg";

interface Step {
  img: string;
  imgAlt: string;
  num: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
}

const steps: Step[] = [
  {
    img: guideFreyjaImg,
    imgAlt: "Freyja, our geologist guide, inside an ice cave",
    num: "01",
    title: { en: "Tell us what excites you", pl: "Powiedz nam, co Cię ekscytuje", is: "Segðu okkur hvað vekur áhuga þinn" },
    desc: {
      en: "Glaciers? Volcanos? Northern Lights? We'll match you with the right guide — someone who's genuinely obsessed with the thing you want to see.",
      pl: "Lodowce? Wulkany? Zorza polarna? Doberemy Ci odpowiedniego przewodnika — kogoś, kto naprawdę pasjonuje się tym, co chcesz zobaczyć.",
      is: "Jökla? Eldfjöll? Norðurljós? Við pörum þig við rétta leiðsögumanninn — einhvern sem er virkilega heltekinn af því sem þú vilt sjá.",
    },
  },
  {
    img: vanImg,
    imgAlt: "Laughing together in the van between stops",
    num: "02",
    title: { en: "Jump in the van", pl: "Wskocz do vana", is: "Hoppaðu í bílinn" },
    desc: {
      en: "Small groups only. You'll ride with 6 people max, not 40. The best conversations happen between stops — and our guides know when to shut up and let Iceland speak.",
      pl: "Tylko małe grupy. Jedziesz z max 6 osobami, nie 40. Najlepsze rozmowy toczą się między przystankami — a nasi przewodnicy wiedzą, kiedy zamilknąć i pozwolić mówić Islandii.",
      is: "Bara litlir hópar. Þú ferðast með 6 manns hámark, ekki 40. Bestu samtölin gerast á milli stoppa — og leiðsögumennirnir okkar vita hvenær á að þegja og láta Ísland tala.",
    },
  },
  {
    img: hotspringImg,
    imgAlt: "Group discovering a hidden hot spring",
    num: "03",
    title: { en: "Find the hidden spots", pl: "Znajdź ukryte miejsca", is: "Finndu falda staðina" },
    desc: {
      en: "Hot springs with no name. Canyons with no signs. Beaches where you're the only footprints. Our guides grew up here — they know where the real Iceland hides.",
      pl: "Gorące źródła bez nazwy. Kaniony bez znaków. Plaże, na których jesteś jedynym śladem. Nasi przewodnicy dorastali tutaj — wiedzą, gdzie kryje się prawdziwa Islandia.",
      is: "Heitar laugar án nafns. Gljúfur án merkja. Strendur þar sem þú ert einu fótasporin. Leiðsögumenn okkar ólust hér upp — þeir vita hvar raunverulega Ísland leynist.",
    },
  },
];

const heading = {
  label: { en: "How it works", pl: "Jak to działa", is: "Hvernig virkar þetta" },
  title: { en: "Not a tour. An experience with real people.", pl: "Nie wycieczka. Doświadczenie z prawdziwymi ludźmi.", is: "Ekki ferð. Upplifun með raunverulegu fólki." },
};

const HowItWorks = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
          <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">{t(heading.label, lang)}</p>
          <h2 className="font-heading text-2xl md:text-5xl font-bold max-w-3xl mx-auto">{t(heading.title, lang)}</h2>
        </motion.div>

        <div className="space-y-12 md:space-y-20 max-w-5xl mx-auto">
          {steps.map((s, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${isReversed ? "md:direction-rtl" : ""}`}
              >
                <div className={`${isReversed ? "md:order-2" : ""}`}>
                  <div className="rounded-xl overflow-hidden aspect-[4/3]">
                    <img src={s.img} alt={s.imgAlt} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className={`${isReversed ? "md:order-1" : ""}`}>
                  <span className="text-primary/40 text-xs font-body font-bold tracking-widest">{s.num}</span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold mt-1 mb-3">{t(s.title, lang)}</h3>
                  <p className="text-muted-foreground text-sm md:text-base font-body leading-relaxed">{t(s.desc, lang)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
