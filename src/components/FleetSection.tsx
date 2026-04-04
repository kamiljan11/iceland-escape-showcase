import { motion } from "framer-motion";
import { Fuel, Cog, Snowflake, Check } from "lucide-react";
import carSuv from "@/assets/car-suv.jpg";
import carCompact from "@/assets/car-compact.jpg";
import carCamper from "@/assets/car-camper.jpg";

const cars = [
  {
    name: "Kompakt",
    model: "VW Golf / podobny",
    img: carCompact,
    price: "6 900 ISK",
    priceNote: "/ dzień",
    features: ["Automat", "Benzyna", "Ogrzewanie"],
    perks: ["Ubezpieczenie CDW", "Nawigacja GPS", "Darmowe km"],
  },
  {
    name: "SUV 4×4",
    model: "Land Cruiser / podobny",
    img: carSuv,
    price: "14 900 ISK",
    priceNote: "/ dzień",
    features: ["Automat", "Diesel", "Napęd 4×4"],
    perks: ["Pełne ubezp.", "Drogi F", "Rack dachowy"],
    featured: true,
  },
  {
    name: "Kamper",
    model: "Ford Transit / podobny",
    img: carCamper,
    price: "19 900 ISK",
    priceNote: "/ dzień",
    features: ["Automat", "Diesel", "Kuchnia"],
    perks: ["Sprzęt kempingowy", "Łóżko 2 os.", "Prysznic"],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Automat: <Cog className="w-3.5 h-3.5" />,
  Benzyna: <Fuel className="w-3.5 h-3.5" />,
  Diesel: <Fuel className="w-3.5 h-3.5" />,
  Ogrzewanie: <Snowflake className="w-3.5 h-3.5" />,
  "Napęd 4×4": <Cog className="w-3.5 h-3.5" />,
  Kuchnia: <Snowflake className="w-3.5 h-3.5" />,
};

const FleetSection = () => {
  return (
    <section id="fleet" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Wypożyczalnia</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Wybierz swój pojazd</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-xl overflow-hidden border transition-colors ${car.featured ? "border-primary/50 bg-card shadow-lg shadow-primary/5" : "border-border/50 bg-card"}`}
            >
              {car.featured && (
                <div className="bg-gradient-aurora text-primary-foreground text-xs font-body font-bold text-center py-1.5 tracking-widest uppercase">
                  Najpopularniejszy
                </div>
              )}
              <div className="h-48 overflow-hidden">
                <img src={car.img} alt={car.name} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-heading text-xl font-bold">{car.name}</h3>
                  <div className="text-right">
                    <span className="text-primary font-body font-bold text-lg">{car.price}</span>
                    <span className="text-muted-foreground text-xs font-body block">{car.priceNote}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm font-body mb-4">{car.model}</p>

                <div className="flex gap-3 mb-4">
                  {car.features.map((f) => (
                    <span key={f} className="flex items-center gap-1 text-xs text-muted-foreground font-body bg-secondary px-2 py-1 rounded-md">
                      {iconMap[f] || <Cog className="w-3.5 h-3.5" />}{f}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-5">
                  {car.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-secondary-foreground font-body">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-body font-semibold text-sm transition-colors ${car.featured ? "bg-gradient-aurora text-primary-foreground hover:opacity-90" : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"}`}>
                  Wypożycz
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
