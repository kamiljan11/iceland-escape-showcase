import { motion } from "framer-motion";
import { MountainDivider, LeafAccent, TopoBg } from "@/components/SvgAccents";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, type Lang } from "@/i18n/translations";
import founderImg from "@/assets/founder-eirikur.jpg";
import vanBreakdownImg from "@/assets/story-van-breakdown.jpg";
import hallaImg from "@/assets/team-halla.jpg";
import tourMomentImg from "@/assets/team-tour-moment.jpg";
import guideJonImg from "@/assets/guide-jon.jpg";
import guideFreyjaImg from "@/assets/guide-freyja.jpg";
import guideRagnarImg from "@/assets/guide-ragnar.jpg";


const story = {
  label: { en: "Our story", pl: "Nasza historia", is: "Sagan okkar" },
  heading: {
    en: "Born from a broken-down van on Route 1",
    pl: "Zrodzone ze zepsutego vana na Drodze nr 1",
    is: "Fæddist úr biluðum sendibíl á Hringvegi",
  },
  paragraphs: [
    {
      en: "In 2011, Eiríkur Sigurðsson was driving tourists around the Ring Road in a second-hand van that broke down near Vik. While waiting for help, the group hiked to a hidden black sand beach that wasn't in any guidebook. The tourists later said it was the best part of their entire trip.",
      pl: "W 2011 roku Eiríkur Sigurðsson woził turystów Drogą Obwodową w używanym vanie, który zepsuł się pod Vik. Czekając na pomoc, grupa wybrała się na ukrytą czarną plażę, której nie było w żadnym przewodniku. Turyści później powiedzieli, że to był najlepszy moment całej podróży.",
      is: "Árið 2011 var Eiríkur Sigurðsson að aka ferðamönnum um Hringveginn í notuðum sendibíl sem bilaði nálægt Vík. Á meðan þeir biðu eftir aðstoð gekk hópurinn á falinn svartann sandfjöru sem var ekki í neinum ferðabók. Ferðamennirnir sögðu síðar að það hafi verið besti hluti allrar ferðar þeirra.",
    },
    {
      en: "That accident became a philosophy. Eiríkur realised that the best moments in Iceland aren't at the tourist hotspots — they're in the places only locals know. He quit his engineering job, convinced his sister Halla to handle bookings, and Norðan Travel was born at their kitchen table in Reykjavík.",
      pl: "Ta awaria stała się filozofią. Eiríkur zrozumiał, że najlepsze chwile na Islandii nie czekają w popularnych miejscach — są tam, gdzie znają je tylko lokalni. Rzucił pracę inżyniera, przekonał siostrę Hallę do zarządzania rezerwacjami, i Norðan Travel powstało przy kuchennym stole w Reykjavíku.",
      is: "Þetta slys varð að heimspeki. Eiríkur áttaði sig á að bestu augnablikin á Íslandi eru ekki á ferðamannastöðunum — þau eru á stöðum sem aðeins heimamenn þekkja. Hann hætti verkfræðistörfum sínum, sannfærði systur sína Höllu um að sjá um bókanir, og Norðan Travel fæddist við eldhúsborðið í Reykjavík.",
    },
  ],
  quote: {
    text: {
      en: "\"We don't do checklists. We share the Iceland we grew up in — the one you can't find on Instagram.\"",
      pl: "\"Nie robimy list do odhaczenia. Dzielimy się Islandią, w której dorastaliśmy — tą, której nie znajdziesz na Instagramie.\"",
      is: "\"Við gerum ekki gátlista. Við deilum Íslandinu sem við ólumst upp í — því sem þú finnur ekki á Instagram.\"",
    },
    author: {
      en: "— Eiríkur Sigurðsson, founder",
      pl: "— Eiríkur Sigurðsson, założyciel",
      is: "— Eiríkur Sigurðsson, stofnandi",
    },
  },
};

const teamLabel = {
  en: "Meet the team",
  pl: "Poznaj zespół",
  is: "Kynntu þér liðið",
};

const teamHeading = {
  en: "The people behind your adventure",
  pl: "Ludzie stojący za Twoją przygodą",
  is: "Fólkið á bak við ævintýrið þitt",
};

