import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import goldenCircle from "@/assets/tour-golden-circle.jpg";
import iceCave from "@/assets/tour-ice-cave.jpg";
import northernLights from "@/assets/tour-northern-lights.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t } from "@/i18n/translations";
import BookingModal from "@/components/BookingModal";
import TourDetailModal from "@/components/TourDetailModal";

const viewDetailsLabel = { en: "View details", pl: "Zobacz szczegóły", is: "Sjá nánar" };

const images = [goldenCircle, iceCave, northernLights];
const ratings = ["4.9", "5.0", "4.9"];
const prices = ["16 900 ISK", "24 900 ISK", "12 900 ISK"];

const ToursSection = () => {
  const { lang } = useLanguage();
  const [bookingIdx, setBookingIdx] = useState<number | null>(null);
  const [detailIdx, setDetailIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.offsetWidth * 0.85;
    scrollRef.current.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <section id="tours" className="py-16 md:py-24 bg-gradient-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
          <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">{t(tr.tours.label, lang)}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">{t(tr.tours.heading, lang)}</h2>
        </motion.div>

        <div className="flex md:hidden justify-end gap-2 mb-4 px-1">
          <button onClick={() => scroll("left")} className="w-8 h-8 rounded-full bg-white shadow-sm border border-border flex items-center justify-center text-muted-foreground"><ChevronLeft className="w-4 h-4" /></button>
          <button onClick={() => scroll("right")} className="w-8 h-8 rounded-full bg-white shadow-sm border border-border flex items-center justify-center text-muted-foreground"><ChevronRight className="w-4 h-4" /></button>
        </div>

        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {tr.tours.items.map((tour, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex-shrink-0 w-[80vw] md:w-auto snap-start group rounded-xl overflow-hidden bg-card shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden h-44 md:h-56">
                <img src={images[i]} alt={t(tour.title, lang)} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm text-primary font-body font-bold text-xs md:text-sm px-2.5 py-1 rounded-full">
                  {prices[i]}
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-heading text-lg md:text-xl font-bold mb-1.5 md:mb-2">{t(tour.title, lang)}</h3>
                <p className="text-muted-foreground text-xs md:text-sm font-body mb-3 md:mb-4 line-clamp-2">{t(tour.desc, lang)}</p>
                <button onClick={() => setDetailIdx(i)} className="text-primary text-xs md:text-sm font-body font-semibold mb-3 md:mb-4 flex items-center gap-1 hover:underline">
                  {t(viewDetailsLabel, lang)} <ArrowRight className="w-3 h-3" />
                </button>
                <div className="flex items-center gap-3 md:gap-4 text-[11px] md:text-xs text-muted-foreground font-body">
                  <span className="flex items-center gap-1"><Clock className="w-3 md:w-3.5 h-3 md:h-3.5" />{t(tour.duration, lang)}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 md:w-3.5 h-3 md:h-3.5" />{t(tour.group, lang)}</span>
                  <span className="flex items-center gap-1 text-volcanic"><Star className="w-3 md:w-3.5 h-3 md:h-3.5 fill-volcanic" />{ratings[i]}</span>
                </div>
                <button onClick={() => setBookingIdx(i)} className="mt-4 md:mt-5 w-full py-2.5 md:py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-xs md:text-sm hover:opacity-90 transition-opacity">
                  {t(tr.tours.book, lang)}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {bookingIdx !== null && (
          <BookingModal
            open
            onClose={() => setBookingIdx(null)}
            itemIndex={bookingIdx}
            itemName={t(tr.tours.items[bookingIdx].title, lang)}
          />
        )}

        {detailIdx !== null && (
          <TourDetailModal
            open
            onClose={() => setDetailIdx(null)}
            tourIndex={detailIdx}
            tourImage={images[detailIdx]}
            price={prices[detailIdx]}
            rating={ratings[detailIdx]}
            onBook={() => { setDetailIdx(null); setBookingIdx(detailIdx); }}
          />
        )}
      </div>
    </section>
  );
};

export default ToursSection;
