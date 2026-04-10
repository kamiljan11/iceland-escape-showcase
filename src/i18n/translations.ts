export type Lang = "en" | "pl" | "is";

export const translations = {
  nav: {
    tours: { en: "Tours", pl: "Wycieczki", is: "Ferðir" },
    about: { en: "About", pl: "O nas", is: "Um okkur" },
    contact: { en: "Contact", pl: "Kontakt", is: "Hafðu samband" },
    book: { en: "Book now", pl: "Zarezerwuj", is: "Bókaðu" },
  },
  hero: {
    subtitle: {
      en: "Discover Iceland with us",
      pl: "Odkryj Islandię z nami",
      is: "Uppgötvaðu Ísland með okkur",
    },
    desc: {
      en: "Guided tours across Iceland's most breathtaking landscapes. Your adventure starts here.",
      pl: "Wycieczki z przewodnikiem po najpiękniejszych krajobrazach Islandii. Twoja przygoda zaczyna się tutaj.",
      is: "Ferðir með leiðsögumanni um stórbrottustu landslag Íslands. Ævintýrið þitt byrjar hér.",
    },
    cta_tours: { en: "View tours", pl: "Zobacz wycieczki", is: "Skoða ferðir" },
    cta_routes: { en: "Explore routes", pl: "Odkryj trasy", is: "Skoða leiðir" },
  },
  tours: {
    label: { en: "Popular tours", pl: "Popularne wycieczki", is: "Vinsælar ferðir" },
    heading: { en: "Where we take you (and where others don't)", pl: "Gdzie Cię zabieramy (i gdzie inni nie)", is: "Hvert við förum (og hvert aðrir gera ekki)" },
    book: { en: "Join this trip", pl: "Dołącz do wycieczki", is: "Taktu þátt" },
    items: [
      {
        title: { en: "The Real Golden Circle", pl: "Prawdziwy Złoty Krąg", is: "Hinn raunverulegi Gullni hringur" },
        desc: {
          en: "Same iconic stops — but we add 3 secret ones the buses skip. A hidden hot spring, a lava tube only our guides know, and lunch at a local farm.",
          pl: "Te same kultowe miejsca — ale dodajemy 3 tajne, które autobusy omijają. Ukryte gorące źródło, tunel lawowy znany tylko naszym przewodnikom i lunch na lokalnej farmie.",
          is: "Sömu helstu staðir — en við bætum við 3 leynilegum sem rúturnar sleppa. Falin heit laug, hraunhellir sem aðeins leiðsögumenn okkar þekkja, og hádegismatur á heimabyggð.",
        },
        duration: { en: "10 hours", pl: "10 godzin", is: "10 klst." },
        group: { en: "Max 6 people", pl: "Max 6 osób", is: "Hámark 6 manns" },
      },
      {
        title: { en: "Into the Glacier", pl: "W głąb lodowca", is: "Inn í jökulinn" },
        desc: {
          en: "Freyja (our geologist) leads you into ice caves most companies can't access. She'll explain why the ice is blue while you're standing inside 300-year-old glacier.",
          pl: "Freyja (nasza geolog) prowadzi Cię do jaskiń lodowych niedostępnych dla większości firm. Wyjaśni, dlaczego lód jest niebieski — stojąc wewnątrz 300-letniego lodowca.",
          is: "Freyja (jarðfræðingurinn okkar) leiðir þig í íshella sem flest fyrirtæki komast ekki í. Hún útskýrir hvers vegna ísinn er blár á meðan þú stendur í 300 ára gömlum jökli.",
        },
        duration: { en: "6 hours", pl: "6 godzin", is: "6 klst." },
        group: { en: "Max 4 people", pl: "Max 4 osoby", is: "Hámark 4 manns" },
      },
      {
        title: { en: "Aurora Hunt", pl: "Polowanie na Zorzę", is: "Norðurljósaveiði" },
        desc: {
          en: "No roadside parking lots. Ragnar drives to spots he's scouted for 15 years — lakesides, lava fields, places where you're the only souls watching. Hot cocoa from a thermos included.",
          pl: "Żadnych parkingów przy drodze. Ragnar jedzie w miejsca, które odkrywał przez 15 lat — nad jeziora, pola lawy, miejsca, gdzie jesteś jedyną duszą. Gorące kakao z termosu w cenie.",
          is: "Engin bílastæði við veginn. Ragnar keyrir á staði sem hann hefur kannað í 15 ár — strandir vatna, hraunbreiður, staðir þar sem þú ert eina sálin. Heitt kakó úr brúsa fylgir.",
        },
        duration: { en: "4-5 hours", pl: "4-5 godzin", is: "4-5 klst." },
        group: { en: "Max 6 people", pl: "Max 6 osób", is: "Hámark 6 manns" },
      },
    ],
  },
  about: {
    label: { en: "About us", pl: "O nas", is: "Um okkur" },
    heading: { en: "Your local partner in Iceland", pl: "Twój lokalny partner na Islandii", is: "Staðbundinn samstarfsaðili þinn á Íslandi" },
    p1: {
      en: "Norðan Travel is a family business from Reykjavík. For over 12 years we've been helping travellers from around the world discover the most beautiful corners of Iceland — from glaciers to hot springs.",
      pl: "Norðan Travel to rodzinna firma z Reykjavíku. Od ponad 12 lat pomagamy podróżnikom z całego świata odkrywać najpiękniejsze zakątki Islandii — od lodowców po gorące źródła.",
      is: "Norðan Travel er fjölskyldufyrirtæki frá Reykjavík. Í yfir 12 ár höfum við hjálpað ferðalöngum frá öllum heimshornum að uppgötva fallegustu staði Íslands — frá jöklum til heitra lauganna.",
    },
    p2: {
      en: "Our experienced local guides know the island like the back of their hand. We offer personalised tours to iconic landmarks and hidden gems that only locals know about.",
      pl: "Nasi doświadczeni, lokalni przewodnicy znają wyspę jak własną kieszeń. Oferujemy spersonalizowane wycieczki do kultowych miejsc i ukrytych perełek znanych tylko miejscowym.",
      is: "Reyndir leiðsögumenn okkar þekkja eyjuna eins og eigin vasann. Við bjóðum sérsniðnar ferðir að þekktum kennileitum og faldum perlum sem aðeins heimamenn þekkja.",
    },
    stats: {
      tours: { en: "Tours per year", pl: "Wycieczek rocznie", is: "Ferðir á ári" },
      clients: { en: "Happy clients", pl: "Zadowolonych klientów", is: "Ánægðir viðskiptavinir" },
      years: { en: "Years of experience", pl: "Lat doświadczenia", is: "Ára reynsla" },
      support: { en: "Support", pl: "Wsparcie", is: "Þjónusta" },
    },
  },
  contact: {
    label: { en: "Contact", pl: "Kontakt", is: "Hafðu samband" },
    heading: { en: "Get in touch", pl: "Napisz do nas", is: "Sendu okkur línu" },
    address: { en: "Address", pl: "Adres", is: "Heimilisfang" },
    phone: { en: "Phone", pl: "Telefon", is: "Sími" },
    email: { en: "Email", pl: "Email", is: "Tölvupóstur" },
    firstName: { en: "First name", pl: "Imię", is: "Fornafn" },
    lastName: { en: "Last name", pl: "Nazwisko", is: "Eftirnafn" },
    selectOptions: {
      tour: { en: "Tour — enquiry", pl: "Wycieczka — zapytanie", is: "Ferð — fyrirspurn" },
      private: { en: "Private tour", pl: "Wycieczka prywatna", is: "Einkaferð" },
      group: { en: "Group booking", pl: "Rezerwacja grupowa", is: "Hópbókun" },
      other: { en: "Other question", pl: "Inne pytanie", is: "Önnur spurning" },
    },
    message: { en: "Your message...", pl: "Twoja wiadomość...", is: "Skilaboðin þín..." },
    send: { en: "Send message", pl: "Wyślij wiadomość", is: "Senda skilaboð" },
    sent: { en: "Sent! ✓", pl: "Wysłano! ✓", is: "Sent! ✓" },
  },
  footer: {
    rights: { en: "All rights reserved.", pl: "Wszelkie prawa zastrzeżone.", is: "Allur réttur áskilinn." },
    terms: { en: "Terms", pl: "Regulamin", is: "Skilmálar" },
    privacy: { en: "Privacy", pl: "Prywatność", is: "Persónuvernd" },
    faq: { en: "FAQ", pl: "FAQ", is: "Algengar spurningar" },
  },
} as const;

export function t(obj: Record<Lang, string>, lang: Lang): string {
  return obj[lang] || obj.en;
}
