import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Clock, Users, Star, MapPin, CheckCircle2, Camera } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, type Lang } from "@/i18n/translations";
import { translations as tr } from "@/i18n/translations";

interface TourDetail {
  highlights: Record<Lang, string[]>;
  includes: Record<Lang, string[]>;
  itinerary: { time: string; label: Record<Lang, string> }[];
  fullDesc: Record<Lang, string>;
  guideName: string;
  guideNote: Record<Lang, string>;
}

const tourDetails: TourDetail[] = [
  {
    fullDesc: {
      en: "Same iconic stops — but we add 3 secret ones the buses skip. A hidden hot spring where you'll soak with no one around, a lava tube only our guides know the entrance to, and lunch at a family farm where the farmer makes his own skyr. This isn't a checklist tour — it's a day that changes how you see Iceland.",
      pl: "Te same kultowe miejsca — ale dodajemy 3 tajne, które autobusy omijają. Ukryte gorące źródło, gdzie będziesz się kąpać w zupełnej samotności, tunel lawowy, do którego wejście znają tylko nasi przewodnicy, i lunch na rodzinnej farmie, gdzie farmer robi własny skyr. To nie wycieczka z listy — to dzień, który zmieni Twoje spojrzenie na Islandię.",
      is: "Sömu helstu staðir — en við bætum við 3 leynilegum sem rúturnar sleppa. Falin heit laug þar sem þú baðar þig í einrúmi, hraunhellir sem aðeins leiðsögumenn okkar þekkja innganginn að, og hádegismatur á fjölskyldubúi þar sem bóndinn gerir sinn eigin skyr.",
    },
    highlights: {
      en: ["Hidden hot spring (no crowds)", "Secret lava tube exploration", "Farm lunch with homemade skyr", "Þingvellir tectonic plates walk"],
      pl: ["Ukryte gorące źródło (bez tłumów)", "Eksploracja tajnego tunelu lawowego", "Lunch na farmie z domowym skyrem", "Spacer po płytach tektonicznych Þingvellir"],
      is: ["Falin heit laug (engir ferðamenn)", "Leynilegur hraunhellir", "Hádegismatur á bæ með heimagerðum skyri", "Ganga á flekaplötum í Þingvöllum"],
    },
    includes: {
      en: ["Pickup from Reykjavík", "Small group (max 6)", "Farm lunch included", "Hot spring towels & snacks", "Professional photos shared after"],
      pl: ["Odbiór z Reykjavíku", "Mała grupa (max 6)", "Lunch na farmie w cenie", "Ręczniki i przekąski przy źródle", "Profesjonalne zdjęcia po wycieczce"],
      is: ["Sótt í Reykjavík", "Lítill hópur (hámark 6)", "Hádegismatur á bæ innifalinn", "Handklæði og snarl við laug", "Fagljósmyndir deilt eftir ferð"],
    },
    itinerary: [
      { time: "08:00", label: { en: "Pickup in Reykjavík", pl: "Odbiór z Reykjavíku", is: "Sótt í Reykjavík" } },
      { time: "09:30", label: { en: "Þingvellir — tectonic walk & hidden viewpoint", pl: "Þingvellir — spacer tektoniczny i ukryty punkt widokowy", is: "Þingvellir — flekaganga og falinn útsýnisstaður" } },
      { time: "11:30", label: { en: "Secret lava tube exploration", pl: "Eksploracja tajnego tunelu lawowego", is: "Leynilegur hraunhellir" } },
      { time: "13:00", label: { en: "Farm lunch (homemade skyr & lamb stew)", pl: "Lunch na farmie (domowy skyr i gulasz z jagnięciny)", is: "Hádegismatur á bæ (skyr og lambakjöt)" } },
      { time: "14:30", label: { en: "Geysir geothermal area", pl: "Obszar geotermalny Geysir", is: "Geysir jarðhitasvæði" } },
      { time: "16:00", label: { en: "Gullfoss waterfall", pl: "Wodospad Gullfoss", is: "Gullfoss" } },
      { time: "17:00", label: { en: "Hidden hot spring soak", pl: "Kąpiel w ukrytym gorącym źródle", is: "Bað í falinna lauginni" } },
      { time: "18:30", label: { en: "Return to Reykjavík", pl: "Powrót do Reykjavíku", is: "Aftur til Reykjavíkur" } },
    ],
    guideName: "Eiríkur or Jón",
    guideNote: {
      en: "Led by Eiríkur (founder) or Jón (former fisherman). Both know every hidden spot on this route from decades of exploring.",
      pl: "Prowadzona przez Eiríkura (założyciela) lub Jóna (byłego rybaka). Obaj znają każdy ukryty zakątek tej trasy z dekad eksploracji.",
      is: "Leidd af Eiríkuri (stofnanda) eða Jóni (fyrrverandi sjómanni). Báðir þekkja hvern falinn stað á þessari leið.",
    },
  },
  {
    fullDesc: {
      en: "Freyja, our geologist with a master's in volcanology, leads you into ice caves that most companies can't access. She'll explain why the ice glows blue while you're standing inside a 300-year-old glacier. This tour is limited to 4 people because the caves are narrow and the experience is intimate — you'll hear the glacier creak and shift around you.",
      pl: "Freyja, nasza geolog z magisterium z wulkanologii, prowadzi Cię do jaskiń lodowych niedostępnych dla większości firm. Wyjaśni, dlaczego lód świeci na niebiesko — stojąc wewnątrz 300-letniego lodowca. Wycieczka ograniczona do 4 osób, bo jaskinie są wąskie, a doświadczenie intymne — usłyszysz jak lodowiec skrzypi i przesuwa się wokół Ciebie.",
      is: "Freyja, jarðfræðingurinn okkar með meistaragráðu í eldfjallafræði, leiðir þig í íshella sem flest fyrirtæki komast ekki í. Hún útskýrir hvers vegna ísinn glóir blátt á meðan þú stendur í 300 ára gömlum jökli. Ferðin er takmörkuð við 4 manns vegna þess að hellarnir eru þröngir.",
    },
    highlights: {
      en: ["Access to restricted ice caves", "Geology lecture inside the glacier", "Crampons & headlamps provided", "Only 4 people — truly intimate"],
      pl: ["Dostęp do zamkniętych jaskiń lodowych", "Wykład geologiczny wewnątrz lodowca", "Raki i czołówki zapewnione", "Tylko 4 osoby — naprawdę kameralne"],
      is: ["Aðgangur að lokuðum íshellum", "Jarðfræðifyrirlestur inni í jökli", "Broddar og höfuðljós fylgja", "Aðeins 4 manns — einstaklega náið"],
    },
    includes: {
      en: ["Pickup from Reykjavík or Vík", "All safety gear (crampons, helmets, headlamps)", "Hot drinks & energy bars", "Professional glacier photos", "Expert geology guide (Freyja)"],
      pl: ["Odbiór z Reykjavíku lub Vík", "Cały sprzęt bezpieczeństwa (raki, kaski, czołówki)", "Gorące napoje i batony energetyczne", "Profesjonalne zdjęcia na lodowcu", "Ekspert geolog (Freyja)"],
      is: ["Sótt í Reykjavík eða Vík", "Allur öryggisbúnaður (broddar, hjálmar, ljós)", "Heit drykkur og orkustangir", "Fagljósmyndir á jökli", "Sérfræðingur í jarðfræði (Freyja)"],
    },
    itinerary: [
      { time: "07:00", label: { en: "Pickup in Reykjavík (or 09:00 from Vík)", pl: "Odbiór z Reykjavíku (lub 09:00 z Vík)", is: "Sótt í Reykjavík (eða 09:00 frá Vík)" } },
      { time: "10:00", label: { en: "Arrive at glacier — gear up", pl: "Przyjazd na lodowiec — zakładanie sprzętu", is: "Komið á jökul — búast undir" } },
      { time: "10:30", label: { en: "Enter the ice caves with Freyja", pl: "Wejście do jaskiń lodowych z Freyją", is: "Inn í íshellana með Freyju" } },
      { time: "12:30", label: { en: "Hot drinks break on the glacier edge", pl: "Przerwa na gorące napoje na krawędzi lodowca", is: "Hlé fyrir heitan drykk við jaðar jökuls" } },
      { time: "13:00", label: { en: "Return journey", pl: "Droga powrotna", is: "Heimferð" } },
    ],
    guideName: "Freyja",
    guideNote: {
      en: "Always led by Freyja Björnsdóttir — geologist with a master's in volcanology. She's published research on these exact ice formations.",
      pl: "Zawsze prowadzona przez Freyję Björnsdóttir — geolog z magisterium z wulkanologii. Publikowała badania o dokładnie tych formacjach lodowych.",
      is: "Alltaf leidd af Freyju Björnsdóttur — jarðfræðingur með meistaragráðu í eldfjallafræði.",
    },
  },
  {
    fullDesc: {
      en: "No roadside parking lots. Ragnar drives to spots he's scouted for 15 years — remote lakesides, ancient lava fields, and places where you're the only souls watching the sky dance. He's a published National Geographic photographer, so he knows exactly where and when the light works best. Hot cocoa from a thermos included, obviously.",
      pl: "Żadnych parkingów przy drodze. Ragnar jedzie w miejsca, które odkrywał przez 15 lat — odległe brzegi jezior, pradawne pola lawy i miejsca, gdzie jesteś jedyną duszą obserwującą tańczące niebo. Jest publikowanym fotografem National Geographic, więc wie dokładnie, gdzie i kiedy światło jest najlepsze. Gorące kakao z termosu w cenie, oczywiście.",
      is: "Engin bílastæði við veginn. Ragnar keyrir á staði sem hann hefur kannað í 15 ár — afskekkt vatnsbökkur, forn hraunbreiður og staðir þar sem þú ert eina sálin. Hann er ljósmyndari sem hefur birst í National Geographic, svo hann veit nákvæmlega hvar og hvenær ljósið virkar best.",
    },
    highlights: {
      en: ["Remote locations (no light pollution)", "Photography tips from a NatGeo shooter", "Warm blankets & hot cocoa", "Flexible timing — we chase the aurora"],
      pl: ["Odległe lokalizacje (brak zanieczyszczenia światłem)", "Wskazówki fotograficzne od fotografa NatGeo", "Ciepłe koce i gorące kakao", "Elastyczny czas — gonimy zorzę"],
      is: ["Afskekktir staðir (ekkert ljósmengun)", "Ljósmyndaábendingar frá NatGeo ljósmyndara", "Hlý teppi og heitt kakó", "Sveigjanlegur tími — við eltum norðurljósin"],
    },
    includes: {
      en: ["Pickup from Reykjavík", "Small group (max 6)", "Warm blankets & hot cocoa", "Tripod available for your camera", "Aurora photos shared next day"],
      pl: ["Odbiór z Reykjavíku", "Mała grupa (max 6)", "Ciepłe koce i gorące kakao", "Statyw do Twojego aparatu", "Zdjęcia zorzy udostępnione następnego dnia"],
      is: ["Sótt í Reykjavík", "Lítill hópur (hámark 6)", "Hlý teppi og heitt kakó", "Þrífótur fyrir myndavélina þína", "Norðurljósamyndir deilt næsta dag"],
    },
    itinerary: [
      { time: "21:00", label: { en: "Pickup in Reykjavík", pl: "Odbiór z Reykjavíku", is: "Sótt í Reykjavík" } },
      { time: "21:45", label: { en: "First aurora spot — Ragnar checks conditions live", pl: "Pierwszy punkt zorzy — Ragnar sprawdza warunki na żywo", is: "Fyrsti norðurljósastaður — Ragnar athugar aðstæður" } },
      { time: "23:00", label: { en: "Second spot (if needed) — remote lakeside", pl: "Drugi punkt (jeśli potrzebny) — odległy brzeg jeziora", is: "Annar staður (ef þarf) — afskekkt vatn" } },
      { time: "00:30", label: { en: "Hot cocoa break & stargazing", pl: "Przerwa na kakao i obserwacja gwiazd", is: "Kakóhlé og stjörnuskoðun" } },
      { time: "01:30", label: { en: "Return to Reykjavík", pl: "Powrót do Reykjavíku", is: "Aftur til Reykjavíkur" } },
    ],
    guideName: "Ragnar",
    guideNote: {
      en: "Led by Ragnar Helgason — published in National Geographic twice. He'll help you capture shots you didn't think your phone could take.",
      pl: "Prowadzona przez Ragnara Helgasona — dwukrotnie publikowanego w National Geographic. Pomoże Ci zrobić zdjęcia, o jakich nie sądziłeś, że Twój telefon potrafi.",
      is: "Leidd af Ragnari Helgasyni — hefur birst í National Geographic tvisvar.",
    },
  },
];

