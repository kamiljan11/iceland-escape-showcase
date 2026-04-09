import { motion } from "framer-motion";
import { Shield, MapPin, Award, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, type Lang } from "@/i18n/translations";

interface Badge {
  icon: typeof Shield;
  label: Record<Lang, string>;
  sub: Record<Lang, string>;
}

const badges: Badge[] = [
  {
    icon: Shield,
    label: { en: "Icelandic Tourist Board", pl: "Islandzka Izba Turystyki", is: "Ferðamálastofa" },
    sub: { en: "Licensed operator", pl: "Licencjonowany operator", is: "Leyfi til reksturs" },
  },
  {
    icon: Award,
    label: { en: "TripAdvisor", pl: "TripAdvisor", is: "TripAdvisor" },
    sub: { en: "Travellers' Choice 2025", pl: "Travellers' Choice 2025", is: "Travellers' Choice 2025" },
  },
  {
    icon: MapPin,
    label: { en: "KEF Airport Pickup", pl: "Odbiór KEF Lotnisko", is: "Sótt á KEF" },
    sub: { en: "Free shuttle included", pl: "Darmowy shuttle", is: "Ókeypis rúta" },
  },
  {
    icon: Clock,
    label: { en: "Free Cancellation", pl: "Darmowe anulowanie", is: "Ókeypis afpöntun" },
    sub: { en: "Up to 48h before", pl: "Do 48h przed", is: "Allt að 48 klst. áður" },
  },
];

const TrustBar = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-8 md:py-12 border-y border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex md:grid md:grid-cols-4 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0"
        >
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex-shrink-0 snap-start flex items-center gap-3 min-w-[200px] md:min-w-0"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-semibold text-[11px] md:text-xs">{t(b.label, lang)}</p>
                  <p className="text-muted-foreground text-[10px] md:text-[11px] font-body">{t(b.sub, lang)}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
