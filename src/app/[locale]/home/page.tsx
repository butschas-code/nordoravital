import type { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers";
import { BrandArc } from "@/components/brand-arc";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { DarkMarketingCard } from "@/components/home/dark-marketing-card";
import { Link } from "@/i18n/navigation";
import { HomeSiteLayout } from "@/components/home-site/home-site-shell";
import { getOriginForSurface, getSiteSurface } from "@/lib/domains";
import { getHomeDisplayPath, homeLocale } from "@/lib/home-copy";
import { IMAGE_PATHS } from "@/lib/public-images";

type Props = { params: Promise<{ locale: string }> };

const DEFAULT_CAL_DISCOVERY_URL = "https://cal.eu/nordoravital/discovery-call";

const ritualVisuals = [
  {
    src: IMAGE_PATHS.home.ritualPostActivityRecovery,
    alt: "sanza recovery setup for a post-activity home session",
    position: "center 30%",
  },
  {
    src: IMAGE_PATHS.home.ritualDailyReset,
    alt: "quiet sanza home moment for a daily mental reset",
    position: "center 38%",
  },
  {
    src: IMAGE_PATHS.home.ritualRestSleepPreparation,
    alt: "soft evening sanza setting for rest preparation",
    position: "center 42%",
  },
  {
    src: IMAGE_PATHS.home.ritualPersonalWellbeing,
    alt: "personal sanza wellbeing routine in a calm home space",
    position: "center 50%",
  },
] as const;

const pageCopy = {
  "en": {
    "metaTitle": "Nordora Vital Home | Private sanza wellness rituals",
    "metaDescription": "Bring sanza into everyday home wellbeing with private rituals for recovery, relaxation, calm and modern personal care.",
    "eyebrow": "sanza at home",
    "headline": "A simple way to support your body every day.",
    "intro": "sanza brings modern wellness technology into your daily routine — for recovery, calm, balance and the moments that help you feel better throughout everyday life. Use it after sport, before sleep, during busy weeks, after travel, or simply as a regular way to support your body and take care of yourself.",
    "primary": "Explore the experience",
    "secondary": "View programs",
    "heroNote": "A personal wellness system for repeatable moments of calm.",
    "introBlockHeadline": "Your day affects your body. sanza helps you respond.",
    "introBlockBody": "Long hours at a desk, training sessions, travel, stress, poor sleep and busy weeks can all leave the body carrying tension, fatigue or restlessness — even on good days. sanza gives you a simple way to add recovery and calm into your routine before sleep, after movement, after work or whenever you want a clear moment to reset. The experience is easy to use, comfortable and personal: choose a program, use the accessory that fits the moment, and give your body time to settle.",
    "usesEyebrow": "Everyday uses",
    "usesHeadline": "A simple way to care for your body throughout the day.",
    "rituals": [
      {
        "title": "Post-activity recovery",
        "body": "After training, sport, walking or physically demanding days, sanza gives your body a simple way to slow down, recover and settle after effort.",
      },
      {
        "title": "Daily reset",
        "body": "For long workdays, screen time, stress or mental overload. Use sanza when you want to clear the pressure of the day and come back to balance.",
      },
      {
        "title": "Rest & sleep preparation",
        "body": "For the evening hours, when your body needs a clearer signal that the day is ending. sanza helps you create a calmer transition before rest.",
      },
      {
        "title": "Personal wellbeing",
        "body": "For regular use in your own rhythm — morning, evening, weekends or whenever you want to support your body, energy and everyday performance.",
      },
    ],
    "designEyebrow": "Designed for private spaces",
    "designHeadline": "Serious wellness technology, softened for home life.",
    "designBody": "You are not looking for another wellness idea that sounds nice but never fits into real life. You want something you can actually use — when your day is full, when your body feels tired, when your mind needs to stay clear, and when you want to support your wellbeing before you feel completely drained. sanza helps you add calm, recovery and balance into the daily moments that shape how you feel, perform and rest.",
    "technologyHeadline": "Three technologies. One easier way to support your body.",
    "technologyBody": "sanza is different because it does not rely on one single method. The system combines pulsating electromagnetic fields, biofrequency microcurrent and focused light application in one setup — so you can support the body in more than one way during the same session.\n\nThe mat is used for full-body sessions. The hand electrodes add biofrequency application. The light applicator is used for more targeted areas. Together, they help you create a simple daily moment for recovery, calm, oxygen supply, energy, focus and physical balance — without needing separate devices or a complicated routine.",
    "technologyPrimary": "See how it works",
    "technologySecondary": "View programs",
    "contactEyebrow": "Contact",
    "contactHeadline": "Not sure how sanza would fit into your life?",
    "contactBody": "Tell us what you want to support: recovery, sleep, stress, energy, sport, travel or everyday wellbeing. We will help you understand which setup makes sense, which programs to start with and how sanza can become a simple part of your personal routine.",
    "contactPrimary": "Book a personal introduction",
    "contactSecondary": "Ask a question",
    "contactPills": [
      "Setup choice",
      "First programs",
      "Daily rhythm",
    ],
    "contactPanelHeading": "Personal guidance",
    "contactPanelBody": "Use the introduction call for a guided walkthrough, or open the question panel when you prefer to send a few details first.",
    "heroAlt": "A quiet home wellness setting prepared for a sanza ritual",
    "systemAlt": "sanza system components arranged for home use",
  },
  "de": {
    "metaTitle": "Nordora Vital Home | Private sanza-Wellnessrituale",
    "metaDescription": "Bringen Sie sanza in Ihr tägliches Wohlbefinden zu Hause – mit privaten Ritualen für Erholung, Entspannung, Ruhe und moderne Körperpflege.",
    "eyebrow": "sanza zu Hause",
    "headline": "Eine einfache Möglichkeit, Ihren Körper jeden Tag zu unterstützen.",
    "intro": "sanza bringt moderne Wellness-Technologie in Ihren Alltag – für Erholung, Ruhe, Ausgeglichenheit und die Momente, die Ihnen helfen, sich im Alltag besser zu fühlen. Nutzen Sie es nach dem Sport, vor dem Schlafengehen, in stressigen Wochen, nach Reisen oder einfach als regelmäßige Methode, Ihren Körper zu unterstützen und sich um sich selbst zu kümmern.",
    "primary": "Entdecken Sie das Erlebnis",
    "secondary": "Programme ansehen",
    "heroNote": "Ein persönliches Wellness-System für wiederkehrende Momente der Ruhe.",
    "introBlockHeadline": "Ihr Tag wirkt sich auf Ihren Körper aus. sanza hilft Ihnen, darauf zu reagieren.",
    "introBlockBody": "Lange Stunden am Schreibtisch, Trainingseinheiten, Reisen, Stress, schlechter Schlaf und stressige Wochen können dazu führen, dass der Körper Anspannung, Müdigkeit oder Unruhe mit sich trägt – selbst an guten Tagen. sanza bietet dir eine einfache Möglichkeit, Erholung und Ruhe in deinen Alltag zu integrieren: vor dem Schlafengehen, nach dem Sport, nach der Arbeit oder wann immer du einen klaren Moment zum Durchatmen brauchst. Das Erlebnis ist einfach, angenehm und persönlich: Wähle ein Programm, verwende das passende Zubehör für den Moment und gib deinem Körper Zeit, zur Ruhe zu kommen.",
    "usesEyebrow": "Alltag",
    "usesHeadline": "Eine einfache Möglichkeit, deinen Körper den ganzen Tag über zu pflegen.",
    "rituals": [
      {
        "title": "Erholung nach körperlicher Aktivität",
        "body": "Nach dem Training, Sport, Spaziergängen oder körperlich anstrengenden Tagen bietet sanza deinem Körper eine einfache Möglichkeit, nach der Anstrengung zu entschleunigen, sich zu erholen und zur Ruhe zu kommen.",
      },
      {
        "title": "Täglicher Reset",
        "body": "Bei langen Arbeitstagen, Bildschirmarbeit, Stress oder geistiger Überlastung. Nutze sanza, wenn du den Druck des Tages loswerden und wieder ins Gleichgewicht kommen möchtest.",
      },
      {
        "title": "Vorbereitung auf Ruhe und Schlaf",
        "body": "Für die Abendstunden, wenn Ihr Körper ein deutlicheres Signal braucht, dass der Tag zu Ende geht. sanza hilft Ihnen, einen ruhigeren Übergang vor dem Schlafengehen zu schaffen.",
      },
      {
        "title": "Persönliches Wohlbefinden",
        "body": "Für die regelmäßige Anwendung in Ihrem eigenen Rhythmus – morgens, abends, am Wochenende oder wann immer Sie Ihren Körper, Ihre Energie und Ihre tägliche Leistungsfähigkeit unterstützen möchten.",
      },
    ],
    "designEyebrow": "Entwickelt für den privaten Bereich",
    "designHeadline": "Professionelle Wellness-Technologie, angepasst an den Alltag zu Hause.",
    "designBody": "Sie suchen nicht nach einer weiteren Wellness-Idee, die sich zwar gut anhört, aber nie in den Alltag passt. Sie wollen etwas, das Sie tatsächlich nutzen können – wenn Ihr Tag vollgepackt ist, wenn sich Ihr Körper müde anfühlt, wenn Ihr Geist klar bleiben muss und wenn Sie Ihr Wohlbefinden fördern möchten, bevor Sie sich völlig ausgelaugt fühlen. sanza hilft Ihnen dabei, Ruhe, Erholung und Ausgeglichenheit in die alltäglichen Momente zu bringen, die bestimmen, wie Sie sich fühlen, wie Sie Leistung bringen und wie Sie sich erholen.",
    "technologyHeadline": "Drei Technologien. Eine einfachere Art, Ihren Körper zu unterstützen.",
    "technologyBody": "sanza unterscheidet sich dadurch, dass es nicht auf eine einzige Methode setzt. Das System vereint pulsierende elektromagnetische Felder, Biofrequenz-Mikrostrom und fokussierte Lichtanwendung in einer einzigen Anwendung – so können Sie den Körper während derselben Sitzung auf vielfältige Weise unterstützen.\r\n\r\nDie Matte wird für Ganzkörpersitzungen verwendet. Die Handelektroden ergänzen die Biofrequenzanwendung. Der Lichtapplikator wird für gezieltere Bereiche eingesetzt. Zusammen helfen sie Ihnen, einen einfachen täglichen Moment der Erholung, Ruhe, Sauerstoffversorgung, Energie, Konzentration und körperlichen Balance zu schaffen – ohne separate Geräte oder eine komplizierte Routine.",
    "technologyPrimary": "So funktioniert es",
    "technologySecondary": "Programme ansehen",
    "contactEyebrow": "Kontakt",
    "contactHeadline": "Sie sind sich nicht sicher, wie sanza in Ihr Leben passen würde?",
    "contactBody": "Sagen Sie uns, was Sie unterstützen möchten: Genesung, Schlaf, Stress, Energie, Sport, Reisen oder das tägliche Wohlbefinden. Wir helfen Ihnen dabei, zu verstehen, welche Konfiguration sinnvoll ist, mit welchen Programmen Sie beginnen sollten und wie sanza zu einem einfachen Bestandteil Ihrer persönlichen Routine werden kann.",
    "contactPrimary": "Buchen Sie eine persönliche Einführung",
    "contactSecondary": "Stellen Sie eine Frage",
    "contactPills": [
      "Auswahl der Konfiguration",
      "Erste Programme",
      "Täglicher Rhythmus",
    ],
    "contactPanelHeading": "Persönliche Beratung",
    "contactPanelBody": "Nutzen Sie das Einführungsgespräch für eine geführte Einführung oder öffnen Sie das Fragefeld, wenn Sie lieber zuerst ein paar Details senden möchten.",
    "heroAlt": "Eine ruhige Wellness-Umgebung zu Hause, vorbereitet für ein Sanza-Ritual",
    "systemAlt": "Sanza-Systemkomponenten für den Heimgebrauch angeordnet",
  },
  "lv": {
    "metaTitle": "Nordora Vital Home | Privāti „sanza“ labsajūtas rituāli",
    "metaDescription": "Iekļaujiet „sanza“ savā ikdienas mājas labsajūtā ar privātiem rituāliem, kas veltīti atgūšanai, relaksācijai, mieram un mūsdienīgai personīgajai kopšanai.",
    "eyebrow": "„sanza“ mājās",
    "headline": "Vienkāršs veids, kā ikdienā rūpēties par savu ķermeni.",
    "intro": "sanza ievieš modernas labsajūtas tehnoloģijas jūsu ikdienas rutīnā — atveseļošanai, mieram, līdzsvaram un brīžiem, kas palīdz jums justies labāk ikdienā. Lietojiet to pēc sporta, pirms miega, aizņemtajās nedēļās, pēc ceļojuma vai vienkārši kā regulāru veidu, kā atbalstīt savu ķermeni un rūpēties par sevi.",
    "primary": "Izpētiet pieredzi",
    "secondary": "Apskatiet programmas",
    "heroNote": "Personīgā labsajūtas sistēma atkārtojamiem miera brīžiem.",
    "introBlockHeadline": "Jūsu diena ietekmē jūsu ķermeni. sanza palīdz jums reaģēt.",
    "introBlockBody": "Ilgas stundas pie rakstāmgalda, treniņi, ceļojumi, stress, slikts miegs un aizņemtas nedēļas var radīt organismā spriedzi, nogurumu vai nemieru — pat labās dienās. sanza piedāvā vienkāršu veidu, kā iekļaut atgūšanos un mieru savā ikdienas rutīnā pirms miega, pēc fiziskām aktivitātēm, pēc darba vai jebkurā brīdī, kad vēlaties skaidru mirkli, lai atjaunotu spēkus. Pieredze ir viegli lietojama, ērta un personiska: izvēlieties programmu, izmantojiet brīdim piemērotu piederumu un dodiet savam ķermenim laiku, lai atgūtos.",
    "usesEyebrow": "Ikdienas lietošana",
    "usesHeadline": "Vienkāršs veids, kā rūpēties par savu ķermeni visas dienas garumā.",
    "rituals": [
      {
        "title": "Atgūšanās pēc aktivitātes",
        "body": "Pēc treniņa, sporta, pastaigas vai fiziski smagas dienas sanza piedāvā jūsu ķermenim vienkāršu veidu, kā palēnināt tempu, atgūties un nomierināties pēc piepūles.",
      },
      {
        "title": "Ikdienas atjaunošanās",
        "body": "Ilgām darba dienām, ekrāna laika pavadīšanai, stresam vai garīgai pārslodzei. Lietojiet sanza, kad vēlaties atbrīvoties no dienas spriedzes un atgūt līdzsvaru.",
      },
      {
        "title": "Atpūta un sagatavošanās miegam",
        "body": "Vakara stundām, kad jūsu ķermenim nepieciešams skaidrāks signāls, ka diena ir beigusies. sanza palīdz jums radīt mierīgāku pāreju pirms atpūtas.",
      },
      {
        "title": "Personīgā labklājība",
        "body": "Regulārai lietošanai jūsu paša ritmā — no rīta, vakarā, nedēļas nogalēs vai kad vien vēlaties atbalstīt savu ķermeni, enerģiju un ikdienas sniegumu.",
      },
    ],
    "designEyebrow": "Paredzēts privātām telpām",
    "designHeadline": "Profesionāla labsajūtas tehnoloģija, pielāgota mājas apstākļiem.",
    "designBody": "Jūs nemeklējat vēl vienu labsajūtas ideju, kas izklausās jauki, bet nekad neiederas reālajā dzīvē. Jūs vēlaties kaut ko, ko varat patiešām izmantot — kad jūsu diena ir piepildīta, kad jūsu ķermenis jūtas noguris, kad jūsu prātam ir nepieciešams palikt skaidram un kad jūs vēlaties atbalstīt savu labsajūtu, pirms jūtaties pilnīgi izsmelti. sanza palīdz jums pievienot mieru, atjaunošanos un līdzsvaru ikdienas mirkļiem, kas veido to, kā jūs jūtaties, darbojaties un atpūšaties.",
    "technologyHeadline": "Trīs tehnoloģijas. Viens vienkāršāks veids, kā atbalstīt savu ķermeni.",
    "technologyBody": "„Sanza“ atšķiras ar to, ka tā nebalstās uz vienu konkrētu metodi. Šī sistēma vienā ierīcē apvieno pulsējošus elektromagnētiskos laukus, biofrekvences mikrostrāvu un fokusuētu gaismas iedarbību — tādējādi vienā seansā jūs varat atbalstīt organismu vairāk nekā vienā veidā.\r\n\r\nPaklājs tiek izmantots visa ķermeņa seansiem. Rokas elektrodus izmanto biofrekvences pielietošanai. Gaismas aplikatoru izmanto konkrētām zonām. Kopā tie palīdz jums radīt vienkāršu ikdienas brīdi atpūtai, mieram, skābekļa piegādei, enerģijai, koncentrēšanai un fiziskajam līdzsvaram — bez nepieciešamības pēc atsevišķām ierīcēm vai sarežģītas rutīnas.",
    "technologyPrimary": "Uzziniet, kā tas darbojas",
    "technologySecondary": "Apskatiet programmas",
    "contactEyebrow": "Sazinieties",
    "contactHeadline": "Neesat pārliecināts, kā sanza iederētos jūsu dzīvē?",
    "contactBody": "Pastāstiet mums, ko vēlaties uzlabot: atveseļošanos, miegu, stresa pārvarēšanu, enerģijas līmeni, sportu, ceļošanu vai ikdienas labsajūtu. Mēs palīdzēsim jums saprast, kāda konfigurācija ir piemērotākā, ar kurām programmām sākt un kā sanza var kļūt par vienkāršu jūsu ikdienas rutīnas sastāvdaļu.",
    "contactPrimary": "Rezervējiet personīgu ievadu",
    "contactSecondary": "Uzdot jautājumu",
    "contactPills": [
      "Konfigurācijas izvēle",
      "Pirmās programmas",
      "Ikdienas ritms",
    ],
    "contactPanelHeading": "Personīgā konsultācija",
    "contactPanelBody": "Izmantojiet ievada zvanu, lai saņemtu vadītu pārskatu, vai atveriet jautājumu paneli, ja vēlaties vispirms nosūtīt dažas detaļas.",
    "heroAlt": "Klusa mājas labsajūtas vide, sagatavota sanza rituālam",
    "systemAlt": "sanza sistēmas komponenti, kas sakārtoti lietošanai mājās",
  },
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[homeLocale(locale)];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    metadataBase: new URL(getOriginForSurface("home")),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: getOriginForSurface("home"),
      siteName: "Nordora Vital Home",
      type: "website",
    },
  };
}

