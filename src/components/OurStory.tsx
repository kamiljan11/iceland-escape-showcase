import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, type Lang } from "@/i18n/translations";

const story = {
  label: {
    en: "Our story",
    pl: "Nasza historia",
    is: "Sagan okkar",
  },
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
    <section id="story" className="py-16 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Story */}
        <div className="max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-3 font-body">
              {t(story.label, lang)}
            </p>
            <h2 className="font-heading text-2xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              {t(story.heading, lang)}
            </h2>
          </motion.div>

          {story.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="text-muted-foreground font-body text-sm md:text-base leading-relaxed mb-4 md:mb-5"
            >
              {t(p, lang)}
            </motion.p>
          ))}

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 md:mt-10 border-l-2 border-primary/60 pl-5 md:pl-6"
          >
            <p className="font-heading text-base md:text-xl italic text-foreground leading-relaxed mb-2">
              {t(story.quote.text, lang)}
            </p>
            <cite className="text-muted-foreground font-body text-xs md:text-sm not-italic">
              {t(story.quote.author, lang)}
            </cite>
          </motion.blockquote>
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                <span className="font-heading text-primary font-bold text-sm md:text-base">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-heading text-base md:text-lg font-bold mb-2">{t(d.title, lang)}</h3>
              <p className="text-muted-foreground text-xs md:text-sm font-body leading-relaxed">{t(d.desc, lang)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
