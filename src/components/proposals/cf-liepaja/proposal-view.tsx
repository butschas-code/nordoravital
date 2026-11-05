import Image from "next/image";
import { FloorDiagram } from "@/components/proposals/cf-liepaja/floor-diagram";
import { RevenueCalculator } from "@/components/proposals/cf-liepaja/revenue-calculator";
import { SetupHotspots } from "@/components/proposals/cf-liepaja/setup-hotspots";
import { DEMO_EMAIL, DEMO_PHONE, demoMailto } from "@/lib/proposals/cf-liepaja";

const MAILTO = demoMailto();
const PHONE_HREF = "tel:+37120727915";

const JOURNEY = [
  {
    n: "01",
    title: "Treniņš",
    image: "/images/proposals/cf-liepaja/journey-01.webp",
    width: 911,
    height: 1536,
    alt: "Koncepta vizualizācija: biedrs airē funkcionālā fitnesa zālē. Nav CF Liepāja fotogrāfija.",
    caption: "Koncepta vizualizācija, nevis CF Liepāja fotogrāfija",
    body: "Biedrs pabeidz HYROX, funkcionālā fitnesa vai boksa nodarbību. Treniņš paliek tāds, kāds tas ir šodien.",
  },
  {
    n: "02",
    title: "Sanza sesija",
    image: "/images/proposals/cf-liepaja/journey-02.webp",
    width: 908,
    height: 1536,
    alt: "Koncepta vizualizācija: biedrs mierīgi guļ uz balta matrača, blakus ir Sanza kontrolleris. Nav uzstādīta iekārta.",
    caption: "Koncepta vizualizācija, nevis uzstādīta iekārta",
    body: "Biedrs apguļas uz MAT. Kontrollerī tiek izvēlēta programma, piemēram, Relax, Sport, Alpha, Vital vai Anti-Stress. Ierīce sesijas laikā rada programmētus pulsējošus elektromagnētiskos laukus.",
  },
  {
    n: "03",
    title: "Atpūtas rituāls",
    image: "/images/proposals/cf-liepaja/journey-03.webp",
    width: 911,
    height: 1536,
    alt: "Koncepta vizualizācija: biedrs ar somu dodas prom pēc sesijas un turpina dienu.",
    caption: "Koncepta vizualizācija, nevis CF Liepāja fotogrāfija",
    body: "Biedrs noslēdz sesiju un turpina dienu. Tā ir sakārtota, mierīga iespēja atvilkt elpu pēc fiziskas slodzes.",
  },
] as const;

const USES = [
  {
    title: "HYROX",
    image: "/images/proposals/cf-liepaja/club-rower.jpg",
    width: 1800,
    height: 1197,
    alt: "CF Liepāja biedrs airēšanas trenažierī zālē ar sarkanu sienas svītru.",
    body: "Pēc prasīgas nodarbības, kurā mainās spēks un izturība, biedram ir vieta, kur mierīgi apgulties. Tas ir atpūtas brīdis pēc treniņa, nevis solījums par labāku sniegumu.",
  },
  {
    title: "Funkcionālie treniņi",
    image: "/images/proposals/cf-liepaja/club-trx.jpg",
    width: 1600,
    height: 1064,
    alt: "CF Liepāja treneris vada TRX vingrinājumu kluba zālē.",
    body: "CF TRX un funkcionālā spēka biedriem — papildu labsajūtas rituāls, ko var pievienot pēc ierastās nodarbības. Pats treniņš nemainās.",
  },
  {
    title: "Bokss",
    image: "/images/proposals/cf-liepaja/club-boxing.jpg",
    width: 1600,
    height: 1065,
    alt: "Divi pieauguši bokseri trenējas ar ķepām CF Liepāja zālē.",
    body: "Pieaugušajiem boksa dalībniekiem — mierīga, sakārtota iespēja nomierināties pēc treniņa. Bērnu un jauniešu grupām šo pakalpojumu nepiedāvājam, kamēr nav pārbaudītas ražotāja instrukcijas.",
  },
] as const;

