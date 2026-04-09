import { motion } from "framer-motion";
import { Sun, Cloud, CloudSnow, Wind, Eye } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, type Lang } from "@/i18n/translations";
import { useEffect, useState } from "react";

const auroraTexts = {
  on: { en: "Northern Lights forecast is", pl: "Prognoza zorzy polarnej:", is: "Norðurljósaspá:" },
  status_on: { en: "ACTIVE tonight", pl: "AKTYWNA dziś wieczorem", is: "VIRK í kvöld" },
  status_off: { en: "Low tonight", pl: "Niska dziś", is: "Lítil í kvöld" },
  road: { en: "Road conditions:", pl: "Stan dróg:", is: "Vegaástand:" },
  road_ok: { en: "All main roads open", pl: "Wszystkie główne drogi otwarte", is: "Allir aðalvegir opnir" },
  road_warn: { en: "Some highland roads closed", pl: "Niektóre drogi górskie zamknięte", is: "Sumir hálendavegir lokaðir" },
  temp: { en: "Reykjavík", pl: "Reykjavík", is: "Reykjavík" },
  kp: { en: "Kp index", pl: "Indeks Kp", is: "Kp vísitala" },
  sunset: { en: "Sunset", pl: "Zachód słońca", is: "Sólsetur" },
};

const AuroraBar = () => {
  const { lang } = useLanguage();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  // Simulate seasonal data
  const month = now.getMonth();
  const isWinter = month >= 9 || month <= 2;
  const isSummer = month >= 5 && month <= 7;
  const kp = isWinter ? 4 : isSummer ? 1 : 3;
  const auroraActive = kp >= 3;
  const temp = isWinter ? -2 : isSummer ? 14 : 6;
  const sunset = isWinter ? "15:30" : isSummer ? "00:00" : "19:45";
  const WeatherIcon = isWinter ? CloudSnow : isSummer ? Sun : Cloud;

  return (
    <div className="bg-card/80 border-b border-border/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs font-body">
        {/* Aurora status */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <span className={`w-2 h-2 rounded-full ${auroraActive ? "bg-[hsl(var(--aurora-green))] animate-pulse" : "bg-muted-foreground/40"}`} />
          <span className="text-muted-foreground">{t(auroraTexts.on, lang)}</span>
          <span className={`font-bold ${auroraActive ? "text-[hsl(var(--aurora-green))]" : "text-muted-foreground"}`}>
            {t(auroraActive ? auroraTexts.status_on : auroraTexts.status_off, lang)}
          </span>
        </motion.span>

        <span className="hidden sm:block w-px h-4 bg-border/50" />

        {/* Kp index */}
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Eye className="w-3.5 h-3.5" />
          {t(auroraTexts.kp, lang)}: <span className="text-foreground font-semibold">{kp}/9</span>
        </span>

        <span className="hidden sm:block w-px h-4 bg-border/50" />

        {/* Weather */}
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <WeatherIcon className="w-3.5 h-3.5" />
          {t(auroraTexts.temp, lang)} <span className="text-foreground font-semibold">{temp}°C</span>
        </span>

        <span className="hidden md:block w-px h-4 bg-border/50" />

        {/* Road conditions */}
        <span className="hidden md:flex items-center gap-1.5 text-muted-foreground">
          <Wind className="w-3.5 h-3.5" />
          {t(auroraTexts.road, lang)}{" "}
          <span className={`font-semibold ${isWinter ? "text-[hsl(var(--volcanic-warm))]" : "text-[hsl(var(--aurora-green))]"}`}>
            {t(isWinter ? auroraTexts.road_warn : auroraTexts.road_ok, lang)}
          </span>
        </span>

        <span className="hidden lg:block w-px h-4 bg-border/50" />

        {/* Sunset */}
        <span className="hidden lg:flex items-center gap-1.5 text-muted-foreground">
          <Sun className="w-3.5 h-3.5" />
          {t(auroraTexts.sunset, lang)}: <span className="text-foreground font-semibold">{isSummer ? "∞ Midnight Sun" : sunset}</span>
        </span>
      </div>
    </div>
  );
};

export default AuroraBar;