const sectionLabels = {
  highlights: { en: "Highlights", pl: "Najważniejsze", is: "Hápunktar" },
  includes: { en: "What's included", pl: "W cenie", is: "Hvað er innifalið" },
  itinerary: { en: "Itinerary", pl: "Plan dnia", is: "Dagskrá" },
  yourGuide: { en: "Your guide", pl: "Twój przewodnik", is: "Leiðsögumaðurinn þinn" },
};

interface Props {
  open: boolean;
  onClose: () => void;
  tourIndex: number;
  tourImage: string;
  price: string;
  rating: string;
  onBook: () => void;
}

const TourDetailModal = ({ open, onClose, tourIndex, tourImage, price, rating, onBook }: Props) => {
  const { lang } = useLanguage();
  const tour = tr.tours.items[tourIndex];
  const detail = tourDetails[tourIndex];

  if (!tour || !detail) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        {/* Hero image */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img src={tourImage} alt={t(tour.title, lang)} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <DialogHeader>
              <DialogTitle className="text-white font-heading text-2xl md:text-3xl font-bold text-left">
                {t(tour.title, lang)}
              </DialogTitle>
            </DialogHeader>
            <div className="flex items-center gap-4 mt-2 text-white/80 text-xs md:text-sm font-body">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{t(tour.duration, lang)}</span>
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{t(tour.group, lang)}</span>
              <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-white" />{rating}</span>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary font-body font-bold text-sm px-3 py-1.5 rounded-full">
            {price}
          </div>
        </div>

        <div className="p-5 md:p-7 space-y-6">
          {/* Full description */}
          <p className="text-foreground font-body text-sm md:text-base leading-relaxed">
            {t(detail.fullDesc, lang)}
          </p>

          {/* Highlights */}
          <div>
            <h3 className="font-heading text-base md:text-lg font-bold mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              {t(sectionLabels.highlights, lang)}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {detail.highlights[lang].map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary */}
          <div>
            <h3 className="font-heading text-base md:text-lg font-bold mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {t(sectionLabels.itinerary, lang)}
            </h3>
            <div className="space-y-0">
              {detail.itinerary.map((step, i) => (
                <div key={i} className="flex gap-3 items-start group">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    {i < detail.itinerary.length - 1 && <div className="w-px h-6 bg-border" />}
                  </div>
                  <div className="pb-3">
                    <span className="text-xs font-body font-semibold text-primary">{step.time}</span>
                    <p className="text-sm font-body text-foreground">{t(step.label, lang)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What's included */}
          <div>
            <h3 className="font-heading text-base md:text-lg font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              {t(sectionLabels.includes, lang)}
            </h3>
            <ul className="space-y-1.5">
              {detail.includes[lang].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Guide note */}
          <div className="bg-secondary/50 rounded-lg p-4">
            <h4 className="font-heading text-sm font-bold mb-1 flex items-center gap-2">
              <Camera className="w-4 h-4 text-primary" />
              {t(sectionLabels.yourGuide, lang)}: {detail.guideName}
            </h4>
            <p className="text-xs md:text-sm font-body text-muted-foreground leading-relaxed">
              {t(detail.guideNote, lang)}
            </p>
          </div>

          {/* Book button */}
          <button
            onClick={() => { onClose(); onBook(); }}
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {t(tr.tours.book, lang)} — {price}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TourDetailModal;