interface Guide {
  name: string;
  role: Record<Lang, string>;
  bio: Record<Lang, string>;
  img: string;
}

const guides: Guide[] = [
  {
    name: "Eiríkur Sigurðsson",
    role: { en: "Founder · Lead guide", pl: "Założyciel · Główny przewodnik", is: "Stofnandi · Aðalleiðsögumaður" },
    bio: {
      en: "Former engineer who traded blueprints for trail maps. Still leads the toughest highland routes himself.",
      pl: "Były inżynier, który zamienił projekty na mapy szlaków. Nadal sam prowadzi najtrudniejsze trasy na wyżynach.",
      is: "Fyrrverandi verkfræðingur sem skipti teikningum út fyrir gönguleiðakort. Leiðir enn erfiðustu hálendisleiðirnar sjálfur.",
    },
    img: founderImg,
  },
  {
    name: "Halla Sigurðardóttir",
    role: { en: "Operations · Co-founder", pl: "Operacje · Współzałożycielka", is: "Rekstur · Meðstofnandi" },
    bio: {
      en: "Eiríkur's sister. Runs every booking, every logistics detail, and somehow remembers every guest's name.",
      pl: "Siostra Eiríkura. Zarządza każdą rezerwacją, każdym detalem logistyki i jakoś pamięta imię każdego gościa.",
      is: "Systir Eiríks. Sér um allar bókanir, alla flutningasmáatriði og man einhvern veginn nafn hvers gests.",
    },
    img: hallaImg,
  },
  {
    name: "Jón Árnason",
    role: { en: "Guide · Former fisherman", pl: "Przewodnik · Były rybak", is: "Leiðsögumaður · Fyrrum sjómaður" },
    bio: {
      en: "Spent 20 years on fishing boats before switching to guiding. Knows every cove, every tide, and where the puffins nest.",
      pl: "Spędził 20 lat na kutrach rybackich, zanim został przewodnikiem. Zna każdą zatoczkę, każdy przypływ i wie, gdzie gnieżdżą się maskonury.",
      is: "Var 20 ár á fiskibátum áður en hann fór í leiðsögn. Þekkir hvern vik, hvert sjávarfall og hvar lundinn verpur.",
    },
    img: guideJonImg,
  },
  {
    name: "Freyja Björnsdóttir",
    role: { en: "Guide · Geologist", pl: "Przewodniczka · Geolog", is: "Leiðsögukona · Jarðfræðingur" },
    bio: {
      en: "Has a master's in volcanology. She'll explain why Iceland's glaciers glow blue while you're standing inside one.",
      pl: "Ma magisterium z wulkanologii. Wyjaśni Ci, dlaczego islandzkie lodowce świecą na niebiesko — stojąc wewnątrz jednego z nich.",
      is: "Hefur meistaragráðu í eldfjallafræði. Hún útskýrir hvers vegna jöklar Íslands glóa blátt á meðan þú stendur inni í einum.",
    },
    img: guideFreyjaImg,
  },
  {
    name: "Ragnar Helgason",
    role: { en: "Guide · Photographer", pl: "Przewodnik · Fotograf", is: "Leiðsögumaður · Ljósmyndari" },
    bio: {
      en: "Published in National Geographic twice. Takes guests to spots where the light does something you've never seen before.",
      pl: "Dwukrotnie publikowany w National Geographic. Zabiera gości w miejsca, gdzie światło robi coś, czego nigdy wcześniej nie widziałeś.",
      is: "Hefur birst í National Geographic tvisvar. Fer með gesti á staði þar sem ljósið gerir eitthvað sem þú hefur aldrei séð áður.",
    },
    img: guideRagnarImg,
  },
];

interface DiffItem {
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
}

