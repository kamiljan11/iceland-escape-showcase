import { motion } from "framer-motion";
import { Clock, Users, Star } from "lucide-react";
import goldenCircle from "@/assets/tour-golden-circle.jpg";
import iceCave from "@/assets/tour-ice-cave.jpg";
import northernLights from "@/assets/tour-northern-lights.jpg";

const tours = [
  {
    title: "Złoty Krąg",
    desc: "Gejzery, wodospady Gullfoss i Park Narodowy Þingvellir w jednym dniu.",
    img: goldenCircle,
    duration: "8 godzin",
    group: "Max 12 osób",
    rating: "4.9",
    price: "12 900 ISK",
  },
  {
    title: "Jaskinie Lodowe",
    desc: "Eksploracja krystalicznych jaskiń lodowcowych Vatnajökull z przewodnikiem.",
    img: iceCave,
    duration: "5 godzin",
    group: "Max 8 osób",
    rating: "5.0",
    price: "19 900 ISK",
  },
  {
    title: "Zorza Polarna",
    desc: "Nocna wyprawa w poszukiwaniu zorzy polarnej — najlepsze lokalizacje z dala od miasta.",
    img: northernLights,
    duration: "4 godziny",
    group: "Max 15 osób",
    rating: "4.8",
    price: "9 900 ISK",
  },
];

const ToursSection = () => {
  return (
    <section id="tours" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Popularne wycieczki</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Odkryj magię Islandii</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="relative overflow-hidden h-56">
                <img src={tour.img} alt={tour.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-primary font-body font-bold text-sm px-3 py-1 rounded-full">
                  {tour.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">{tour.title}</h3>
                <p className="text-muted-foreground text-sm font-body mb-4">{tour.desc}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{tour.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{tour.group}</span>
                  <span className="flex items-center gap-1 text-volcanic"><Star className="w-3.5 h-3.5 fill-volcanic" />{tour.rating}</span>
                </div>
                <button className="mt-5 w-full py-3 rounded-lg bg-secondary text-secondary-foreground font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  Zarezerwuj teraz
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
