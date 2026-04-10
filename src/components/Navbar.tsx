import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t, type Lang } from "@/i18n/translations";

const langLabels: Record<Lang, string> = { en: "EN", pl: "PL", is: "IS" };
const langs: Lang[] = ["en", "pl", "is"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t({ en: "Our story", pl: "Nasza historia", is: "Sagan okkar" }, lang), href: "#story" },
    { label: t(tr.nav.tours, lang), href: "#tours" },
    { label: t({ en: "FAQ", pl: "FAQ", is: "Spurningar" }, lang), href: "#faq" },
    { label: t(tr.nav.contact, lang), href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm transition-all duration-200 ${scrolled ? "h-14" : "h-16"}`}>
      <div className={`container mx-auto px-4 sm:px-6 flex items-center justify-between ${scrolled ? "h-14" : "h-16"} transition-all duration-200`}>
        <a href="#" className={`font-heading font-bold text-primary transition-all duration-200 ${scrolled ? "text-xl" : "text-2xl"}`}>
          Norðan
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] justify-center"
            >
              <Globe className="w-4 h-4" />
              {langLabels[lang]}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute right-0 top-12 bg-card border border-border rounded-lg shadow-lg overflow-hidden min-w-[80px]"
                >
                  {langs.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-3 text-sm font-body transition-colors min-h-[44px] ${l === lang ? "text-primary bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}
                    >
                      {langLabels[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#tours" className="px-5 py-2 rounded-lg bg-primary text-sm font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity min-h-[44px] flex items-center">
            {t(tr.nav.book, lang)}
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors py-3 min-h-[44px] flex items-center">
                  {l.label}
                </a>
              ))}
              <a href="#tours" onClick={() => setOpen(false)} className="mt-2 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm text-center min-h-[44px] flex items-center justify-center">
                {t(tr.nav.book, lang)}
              </a>
              <div className="flex gap-2 pt-3 mt-2 border-t border-border/30">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setOpen(false); }}
                    className={`px-4 py-2 rounded text-sm font-body font-semibold transition-colors min-h-[44px] ${l === lang ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
