import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  HomeLegalContactBlock,
  HomeLegalLinks,
  HomeLegalPage,
} from "@/components/home-site/home-legal-page";
import { HomeSiteLayout } from "@/components/home-site/home-site-shell";
import { getOriginForSurface } from "@/lib/domains";
import { homeLocale } from "@/lib/home-copy";

type Props = { params: Promise<{ locale: string }> };

const pageCopy = {
  "en": {
    "metaTitle": "Privacy Policy | Nordora Vital Home",
    "metaDescription": "How Nordora Vital handles personal data for visitors and private users of the sanza home website.",
    "eyebrow": "Privacy",
    "title": "Privacy Policy",
    "description": "This policy explains what personal data we collect when you use the Nordora Vital Home website, contact us, or move from our pages to the external shop.",
    "updated": "Last updated: May 2026",
    "controller": "Who We Are",
    "controllerIntro": "The data controller responsible for this website is:",
    "register": "Commercial Register No.",
    "email": "Email",
    "dataTitle": "What Data We Collect",
    "dataIntro": "We collect only the data needed to operate the website, answer your requests and improve the experience:",
    "data": [
      "Contact details, if you email us or request guidance: name, email address, phone number and message content.",
      "Website usage data: IP address, browser type, device information, visited pages, timestamps and server logs.",
      "Cookie preferences, including whether you accepted all cookies or essential cookies only.",
      "Language preference, when you use the language selector.",
    ],
    "noHealth": "We do not knowingly collect data from children and we do not ask you to provide health information through this website.",
    "sections": [
      [
        "Why We Use Your Data",
        "We use personal data to operate, secure and maintain the website, remember language and cookie choices, respond to inquiries, understand website performance in aggregate where permitted, and meet legal or security obligations.",
      ],
      [
        "Legal Bases",
        "Depending on the situation, we process data on the basis of legitimate interest, consent, pre-contractual communication, or legal obligation under the GDPR.",
      ],
      [
        "External Shop",
        "The Shop link may take you to an external sanza shop environment. That shop may have its own checkout, account, payment, delivery and legal processes. Please review the privacy and legal information shown there before placing an order.",
      ],
      [
        "Retention",
        "We keep personal data only for as long as needed for the purpose collected. Contact messages are normally kept up to 3 years after the last meaningful interaction, legal records as required by law, and cookie consent records until you change or clear your preference.",
      ],
      [
        "Sharing",
        "We do not sell your personal data. We may share data with service providers that help us operate the website, host infrastructure, deliver email, maintain security or respond to inquiries under appropriate safeguards.",
      ],
      [
        "International Transfers",
        "Where data is transferred outside the European Economic Area, we use appropriate safeguards such as adequacy decisions or Standard Contractual Clauses where required.",
      ],
      [
        "Your Rights",
        "Under the GDPR, you may have the right to access, correct, delete, restrict or receive a copy of your data, object to certain processing, and withdraw consent where processing is based on consent.",
      ],
    ],
    "rightsContact": "To exercise your rights, contact us at",
    "complaintsTitle": "Complaints",
    "complaints": "You may contact the Latvian supervisory authority:",
    "cookiesTitle": "Cookies",
    "cookiesText": "For details about cookies, see our",
    "cookiePolicy": "Cookie Policy",
    "changesTitle": "Changes",
    "changes": "We may update this policy when our website, services or legal obligations change. The current version is always available on this page.",
    "links": {
      "related": "Related pages",
      "privacy": "Privacy Policy",
      "terms": "Terms",
      "cookies": "Cookie Policy",
      "imprint": "Imprint",
    },
  },
  "de": {
    "metaTitle": "Datenschutzerklärung | Nordora Vital Home",
    "metaDescription": "Wie Nordora Vital mit personenbezogenen Daten von Besuchern und privaten Nutzern der sanza-Homepage umgeht.",
    "eyebrow": "Datenschutz",
    "title": "Datenschutzerklärung",
    "description": "Diese Erklärung erläutert, welche personenbezogenen Daten wir erheben, wenn Sie die Nordora Vital Home-Website nutzen, uns kontaktieren oder von unseren Seiten zum externen Shop wechseln.",
    "updated": "Zuletzt aktualisiert: Mai 2026",
    "controller": "Wer wir sind",
    "controllerIntro": "Der für diese Website verantwortliche Datenverantwortliche ist:",
    "register": "Handelsregisternummer:",
    "email": "E-Mail",
    "dataTitle": "Welche Daten wir erheben",
    "dataIntro": "Wir erheben nur die Daten, die zum Betrieb der Website, zur Beantwortung Ihrer Anfragen und zur Verbesserung der Nutzererfahrung erforderlich sind:",
    "data": [
      "Kontaktdaten, wenn Sie uns eine E-Mail senden oder um Beratung bitten: Name, E-Mail-Adresse, Telefonnummer und Inhalt der Nachricht.",
      "Daten zur Website-Nutzung: IP-Adresse, Browsertyp, Geräteinformationen, besuchte Seiten, Zeitstempel und Serverprotokolle.",
      "Cookie-Einstellungen, einschließlich der Angabe, ob Sie alle Cookies oder nur notwendige Cookies akzeptiert haben.",
      "Spracheinstellung, wenn Sie die Sprachauswahl nutzen.",
    ],
    "noHealth": "Wir erheben wissentlich keine Daten von Kindern und bitten Sie nicht, über diese Website Gesundheitsdaten anzugeben.",
    "sections": [
      [
        "Warum wir Ihre Daten verwenden",
        "Wir verwenden personenbezogene Daten, um die Website zu betreiben, zu sichern und zu warten, Sprach- und Cookie-Einstellungen zu speichern, auf Anfragen zu reagieren, die Website-Leistung in zusammengefasster Form zu analysieren, sofern dies zulässig ist, und gesetzliche oder sicherheitsrelevante Verpflichtungen zu erfüllen.",
      ],
      [
        "Rechtsgrundlagen",
        "Je nach Situation verarbeiten wir Daten auf der Grundlage eines berechtigten Interesses, einer Einwilligung, vorvertraglicher Kommunikation oder einer gesetzlichen Verpflichtung gemäß der DSGVO.",
      ],
      [
        "Externer Shop",
        "Der Shop-Link führt Sie möglicherweise zu einer externen Sanza-Shop-Umgebung. Dieser Shop verfügt möglicherweise über eigene Prozesse für den Bestellvorgang, das Konto, die Zahlung, die Lieferung und rechtliche Angelegenheiten. Bitte lesen Sie die dort angezeigten Datenschutz- und rechtlichen Informationen, bevor Sie eine Bestellung aufgeben.",
      ],
      [
        "Aufbewahrung",
        "Wir bewahren personenbezogene Daten nur so lange auf, wie es für den Zweck der Erhebung erforderlich ist. Kontaktnachrichten werden in der Regel bis zu 3 Jahre nach der letzten wesentlichen Interaktion aufbewahrt, gesetzliche Aufzeichnungen so lange, wie es das Gesetz vorschreibt, und Aufzeichnungen über die Cookie-Einwilligung so lange, bis Sie Ihre Einstellungen ändern oder löschen.",
      ],
      [
        "Weitergabe",
        "Wir verkaufen Ihre personenbezogenen Daten nicht. Wir können Daten unter Einhaltung angemessener Sicherheitsvorkehrungen an Dienstleister weitergeben, die uns beim Betrieb der Website, beim Hosting der Infrastruktur, beim Versand von E-Mails, bei der Gewährleistung der Sicherheit oder bei der Beantwortung von Anfragen unterstützen.",
      ],
      [
        "Internationale Übermittlungen",
        "Wenn Daten außerhalb des Europäischen Wirtschaftsraums übermittelt werden, wenden wir bei Bedarf angemessene Schutzmaßnahmen wie Angemessenheitsbeschlüsse oder Standardvertragsklauseln an.",
      ],
      [
        "Ihre Rechte",
        "Gemäß der DSGVO haben Sie möglicherweise das Recht, auf Ihre Daten zuzugreifen, diese zu berichtigen, zu löschen, deren Verarbeitung einzuschränken oder eine Kopie davon zu erhalten, bestimmten Verarbeitungen zu widersprechen und Ihre Einwilligung zu widerrufen, sofern die Verarbeitung auf einer Einwilligung beruht.",
      ],
    ],
    "rightsContact": "Um Ihre Rechte auszuüben, kontaktieren Sie uns unter",
    "complaintsTitle": "Beschwerden",
    "complaints": "Sie können sich an die lettische Aufsichtsbehörde wenden:",
    "cookiesTitle": "Cookies",
    "cookiesText": "Einzelheiten zu Cookies finden Sie in unserer",
    "cookiePolicy": "Cookie-Richtlinie",
    "changesTitle": "Änderungen",
    "changes": "Wir können diese Richtlinie aktualisieren, wenn sich unsere Website, unsere Dienste oder unsere rechtlichen Verpflichtungen ändern. Die aktuelle Version ist immer auf dieser Seite verfügbar.",
    "links": {
      "related": "Verwandte Seiten",
      "privacy": "Datenschutzerklärung",
      "terms": "Nutzungsbedingungen",
      "cookies": "Cookie-Richtlinie",
      "imprint": "Impressum",
    },
  },
  "lv": {
    "metaTitle": "Privātuma politika | Nordora Vital Home",
    "metaDescription": "Kā Nordora Vital apstrādā apmeklētāju un sanza mājaslapas privāto lietotāju personas datus.",
    "eyebrow": "Privātums",
    "title": "Privātuma politika",
    "description": "Šī politika izskaidro, kādus personas datus mēs vācam, kad jūs izmantojat Nordora Vital Home tīmekļa vietni, sazināties ar mums vai pāriet no mūsu lapām uz ārējo veikalu.",
    "updated": "Pēdējā atjaunināšana: 2026. gada maijs",
    "controller": "Kas mēs esam",
    "controllerIntro": "Par šo tīmekļa vietni atbildīgais datu pārziņš ir:",
    "register": "Komerciālā reģistra Nr.",
    "email": "E-pasts",
    "dataTitle": "Kādus datus mēs vācam",
    "dataIntro": "Mēs vācam tikai tos datus, kas nepieciešami tīmekļa vietnes darbībai, jūsu pieprasījumu apstrādei un lietošanas pieredzes uzlabošanai:",
    "data": [
      "Kontaktinformācija, ja mums rakstāt e-pastu vai lūdzat palīdzību: vārds, uzvārds, e-pasta adrese, tālruņa numurs un ziņojuma saturs.",
      "Tīmekļa vietnes izmantošanas dati: IP adrese, pārlūka veids, informācija par ierīci, apmeklētās lapas, laika zīmogi un servera žurnāli.",
      "Sīkdatņu iestatījumi, tostarp tas, vai esat piekritis visām sīkdatnēm vai tikai nepieciešamajām sīkdatnēm.",
      "Valodas izvēle, ja izmantojat valodas izvēlni.",
    ],
    "noHealth": "Mēs apzināti neievācam datus no bērniem un nelūdzam jums sniegt informāciju par veselību caur šo tīmekļa vietni.",
    "sections": [
      [
        "Kāpēc mēs izmantojam jūsu datus",
        "Mēs izmantojam personas datus, lai nodrošinātu tīmekļa vietnes darbību, drošību un uzturēšanu, atcerētos valodas un sīkdatņu izvēles, atbildētu uz jautājumiem, kopumā izprastu tīmekļa vietnes darbību, ja tas ir atļauts, un izpildītu juridiskās vai drošības saistības.",
      ],
      [
        "Juridiskais pamats",
        "Atkarībā no situācijas mēs apstrādājam datus, pamatojoties uz leģitīmām interesēm, piekrišanu, pirmsslēgšanas saziņu vai juridiskām saistībām saskaņā ar GDPR.",
      ],
      [
        "Ārējais veikals",
        "Saite „Veikals” var novest jūs uz ārējo Sanza veikala vidi. Šim veikalam var būt savas norēķinu, konta, maksājumu, piegādes un juridiskās procedūras. Lūdzu, pirms pasūtījuma veikšanas izlasiet tur norādīto informāciju par privātumu un juridiskajiem jautājumiem.",
      ],
      [
        "Datu glabāšana",
        "Mēs glabājam personas datus tikai tik ilgi, cik nepieciešams to vākšanas mērķim. Saziņas ziņojumus parasti glabājam līdz 3 gadiem pēc pēdējās nozīmīgās saziņas, juridiskos dokumentus – tik ilgi, cik to prasa likums, un sīkdatņu piekrišanas ierakstus – līdz brīdim, kad jūs maināt vai dzēšat savas izvēles.",
      ],
      [
        "Datu nodošana",
        "Mēs nepārdodam jūsu personas datus. Mēs varam nodot datus pakalpojumu sniedzējiem, kuri palīdz mums nodrošināt tīmekļa vietnes darbību, uzturēt infrastruktūru, nosūtīt e-pastus, nodrošināt drošību vai atbildēt uz jautājumiem, ievērojot atbilstošus aizsardzības pasākumus.",
      ],
      [
        "Datu pārsūtīšana uz ārvalstīm",
        "Ja dati tiek pārsūtīti ārpus Eiropas Ekonomikas zonas, mēs nepieciešamības gadījumā izmantojam atbilstošus aizsardzības pasākumus, piemēram, lēmumus par atbilstību vai standarta līguma klauzulas.",
      ],
      [
        "Jūsu tiesības",
        "Saskaņā ar GDPR jums var būt tiesības piekļūt saviem datiem, tos labot, dzēst, ierobežot vai saņemt to kopiju, iebilst pret noteiktu apstrādi un atsaukt piekrišanu, ja apstrāde balstās uz piekrišanu.",
      ],
    ],
    "rightsContact": "Lai izmantotu savas tiesības, sazinieties ar mums",
    "complaintsTitle": "Sūdzības",
    "complaints": "Jūs varat sazināties ar Latvijas uzraudzības iestādi:",
    "cookiesTitle": "Sīkdatnes",
    "cookiesText": "Sīkāku informāciju par sīkdatnēm skatiet mūsu",
    "cookiePolicy": "Sīkdatņu politikā",
    "changesTitle": "Izmaiņas",
    "changes": "Mēs varam atjaunināt šo politiku, ja mainās mūsu tīmekļa vietne, pakalpojumi vai juridiskās saistības. Pašreizējā versija vienmēr ir pieejama šajā lapā.",
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
      canonical: "/privacy",
    },
  };
}

