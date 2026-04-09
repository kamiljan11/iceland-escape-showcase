import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
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
      en: "Absolutely incredible experience! Our guide Jón knew every hidden waterfall and secret hot spring. The SUV handled the F-roads like a charm. Best holiday ever.",
      pl: "Absolutnie niesamowite doświadczenie! Nasz przewodnik Jón znał każdy ukryty wodospad i tajemnicze gorące źródło. SUV radził sobie na drogach F znakomicie. Najlepsze wakacje w życiu.",
      is: "Algjörlega ótrúleg upplifun! Leiðsögumaðurinn okkar Jón þekkti hvern falinn foss og leynilega heita lauginn. Jeppinn tók F-vegina snurðulaust. Besta frí sem við höfum farið í.",
    },
    rating: 5,
    tour: "Golden Circle + F-road Adventure",
    avatar: "S",
  },
  {
    name: "Marcus Lindqvist",
    country: { en: "Sweden", pl: "Szwecja", is: "Svíþjóð" },
    text: {
      en: "Rented a camper for 10 days and drove the Ring Road. Everything was perfect — the vehicle, the camping gear, the route suggestions. Norðan made our Iceland dream real.",
      pl: "Wynajęliśmy kampera na 10 dni i objechaliśmy Ring Road. Wszystko było idealne — pojazd, sprzęt kempingowy, sugestie trasy. Norðan spełnił nasze islandzkie marzenie.",
      is: "Leigðum húsbíl í 10 daga og keyrðum hringveginn. Allt var fullkomið — ökutækið, tjaldabúnaðurinn, leiðartillögurnar. Norðan gerði íslandsdrauminn okkar að veruleika.",
    },
    rating: 5,
    tour: "Camper Ring Road",
    avatar: "M",
  },
  {
    name: "Yuki Tanaka",
    country: { en: "Japan", pl: "Japonia", is: "Japan" },
    text: {
      en: "The Northern Lights tour was magical. Our guide found the perfect spot away from the city. Ice cave expedition the next day was equally breathtaking. Thank you Norðan!",
      pl: "Wycieczka na zorzę polarną była magiczna. Przewodnik znalazł idealne miejsce z dala od miasta. Ekspedycja do jaskiń lodowych następnego dnia równie zapierająca dech. Dziękuję Norðan!",
      is: "Norðurljósaferðin var töfrandi. Leiðsögumaðurinn okkar fann fullkominn stað fjarri borginni. Íshellaferðin daginn eftir var jafn stórkostleg. Takk Norðan!",
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

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">{t(heading.label, lang)}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">{t(heading.title, lang)}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-card border border-border/50 rounded-xl p-6 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-secondary-foreground text-sm font-body leading-relaxed flex-1 mb-5">
                "{t(r.text, lang)}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-volcanic text-volcanic" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-10 h-10 rounded-full bg-gradient-aurora flex items-center justify-center text-primary-foreground font-body font-bold text-sm">
                  {r.avatar}
                </div>
                <div>
                  <p className="font-body font-semibold text-sm">{r.name}</p>
                  <p className="text-muted-foreground text-xs font-body">{t(r.country, lang)} · {r.tour}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm font-body"
        >
          <span className="flex items-center gap-2">
            <span className="text-foreground font-bold text-lg">4.9</span>
            <span className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-volcanic text-volcanic" />)}</span>
            Google Reviews
          </span>
          <span className="hidden sm:block w-px h-5 bg-border" />
          <span className="flex items-center gap-2">
            <span className="text-foreground font-bold text-lg">5.0</span>
            TripAdvisor
          </span>
          <span className="hidden sm:block w-px h-5 bg-border" />
          <span>350+ {t({ en: "verified reviews", pl: "zweryfikowanych opinii", is: "staðfestar umsagnir" }, lang)}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
