import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t } from "@/i18n/translations";

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const { lang } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">{t(tr.contact.label, lang)}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">{t(tr.contact.heading, lang)}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
              <div>
                <h4 className="font-body font-semibold text-sm mb-1">{t(tr.contact.address, lang)}</h4>
                <p className="text-muted-foreground text-sm font-body">Laugavegur 42, 101 Reykjavík, Ísland</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5 text-primary" /></div>
              <div>
                <h4 className="font-body font-semibold text-sm mb-1">{t(tr.contact.phone, lang)}</h4>
                <p className="text-muted-foreground text-sm font-body">+354 555 1234</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-primary" /></div>
              <div>
                <h4 className="font-body font-semibold text-sm mb-1">{t(tr.contact.email, lang)}</h4>
                <p className="text-muted-foreground text-sm font-body">info@nordantravel.is</p>
              </div>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden border border-border/50 h-48">
              <iframe title="Norðan Travel location" src="https://www.openstreetmap.org/export/embed.html?bbox=-21.9300,64.1400,-21.8900,64.1500&layer=mapnik" className="w-full h-full border-0 opacity-70" loading="lazy" />
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder={t(tr.contact.firstName, lang)} required className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input type="text" placeholder={t(tr.contact.lastName, lang)} required className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <input type="email" placeholder="Email" required className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <select className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-body text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option>{t(tr.contact.selectOptions.tour, lang)}</option>
              <option>{t(tr.contact.selectOptions.private, lang)}</option>
              <option>{t(tr.contact.selectOptions.group, lang)}</option>
              <option>{t(tr.contact.selectOptions.other, lang)}</option>
            </select>
            <textarea placeholder={t(tr.contact.message, lang)} rows={4} required className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-aurora text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              {sent ? t(tr.contact.sent, lang) : <><Send className="w-4 h-4" />{t(tr.contact.send, lang)}</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
