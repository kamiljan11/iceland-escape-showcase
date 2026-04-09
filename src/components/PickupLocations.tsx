import { useRef } from "react";
import { motion } from "framer-motion";
import { Plane, Building2, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, type Lang } from "@/i18n/translations";

interface Location {
  icon: typeof Plane;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
  stat: Record<Lang, string>;
  address: string;
}

const locations: Location[] = [
  {
    icon: Plane,
    name: { en: "Keflavík Airport (KEF)", pl: "Lotnisko Keflavík (KEF)", is: "Keflavíkurflugvöllur (KEF)" },
    desc: {
      en: "Free shuttle from the terminal to our lot. Open for all flights — even red-eyes. Key-box available for late arrivals.",
      pl: "Darmowy shuttle z terminala na parking. Czynne na wszystkie loty — nawet nocne. Skrzynka na klucze dla późnych przylotów.",
      is: "Ókeypis rúta frá flugstöðinni. Opin fyrir allar flugar. Lyklabox fyrir seinkomendur.",
    },
    stat: { en: "91% of customers pick up here", pl: "91% klientów odbiera tu samochód", is: "91% viðskiptavina sækja hér" },
    address: "Keflavíkurflugvöllur, 235 Keflavík",
  },
  {
    icon: Building2,
    name: { en: "Reykjavík Downtown", pl: "Centrum Reykjavíku", is: "Miðbær Reykjavíkur" },
    desc: {
      en: "Laugavegur 42 — on the main street. Perfect if you're staying in the city first. Hotel pickup/drop-off on request.",
      pl: "Laugavegur 42 — na głównej ulicy. Idealne jeśli najpierw nocujesz w mieście. Odbiór z hotelu na życzenie.",
      is: "Laugavegi 42 — á aðalgötunni. Fullkomið ef þú gistir í borginni fyrst. Hótelafhending samkvæmt beiðni.",
    },
    stat: { en: "Free hotel delivery available", pl: "Bezpłatna dostawa do hotelu", is: "Ókeypis hótelafhending" },
    address: "Laugavegur 42, 101 Reykjavík",
  },
  {
    icon: MapPin,
    name: { en: "Akureyri (North Iceland)", pl: "Akureyri (Północna Islandia)", is: "Akureyri (Norðurland)" },
    desc: {
      en: "Capital of North Iceland. Start your Diamond Circle or Mývatn adventure from here. Airport pickup included.",
      pl: "Stolica Północnej Islandii. Rozpocznij Diamond Circle lub przygodę z Mývatn. Odbiór z lotniska w cenie.",
      is: "Höfuðborg Norðurlands. Byrjaðu á Demantshringnum eða Mývatnsferð héðan. Flugvallarafhending innifalin.",
    },
    stat: { en: "Diamond Circle starting point", pl: "Punkt startowy Diamond Circle", is: "Upphafspunktur Demantshringinn" },
    address: "Akureyri Airport, 600 Akureyri",
  },
];

const heading = {
  label: { en: "Pickup locations", pl: "Punkty odbioru", is: "Afhendingarstaðir" },
  title: { en: "Pick up anywhere in Iceland", pl: "Odbierz gdziekolwiek na Islandii", is: "Sæktu hvar sem er á Íslandi" },
};

const PickupLocations = () => {
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
          <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">{t(heading.label, lang)}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">{t(heading.title, lang)}</h2>
        </motion.div>

        <div className="flex md:hidden justify-end gap-2 mb-4 px-1">
          <button onClick={() => scroll("left")} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground"><ChevronLeft className="w-4 h-4" /></button>
          <button onClick={() => scroll("right")} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground"><ChevronRight className="w-4 h-4" /></button>
        </div>

        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {locations.map((loc, i) => {
            const Icon = loc.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex-shrink-0 w-[80vw] md:w-auto snap-start bg-card border border-border/50 rounded-xl p-5 md:p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-aurora flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-base md:text-lg font-bold mb-1.5 md:mb-2">{t(loc.name, lang)}</h3>
                <p className="text-muted-foreground text-xs md:text-sm font-body leading-relaxed mb-3 md:mb-4">{t(loc.desc, lang)}</p>
                <div className="flex items-center gap-2 text-[11px] md:text-xs font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--aurora-green))]" />
                  <span className="text-primary font-semibold">{t(loc.stat, lang)}</span>
                </div>
                <p className="text-muted-foreground/60 text-[10px] md:text-[11px] font-body mt-2">{loc.address}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PickupLocations;