const MODELS = [
  {
    letter: "A",
    title: "Pielikums pēc treniņa",
    body: "Biedrs pēc nodarbības piesakās uz izvēles Sanza sesiju. Viena stacija sākumā darbojas ar ieplānotiem laikiem.",
  },
  {
    letter: "B",
    title: "Sesiju komplekti",
    body: "Biedrs iegādājas noteiktu skaitu labsajūtas sesiju un izmanto tās pēc pieraksta.",
  },
  {
    letter: "C",
    title: "Premium biedrība",
    body: "Atsevišķos biedru plānos iekļauj saskaņotu Sanza sesiju skaitu. Apjoms tiek noteikts kopā ar Jums.",
  },
] as const;

const STEPS = [
  "Apskatīt pieejamo telpu.",
  "Izvēlēties piemērotu aprīkojuma konfigurāciju.",
  "Noteikt sesiju kārtību un pieraksta pieeju.",
  "Iepazīstināt biedrus ar pakalpojumu.",
] as const;

export function CfLiepajaProposal() {
  return (
    <div data-sanza-bold className="bg-[#14171b] text-[#f4f0e8]">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#14171b]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-8">
          <div className="flex items-center gap-4">
            <Image
              src="/images/brand/nordora_logo_trans_02.png"
              alt="Nordora Vital"
              width={1229}
              height={1127}
              className="h-16 w-auto brightness-0 invert"
              priority
            />
            <span className="h-8 w-px bg-white/20" aria-hidden="true" />
            <Image
              src="/images/proposals/cf-liepaja/cf-liepaja-logo.png"
              alt="CF Liepāja"
              width={492}
              height={265}
              className="h-9 w-auto"
              priority
            />
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="hidden text-sm text-[#f4f0e8] underline decoration-white/30 underline-offset-4 md:inline"
            >
              {DEMO_PHONE}
            </a>
            <a
              href={MAILTO}
              aria-label="Vienosimies par īsu demonstrāciju"
              className="inline-flex min-h-11 items-center bg-[#507040] px-4 text-sm font-semibold text-white hover:-translate-y-px active:scale-[0.98]"
            >
              <span className="sm:hidden">Demonstrācija</span>
              <span className="hidden sm:inline">Vienosimies par īsu demonstrāciju</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section
          className="grid md:min-h-[100dvh] md:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]"
          aria-labelledby="hero-title"
        >
          <div className="relative min-h-[62dvh] md:min-h-0 md:order-2">
            <Image
              src="/images/proposals/cf-liepaja/hero-session.webp"
              alt="Koncepta vizualizācija: biedrs atpūšas uz balta Sanza MAT funkcionālā fitnesa zālē, blakus ir Sanza kontrolleris. Nav CF Liepāja telpu fotogrāfija."
              fill
              priority
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-[64%_center] md:object-[58%_center]"
            />
            <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14171b] to-transparent px-4 pb-4 pt-16 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#f4f0e8] md:px-6">
              Koncepta vizualizācija — iespējamais risinājums CF Liepāja
            </p>
          </div>
          <div className="flex flex-col justify-end px-4 py-10 md:order-1 md:justify-center md:px-8 md:py-28">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d7e4d6]">
              Nordora Vital × CF Liepāja
            </p>
            <h1
              id="hero-title"
              className="mt-4 max-w-[14ch] font-heading text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.03em]"
            >
              Vairāk nekā treniņš. Jauna pieredze CF Liepāja biedriem.
            </h1>
            <p className="mt-5 max-w-[36rem] text-base leading-relaxed text-[#f4f0e8]">
              Individuāli sagatavots koncepts, kā integrēt Sanza labsajūtas tehnoloģiju Jūsu
              klubā — vienkārši, kompakti un bez izmaiņām esošajā treniņu piedāvājumā.
            </p>
            <p className="mt-6 text-sm text-[#e4ddd4]">
              Sagatavots Kasparam Pīrāgam un Oskaram Liepiņam
            </p>
          </div>
        </section>

        <section id="iekarta" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28" aria-labelledby="setup-title">
          <div className="mx-auto max-w-[1240px]">
            <h2 id="setup-title" className="max-w-[16ch] font-heading text-4xl leading-[1.08] tracking-[-0.03em] md:text-5xl">
              Kā Sanza izskatītos Jūsu klubā?
            </h2>
            <p className="mt-5 max-w-[48rem] text-base leading-relaxed text-[#e4ddd4]">
              Viens kompakts risinājums. Vienkārša lietošana. Jauns pakalpojums Jūsu biedriem.
            </p>
            <figure className="mt-10">
              <Image
                src="/images/proposals/cf-liepaja/corner-club.webp"
                alt="Koncepta vizualizācija: kompakta Sanza atpūtas stacija blakus funkcionālā fitnesa zālei, uz sienas ir uzraksts CF Liepāja. Nav telpu fotogrāfija."
                width={2000}
                height={1116}
                sizes="(min-width: 1240px) 1240px, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-[#c9c1b6]">
                Koncepta vizualizācija — iespējamais risinājums CF Liepāja. Kluba nosaukums uz
                sienas parāda ideju. Šī nav fotogrāfija no Jūsu telpām. Matrača forma attēlā ir
                aptuvena; faktiskā sistēma ir zemāk.
              </figcaption>
            </figure>
            <div className="mt-10">
              <SetupHotspots />
            </div>
            <figure className="mt-12 grid gap-4 md:grid-cols-[1.4fr_0.8fr]">
              <Image
                src="/images/sanza_gesamtsystem_645.png"
                alt="Sanza profesionālā sistēma uz balta matrača: kontrolleris, MAT, PAD un papildu aplikatori."
                width={645}
                height={484}
                className="h-auto w-full bg-[#e7e4e0]"
              />
              <figcaption className="flex flex-col justify-end text-sm leading-relaxed text-[#e4ddd4]">
                <span className="font-heading text-xl text-[#f4f0e8]">Faktiskā sistēma</span>
                <span className="mt-3">
                  Produkta fotogrāfija. CF Liepāja konceptā pamatā ir MAT, kontrolleris un
                  izvēles PAD. Rokturi un gaismas aplikators nav šī piedāvājuma priekšnoteikums.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="gaita" className="scroll-mt-24 bg-[#101216] px-4 py-20 md:px-8 md:py-28" aria-labelledby="journey-title">
          <div className="mx-auto max-w-[1240px]">
            <h2 id="journey-title" className="max-w-[18ch] font-heading text-4xl leading-[1.08] tracking-[-0.03em] md:text-5xl">
              No intensīva treniņa līdz mierīgai atpūtai.
            </h2>
            <ol className="mt-12 grid gap-10 lg:grid-cols-3">
              {JOURNEY.map((step) => (
                <li key={step.n}>
                  <article>
                    <Image
                      src={encodeURI(step.image)}
                      alt={step.alt}
                      width={step.width}
                      height={step.height}
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="h-auto w-full"
                    />
                    <p className="mt-4 font-heading text-sm tabular-nums tracking-[0.14em] text-[#d7e4d6]">
                      {step.n}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#e4ddd4]">{step.body}</p>
                    <p className="mt-3 text-xs leading-relaxed text-[#c9c1b6]">{step.caption}</p>
                  </article>
                </li>
              ))}
            </ol>
            <div className="mt-12 max-w-[46rem] border-t border-white/10 pt-8">
              <p className="text-base leading-relaxed text-[#f4f0e8]">
                PEMF tehnoloģija izmanto kontrolētus, pulsējošus elektromagnētiskos laukus, ko
                Sanza ierīce rada atbilstoši izvēlētajai programmai.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#e4ddd4]">
                Ilustratīvais sesijas ilgums ir aptuveni 15–20 minūtes. Precīza programma un
                ilgums tiek iestatīti atbilstoši faktiskajam aprīkojumam un lietošanas
                instrukcijai.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#e4ddd4]">
                Šeit Sanza ir labsajūtas sesija pēc treniņa — komfortam un mierīgai atpūtai. Tā
                nav medicīniska procedūra, un mēs nesolām ātrāku atjaunošanos vai labāku
                sniegumu.
              </p>
            </div>
          </div>
        </section>

        <section id="vide" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28" aria-labelledby="fit-title">
          <div className="mx-auto max-w-[1240px]">
            <p className="max-w-[40rem] text-sm leading-relaxed text-[#c9c1b6]">
              CF Liepāja ir funkcionālā fitnesa un boksa klubs kopš 2013. gada. Kopš 2021. gada
              to vada Kaspars Pīrāgs un Oskars Liepiņš. Pēc cfliepaja.lv klubā ir vairāk nekā
              200 aktīvu biedru. Publiski norādītā adrese ir Lauku iela 59.
            </p>
            <h2 id="fit-title" className="mt-8 max-w-[14ch] font-heading text-4xl leading-[1.08] tracking-[-0.03em] md:text-5xl">
              Radīts aktīvai treniņu videi.
            </h2>
            <div className="mt-12 flex flex-col gap-16">
              {USES.map((item, index) => (
                <article
                  key={item.title}
                  className="grid items-center gap-6 md:grid-cols-2 md:gap-12"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className={`h-auto w-full object-cover ${index === 1 ? "md:order-2" : ""}`}
                  />
                  <div className={index === 1 ? "md:order-1" : ""}>
                    <h3 className="font-heading text-3xl tracking-[-0.02em]">{item.title}</h3>
                    <p className="mt-4 max-w-[38ch] text-base leading-relaxed text-[#e4ddd4]">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pakalpojums" className="scroll-mt-24 bg-[#101216] px-4 py-20 md:px-8 md:py-28" aria-labelledby="offer-title">
          <div className="mx-auto max-w-[1240px]">
            <h2 id="offer-title" className="max-w-[16ch] font-heading text-4xl leading-[1.08] tracking-[-0.03em] md:text-5xl">
              Jauns pakalpojums. Esošajā kluba ikdienā.
            </h2>
            <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
              {MODELS.map((model) => (
                <article key={model.letter} className="grid gap-3 py-7 md:grid-cols-[7rem_minmax(0,16rem)_1fr] md:items-baseline md:gap-8">
                  <p className="font-heading text-sm tracking-[0.16em] text-[#d7e4d6]">
                    Modelis {model.letter}
                  </p>
                  <h3 className="font-heading text-2xl">{model.title}</h3>
                  <p className="max-w-[48ch] text-sm leading-relaxed text-[#e4ddd4]">{model.body}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-[46rem] text-sm leading-relaxed text-[#e4ddd4]">
              Viena stacija sākumā var strādāt ar ieplānotiem pierakstiem. Pilnībā bez
              uzraudzības darbību nepiedāvājam. Personāla ievadīšana, iekārtas uzraudzība,
              higiēnas kārtība un piemērotības pārbaudes tiek noteiktas uzstādīšanas laikā.
            </p>
          </div>
        </section>

        <section id="ienemumi" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28" aria-labelledby="revenue-title">
          <div className="mx-auto max-w-[1240px]">
            <h2 id="revenue-title" className="max-w-[14ch] font-heading text-4xl leading-[1.08] tracking-[-0.03em] md:text-5xl">
              Kā tas varētu atmaksāties?
            </h2>
            <p className="mt-5 max-w-[40rem] text-base leading-relaxed text-[#e4ddd4]">
              Trīs pieņēmumi, kurus varat mainīt. Rezultāts rāda tikai iespējamos bruto
              ieņēmumus no sesijām.
            </p>
            <div className="mt-10">
              <RevenueCalculator />
            </div>
          </div>
        </section>

        <section id="ikdiena" className="scroll-mt-24 bg-[#101216] px-4 py-20 md:px-8 md:py-28" aria-labelledby="ops-title">
          <div className="mx-auto max-w-[1240px]">
            <figure className="mb-12">
              <Image
                src="/images/proposals/cf-liepaja/gym-floor.webp"
                alt="Koncepta vizualizācija: Sanza atpūtas stacija pie betona sienas, kamēr funkcionālā fitnesa zālē turpinās treniņš. Nav CF Liepāja telpu fotogrāfija."
                width={2000}
                height={1116}
                sizes="(min-width: 1240px) 1240px, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-[#c9c1b6]">
                Koncepta vizualizācija — iespējamais risinājums CF Liepāja. Stacija ir blakus
                treniņu zonai, nevis tās vietā. Aizslietnis ir ideja, nevis izvēlēts risinājums.
                Šī nav fotogrāfija no Jūsu telpām, un iekārta tajās nav uzstādīta.
              </figcaption>
            </figure>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <h2 id="ops-title" className="max-w-[16ch] font-heading text-4xl leading-[1.08] tracking-[-0.03em] md:text-5xl">
                Jūsu treniņi paliek nemainīgi.
              </h2>
              <p className="mt-5 max-w-[44rem] text-base leading-relaxed text-[#e4ddd4]">
                Esošais treniņu grafiks paliek neskarts. Sanza darbojas kā izvēles labsajūtas
                pakalpojums. Pieraksts nosaka, kad stacija ir brīva. Personāls iepazīstina
                biedru ar pakalpojumu un palīdz sagatavot sesiju.
              </p>
              <ol className="mt-8 max-w-[36rem] list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[#f4f0e8] marker:text-[#d7e4d6]">
                {STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <figure>
              <div className="border border-white/10 p-4 md:p-6">
                <FloorDiagram />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-[#c9c1b6]">
                Principa shēma, nevis uzmērīts plāns. Mēs Jūsu telpas vēl neesam apsekojuši un
                neesam noteikuši izmērus.
              </figcaption>
            </figure>
            </div>
          </div>
        </section>

        <section id="noslegums" className="scroll-mt-24 px-4 py-24 md:px-8 md:py-32" aria-labelledby="close-title">
          <div className="mx-auto max-w-[760px]">
            <h2 id="close-title" className="font-heading text-4xl leading-[1.08] tracking-[-0.03em] md:text-5xl">
              Vai šāds risinājums iederētos CF Liepāja?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#e4ddd4]">
              Šī ir sākotnējā koncepcija, kas sagatavota tieši CF Liepāja. Nākamais solis būtu
              kopīgi apskatīt pieejamo telpu un izvēlēties piemērotāko Sanza konfigurāciju.
            </p>
            <a
              href={MAILTO}
              className="mt-8 inline-flex min-h-12 items-center bg-[#507040] px-6 text-base font-semibold text-white hover:-translate-y-px active:scale-[0.98]"
            >
              Vienosimies par īsu demonstrāciju
            </a>
            <address className="mt-10 text-sm not-italic leading-relaxed text-[#e4ddd4]">
              Sascha
              <br />
              Nordora Vital
              <br />
              <a className="underline decoration-white/30 underline-offset-4" href={MAILTO}>
                {DEMO_EMAIL}
              </a>
              <br />
              <a className="underline decoration-white/30 underline-offset-4" href={PHONE_HREF}>
                {DEMO_PHONE}
              </a>
            </address>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 md:px-8">
        <p className="mx-auto max-w-[1240px] text-xs leading-relaxed text-[#c9c1b6]">
          Privāts koncepts CF Liepāja. Treniņu fotogrāfijas ir no cfliepaja.lv. Sanza attēli
          ir Nordora Vital produkta fotogrāfijas. Zāles ar Sanza staciju ir koncepta
          vizualizācijas, nevis uzstādītas iekārtas fotogrāfijas.
        </p>
      </footer>
    </div>
  );
}