export default async function HomeUserPage({ params }: Props) {
  const { locale: routeLocale } = await params;
  const locale = homeLocale(routeLocale);
  const copy = pageCopy[locale];
  const heads = await headers();
  const surface = getSiteSurface(heads.get("x-forwarded-host") ?? heads.get("host"));
  const homePath = (path: string) => getHomeDisplayPath(surface, path);
  const experienceHref = homePath("/how-it-works");
  const programsHref = homePath("/programs");
  const calDiscoveryUrl =
    process.env.NEXT_PUBLIC_CAL_DISCOVERY_URL?.trim() || DEFAULT_CAL_DISCOVERY_URL;

  return (
    <HomeSiteLayout locale={locale}>
      <main className="site-marketing-root">
        <section
          className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--brand-deep)]"
          aria-labelledby="homeuse-hero-heading"
        >
          <div className="relative min-h-[min(92dvh,880px)] lg:min-h-[min(88dvh,800px)]">
            <div className="absolute inset-0">
              <Image
                src={IMAGE_PATHS.home.hero}
                alt=""
                fill
                priority
                className="absolute inset-0 h-full w-full object-cover object-center"
                aria-hidden
                sizes="100vw"
              />
            </div>
            <div className="home-hero-overlay pointer-events-none absolute inset-0" aria-hidden />
            <div className="arc-watermark" aria-hidden>
              <BrandArc
                color="#FFFFFF"
                size={700}
                className="absolute -right-24 -top-24 opacity-[0.06]"
              />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[min(92dvh,880px)] max-w-[1200px] flex-col justify-end px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 md:px-8 lg:min-h-[min(88dvh,800px)] lg:px-10 lg:pb-20 lg:pt-24">
              <div className="ml-auto w-full max-w-xl pb-4 text-right sm:max-w-2xl">
                <h1
                  id="homeuse-hero-heading"
                  className="font-heading text-h1 text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]"
                >
                  {copy.headline}
                </h1>
                <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.30)] md:ml-auto">
                  {copy.intro}
                </p>
                <div className="mt-10 flex flex-col items-end gap-3 sm:flex-row sm:justify-end sm:gap-4">
                  <Link href={experienceHref} className="btn-primary inline-flex justify-center">
                    {copy.primary}
                  </Link>
                  <Link href={programsHref} className="btn-ghost-white inline-flex justify-center">
                    {copy.secondary}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] px-5 py-20 sm:px-8 sm:py-24 md:py-28 lg:px-10">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <p className="campaign-eyebrow campaign-eyebrow--left mb-5 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#6f8a7a]">
                {copy.eyebrow}
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,4.2vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-[#1e2a22]">
                {copy.introBlockHeadline}
              </h2>
              <p className="mt-6 max-w-[640px] text-[1.05rem] leading-[1.76] text-[#1e2a22]/90 sm:text-[1.12rem]">
                {copy.introBlockBody}
              </p>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-[#d8cec2] bg-[#efe9e2] shadow-[0_2px_8px_rgba(30,42,34,0.08),0_8px_32px_rgba(30,42,34,0.08)] sm:min-h-[500px]">
              <Image
                src={IMAGE_PATHS.home.introBlock}
                alt={copy.heroAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 560px"
              />
            </div>
          </div>
        </section>

        <section className="home-band-full home-band--pillars py-24 text-[#f6f1ea] sm:py-28 lg:py-32">
          <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="campaign-eyebrow campaign-eyebrow--center mb-5 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/82">
                {copy.usesEyebrow}
              </p>
              <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.3)]">
                {copy.usesHeadline}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.65] text-white/92 sm:text-xl">
                {copy.designBody}
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-7 xl:grid-cols-4">
              {copy.rituals.map((ritual, index) => {
                const visual = ritualVisuals[index % ritualVisuals.length];

                return (
                  <DarkMarketingCard
                    key={ritual.title}
                    title={ritual.title}
                    body={ritual.body}
                    cta={copy.secondary}
                    href={programsHref}
                    mediaClassName="bg-[#122e27]"
                    titleInsetClassName="right-6"
                    media={
                      <>
                        <Image
                          src={visual.src}
                          alt={visual.alt}
                          fill
                          className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 320px"
                          style={{ objectPosition: visual.position }}
                        />
                        <div
                          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,22,0.02)_0%,rgba(6,26,22,0.10)_34%,rgba(6,26,22,0.84)_100%)]"
                          aria-hidden
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden />
                      </>
                    }
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="home-band-full home-band--system-visual relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-[#d8cec2] bg-[#efe9e2] shadow-[0_2px_8px_rgba(30,42,34,0.08),0_8px_32px_rgba(30,42,34,0.08)]">
              <Image
                src={IMAGE_PATHS.home.systemHero}
                alt={copy.systemAlt}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1023px) 100vw, 520px"
              />
            </div>
            <div>
              <p className="campaign-eyebrow campaign-eyebrow--left mb-5 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#6f8a7a]">
                {copy.designEyebrow}
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,4.2vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-[#1e2a22]">
                {copy.technologyHeadline}
              </h2>
              <div className="mt-6 max-w-[620px] space-y-5 text-[1.05rem] leading-[1.76] text-[#1e2a22]/90 sm:text-[1.12rem]">
                {copy.technologyBody.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={experienceHref} className="btn-primary inline-flex justify-center">
                  {copy.technologyPrimary}
                </Link>
                <Link href={programsHref} className="btn-outline inline-flex justify-center">
                  {copy.technologySecondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="home-contact-band relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="home-contact-band__inner mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.5fr)] lg:items-center lg:gap-16">
            <div className="relative z-10">
              <p className="campaign-eyebrow campaign-eyebrow--left mb-5 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#6f8a7a]">
                {copy.contactEyebrow}
              </p>
              <h2 className="font-heading text-[clamp(1.85rem,4.2vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-[#1e2a22]">
                {copy.contactHeadline}
              </h2>
              <p className="mt-6 max-w-[620px] text-[1.05rem] leading-[1.76] text-[#1e2a22]/90 sm:text-[1.12rem]">
                {copy.contactBody}
              </p>
              <div className="mt-7 flex max-w-[620px] flex-wrap gap-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#6f8a7a]">
                {copy.contactPills.map((pill) => (
                  <span key={pill} className="home-contact-pill">
                    {pill}
                  </span>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={calDiscoveryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary inline-flex justify-center"
                >
                  {copy.contactPrimary}
                </a>
                <ContactDrawerTrigger
                  className="btn-outline home-contact-outline inline-flex justify-center"
                  options={{ drawerType: "homePersonal" }}
                >
                  {copy.contactSecondary}
                </ContactDrawerTrigger>
              </div>
            </div>

            <div className="home-contact-panel relative z-10 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8e6f7c]">
                {copy.contactPanelHeading}
              </p>
              <p className="mt-4 text-[1rem] leading-[1.7] text-[#1e2a22]/88">
                {copy.contactPanelBody}
              </p>
              <div className="my-6 h-px bg-[linear-gradient(90deg,rgba(165,133,146,0.38),rgba(111,138,122,0.16),transparent)]" />
              <div className="mt-6 grid gap-3">
                <a
                  href={calDiscoveryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary inline-flex justify-center"
                >
                  {copy.contactPrimary}
                </a>
                <ContactDrawerTrigger
                  className="btn-outline home-contact-outline inline-flex justify-center"
                  options={{ drawerType: "homePersonal" }}
                >
                  {copy.contactSecondary}
                </ContactDrawerTrigger>
              </div>
            </div>
          </div>
        </section>
      </main>
    </HomeSiteLayout>
  );
}