export default async function HomePrivacyPage() {
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
        <h2>1. {copy.controller}</h2>
        <p>{copy.controllerIntro}</p>
        <HomeLegalContactBlock registerLabel={copy.register} emailLabel={copy.email} />

        <h2>2. {copy.dataTitle}</h2>
        <p>{copy.dataIntro}</p>
        <ul>
          {copy.data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{copy.noHealth}</p>

        {copy.sections.map(([heading, body], index) => (
          <section key={heading}>
            <h2>{index + 3}. {heading}</h2>
            <p>{body}</p>
          </section>
        ))}

        <p>
          {copy.rightsContact}{" "}
          <a href="mailto:info@nordoravital.com">info@nordoravital.com</a>.
        </p>

        <h2>{copy.sections.length + 3}. {copy.complaintsTitle}</h2>
        <p>{copy.complaints}</p>
        <div className="rounded-[8px] border border-[#d8cec2] bg-[#f6f1ea] p-5">
          <strong>Datu valsts inspekcija (Data State Inspectorate)</strong>
          <p>Elijas iela 17, Rīga, LV-1050, Latvia</p>
          <p>
            Website:{" "}
            <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer">
              www.dvi.gov.lv
            </a>
          </p>
        </div>

        <h2>{copy.sections.length + 4}. {copy.cookiesTitle}</h2>
        <p>
          {copy.cookiesText} <Link href="/cookie-policy">{copy.cookiePolicy}</Link>.
        </p>

        <h2>{copy.sections.length + 5}. {copy.changesTitle}</h2>
        <p>{copy.changes}</p>
        <HomeLegalLinks {...copy.links} />
      </HomeLegalPage>
    </HomeSiteLayout>
  );
}
