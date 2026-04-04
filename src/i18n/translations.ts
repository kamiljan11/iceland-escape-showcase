export type Lang = "en" | "pl" | "is";

export const translations = {
  nav: {
    tours: { en: "Tours", pl: "Wycieczki", is: "Ferðir" },
    fleet: { en: "Fleet", pl: "Flota", is: "Bílafloti" },
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
      en: "Iceland tours & car rental. Your adventure starts here.",
      pl: "Wycieczki po Islandii & wypożyczalnia samochodów. Twoja przygoda zaczyna się tutaj.",
      is: "Ferðir um Ísland og bílaleiga. Ævintýrið þitt byrjar hér.",
    },
    cta_tours: { en: "View tours", pl: "Zobacz wycieczki", is: "Skoða ferðir" },
    cta_fleet: { en: "Rent a car", pl: "Wypożycz auto", is: "Leigðu bíl" },
  },
  tours: {
    label: { en: "Popular tours", pl: "Popularne wycieczki", is: "Vinsælar ferðir" },
    heading: { en: "Discover the magic of Iceland", pl: "Odkryj magię Islandii", is: "Uppgötvaðu töfra Íslands" },
    book: { en: "Book now", pl: "Zarezerwuj teraz", is: "Bókaðu núna" },
    items: [
      {
        title: { en: "Golden Circle", pl: "Złoty Krąg", is: "Gullni hringurinn" },
        desc: {
          en: "Geysers, Gullfoss waterfall and Þingvellir National Park in one day.",
          pl: "Gejzery, wodospady Gullfoss i Park Narodowy Þingvellir w jednym dniu.",
          is: "Geysir, Gullfoss og Þingvellir á einum degi.",
        },
        duration: { en: "8 hours", pl: "8 godzin", is: "8 klst." },
        group: { en: "Max 12 people", pl: "Max 12 osób", is: "Hámark 12 manns" },
      },
      {
        title: { en: "Ice Caves", pl: "Jaskinie Lodowe", is: "Íshellar" },
        desc: {
          en: "Explore crystal glacier caves of Vatnajökull with a guide.",
          pl: "Eksploracja krystalicznych jaskiń lodowcowych Vatnajökull z przewodnikiem.",
          is: "Kannaðu kristaltæra íshella Vatnajökuls með leiðsögumanni.",
        },
        duration: { en: "5 hours", pl: "5 godzin", is: "5 klst." },
        group: { en: "Max 8 people", pl: "Max 8 osób", is: "Hámark 8 manns" },
      },
      {
        title: { en: "Northern Lights", pl: "Zorza Polarna", is: "Norðurljós" },
        desc: {
          en: "Night expedition hunting the aurora borealis — best locations away from the city.",
          pl: "Nocna wyprawa w poszukiwaniu zorzy polarnej — najlepsze lokalizacje z dala od miasta.",
          is: "Næturferð í leit að norðurljósum — bestu staðsetningar fjarri borginni.",
        },
        duration: { en: "4 hours", pl: "4 godziny", is: "4 klst." },
        group: { en: "Max 15 people", pl: "Max 15 osób", is: "Hámark 15 manns" },
      },
    ],
  },
  fleet: {
    label: { en: "Car rental", pl: "Wypożyczalnia", is: "Bílaleiga" },
    heading: { en: "Choose your vehicle", pl: "Wybierz swój pojazd", is: "Veldu ökutækið þitt" },
    perDay: { en: "/ day", pl: "/ dzień", is: "/ dag" },
    popular: { en: "Most popular", pl: "Najpopularniejszy", is: "Vinsælast" },
    rent: { en: "Rent", pl: "Wypożycz", is: "Leigja" },
    cars: [
      {
        name: { en: "Compact", pl: "Kompakt", is: "Smábíll" },
        model: "VW Golf / similar",
        features: {
          en: ["Automatic", "Petrol", "Heating"],
          pl: ["Automat", "Benzyna", "Ogrzewanie"],
          is: ["Sjálfskiptur", "Bensín", "Hitun"],
        },
        perks: {
          en: ["CDW Insurance", "GPS Navigation", "Unlimited km"],
          pl: ["Ubezpieczenie CDW", "Nawigacja GPS", "Darmowe km"],
          is: ["CDW trygging", "GPS leiðsögn", "Ótakmarkaðir km"],
        },
      },
      {
        name: { en: "SUV 4×4", pl: "SUV 4×4", is: "SUV 4×4" },
        model: "Land Cruiser / similar",
        features: {
          en: ["Automatic", "Diesel", "4WD"],
          pl: ["Automat", "Diesel", "Napęd 4×4"],
          is: ["Sjálfskiptur", "Dísil", "4×4 drif"],
        },
        perks: {
          en: ["Full insurance", "F-roads", "Roof rack"],
          pl: ["Pełne ubezp.", "Drogi F", "Rack dachowy"],
          is: ["Full trygging", "F-vegir", "Þakgrind"],
        },
      },
      {
        name: { en: "Camper", pl: "Kamper", is: "Húsbíll" },
        model: "Ford Transit / similar",
        features: {
          en: ["Automatic", "Diesel", "Kitchen"],
          pl: ["Automat", "Diesel", "Kuchnia"],
          is: ["Sjálfskiptur", "Dísil", "Eldhús"],
        },
        perks: {
          en: ["Camping gear", "Bed for 2", "Shower"],
          pl: ["Sprzęt kempingowy", "Łóżko 2 os.", "Prysznic"],
          is: ["Tjaldabúnaður", "Rúm fyrir 2", "Sturta"],
        },
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
      en: "Our fleet features reliable vehicles ready for any weather and road. We also offer personalised tours with experienced local guides who know the island like the back of their hand.",
      pl: "Nasza flota to niezawodne pojazdy gotowe na każdą pogodę i drogę. Oferujemy też spersonalizowane wycieczki z doświadczonymi, lokalnymi przewodnikami, którzy znają wyspę jak własną kieszeń.",
      is: "Bílaflotinn okkar samanstendur af áreiðanlegum ökutækjum tilbúnum fyrir hvaða veður og veg sem er. Við bjóðum einnig sérsniðnar ferðir með reyndum leiðsögumönnum sem þekkja eyjuna eins og eigin vasann.",
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
      car: { en: "Car rental", pl: "Wypożyczenie samochodu", is: "Bílaleiga" },
      both: { en: "Tour + car", pl: "Wycieczka + samochód", is: "Ferð + bíll" },
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
