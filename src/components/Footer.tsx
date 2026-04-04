import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-border/30 py-10 bg-card/30">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-heading text-xl font-bold text-gradient-aurora">Norðan Travel</a>
        <p className="text-muted-foreground text-xs font-body">© 2026 Norðan Travel ehf. {t(tr.footer.rights, lang)}</p>
        <div className="flex gap-6 text-sm text-muted-foreground font-body">
          <a href="#" className="hover:text-foreground transition-colors">{t(tr.footer.terms, lang)}</a>
          <a href="#" className="hover:text-foreground transition-colors">{t(tr.footer.privacy, lang)}</a>
          <a href="#" className="hover:text-foreground transition-colors">{t(tr.footer.faq, lang)}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
