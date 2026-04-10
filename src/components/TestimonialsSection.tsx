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
      en: "Our guide Jón took us to a geothermal pool that wasn't on any map. We sat in hot water surrounded by snow while he told us about the volcano underneath. No big tour company would ever take you there.",
      pl: "Nasz przewodnik Jón zabrał nas do geotermalnego basenu, którego nie było na żadnej mapie. Siedzieliśmy w gorącej wodzie otoczeni śniegiem, gdy opowiadał o wulkanie pod nami. Żadna duża firma turystyczna nigdy by was tam nie zabrała.",
      is: "Leiðsögumaðurinn okkar Jón fór með okkur í jarðhitalaug sem var ekki á neinu korti. Við sátum í heitu vatni umkringd snjó á meðan hann sagði okkur frá eldfjallinu undir. Ekkert stórt ferðaskrifstofa myndi nokkurn tíma fara þangað.",
    },
    rating: 5,
    tour: "Golden Circle",
    avatar: "S",
  },
  {
    name: "Marcus Lindqvist",
    country: { en: "Sweden", pl: "Szwecja", is: "Svíþjóð" },
    text: {
      en: "We were only 6 people in the group. Felt like a private tour. Our guide was a marine biologist who moved to Iceland 20 years ago — his stories about the coast were better than any documentary.",
      pl: "W grupie było nas tylko 6 osób. Czuło się jak prywatna wycieczka. Nasz przewodnik był biologiem morskim, który przeprowadził się na Islandię 20 lat temu — jego historie o wybrzeżu były lepsze niż jakikolwiek dokument.",
      is: "Við vorum aðeins 6 í hópnum. Leið eins og einkaferð. Leiðsögumaðurinn okkar var sjávarlíffræðingur sem flutti til Íslands fyrir 20 árum — sögur hans um ströndina voru betri en nokkur heimildarmynd.",
    },
    rating: 5,
    tour: "South Coast",
    avatar: "M",
  },
  {
    name: "Yuki Tanaka",
    country: { en: "Japan", pl: "Japonia", is: "Japan" },
    text: {
      en: "The Northern Lights didn't show up the first night. Instead of giving up, our guide drove us to a canyon she knew — pitch dark, no one else around. When the lights finally appeared, we were the only people watching. I cried.",
      pl: "Zorza polarna nie pojawiła się pierwszej nocy. Zamiast się poddać, nasza przewodniczka zawiozła nas do kanionu — kompletna ciemność, nikogo w pobliżu. Gdy światła w końcu się pojawiły, byliśmy jedynymi obserwatorami. Płakałam.",
      is: "Norðurljósin komu ekki fyrstu nóttina. Í stað þess að gefast upp ók leiðsögukonan okkar með okkur í gljúfur — kolsvart, enginn annar í kring. Þegar ljósin loks birtust vorum við einu sem horfðu. Ég grét.",
    },
    rating: 5,
    tour: "Northern Lights",
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
