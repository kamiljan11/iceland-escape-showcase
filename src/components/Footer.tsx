import { useLanguage } from "@/i18n/LanguageContext";
import { MountainDivider } from "@/components/SvgAccents";
import { translations as tr, t, type Lang } from "@/i18n/translations";
import { Phone, Mail, MapPin, Shield, Clock } from "lucide-react";

const footerSections = {
  company: { en: "Company", pl: "Firma", is: "Fyrirtæki" },
  services: { en: "Tours", pl: "Wycieczki", is: "Ferðir" },
  contact: { en: "Contact", pl: "Kontakt", is: "Hafa samband" },
  safety: { en: "Iceland Travel Safety", pl: "Bezpieczeństwo w Islandii", is: "Ferðaöryggi á Íslandi" },
  safetyDesc: {
    en: "Always check road.is for conditions before driving. Dial 112 for emergencies. Register your travel at safetravel.is. Never drive off-road — it damages fragile Icelandic nature.",
    pl: "Zawsze sprawdź road.is przed jazdą. Numer alarmowy: 112. Zarejestruj podróż na safetravel.is.",
    is: "Athugaðu alltaf road.is áður en þú keyrir. Hringdu í 112 í neyðartilvikum.",
  },
  registration: {
    en: "Norðan Travel ehf. · Reg. 5801234-0980 · Licensed by the Icelandic Tourist Board · VAT: IS123456",
    pl: "Norðan Travel ehf. · Nr rej. 5801234-0980 · Licencja Islandzkiej Izby Turystyki · VAT: IS123456",
    is: "Norðan Travel ehf. · Kt. 5801234-0980 · Leyfi Ferðamálastofu · VSK: IS123456",
  },
};

const companyLinks = [
  { label: { en: "Our story", pl: "Nasza historia", is: "Sagan okkar" }, href: "#story" },
  { label: { en: "Our team", pl: "Nasz zespół", is: "Liðið okkar" }, href: "#story" },
  { label: { en: "FAQ", pl: "FAQ", is: "Algengar spurningar" }, href: "#faq" },
];

const serviceLinks = [
  { label: { en: "Golden Circle", pl: "Złoty Krąg", is: "Gullni hringurinn" }, href: "#tours" },
  { label: { en: "Ice Caves", pl: "Jaskinie lodowe", is: "Íshellar" }, href: "#tours" },
  { label: { en: "Northern Lights", pl: "Zorza polarna", is: "Norðurljós" }, href: "#tours" },
  { label: { en: "Private tours", pl: "Wycieczki prywatne", is: "Einkaferðir" }, href: "#contact" },
];

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-border bg-white">
      <MountainDivider className="text-primary" />
      {/* Safety banner */}
      <div className="border-b border-border/50 py-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-start gap-3">
          <Shield className="w-5 h-5 text-volcanic flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-body font-semibold text-foreground mb-1">{t(footerSections.safety, lang)}</p>
            <p className="text-xs font-body text-muted-foreground leading-relaxed">{t(footerSections.safetyDesc, lang)}</p>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-body font-semibold text-sm mb-4">{t(footerSections.company, lang)}</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l, i) => (
                <li key={i}><a href={l.href} className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors">{t(l.label, lang)}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm mb-4">{t(footerSections.services, lang)}</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l, i) => (
                <li key={i}><a href={l.href} className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors">{t(l.label, lang)}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm mb-4">{t(footerSections.contact, lang)}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                <Phone className="w-3.5 h-3.5 text-primary" /> +354 555 1234
              </li>
              <li className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                <Mail className="w-3.5 h-3.5 text-primary" /> hello@nordan.is
              </li>
              <li className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary mt-0.5" /> Laugavegur 42, 101 Reykjavík
              </li>
              <li className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                <Clock className="w-3.5 h-3.5 text-primary" /> 08:00 – 20:00 (GMT)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50 py-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <a href="#" className="font-heading text-xl font-bold text-primary">Norðan Travel</a>
          <p className="text-muted-foreground/60 text-[10px] font-body text-center md:text-left">
            {t(footerSections.registration, lang)}
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground font-body">
            <a href="#" className="hover:text-foreground transition-colors">{t(tr.footer.terms, lang)}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t(tr.footer.privacy, lang)}</a>
            <a href="https://road.is" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">road.is</a>
            <a href="https://safetravel.is" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">safetravel.is</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
