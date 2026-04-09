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
      en: "Do I need a 4×4 for driving in Iceland?",
      pl: "Czy potrzebuję samochodu 4×4 do jazdy po Islandii?",
      is: "Þarf ég fjórhjóladrif til að keyra á Íslandi?",
    },
    a: {
      en: "For the Ring Road and main attractions, a regular car is fine in summer. However, F-roads (highland roads) are only accessible with a 4×4 vehicle and are closed in winter. We recommend our SUV 4×4 if you plan to explore beyond paved roads.",
      pl: "Na Ring Road i główne atrakcje zwykłe auto wystarczy latem. Drogi F (górzysty interior) wymagają jednak samochodu 4×4 i są zamknięte zimą. Polecamy nasz SUV 4×4, jeśli planujesz zjechać z utwardzonych dróg.",
      is: "Fyrir hringveginn og helstu áfangastaði dugir venjulegur bíll á sumrin. Hins vegar eru F-vegir (hálendis-vegir) aðeins aðgengilegir með fjórhjóladrifnum bíl og lokaðir á veturna. Við mælum með SUV 4×4 ef þú ætlar að skoða land utan malarvega.",
    },
  },
  {
    q: {
      en: "What insurance is included with the rental?",
      pl: "Jakie ubezpieczenie jest zawarte w cenie wynajmu?",
      is: "Hvaða trygging er innifalin í leigunni?",
    },
    a: {
      en: "All vehicles include CDW (Collision Damage Waiver) and theft protection. Our SUV package includes full coverage (SCDW) plus gravel, ash and sand damage protection — essential for Iceland's unpredictable conditions. Additional windshield and tire coverage is available.",
      pl: "Wszystkie pojazdy mają CDW (ubezpieczenie od kolizji) i ochronę przed kradzieżą. Pakiet SUV zawiera pełne ubezpieczenie (SCDW) plus ochronę przed żwirem, popiołem i piaskiem — niezbędne w islandzkich warunkach. Dostępne jest dodatkowe ubezpieczenie szyb i opon.",
      is: "Allir bílar eru með CDW (árekstrartryggingu) og þjófnaðartryggingu. SUV pakkinn okkar inniheldur fulla tryggingu (SCDW) ásamt möl-, ösku- og sandtryggingu — nauðsynlegt á Íslandi. Viðbótartrygging rúða og hjólbarða er í boði.",
    },
  },
  {
    q: {
      en: "Can I pick up the car at Keflavík Airport?",
      pl: "Czy mogę odebrać samochód na lotnisku Keflavík?",
      is: "Get ég sótt bílinn á Keflavíkurflugvelli?",
    },
    a: {
      en: "Yes! We offer free airport pickup and drop-off at Keflavík International Airport (KEF). Our shuttle meets you at the terminal and takes you to our nearby lot. We also have a downtown Reykjavík pickup point at Laugavegur 42.",
      pl: "Tak! Oferujemy bezpłatny odbiór i zwrot na lotnisku Keflavík (KEF). Nasz shuttle czeka na terminalu i zabiera Cię na parking. Mamy też punkt odbioru w centrum Reykjavíku przy Laugavegur 42.",
      is: "Já! Við bjóðum ókeypis afhendingu og skil á Keflavíkurflugvelli (KEF). Rútan okkar bíður þín á flugstöðinni. Við erum einnig með afhendingarstað í miðbæ Reykjavíkur, Laugavegi 42.",
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
