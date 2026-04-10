import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t } from "@/i18n/translations";
import { MapPin } from "lucide-react";

const MobileCta = () => {
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-border/50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] safe-bottom">
      <div className="px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-body text-muted-foreground truncate">
            {t({ en: "From 12 900 ISK/person", pl: "Od 12 900 ISK/os.", is: "Frá 12 900 ISK/mann." }, lang)}
          </p>
        </div>
        <a
          href="#tours"
          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary font-body font-semibold text-sm text-primary-foreground hover:opacity-90 transition-opacity min-h-[44px]"
        >
          <MapPin className="w-4 h-4" />
          {t(tr.nav.book, lang)}
        </a>
      </div>
    </div>
  );
};

export default MobileCta;
