import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t, type Lang } from "@/i18n/translations";

const langLabels: Record<Lang, string> = { en: "EN", pl: "PL", is: "IS" };
const langs: Lang[] = ["en", "pl", "is"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const links = [
    { label: t(tr.nav.tours, lang), href: "#tours" },
    { label: t(tr.nav.fleet, lang), href: "#fleet" },
    { label: t({ en: "Routes", pl: "Trasy", is: "Leiðir" }, lang), href: "#routes" },
    { label: t(tr.nav.about, lang), href: "#about" },
    { label: t(tr.nav.contact, lang), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-2xl font-bold text-gradient-aurora">
          Norðan
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
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
                  className="absolute right-0 top-8 bg-card border border-border rounded-lg shadow-lg overflow-hidden min-w-[80px]"
                >
                  {langs.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm font-body transition-colors ${l === lang ? "text-primary bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}
                    >
                      {langLabels[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#contact" className="px-5 py-2 rounded-lg bg-gradient-aurora text-sm font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            {t(tr.nav.book, lang)}
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2 border-t border-border/30">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setOpen(false); }}
                    className={`px-3 py-1 rounded text-xs font-body font-semibold transition-colors ${l === lang ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
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
