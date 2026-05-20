import type { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SiteFooter } from "@/components/site-footer";
import { getSiteSurface, HOME_DOMAIN, PRO_DOMAIN } from "@/lib/domains";
import { homeLocale } from "@/lib/home-copy";
import { IMAGE_PATHS } from "@/lib/public-images";

type Props = { params: Promise<{ locale: string }> };

const pageCopy = {
  en: {
    metaTitle: "Nordora Vital | Wellness technology for professional spaces and modern homes",
    metaDescription:
      "Choose the Nordora Vital experience for clinics, recovery spaces, hotels, gyms, spas, or modern wellness rituals at home.",
    heroTitle: "Nordora Vital",
    heroHeadline: ["Wellbeing solutions", "for the moments", "when the body needs support."],
    heroBody:
      "We bring carefully selected wellness technology into professional spaces and private homes. sanza helps create simple moments of calm, recovery and balance, whether you care for clients or want to feel better at home.",
    welcomeTitle: "Welcome to Nordora Vital.",
    welcomeBody1:
      "We support wellbeing and healthy living with modern wellness technology for the places where people need to feel better: at home, in professional care spaces, in spas, gyms, hotels and recovery environments.",
    welcomeBody2:
      "sanza can be used in different ways depending on who you are and what you need. That is why we have created two clear paths for you.",
    welcomePrompt: "Choose the one that fits you best:",
    paths: [
      {
        title: "For your clients’ wellbeing.",
        label: "For professionals",
        text: "For clinics, physiotherapists, dentists, spas, hotels, gyms and recovery spaces that want to make every visit feel calmer, more complete and more memorable.",
        detail:
          "Use sanza before, during or after your main service to help clients settle in, unwind and leave with a stronger sense of care.",
        bestForLabel: "Best for",
        bestFor: "Clinics · Physiotherapy · Dentistry · Spas · Hotels · Gyms · Sports recovery",
        button: "Enter Professional Site",
        smallCta: "For business use, demos and professional applications.",
        href: `https://${PRO_DOMAIN}/en`,
        image: IMAGE_PATHS.gateway.proCard,
        imageAlt: "Professional care team preparing a calm sanza client experience",
      },
      {
        title: "For your own wellbeing.",
        label: "For personal use",
        text: "For private users who want to feel better after long workdays, sport, travel, stress or too much screen time.",
        detail:
          "Use sanza to make your home feel more restorative: for evening calm, sleep preparation, post-workout recovery and the quiet moments where you come back to yourself.",
        bestForLabel: "Best for",
        bestFor: "Home recovery · Evening calm · Sleep rituals · After sport · Travel reset · Daily balance",
        button: "Enter Home Site",
        smallCta: "For private use, home programs and personal setups.",
        href: `https://${HOME_DOMAIN}/en/home`,
        image: IMAGE_PATHS.gateway.homeCard,
        imageAlt: "Premium sanza home wellness product scene in warm daylight",
      },
    ],
  },
  de: {
    metaTitle: "Nordora Vital | Wellness-Technologie für professionelle Räume und Zuhause",
    metaDescription:
      "Wählen Sie den passenden Nordora Vital Bereich für Kliniken, Recovery Spaces, Hotels, Fitness, Spas oder moderne Wohlfühlrituale zu Hause.",
    heroTitle: "Nordora Vital",
    heroHeadline: ["Wellbeing-Lösungen", "für die Momente,", "in denen der Körper Unterstützung braucht."],
    heroBody:
      "Wir bringen sorgfältig ausgewählte Wellness-Technologie in professionelle Räume und private Zuhause. sanza hilft, einfache Momente von Ruhe, Regeneration und Balance zu schaffen, ob Sie Kundinnen und Kunden betreuen oder sich zu Hause besser fühlen möchten.",
    welcomeTitle: "Willkommen bei Nordora Vital.",
    welcomeBody1:
      "Wir unterstützen Wohlbefinden und gesundes Leben mit moderner Wellness-Technologie für Orte, an denen Menschen sich besser fühlen möchten: zu Hause, in professionellen Betreuungsräumen, in Spas, Fitnessstudios, Hotels und Recovery-Umgebungen.",
    welcomeBody2:
      "sanza kann unterschiedlich genutzt werden, je nachdem, wer Sie sind und was Sie brauchen. Deshalb haben wir zwei klare Wege für Sie geschaffen.",
    welcomePrompt: "Wählen Sie den Weg, der am besten zu Ihnen passt:",
    paths: [
      {
        title: "Für das Wohlbefinden Ihrer Kunden.",
        label: "Für Professionals",
        text: "Für Kliniken, Physiotherapie, Zahnarztpraxen, Spas, Hotels, Fitnessstudios und Recovery Spaces, die jeden Besuch ruhiger, vollständiger und einprägsamer machen möchten.",
        detail:
          "Nutzen Sie sanza vor, während oder nach Ihrer Hauptleistung, damit Kunden ankommen, loslassen und mit einem stärkeren Gefühl von Fürsorge gehen.",
        bestForLabel: "Ideal für",
        bestFor: "Kliniken · Physiotherapie · Zahnmedizin · Spas · Hotels · Fitnessstudios · Sport-Recovery",
        button: "Professional Site öffnen",
        smallCta: "Für geschäftliche Nutzung, Demos und professionelle Anwendungen.",
        href: `https://${PRO_DOMAIN}/de`,
        image: IMAGE_PATHS.gateway.proCard,
        imageAlt: "Professionelles Betreuungsteam bereitet ein ruhiges sanza Kundenerlebnis vor",
      },
      {
        title: "Für Ihr eigenes Wohlbefinden.",
        label: "Für private Nutzung",
        text: "Für private Nutzer, die sich nach langen Arbeitstagen, Sport, Reisen, Stress oder zu viel Bildschirmzeit besser fühlen möchten.",
        detail:
          "Nutzen Sie sanza, damit Ihr Zuhause erholsamer wird: für Abendruhe, Schlafvorbereitung, Regeneration nach dem Training und stille Momente, in denen Sie wieder bei sich ankommen.",
        bestForLabel: "Ideal für",
        bestFor: "Home Recovery · Abendruhe · Schlafrituale · Nach dem Sport · Reise-Reset · Tägliche Balance",
        button: "Home Site öffnen",
        smallCta: "Für private Nutzung, Home-Programme und persönliche Setups.",
        href: `https://${HOME_DOMAIN}/de/home`,
        image: IMAGE_PATHS.gateway.homeCard,
        imageAlt: "Premium sanza Home-Wellness-Produktszene in warmem Tageslicht",
      },
    ],
  },
  lv: {
    metaTitle: "Nordora Vital | Labsajūtas tehnoloģija profesionālām telpām un mājām",
    metaDescription:
      "Izvēlieties Nordora Vital pieredzi klīnikām, atjaunošanās telpām, viesnīcām, sporta zālēm, spa vai mūsdienīgiem labsajūtas rituāliem mājās.",
    heroTitle: "Nordora Vital",
    heroHeadline: ["Labsajūtas risinājumi", "brīžiem,", "kad ķermenim vajadzīgs atbalsts."],
    heroBody:
      "Mēs ienesam rūpīgi izvēlētu labsajūtas tehnoloģiju profesionālās telpās un privātās mājās. sanza palīdz radīt vienkāršus miera, atjaunošanās un līdzsvara mirkļus, neatkarīgi no tā, vai rūpējaties par klientiem vai vēlaties justies labāk mājās.",
    welcomeTitle: "Laipni lūdzam Nordora Vital.",
    welcomeBody1:
      "Mēs atbalstām labsajūtu un veselīgu dzīvesveidu ar mūsdienīgu labsajūtas tehnoloģiju vietās, kur cilvēkiem ir svarīgi justies labāk: mājās, profesionālās aprūpes telpās, spa, sporta zālēs, viesnīcās un atjaunošanās vidēs.",
    welcomeBody2:
      "sanza var izmantot dažādos veidos atkarībā no tā, kas jūs esat un kas jums nepieciešams. Tāpēc esam izveidojuši divus skaidrus ceļus.",
    welcomePrompt: "Izvēlieties to, kas jums der vislabāk:",
    paths: [
      {
        title: "Jūsu klientu labsajūtai.",
        label: "Profesionāļiem",
        text: "Klīnikām, fizioterapijai, zobārstniecībai, spa, viesnīcām, sporta zālēm un atjaunošanās telpām, kas vēlas padarīt katru apmeklējumu mierīgāku, pilnīgāku un atmiņā paliekošāku.",
        detail:
          "Izmantojiet sanza pirms, laikā vai pēc galvenā pakalpojuma, lai klientiem palīdzētu ieiet mierā, atslābt un aiziet ar spēcīgāku rūpju sajūtu.",
        bestForLabel: "Piemērots",
        bestFor: "Klīnikām · Fizioterapijai · Zobārstniecībai · Spa · Viesnīcām · Sporta zālēm · Sporta atjaunošanai",
        button: "Atvērt Professional Site",
        smallCta: "Biznesa lietošanai, demonstrācijām un profesionāliem pielietojumiem.",
        href: `https://${PRO_DOMAIN}/lv`,
        image: IMAGE_PATHS.gateway.proCard,
        imageAlt: "Profesionāla aprūpes komanda sagatavo mierīgu sanza klienta pieredzi",
      },
      {
        title: "Jūsu pašu labsajūtai.",
        label: "Personīgai lietošanai",
        text: "Privātiem lietotājiem, kuri vēlas justies labāk pēc garām darba dienām, sporta, ceļošanas, stresa vai pārāk ilga ekrāna laika.",
        detail:
          "Izmantojiet sanza, lai mājas kļūtu atjaunojošākas: vakara mieram, sagatavošanās rituāliem pirms miega, atjaunošanai pēc treniņa un klusajiem brīžiem, kuros atgriežaties pie sevis.",
        bestForLabel: "Piemērots",
        bestFor: "Mājas atjaunošanai · Vakara mieram · Miega rituāliem · Pēc sporta · Ceļojuma resetam · Ikdienas līdzsvaram",
        button: "Atvērt Home Site",
        smallCta: "Privātai lietošanai, mājas programmām un personīgiem komplektiem.",
        href: `https://${HOME_DOMAIN}/lv/home`,
        image: IMAGE_PATHS.gateway.homeCard,
        imageAlt: "Premium sanza mājas labsajūtas produkta aina siltā dienasgaismā",
      },
    ],
  },
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[homeLocale(locale)];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: "https://nordoravital.com",
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: "https://nordoravital.com",
      siteName: "Nordora Vital",
      type: "website",
    },
  };
}

