import { useState } from "react";
import { motion } from "framer-motion";
import { Fuel, Cog, Snowflake, Check } from "lucide-react";
import carSuv from "@/assets/car-suv.jpg";
import carCompact from "@/assets/car-compact.jpg";
import carCamper from "@/assets/car-camper.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t } from "@/i18n/translations";
import BookingModal from "@/components/BookingModal";

const images = [carCompact, carSuv, carCamper];
const prices = ["6 900 ISK", "14 900 ISK", "19 900 ISK"];
const featuredIdx = 1;

const FleetSection = () => {
  const { lang } = useLanguage();
  const [bookingIdx, setBookingIdx] = useState<number | null>(null);

  return (
    <section id="fleet" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">{t(tr.fleet.label, lang)}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">{t(tr.fleet.heading, lang)}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tr.fleet.cars.map((car, i) => {
            const isFeatured = i === featuredIdx;
            const features = car.features[lang];
            const perks = car.perks[lang];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`rounded-xl overflow-hidden border transition-colors ${isFeatured ? "border-primary/50 bg-card shadow-lg shadow-primary/5" : "border-border/50 bg-card"}`}
              >
                {isFeatured && (
                  <div className="bg-gradient-aurora text-primary-foreground text-xs font-body font-bold text-center py-1.5 tracking-widest uppercase">
                    {t(tr.fleet.popular, lang)}
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <img src={images[i]} alt={t(car.name, lang)} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-heading text-xl font-bold">{t(car.name, lang)}</h3>
                    <div className="text-right">
                      <span className="text-primary font-body font-bold text-lg">{prices[i]}</span>
                      <span className="text-muted-foreground text-xs font-body block">{t(tr.fleet.perDay, lang)}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm font-body mb-4">{car.model}</p>

                  <div className="flex gap-3 mb-4">
                    {features.map((f) => (
                      <span key={f} className="flex items-center gap-1 text-xs text-muted-foreground font-body bg-secondary px-2 py-1 rounded-md">
                        <Cog className="w-3.5 h-3.5" />{f}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-5">
                    {perks.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-secondary-foreground font-body">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />{p}
                      </li>
                    ))}
                  </ul>

                  <button onClick={() => setBookingIdx(i)} className={`w-full py-3 rounded-lg font-body font-semibold text-sm transition-colors ${isFeatured ? "bg-gradient-aurora text-primary-foreground hover:opacity-90" : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"}`}>
                    {t(tr.fleet.rent, lang)}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {bookingIdx !== null && (
          <BookingModal
            open
            onClose={() => setBookingIdx(null)}
            type="car"
            itemIndex={bookingIdx}
            itemName={t(tr.fleet.cars[bookingIdx].name, lang)}
          />
        )}
      </div>
    </section>
  );
};

export default FleetSection;