const differentiators: DiffItem[] = [
  {
    title: { en: "No tourist traps", pl: "Żadnych turystycznych pułapek", is: "Engar ferðamannagildrur" },
    desc: {
      en: "Every stop on our routes is hand-picked. If it has a gift shop, it's probably not on our list.",
      pl: "Każdy przystanek jest starannie wybrany. Jeśli ma sklep z pamiątkami, prawdopodobnie nie jest na naszej liście.",
      is: "Hver stopp á leiðum okkar er handvalin. Ef það er gjafavöruverslun þar, er það líklega ekki á listanum okkar.",
    },
  },
  {
    title: { en: "Guides, not scripts", pl: "Przewodnicy, nie skrypty", is: "Leiðsögumenn, ekki handrit" },
    desc: {
      en: "Our guides are locals — fishermen, geologists, photographers. They tell their own stories, not rehearsed ones.",
      pl: "Nasi przewodnicy to lokalni — rybacy, geologowie, fotografowie. Opowiadają własne historie, nie wyuczone.",
      is: "Leiðsögumenn okkar eru heimamenn — sjómenn, jarðfræðingar, ljósmyndarar. Þeir segja eigin sögur, ekki æfðar.",
    },
  },
  {
    title: { en: "8 people max. Always.", pl: "Max 8 osób. Zawsze.", is: "Hámark 8 manns. Alltaf." },
    desc: {
      en: "We turned down 40% more revenue last year to keep groups small. A big bus can't reach a hidden canyon.",
      pl: "Zrezygnowaliśmy z 40% więcej przychodu w zeszłym roku, by grupy były małe. Duży autobus nie dojedzie do ukrytego kanionu.",
      is: "Við höfnuðum 40% meiri tekjum á síðasta ári til að halda hópum litlum. Stór rúta kemst ekki í falinn gljúfur.",
    },
  },
];

const OurStory = () => {
  const { lang } = useLanguage();

  return (
    <section id="story" className="py-16 md:py-28 relative overflow-hidden">
      <TopoBg className="text-primary" />
      <MountainDivider className="text-primary mb-8 md:mb-12" />
      <div className="container mx-auto px-4 md:px-6">
        {/* Founder story with photo */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-28">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">
              {t(story.label, lang)}
            </p>
            <h2 className="font-heading text-2xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              {t(story.heading, lang)}
            </h2>

            {story.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground font-body text-sm md:text-base leading-relaxed mb-4 md:mb-5">
                {t(p, lang)}
              </p>
            ))}

            <blockquote className="mt-6 md:mt-8 border-l-2 border-primary/60 pl-5 md:pl-6">
              <p className="font-heading text-sm md:text-xl italic text-foreground leading-relaxed mb-2">
                {t(story.quote.text, lang)}
              </p>
              <cite className="text-muted-foreground font-body text-xs md:text-sm not-italic">
                {t(story.quote.author, lang)}
              </cite>
            </blockquote>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            <div className="rounded-xl overflow-hidden film-grain">
              <img src={founderImg} alt="Eiríkur Sigurðsson, founder of Norðan Travel" loading="lazy" width={800} height={1000} className="w-full h-auto object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden film-grain film-strip h-48 md:h-56">
                <img src={vanBreakdownImg} alt="Guide showing travelers a hidden black sand beach near Vík" loading="lazy" width={800} height={1000} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden film-grain film-strip h-48 md:h-56">
                <img src={tourMomentImg} alt="A group tour moment at a waterfall" loading="lazy" width={1200} height={800} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto mb-20 md:mb-28">
          {differentiators.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-card shadow-sm rounded-xl p-5 md:p-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4 relative">
                <span className="font-heading text-primary font-bold text-sm md:text-base">{String(i + 1).padStart(2, "0")}</span>
                <LeafAccent className="w-5 h-5 text-primary absolute -top-1 -right-1" />
              </div>
              <h3 className="font-heading text-base md:text-lg font-bold mb-2">{t(d.title, lang)}</h3>
              <p className="text-muted-foreground text-xs md:text-sm font-body leading-relaxed">{t(d.desc, lang)}</p>
            </motion.div>
          ))}
        </div>

        {/* Meet the guides */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
          <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">{t(teamLabel, lang)}</p>
          <h2 className="font-heading text-2xl md:text-4xl font-bold">{t(teamHeading, lang)}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {guides.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group"
            >
              <div className="rounded-xl overflow-hidden mb-4 aspect-[4/5] film-grain">
                <img
                  src={g.img}
                  alt={g.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading text-base md:text-lg font-bold">{g.name}</h3>
              <p className="text-primary font-body text-xs md:text-sm mb-2">{t(g.role, lang)}</p>
              <p className="text-muted-foreground text-xs md:text-sm font-body leading-relaxed">{t(g.bio, lang)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