export default async function GatewayPage({ params }: Props) {
  const { locale } = await params;
  const activeLocale = homeLocale(locale);
  const copy = pageCopy[activeLocale];
  const heads = await headers();
  const surface = getSiteSurface(heads.get("x-forwarded-host") ?? heads.get("host"));
  const paths = copy.paths.map((pathway, index) => ({
    ...pathway,
    href:
      surface === "local"
        ? index === 0
          ? `/${activeLocale}`
          : `/${activeLocale}/home`
        : pathway.href,
  }));

  return (
    <>
      <main className="overflow-hidden bg-[#f6f1ea] text-[#1e2a22]">
        <section
          className="relative isolate min-h-[min(92dvh,860px)] overflow-hidden"
          aria-labelledby="gateway-heading"
        >
          <Image
            src={IMAGE_PATHS.gateway.homeCard}
            alt=""
            fill
            priority
            aria-hidden
            sizes="100vw"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="home-hero-overlay pointer-events-none absolute inset-0 -z-10" aria-hidden />

          <div className="mx-auto flex min-h-[min(92dvh,860px)] max-w-[1200px] flex-col px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
            <header className="flex items-center justify-between gap-6">
              <Image
                src={IMAGE_PATHS.brand.logo}
                alt="Nordora Vital"
                width={246}
                height={226}
                priority
                className="h-auto w-[136px] object-contain brightness-0 invert sm:w-[170px]"
              />
              <LanguageSwitcher appearance="onDark" pathnameOverride="/gateway" />
            </header>

            <div className="flex flex-1 items-end pb-20 pt-24 sm:pb-28 lg:justify-end lg:pb-28">
              <div className="ml-auto w-full max-w-xl text-right sm:max-w-2xl">
                <h1
                  id="gateway-heading"
                  className="font-heading text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-normal text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]"
                >
                  {copy.heroTitle}
                </h1>
                <p className="mt-4 font-heading text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-normal text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
                  {copy.heroHeadline.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-white/92 [text-shadow:0_1px_10px_rgba(0,0,0,0.30)] sm:ml-auto sm:text-xl sm:leading-[1.6]">
                  {copy.heroBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="campaign-band-soft px-5 py-16 sm:px-8 sm:py-22 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.45fr_1fr] lg:gap-16">
              <h2 className="max-w-[12ch] font-heading text-[clamp(2rem,4vw,3.6rem)] font-bold leading-[1.04] tracking-normal text-[#1e2a22]">
                {copy.welcomeTitle}
              </h2>
              <div className="max-w-[760px] space-y-5 text-[1.04rem] leading-[1.8] text-[#6d6158] sm:text-[1.12rem]">
                <p>{copy.welcomeBody1}</p>
                <p>{copy.welcomeBody2}</p>
                <p>{copy.welcomePrompt}</p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {paths.map((pathway, index) => (
                <a
                  key={pathway.href}
                  href={pathway.href}
                  className="group flex min-h-[640px] overflow-hidden rounded-[24px] border border-white/12 bg-[#082721] shadow-2xl transition duration-300 ease-out hover:-translate-y-1 hover:border-[#a58592]/60 hover:shadow-[0_30px_96px_rgba(8,39,33,0.30)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6f8a7a]"
                >
                  <article className="flex w-full flex-col">
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0e3d34]">
                      <Image
                        src={pathway.image}
                        alt={pathway.imageAlt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${
                          index === 0
                            ? "from-[#a58592]/45 to-transparent"
                            : "from-[#6f8a7a]/55 to-transparent"
                        }`}
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#082721]/88 via-[#082721]/35 to-transparent"
                      />
                      <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/86">
                          {pathway.label}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-9 p-7 sm:p-9">
                      <div className="space-y-5">
                        <h2 className="font-heading text-[1.75rem] leading-tight tracking-normal text-white sm:text-[2.25rem]">
                          {pathway.title}
                        </h2>
                        <p className="max-w-[520px] text-[1.04rem] leading-[1.7] text-white/82">
                          {pathway.text}
                        </p>
                        <p className="max-w-[540px] text-[0.96rem] leading-[1.7] text-white/70">
                          {pathway.detail}
                        </p>
                        <div className="border-t border-white/12 pt-5">
                          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#a58592]">
                            {pathway.bestForLabel}
                          </p>
                          <p className="mt-2 text-[0.94rem] leading-[1.65] text-white/78">
                            {pathway.bestFor}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-5 border-t border-white/12 pt-6">
                        <span>
                          <span className="block text-sm font-semibold text-white">
                            {pathway.button}
                          </span>
                          <span className="mt-1 block max-w-[18rem] text-xs leading-5 text-white/56">
                            {pathway.smallCta}
                          </span>
                        </span>
                        <span
                          aria-hidden
                          className={`inline-flex size-11 items-center justify-center rounded-[10px] text-lg text-[#f6f1ea] ring-1 ring-white/15 transition duration-300 group-hover:translate-x-1 ${
                            index === 0 ? "bg-[#a58592]" : "bg-[#6f8a7a]"
                          }`}
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
