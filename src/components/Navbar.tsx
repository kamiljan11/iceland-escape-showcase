import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Wycieczki", href: "#tours" },
  { label: "Flota", href: "#fleet" },
  { label: "O nas", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          <a href="#contact" className="px-5 py-2 rounded-lg bg-gradient-aurora text-sm font-body font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            Zarezerwuj
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
