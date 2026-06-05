import type { Metadata } from "next";
import { HomeLegalLinks, HomeLegalPage } from "@/components/home-site/home-legal-page";
import { HomeSiteLayout } from "@/components/home-site/home-site-shell";
import { getOriginForSurface } from "@/lib/domains";
import { homeLocale } from "@/lib/home-copy";
import { mergeRussianContent } from "@/lib/russian-content";

type Props = { params: Promise<{ locale: string }> };

const pageCopy = {
  "en": {
    "metaTitle": "Imprint | Nordora Vital Home",
    "metaDescription": "Company details and legal disclosure for the Nordora Vital Home website.",
    "eyebrow": "Company details",
    "title": "Imprint",
    "description": "Company information for Nordora Vital SIA, operator of the Nordora Vital Home website.",
    "updated": "Last updated: May 2026",
    "operator": "Website Operator",
    "register": "Commercial Register No.",
    "email": "Email",
    "sections": [
      [
        "Responsible for Content",
        "Nordora Vital SIA is responsible for the content of this website unless another source is clearly identified.",
      ],
      [
        "Scope of Information",
        "The HOME section presents private wellness information about sanza home rituals, accessories and programs. It is not medical advice, diagnosis or treatment information.",
      ],
      [
        "External Links",
        "This website may contain links to external websites, including shop and partner pages. We do not control those websites and are not responsible for their content, legal notices, privacy practices or availability.",
      ],
      [
        "Copyright",
        "All content on this website, including text, images, graphics, logos and layout, is protected by applicable intellectual property laws. Use beyond what is legally permitted requires prior written consent from Nordora Vital SIA.",
      ],
      [
        "Contact",
        "For legal or website-related questions, contact info@nordoravital.com.",
      ],
    ],
    "links": {
      "related": "Related pages",
      "privacy": "Privacy Policy",
      "terms": "Terms",
      "cookies": "Cookie Policy",
      "imprint": "Imprint",
    },
  },
  "de": {
    "metaTitle": "Impressum | Nordora Vital Home",
    "metaDescription": "Unternehmensdaten und rechtliche Hinweise zur Website von Nordora Vital Home.",
    "eyebrow": "Unternehmensdaten",
    "title": "Impressum",
    "description": "Unternehmensinformationen zu Nordora Vital SIA, Betreiber der Website von Nordora Vital Home.",
    "updated": "Letzte Aktualisierung: Mai 2026",
    "operator": "Website-Betreiber",
    "register": "Handelsregisternummer",
    "email": "E-Mail",
    "sections": [
      [
        "Verantwortlich für den Inhalt",
        "Nordora Vital SIA ist für den Inhalt dieser Website verantwortlich, sofern nicht eindeutig eine andere Quelle angegeben ist.",
      ],
      [
        "Umfang der Informationen",
        "Der Bereich „HOME“ enthält private Wellness-Informationen zu den Ritualen, Accessoires und Programmen von sanza home. Es handelt sich dabei nicht um medizinische Beratung, Diagnose oder Behandlungshinweise.",
      ],
      [
        "Externe Links",
        "Diese Website kann Links zu externen Websites enthalten, darunter Shop- und Partnerseiten. Wir haben keinen Einfluss auf diese Websites und sind nicht für deren Inhalte, rechtliche Hinweise, Datenschutzpraktiken oder Verfügbarkeit verantwortlich.",
      ],
      [
        "Urheberrecht",
        "Alle Inhalte dieser Website, einschließlich Text, Bilder, Grafiken, Logos und Layout, sind durch geltende Gesetze zum Schutz geistigen Eigentums geschützt. Eine über das gesetzlich zulässige Maß hinausgehende Nutzung bedarf der vorherigen schriftlichen Zustimmung von Nordora Vital SIA.",
      ],
      [
        "Kontakt",
        "Bei rechtlichen oder websitebezogenen Fragen wenden Sie sich bitte an info@nordoravital.com.",
      ],
    ],
    "links": {
      "related": "Verwandte Seiten",
      "privacy": "Datenschutzerklärung",
      "terms": "Nutzungsbedingungen",
      "cookies": "Cookie-Richtlinie",
      "imprint": "Impressum",
    },
  },
  "lv": {
    "metaTitle": "Impressum | Nordora Vital Home",
    "metaDescription": "Uzņēmuma dati un juridiskā informācija par Nordora Vital Home tīmekļa vietni.",
    "eyebrow": "Uzņēmuma informācija",
    "title": "Impressum",
    "description": "Uzņēmuma informācija par Nordora Vital SIA, Nordora Vital Home tīmekļa vietnes operatoru.",
    "updated": "Pēdējā atjaunināšana: 2026. gada maijs",
    "operator": "Tīmekļa vietnes operators",
    "register": "Komerciālā reģistra numurs",
    "email": "E-pasts",
    "sections": [
      [
        "Atbildīgs par saturu",
        "Nordora Vital SIA ir atbildīga par šīs tīmekļa vietnes saturu, ja vien nav skaidri norādīts cits avots.",
      ],
      [
        "Informācijas apjoms",
        "Sadaļā „MĀJAS“ ir sniegta privāta informācija par „sanza“ mājas rituāliem, piederumiem un programmām. Tā nav medicīniska konsultācija, diagnoze vai informācija par ārstēšanu.",
      ],
      [
        "Ārējās saites",
        "Šajā tīmekļa vietnē var būt saites uz ārējām tīmekļa vietnēm, tostarp veikalu un partneru lapām. Mēs nekontrolējam šīs tīmekļa vietnes un neesam atbildīgi par to saturu, juridiskajiem paziņojumiem, privātuma politiku vai pieejamību.",
      ],
      [
        "Autortiesības",
        "Viss šīs tīmekļa vietnes saturs, tostarp teksts, attēli, grafika, logotipi un izkārtojums, ir aizsargāts ar piemērojamiem intelektuālā īpašuma tiesību aktiem. Lietošana, kas pārsniedz likumā atļauto, prasa iepriekšēju rakstisku piekrišanu no Nordora Vital SIA.",
      ],
      [
        "Kontakti",
        "Ja Jums ir jautājumi par juridiskajiem aspektiem vai tīmekļa vietni, lūdzu, rakstiet uz info@nordoravital.com.",
      ],
    ],
    "links": {
      "related": "Saistītās lapas",
      "privacy": "Privātuma politika",
      "terms": "Lietošanas noteikumi",
      "cookies": "Sīkdatņu politika",
      "imprint": "Izdevējs",
    },
  },
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = mergeRussianContent(locale, "homeuse/imprint", pageCopy[homeLocale(locale)]);
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    metadataBase: new URL(getOriginForSurface("home")),
    alternates: {
      canonical: "/imprint",
    },
  };
}

export default async function HomeImprintPage({ params }: Props) {
  const { locale: routeLocale } = await params;
  const activeLocale = homeLocale(routeLocale);
  const copy = mergeRussianContent(routeLocale, "homeuse/imprint", pageCopy[activeLocale]);

  return (
    <HomeSiteLayout locale={routeLocale}>
      <HomeLegalPage
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        updated={copy.updated}
      >
        <h2>{copy.operator}</h2>
        <div className="rounded-[8px] border border-[#d8cec2] bg-[#f6f1ea] p-5">
          <strong>Nordora Vital SIA</strong>
          <p>Vēja iela 4-2, Ādaži, LV-2164, Latvia</p>
          <p>{copy.register}: 40203739804</p>
          <p>
            {copy.email}: <a href="mailto:info@nordoravital.com">info@nordoravital.com</a>
          </p>
        </div>

        {copy.sections.map(([heading, body]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </section>
        ))}
        <HomeLegalLinks {...copy.links} />
      </HomeLegalPage>
    </HomeSiteLayout>
  );
}
