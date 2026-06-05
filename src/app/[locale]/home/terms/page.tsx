import type { Metadata } from "next";
import {
  HomeLegalContactBlock,
  HomeLegalLinks,
  HomeLegalPage,
} from "@/components/home-site/home-legal-page";
import { HomeSiteLayout } from "@/components/home-site/home-site-shell";
import { getOriginForSurface } from "@/lib/domains";
import { homeLocale } from "@/lib/home-copy";
import { mergeRussianContent } from "@/lib/russian-content";

type Props = { params: Promise<{ locale: string }> };

const pageCopy = {
  "en": {
    "metaTitle": "Terms | Nordora Vital Home",
    "metaDescription": "Terms for using the Nordora Vital Home website and information about sanza home wellness content.",
    "eyebrow": "Terms",
    "title": "Terms of Use",
    "description": "These terms explain how you may use the Nordora Vital Home website and how to understand the wellness information presented here.",
    "updated": "Last updated: May 2026",
    "operator": "Operator",
    "operatorIntro": "This website is operated by:",
    "register": "Commercial Register No.",
    "email": "Email",
    "sections": [
      [
        "Website Use",
        "You may use this website for personal, non-commercial information about Nordora Vital Home and sanza home wellness experiences. You must not misuse the website, attempt unauthorized access, interfere with security, or use the content in a misleading way.",
      ],
      [
        "Wellness Information",
        "The HOME section provides general information about private wellness rituals, accessories, programs and home use scenarios. It is not medical advice, diagnosis or treatment, and it does not replace consultation with a qualified healthcare professional.",
      ],
      [
        "Product and Shop Information",
        "Product descriptions, program names and home scenarios help explain the sanza home experience. Availability, pricing, checkout, payment, delivery, returns and warranty information may be handled in the external shop environment and can be subject to the terms shown there.",
      ],
      [
        "No Guaranteed Outcome",
        "sanza home content describes rituals for comfort, calm, recovery routines, sleep preparation and daily reset. Individual experiences vary. We do not promise medical outcomes, treatment effects or guaranteed results.",
      ],
      [
        "Intellectual Property",
        "All text, images, design elements, logos and other content on this website are owned by Nordora Vital SIA or licensed to us. You may not reproduce, modify, distribute or commercially use website content without prior written permission, except where permitted by law.",
      ],
      [
        "External Links",
        "This website may link to external websites, including shop and partner environments. We are not responsible for the content, availability, privacy practices or terms of external websites.",
      ],
      [
        "Governing Law",
        "These terms are governed by the laws of Latvia, unless mandatory consumer protection law in your country provides otherwise.",
      ],
    ],
    "contactTitle": "Contact",
    "contact": "Questions about these terms can be sent to info@nordoravital.com.",
    "links": {
      "related": "Related pages",
      "privacy": "Privacy Policy",
      "terms": "Terms",
      "cookies": "Cookie Policy",
      "imprint": "Imprint",
    },
  },
  "de": {
    "metaTitle": "Nutzungsbedingungen | Nordora Vital Home",
    "metaDescription": "Nutzungsbedingungen für die Website von Nordora Vital Home und Informationen zu den Wellness-Inhalten von sanza home.",
    "eyebrow": "Nutzungsbedingungen",
    "title": "Nutzungsbedingungen",
    "description": "Diese Bedingungen erläutern, wie Sie die Website von Nordora Vital Home nutzen dürfen und wie Sie die hier präsentierten Wellness-Informationen verstehen können.",
    "updated": "Zuletzt aktualisiert: Mai 2026",
    "operator": "Betreiber",
    "operatorIntro": "Diese Website wird betrieben von:",
    "register": "Handelsregisternummer",
    "email": "E-Mail",
    "sections": [
      [
        "Nutzung der Website",
        "Sie dürfen diese Website für persönliche, nicht kommerzielle Zwecke nutzen, um Informationen über Nordora Vital Home und sanza home wellness-Erlebnisse zu erhalten. Sie dürfen die Website nicht missbrauchen, keinen unbefugten Zugriff versuchen, die Sicherheit nicht beeinträchtigen oder die Inhalte in irreführender Weise nutzen.",
      ],
      [
        "Wellness-Informationen",
        "Der Bereich „HOME“ bietet allgemeine Informationen zu privaten Wellness-Ritualen, Accessoires, Programmen und Anwendungsszenarien für zu Hause. Es handelt sich dabei nicht um medizinische Beratung, Diagnose oder Behandlung und ersetzt nicht die Konsultation eines qualifizierten medizinischen Fachpersonals.",
      ],
      [
        "Produkt- und Shop-Informationen",
        "Produktbeschreibungen, Programmnamen und Anwendungsszenarien für zu Hause helfen dabei, das sanza home-Erlebnis zu erklären. Informationen zu Verfügbarkeit, Preisen, Bestellvorgang, Zahlung, Lieferung, Rückgabe und Garantie werden möglicherweise in der externen Shop-Umgebung abgewickelt und können den dort aufgeführten Bedingungen unterliegen.",
      ],
      [
        "Keine garantierten Ergebnisse",
        "Die Inhalte von sanza home beschreiben Rituale für Komfort, Ruhe, Erholungsroutinen, Schlafvorbereitung und den täglichen Neustart. Individuelle Erfahrungen können variieren. Wir versprechen keine medizinischen Ergebnisse, Behandlungseffekte oder garantierte Resultate.",
      ],
      [
        "Geistiges Eigentum",
        "Alle Texte, Bilder, Designelemente, Logos und sonstigen Inhalte auf dieser Website sind Eigentum von Nordora Vital SIA oder an uns lizenziert. Sie dürfen die Inhalte der Website ohne vorherige schriftliche Genehmigung nicht reproduzieren, verändern, verbreiten oder kommerziell nutzen, es sei denn, dies ist gesetzlich zulässig.",
      ],
      [
        "Externe Links",
        "Diese Website kann Links zu externen Websites enthalten, einschließlich Shop- und Partnerumgebungen. Wir sind nicht verantwortlich für den Inhalt, die Verfügbarkeit, die Datenschutzpraktiken oder die Bedingungen externer Websites.",
      ],
      [
        "Anwendbares Recht",
        "Diese Bedingungen unterliegen dem lettischen Recht, sofern nicht zwingende Verbraucherschutzgesetze in Ihrem Land etwas anderes vorsehen.",
      ],
    ],
    "contactTitle": "Kontakt",
    "contact": "Fragen zu diesen Bedingungen können an info@nordoravital.com gesendet werden.",
    "links": {
      "related": "Verwandte Seiten",
      "privacy": "Datenschutzerklärung",
      "terms": "Nutzungsbedingungen",
      "cookies": "Cookie-Richtlinie",
      "imprint": "Impressum",
    },
  },
  "lv": {
    "metaTitle": "Noteikumi | Nordora Vital Home",
    "metaDescription": "Noteikumi par Nordora Vital Home tīmekļa vietnes izmantošanu un informācija par sanza home wellness saturu.",
    "eyebrow": "Noteikumi",
    "title": "Lietošanas noteikumi",
    "description": "Šie noteikumi izskaidro, kā jūs varat izmantot Nordora Vital Home tīmekļa vietni un kā izprast šeit sniegto informāciju par veselību.",
    "updated": "Pēdējā atjaunināšana: 2026. gada maijs",
    "operator": "Operators",
    "operatorIntro": "Šo tīmekļa vietni pārvalda:",
    "register": "Komerciālā reģistra Nr.",
    "email": "E-pasts",
    "sections": [
      [
        "Tīmekļa vietnes izmantošana",
        "Jūs varat izmantot šo tīmekļa vietni personīgām, nekomerciālām vajadzībām, lai iegūtu informāciju par Nordora Vital Home un sanza home wellness pieredzi. Jums ir aizliegts ļaunprātīgi izmantot tīmekļa vietni, mēģināt iegūt neatļautu piekļuvi, traucēt drošību vai izmantot saturu maldinošā veidā.",
      ],
      [
        "Informācija par labsajūtu",
        "Sadaļā „MĀJAS” ir sniegta vispārīga informācija par privātiem veselības rituāliem, piederumiem, programmām un lietošanas scenārijiem mājās. Tā nav medicīniska konsultācija, diagnoze vai ārstēšana, un tā neaizstāj konsultāciju ar kvalificētu veselības aprūpes speciālistu.",
      ],
      [
        "Informācija par produktiem un veikalu",
        "Produktu apraksti, programmu nosaukumi un lietošanas scenāriji mājās palīdz izskaidrot sanza home pieredzi. Informācija par pieejamību, cenām, pasūtīšanu, apmaksu, piegādi, atgriešanu un garantiju var tikt apstrādāta ārējā veikala vidē un uz to var attiekties tur norādītie noteikumi.",
      ],
      [
        "Nav garantētu rezultātu",
        "sanza home saturs apraksta rituālus komfortam, mieram, atveseļošanās rutīnām, miega sagatavošanai un ikdienas atjaunošanai. Individuālā pieredze var atšķirties. Mēs neapsolām medicīniskus rezultātus, ārstēšanas efektus vai garantētus rezultātus.",
      ],
      [
        "Intelektuālais īpašums",
        "Viss teksts, attēli, dizaina elementi, logotipi un cits saturs šajā tīmekļa vietnē pieder Nordora Vital SIA vai ir mums licencēts. Jūs nedrīkstat reproducēt, modificēt, izplatīt vai komerciāli izmantot tīmekļa vietnes saturu bez iepriekšējas rakstiskas atļaujas, izņemot gadījumus, kad to atļauj likums.",
      ],
      [
        "Ārējās saites",
        "Šī tīmekļa vietne var saturēt saites uz ārējām tīmekļa vietnēm, tostarp veikaliem un partneru vidēm. Mēs neesam atbildīgi par ārējo tīmekļa vietņu saturu, pieejamību, privātuma praksi vai noteikumiem.",
      ],
      [
        "Piemērojamie tiesību akti",
        "Šiem noteikumiem piemēro Latvijas tiesību aktus, ja vien jūsu valsts obligātie patērētāju aizsardzības tiesību akti neparedz citādi.",
      ],
    ],
    "contactTitle": "Kontakti",
    "contact": "Jautājumus par šiem noteikumiem var sūtīt uz info@nordoravital.com.",
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
  const copy = mergeRussianContent(locale, "homeuse/terms", pageCopy[homeLocale(locale)]);
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    metadataBase: new URL(getOriginForSurface("home")),
    alternates: {
      canonical: "/terms",
    },
  };
}

export default async function HomeTermsPage({ params }: Props) {
  const { locale: routeLocale } = await params;
  const activeLocale = homeLocale(routeLocale);
  const copy = mergeRussianContent(routeLocale, "homeuse/terms", pageCopy[activeLocale]);

  return (
    <HomeSiteLayout locale={routeLocale}>
      <HomeLegalPage
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        updated={copy.updated}
      >
        <h2>1. {copy.operator}</h2>
        <p>{copy.operatorIntro}</p>
        <HomeLegalContactBlock registerLabel={copy.register} emailLabel={copy.email} />

        {copy.sections.map(([heading, body], index) => (
          <section key={heading}>
            <h2>{index + 2}. {heading}</h2>
            <p>{body}</p>
          </section>
        ))}

        <h2>{copy.sections.length + 2}. {copy.contactTitle}</h2>
        <p>{copy.contact}</p>
        <HomeLegalLinks {...copy.links} />
      </HomeLegalPage>
    </HomeSiteLayout>
  );
}
