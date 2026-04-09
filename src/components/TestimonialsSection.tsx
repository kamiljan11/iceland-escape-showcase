import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, type Lang } from "@/i18n/translations";

interface Review {
  name: string;
  country: Record<Lang, string>;
  text: Record<Lang, string>;
  rating: number;
  tour: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: "Sarah & Tom",
    country: { en: "United Kingdom", pl: "Wielka Brytania", is: "Bretland" },
    text: {
      en: "Absolutely incredible experience! Our guide Jón knew every hidden waterfall and secret hot spring. The Golden Circle tour exceeded all expectations. Best holiday ever.",
      pl: "Absolutnie niesamowite doświadczenie! Nasz przewodnik Jón znał każdy ukryty wodospad i tajemnicze gorące źródło. Wycieczka po Złotym Kręgu przerosła nasze oczekiwania.",
      is: "Algjörlega ótrúleg upplifun! Leiðsögumaðurinn okkar Jón þekkti hvern falinn foss og leynilega heita lauginn. Gullna hringurinn fór langt fram úr væntingum.",
    },
    rating: 5,
    tour: "Golden Circle",
    avatar: "S",
  },
  {
    name: "Marcus Lindqvist",
    country: { en: "Sweden", pl: "Szwecja", is: "Svíþjóð" },
    text: {
      en: "Booked the South Coast tour and the Northern Lights expedition. Both were phenomenal. The guides are incredibly knowledgeable and passionate about Iceland's nature.",
      pl: "Zarezerwowaliśmy wycieczkę po Południowym Wybrzeżu i ekspedycję na zorzę polarną. Obie były fenomenalne. Przewodnicy są niesamowicie kompetentni.",
      is: "Bókaði Suðurströndina og norðurljósaferðina. Báðar voru stórkostlegar. Leiðsögumennirnir eru ótrúlega fróðir og brennandi áhugasamir.",
    },
    rating: 5,
    tour: "South Coast + Northern Lights",
    avatar: "M",
  },
  {
    name: "Yuki Tanaka",
    country: { en: "Japan", pl: "Japonia", is: "Japan" },
    text: {
      en: "The Northern Lights tour was magical. Our guide found the perfect spot away from the city. Ice cave expedition the next day was equally breathtaking. Thank you Norðan!",
      pl: "Wycieczka na zorzę polarną była magiczna. Przewodnik znalazł idealne miejsce z dala od miasta. Ekspedycja do jaskiń lodowych równie zapierająca dech.",
      is: "Norðurljósaferðin var töfrandi. Leiðsögumaðurinn okkar fann fullkominn stað fjarri borginni. Íshellaferðin daginn eftir var jafn stórkostleg.",
    },
    rating: 5,
    tour: "Northern Lights + Ice Cave",
    avatar: "Y",
  },
];

const heading = {
  label: { en: "Traveler reviews", pl: "Opinie podróżników", is: "Umsagnir ferðalanga" },
  title: { en: "What our guests say", pl: "Co mówią nasi goście", is: "Hvað gestir okkar segja" },
};

const TestimonialsSection = () => {
  const { lang } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.offsetWidth * 0.85;
    scrollRef.current.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
          <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">{t(heading.label, lang)}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">{t(heading.title, lang)}</h2>
        </motion.div>

        <div className="flex md:hidden justify-end gap-2 mb-4 px-1">
          <button onClick={() => scroll("left")} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground"><ChevronLeft className="w-4 h-4" /></button>
          <button onClick={() => scroll("right")} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground"><ChevronRight className="w-4 h-4" /></button>
        </div>

        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex-shrink-0 w-[82vw] md:w-auto snap-start bg-card border border-border/50 rounded-xl p-5 md:p-6 flex flex-col"
            >
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/30 mb-3 md:mb-4" />
              <p className="text-secondary-foreground text-xs md:text-sm font-body leading-relaxed flex-1 mb-4 md:mb-5">
                "{t(r.text, lang)}"
              </p>
              <div className="flex items-center gap-1 mb-3 md:mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 md:w-4 h-3.5 md:h-4 fill-volcanic text-volcanic" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-3 md:pt-4 border-t border-border/30">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-aurora flex items-center justify-center text-primary-foreground font-body font-bold text-xs md:text-sm">
                  {r.avatar}
                </div>
                <div>
                  <p className="font-body font-semibold text-xs md:text-sm">{r.name}</p>
                  <p className="text-muted-foreground text-[11px] md:text-xs font-body">{t(r.country, lang)} · {r.tour}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-muted-foreground text-xs md:text-sm font-body"
        >
          <span className="flex items-center gap-2">
            <span className="text-foreground font-bold text-base md:text-lg">4.9</span>
            <span className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3 md:w-3.5 h-3 md:h-3.5 fill-volcanic text-volcanic" />)}</span>
            Google
          </span>
          <span className="w-px h-4 bg-border" />
          <span className="flex items-center gap-2">
            <span className="text-foreground font-bold text-base md:text-lg">5.0</span>
            TripAdvisor
          </span>
          <span className="w-px h-4 bg-border" />
          <span>350+ {t({ en: "verified reviews", pl: "zweryfikowanych opinii", is: "staðfestar umsagnir" }, lang)}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
