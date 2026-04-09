import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, type Lang } from "@/i18n/translations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  q: Record<Lang, string>;
  a: Record<Lang, string>;
}

const faqs: FaqItem[] = [
  {
    q: { en: "What tours do you offer?", pl: "Jakie wycieczki oferujecie?", is: "Hvaða ferðir bjóðið þið?" },
    a: {
      en: "We offer guided tours across Iceland's most iconic landscapes — Golden Circle, Ice Caves, Northern Lights, South Coast, Snæfellsnes and more. We also create custom private itineraries.",
      pl: "Oferujemy wycieczki z przewodnikiem po najsłynniejszych krajobrazach Islandii — Złoty Krąg, Jaskinie Lodowe, Zorza Polarna i więcej. Tworzymy też prywatne trasy na zamówienie.",
      is: "Við bjóðum ferðir með leiðsögumanni um þekktustu landslag Íslands — Gullni hringurinn, Íshellar, Norðurljós og fleira.",
    },
  },
  {
    q: { en: "When is the best time to see the Northern Lights?", pl: "Kiedy jest najlepszy czas na zorzę polarną?", is: "Hvenær er bestur tími til að sjá norðurljós?" },
    a: {
      en: "The Northern Lights season runs from September to March. Peak viewing is October to February. Our tours include real-time aurora forecasting — if conditions aren't right, we reschedule for free.",
      pl: "Sezon na zorzę trwa od września do marca. Najlepszy okres to październik-luty. Nasze wycieczki obejmują monitoring w czasie rzeczywistym — jeśli warunki nie sprzyjają, przesuwamy termin za darmo.",
      is: "Norðurljósatímabilið er frá september til mars. Bestur tími er oft október til febrúar. Ef aðstæður eru ekki réttar, endurbókum við ókeypis.",
    },
  },
  {
    q: { en: "Do you offer custom or private tours?", pl: "Czy oferujecie wycieczki na zamówienie?", is: "Bjóðið þið sérsniðnar eða einkaferðir?" },
    a: {
      en: "Absolutely! We create tailor-made itineraries for families, couples, photographers and groups. Private tours include your own guide and vehicle.",
      pl: "Oczywiście! Tworzymy trasy na zamówienie dla rodzin, par, fotografów i grup. Prywatne wycieczki obejmują własnego przewodnika i pojazd.",
      is: "Algjörlega! Við búum til sérsniðnar ferðaáætlanir. Einkaferðir innihalda eigin leiðsögumann og ökutæki.",
    },
  },
  {
    q: { en: "What should I pack for an Iceland trip?", pl: "Co spakować na wyjazd do Islandii?", is: "Hvað á ég að pakka niður?" },
    a: {
      en: "Layers are key! Bring waterproof outer layers, warm fleece, thermal underwear, sturdy hiking boots, and a swimsuit for hot springs. We provide a free packing checklist with every booking.",
      pl: "Warstwy to klucz! Weź wodoodporną kurtkę, ciepły polar, bieliznę termoaktywną, solidne buty i strój kąpielowy. Z każdą rezerwacją wysyłamy bezpłatną listę do spakowania.",
      is: "Lagaklæðnaður er lykillinn! Taktu vatnsheld yfirhöfn, hlýjan flís, hitanærbuxur, sterka gönguskó og sundföt. Við sendum ókeypis pakklista með hverri bókun.",
    },
  },
  {
    q: { en: "What is your cancellation policy?", pl: "Jaka jest polityka anulowania?", is: "Hver er afpöntunarstefnan ykkar?" },
    a: {
      en: "Free cancellation up to 48 hours before the tour. No deposit needed. If weather makes a tour unsafe, we reschedule or offer a full refund.",
      pl: "Darmowe anulowanie do 48h przed wycieczką. Bez depozytu. Jeśli pogoda uniemożliwia wycieczkę, przesuwamy termin lub zwracamy kwotę.",
      is: "Ókeypis afpöntun allt að 48 klst. fyrir ferð. Enginn innborgun. Ef veður gerir ferð óörugga, endurbókum við eða bjóðum endurgreiðslu.",
    },
  },
  {
    q: { en: "Where do tours depart from?", pl: "Skąd wyruszają wycieczki?", is: "Hvaðan fara ferðirnar?" },
    a: {
      en: "Most tours depart from Reykjavík at Laugavegur 42. We also offer pickup from Keflavík Airport (KEF) and major hotels in the Reykjavík area.",
      pl: "Większość wycieczek wyrusza z Reykjavíku przy Laugavegur 42. Oferujemy też odbiór z lotniska KEF i głównych hoteli.",
      is: "Flestar ferðir fara frá Laugavegi 42. Við bjóðum einnig upp á að sækja á Keflavíkurflugvelli og helstu hótelum.",
    },
  },
];

const heading = {
  label: { en: "FAQ", pl: "FAQ", is: "Algengar spurningar" },
  title: { en: "Common questions", pl: "Częste pytania", is: "Algengar spurningar" },
};

const FaqSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
          <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">{t(heading.label, lang)}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">{t(heading.title, lang)}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border/50 rounded-xl px-4 md:px-6 overflow-hidden">
                <AccordionTrigger className="font-body font-semibold text-xs md:text-sm text-left py-4 md:py-5 hover:no-underline hover:text-primary transition-colors">
                  {t(faq.q, lang)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs md:text-sm font-body leading-relaxed pb-4 md:pb-5">
                  {t(faq.a, lang)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
