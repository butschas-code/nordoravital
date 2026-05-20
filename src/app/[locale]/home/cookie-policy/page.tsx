import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { HomeLegalLinks, HomeLegalPage } from "@/components/home-site/home-legal-page";
import { HomeSiteLayout } from "@/components/home-site/home-site-shell";
import { getOriginForSurface } from "@/lib/domains";
import { homeLocale } from "@/lib/home-copy";

type Props = { params: Promise<{ locale: string }> };

const pageCopy = {
  "en": {
    "metaTitle": "Cookie Policy | Nordora Vital Home",
    "metaDescription": "Information about how Nordora Vital Home uses essential, preference and analytics cookies.",
    "eyebrow": "Cookies",
    "title": "Cookie Policy",
    "description": "This page explains how cookies support language preferences, consent choices and basic website measurement on the Nordora Vital Home website.",
    "updated": "Last updated: May 2026",
    "whatTitle": "What Cookies Are",
    "what": "Cookies are small text files stored on your device when you visit a website. They help the website remember choices, operate correctly and understand basic usage patterns.",
    "useTitle": "How We Use Cookies",
    "useIntro": "We use cookies to:",
    "uses": [
      "Make the website work correctly.",
      "Remember your language preference.",
      "Remember your cookie consent choice.",
      "Measure website use in aggregate, where analytics are active and consent is required.",
    ],
    "noAds": "We do not use cookies for advertising, remarketing or cross-site behavioral profiling.",
    "tableTitle": "Cookies We Use",
    "headers": [
      "Name",
      "Purpose",
      "Type",
      "Duration",
    ],
    "rows": [
      [
        "NEXT_LOCALE",
        "Stores your selected language.",
        "Essential preference",
        "Up to 1 year",
      ],
      [
        "nv_cookie_consent",
        "Stores whether you accepted all cookies or essential cookies only.",
        "Essential preference",
        "Until cleared in your browser",
      ],
      [
        "Analytics cookies",
        "Help us understand visits, traffic sources and page performance in aggregate.",
        "Optional analytics",
        "Depends on the analytics provider",
      ],
    ],
    "choicesTitle": "Your Choices",
    "choices": "You can choose essential cookies only or accept all cookies through the cookie banner. You can also clear cookies or block them in your browser settings at any time.",
    "essential": "If you block essential cookies, some parts of the website, such as language preference, may not work as expected.",
    "thirdTitle": "Third-Party Cookies",
    "third": "External websites linked from this site, including shop environments, may set their own cookies. Their cookies are controlled by those external providers and are governed by their own policies.",
    "contactTitle": "Contact",
    "contact": "Questions about cookies can be sent to info@nordoravital.com.",
    "links": {
      "related": "Related pages",
      "privacy": "Privacy Policy",
      "terms": "Terms",
      "cookies": "Cookie Policy",
      "imprint": "Imprint",
    },
  },
  "de": {
    "metaTitle": "Cookie-Richtlinie | Nordora Vital Home",
    "metaDescription": "Informationen darüber, wie Nordora Vital Home essentielle, Präferenz- und Analyse-Cookies verwendet.",
    "eyebrow": "Cookies",
    "title": "Cookie-Richtlinie",
    "description": "Auf dieser Seite wird erläutert, wie Cookies Sprachpräferenzen, Einwilligungsentscheidungen und grundlegende Website-Messungen auf der Website von Nordora Vital Home unterstützen.",
    "updated": "Zuletzt aktualisiert: Mai 2026",
    "whatTitle": "Was sind Cookies?",
    "what": "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie helfen der Website, Einstellungen zu speichern, korrekt zu funktionieren und grundlegende Nutzungsmuster zu erfassen.",
    "useTitle": "Wie wir Cookies verwenden",
    "useIntro": "Wir verwenden Cookies, um:",
    "uses": [
      "die korrekte Funktion der Website sicherzustellen.",
      "Ihre Spracheinstellung zu speichern.",
      "Ihre Einwilligungsentscheidung bezüglich Cookies zu speichern.",
      "die Nutzung der Website in zusammengefasster Form zu messen, sofern Analysen aktiv sind und eine Einwilligung erforderlich ist.",
    ],
    "noAds": "Wir verwenden keine Cookies für Werbung, Remarketing oder standortübergreifende Verhaltensprofilierung.",
    "tableTitle": "Von uns verwendete Cookies",
    "headers": [
      "Name",
      "Zweck",
      "Typ",
      "Dauer",
    ],
    "rows": [
      [
        "NEXT_LOCALE",
        "Speichert die von Ihnen gewählte Sprache.",
        "Unverzichtbare Präferenz",
        "Bis zu 1 Jahr",
      ],
      [
        "nv_cookie_consent",
        "Speichert, ob Sie alle Cookies oder nur unverzichtbare Cookies akzeptiert haben.",
        "Unverzichtbare Einstellung",
        "Bis zur Löschung in Ihrem Browser",
      ],
      [
        "Analytik-Cookies",
        "Helfen uns, Besuche, Traffic-Quellen und die Seitenleistung insgesamt zu verstehen.",
        "Optionale Analytik",
        "Hängt vom Analytik-Anbieter ab",
      ],
    ],
    "choicesTitle": "Ihre Wahl",
    "choices": "Sie können über das Cookie-Banner wählen, ob Sie nur unverzichtbare Cookies akzeptieren oder alle Cookies akzeptieren möchten. Sie können Cookies auch jederzeit in Ihren Browsereinstellungen löschen oder blockieren.",
    "essential": "Wenn Sie unverzichtbare Cookies blockieren, funktionieren einige Teile der Website, wie z. B. die Spracheinstellung, möglicherweise nicht wie erwartet.",
    "thirdTitle": "Cookies von Drittanbietern",
    "third": "Externe Websites, die von dieser Seite aus verlinkt sind, einschließlich Shop-Umgebungen, setzen möglicherweise eigene Cookies. Diese Cookies werden von den jeweiligen externen Anbietern kontrolliert und unterliegen deren eigenen Richtlinien.",
    "contactTitle": "Kontakt",
    "contact": "Fragen zu Cookies können an info@nordoravital.com gesendet werden.",
    "links": {
      "related": "Verwandte Seiten",
      "privacy": "Datenschutzerklärung",
      "terms": "Nutzungsbedingungen",
      "cookies": "Cookie-Richtlinie",
      "imprint": "Impressum",
    },
  },
  "lv": {
    "metaTitle": "Sīkdatņu politika | Nordora Vital Home",
    "metaDescription": "Informācija par to, kā Nordora Vital Home izmanto nepieciešamās, preferenču un analītiskās sīkdatnes.",
    "eyebrow": "Sīkdatnes",
    "title": "Sīkdatņu politika",
    "description": "Šajā lapā ir izskaidrots, kā sīkdatnes atbalsta valodas iestatījumus, piekrišanas izvēles un pamata tīmekļa vietnes mērījumus Nordora Vital Home tīmekļa vietnē.",
    "updated": "Pēdējā atjaunināšana: 2026. gada maijs",
    "whatTitle": "Kas ir sīkdatnes",
    "what": "Sīkdatnes ir nelieli teksta faili, kas tiek saglabāti jūsu ierīcē, kad apmeklējat tīmekļa vietni. Tās palīdz tīmekļa vietnei atcerēties izvēles, darboties pareizi un izprast pamata lietošanas modeļus.",
    "useTitle": "Kā mēs izmantojam sīkdatnes",
    "useIntro": "Mēs izmantojam sīkdatnes, lai:",
    "uses": [
      "Nodrošinātu tīmekļa vietnes pareizu darbību.",
      "Atcerētos jūsu valodas izvēli.",
      "Atcerētos jūsu izvēli par piekrišanu sīkdatnēm.",
      "Kopumā novērtētu tīmekļa vietnes lietošanu, ja analītika ir aktīva un ir nepieciešama piekrišana.",
    ],
    "noAds": "Mēs neizmantojam sīkdatnes reklāmai, atkārtotai mārketinga kampaņai vai uzvedības profilēšanai starp tīmekļa vietnēm.",
    "tableTitle": "Sīkdatnes, ko mēs izmantojam",
    "headers": [
      "Nosaukums",
      "Mērķis",
      "Tips",
      "Derīguma termiņš",
    ],
    "rows": [
      [
        "NEXT_LOCALE",
        "Saglabā jūsu izvēlēto valodu.",
        "Būtiska iestatījuma sīkdatne",
        "Līdz 1 gadam",
      ],
      [
        "nv_cookie_consent",
        "Saglabā informāciju par to, vai esat piekritis visām sīkdatnēm vai tikai būtiskajām sīkdatnēm.",
        "Būtiska iestatījuma sīkdatne",
        "Līdz brīdim, kad tiek dzēsta jūsu pārlūkprogrammā",
      ],
      [
        "Analītikas sīkdatnes",
        "Palīdz mums kopumā izprast apmeklējumus, satiksmes avotus un lapu veiktspēju.",
        "Neobligātas analītikas sīkdatnes",
        "Atkarībā no analītikas pakalpojuma sniedzēja",
      ],
    ],
    "choicesTitle": "Jūsu izvēles",
    "choices": "Jūs varat izvēlēties tikai būtiskās sīkdatnes vai pieņemt visas sīkdatnes, izmantojot sīkdatņu banneru. Jūs varat arī jebkurā brīdī dzēst sīkdatnes vai bloķēt tās savas pārlūkprogrammas iestatījumos.",
    "essential": "Ja bloķējat būtiskās sīkdatnes, dažas tīmekļa vietnes daļas, piemēram, valodas izvēle, var nedarboties kā paredzēts.",
    "thirdTitle": "Trešo pušu sīkdatnes",
    "third": "Ārējās tīmekļa vietnes, uz kurām ir saites no šīs vietnes, tostarp veikalu vides, var iestatīt savas sīkdatnes. To sīkdatnes kontrolē šie ārējie pakalpojumu sniedzēji, un tās regulē to pašu politikas.",
    "contactTitle": "Kontakti",
    "contact": "Jautājumus par sīkdatnēm var sūtīt uz info@nordoravital.com.",
    "links": {
      "related": "Saistītās lapas",
      "privacy": "Privātuma politika",
      "terms": "Noteikumi",
      "cookies": "Sīkdatņu politika",
      "imprint": "Impressum",
    },
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
      canonical: "/cookie-policy",
    },
  };
}

export default async function HomeCookiePolicyPage() {
  const locale = homeLocale(await getLocale());
  const copy = pageCopy[locale];

  return (
    <HomeSiteLayout>
      <HomeLegalPage
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        updated={copy.updated}
      >
        <h2>1. {copy.whatTitle}</h2>
        <p>{copy.what}</p>

        <h2>2. {copy.useTitle}</h2>
        <p>{copy.useIntro}</p>
        <ul>
          {copy.uses.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{copy.noAds}</p>

        <h2>3. {copy.tableTitle}</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                {copy.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={cell}>
                      {index === 0 && /^[A-Z_]+$/.test(cell) ? <code>{cell}</code> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>4. {copy.choicesTitle}</h2>
        <p>{copy.choices}</p>
        <p>{copy.essential}</p>

        <h2>5. {copy.thirdTitle}</h2>
        <p>{copy.third}</p>

        <h2>6. {copy.contactTitle}</h2>
        <p>{copy.contact}</p>
        <HomeLegalLinks {...copy.links} />
      </HomeLegalPage>
    </HomeSiteLayout>
  );
}
