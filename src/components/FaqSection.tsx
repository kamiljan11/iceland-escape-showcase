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
    q: {
      en: "What tours do you offer?",
      pl: "Jakie wycieczki oferujecie?",
      is: "Hvaða ferðir bjóðið þið?",
    },
    a: {
      en: "We offer guided tours across Iceland's most iconic landscapes — Golden Circle, Ice Caves, Northern Lights, South Coast, Snæfellsnes and more. We also create custom private itineraries for families, couples and groups.",
      pl: "Oferujemy wycieczki z przewodnikiem po najsłynniejszych krajobrazach Islandii — Złoty Krąg, Jaskinie Lodowe, Zorza Polarna, Południowe Wybrzeże, Snæfellsnes i więcej. Tworzymy też prywatne trasy na zamówienie dla rodzin, par i grup.",
      is: "Við bjóðum ferðir með leiðsögumanni um þekktustu landslag Íslands — Gullni hringurinn, Íshellar, Norðurljós, Suðurströnd, Snæfellsnes og fleira. Við búum einnig til sérsniðnar einkaferðir.",
    },
  },
  {
    q: {
      en: "When is the best time to see the Northern Lights?",
      pl: "Kiedy jest najlepszy czas na zorzę polarną?",
      is: "Hvenær er bestur tími til að sjá norðurljós?",
    },
    a: {
      en: "The Northern Lights season runs from September to March. Peak viewing is typically October to February when nights are darkest. Our Northern Lights tours include real-time aurora forecasting — if conditions aren't right, we reschedule for free.",
      pl: "Sezon na zorzę polarną trwa od września do marca. Najlepszy okres to zazwyczaj od października do lutego, kiedy noce są najdłuższe. Nasze wycieczki obejmują monitoring prognozy zorzy w czasie rzeczywistym — jeśli warunki nie sprzyjają, przesuwamy termin za darmo.",
      is: "Norðurljósatímabilið er frá september til mars. Bestur tími er oft október til febrúar þegar næturnar eru myrkvastar. Norðurljósaferðir okkar nota rauntíma spá — ef aðstæður eru ekki réttar, endurbókum við ókeypis.",
    },
  },
  {
    q: {
      en: "Do you offer custom or private tours?",
      pl: "Czy oferujecie wycieczki na zamówienie lub prywatne?",
      is: "Bjóðið þið sérsniðnar eða einkaferðir?",
    },
    a: {
      en: "Absolutely! We create tailor-made itineraries for families, couples, photographers and groups. Tell us your interests, duration and budget via the contact form and we'll craft a personalised Icelandic adventure. Private tours include your own guide and vehicle.",
      pl: "Oczywiście! Tworzymy trasy na zamówienie dla rodzin, par, fotografów i grup. Powiedz nam o swoich zainteresowaniach, czasie i budżecie w formularzu kontaktowym, a stworzymy spersonalizowaną przygodę. Prywatne wycieczki obejmują własnego przewodnika i pojazd.",
      is: "Algjörlega! Við búum til sérsniðnar ferðaáætlanir fyrir fjölskyldur, pör, ljósmyndara og hópa. Segðu okkur frá áhugamálum þínum, tíma og fjárhagsáætlun og við smíðum persónulega íslensku ævintýrið. Einkaferðir innihalda eigin leiðsögumann og ökutæki.",
    },
  },
  {
    q: {
      en: "What should I pack for an Iceland trip?",
      pl: "Co spakować na wyjazd do Islandii?",
      is: "Hvað á ég að pakka niður fyrir Íslandsferð?",
    },
    a: {
      en: "Layers are key! Bring waterproof outer layers, warm fleece, thermal underwear, sturdy hiking boots, and a swimsuit for hot springs. Weather changes quickly in Iceland — you can experience all four seasons in one day. We provide a free packing checklist with every booking.",
      pl: "Warstwy to klucz! Weź wodoodporną kurtkę, ciepły polar, bieliznę termoaktywną, solidne buty trekkingowe i strój kąpielowy na gorące źródła. Pogoda na Islandii zmienia się błyskawicznie — cztery pory roku w jednym dniu. Z każdą rezerwacją wysyłamy bezpłatną listę do spakowania.",
      is: "Lagaklæðnaður er lykillinn! Taktu vatnsheld yfirhöfn, hlýjan flís, hitanærbuxur, sterka gönguskó og sundföt fyrir heitar laugar. Veður breytast hratt á Íslandi. Við sendum ókeypis pakklista með hverri bókun.",
    },
  },
  {
    q: {
      en: "What is your cancellation policy?",
      pl: "Jaka jest polityka anulowania?",
      is: "Hver er afpöntunarstefnan ykkar?",
    },
    a: {
      en: "Free cancellation up to 48 hours before the tour. No deposit needed to book. If weather conditions make a tour unsafe, we reschedule at no extra cost or offer a full refund.",
      pl: "Darmowe anulowanie do 48 godzin przed wycieczką. Bez depozytu przy rezerwacji. Jeśli warunki pogodowe uniemożliwiają wycieczkę, przesuwamy termin bez dodatkowych kosztów lub zwracamy pełną kwotę.",
      is: "Ókeypis afpöntun allt að 48 klst. fyrir ferð. Enginn innborgun þarf. Ef veður gerir ferð óörugga, endurbókum við án aukakostnaðar eða bjóðum fulla endurgreiðslu.",
    },
  },
  {
    q: {
      en: "Where do tours depart from?",
      pl: "Skąd wyruszają wycieczki?",
      is: "Hvaðan fara ferðirnar?",
    },
    a: {
      en: "Most tours depart from our Reykjavík office at Laugavegur 42. We also offer pickup from Keflavík Airport (KEF) and major hotels in the Reykjavík area. Pickup details are confirmed after booking.",
      pl: "Większość wycieczek wyrusza z naszego biura w Reykjavíku przy Laugavegur 42. Oferujemy też odbiór z lotniska Keflavík (KEF) i głównych hoteli w rejonie Reykjavíku. Szczegóły odbioru potwierdzamy po rezerwacji.",
      is: "Flestar ferðir fara frá skrifstofu okkar í Reykjavík, Laugavegi 42. Við bjóðum einnig upp á að sækja á Keflavíkurflugvelli (KEF) og helstu hótelum á höfuðborgarsvæðinu. Upplýsingar um afhendingu eru staðfestar eftir bókun.",
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
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">{t(heading.label, lang)}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">{t(heading.title, lang)}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border/50 rounded-xl px-6 overflow-hidden">
                <AccordionTrigger className="font-body font-semibold text-sm text-left py-5 hover:no-underline hover:text-primary transition-colors">
                  {t(faq.q, lang)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-body leading-relaxed pb-5">
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
