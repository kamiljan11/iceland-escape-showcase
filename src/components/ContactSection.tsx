import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as tr, t } from "@/i18n/translations";
import DemoNotice from "@/components/DemoNotice";

const ContactSection = () => {
  const [showDemo, setShowDemo] = useState(false);
  const { lang } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDemo(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
          <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">{t(tr.contact.label, lang)}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">{t(tr.contact.heading, lang)}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5 md:space-y-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" /></div>
              <div>
                <h4 className="font-body font-semibold text-xs md:text-sm mb-1">{t(tr.contact.address, lang)}</h4>
                <p className="text-muted-foreground text-xs md:text-sm font-body">Laugavegur 42, 101 Reykjavík, Ísland</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" /></div>
              <div>
                <h4 className="font-body font-semibold text-xs md:text-sm mb-1">{t(tr.contact.phone, lang)}</h4>
                <p className="text-muted-foreground text-xs md:text-sm font-body">+354 555 1234</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" /></div>
              <div>
                <h4 className="font-body font-semibold text-xs md:text-sm mb-1">{t(tr.contact.email, lang)}</h4>
                <p className="text-muted-foreground text-xs md:text-sm font-body">info@nordantravel.is</p>
              </div>
            </div>
            <div className="mt-6 md:mt-8 rounded-xl overflow-hidden shadow-md h-36 md:h-48">
              <iframe title="Norðan Travel location" src="https://www.openstreetmap.org/export/embed.html?bbox=-21.9300,64.1400,-21.8900,64.1500&layer=mapnik" className="w-full h-full border-0" loading="lazy" />
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <input type="text" placeholder={t(tr.contact.firstName, lang)} required className="bg-white border border-border rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="text" placeholder={t(tr.contact.lastName, lang)} required className="bg-white border border-border rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <input type="email" placeholder="Email" required className="w-full bg-white border border-border rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <select className="w-full bg-white border border-border rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm font-body text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option>{t(tr.contact.selectOptions.tour, lang)}</option>
              <option>{t(tr.contact.selectOptions.private, lang)}</option>
              <option>{t(tr.contact.selectOptions.group, lang)}</option>
              <option>{t(tr.contact.selectOptions.other, lang)}</option>
            </select>
            <textarea placeholder={t(tr.contact.message, lang)} rows={3} required className="w-full bg-white border border-border rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            <button type="submit" className="w-full py-2.5 md:py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-xs md:text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Send className="w-3.5 md:w-4 h-3.5 md:h-4" />{t(tr.contact.send, lang)}
            </button>
          </motion.form>
        </div>
      </div>
      <DemoNotice open={showDemo} onClose={() => setShowDemo(false)} />
    </section>
  );
};

export default ContactSection;
