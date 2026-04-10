import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const labels = {
  title: { en: "This is a Demo", pl: "To jest Demo", is: "Þetta er Kynningu" },
  desc: {
    en: "This website is a demo showcase. In a real version, this action would be fully functional — booking confirmation, email notifications, payment processing, and more.",
    pl: "Ta strona to demo. W pełnej wersji ta akcja byłaby w pełni funkcjonalna — potwierdzenie rezerwacji, powiadomienia email, płatności i więcej.",
    is: "Þessi vefsíða er kynning. Í raunverulegri útgáfu væri þessi aðgerð fullkomlega virk — bókunarstaðfesting, tölvupóststilkynningar, greiðsluvinnsla og fleira.",
  },
  cta: {
    en: "Want a website like this?",
    pl: "Chcesz taką stronę?",
    is: "Viltu vefsíðu eins og þessa?",
  },
  contact: { en: "Get in touch", pl: "Skontaktuj się", is: "Hafðu samband" },
  close: { en: "Got it", pl: "Rozumiem", is: "Allt í lagi" },
};

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DemoNotice({ open, onClose }: Props) {
  const { lang } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-heading flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            {t(labels.title, lang)}
          </DialogTitle>
          <DialogDescription className="font-body text-sm leading-relaxed">
            {t(labels.desc, lang)}
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-lg bg-secondary/50 border border-border/50 p-4 text-center space-y-2">
          <p className="font-body font-semibold text-sm text-foreground">{t(labels.cta, lang)}</p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 text-primary font-body text-sm font-medium hover:underline"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            {t(labels.contact, lang)}
          </a>
        </div>

        <Button onClick={onClose} variant="outline" className="w-full">
          {t(labels.close, lang)}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
