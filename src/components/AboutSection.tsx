import { motion } from "framer-motion";
import { Shield, Heart, MapPin, Headphones } from "lucide-react";

const stats = [
  { icon: MapPin, label: "Wycieczek rocznie", value: "1 200+" },
  { icon: Heart, label: "Zadowolonych klientów", value: "8 500+" },
  { icon: Shield, label: "Lat doświadczenia", value: "12" },
  { icon: Headphones, label: "Wsparcie", value: "24/7" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">O nas</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Twój lokalny partner na Islandii
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Norðan Travel to rodzinna firma z Reykjavíku. Od ponad 12 lat pomagamy podróżnikom z całego świata odkrywać najpiękniejsze zakątki Islandii — od lodowców po gorące źródła.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Nasza flota to niezawodne pojazdy gotowe na każdą pogodę i drogę. Oferujemy też spersonalizowane wycieczki z doświadczonymi, lokalnymi przewodnikami, którzy znają wyspę jak własną kieszeń.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-glass rounded-xl p-6 text-center"
              >
                <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="font-heading text-3xl font-bold text-gradient-aurora mb-1">{s.value}</div>
                <div className="text-muted-foreground text-xs font-body">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
