const Footer = () => (
  <footer className="border-t border-border/30 py-10 bg-card/30">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="font-heading text-xl font-bold text-gradient-aurora">Norðan Travel</a>
      <p className="text-muted-foreground text-xs font-body">© 2026 Norðan Travel ehf. Wszelkie prawa zastrzeżone.</p>
      <div className="flex gap-6 text-sm text-muted-foreground font-body">
        <a href="#" className="hover:text-foreground transition-colors">Regulamin</a>
        <a href="#" className="hover:text-foreground transition-colors">Prywatność</a>
        <a href="#" className="hover:text-foreground transition-colors">FAQ</a>
      </div>
    </div>
  </footer>
);

export default Footer;
