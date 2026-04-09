import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = (await import(`../../../../messages/${locale}.json`)).default as {
    Imprint: { metaTitle: string; metaDescription: string };
  };
  return {
    title: m.Imprint.metaTitle,
    description: m.Imprint.metaDescription,
  };
}

/* ── Locale-specific content components ──────────────────────────────────── */

function ContentEN() {
  return (
    <>
      <p>
        In accordance with Article 4 of the Latvian Information Society Services Law (<em>Informācijas sabiedrības pakalpojumu likums</em>), the following information is provided about the operator of this website.
      </p>

      <h2>1. Service Provider</h2>
      <div className="legal-info-block">
        <strong>Nordora Vital SIA</strong>
        <p>[Street Name, Number]</p>
        <p>Riga, LV-[XXXX]</p>
        <p>Latvia</p>
      </div>

      <h2>2. Company Details</h2>
      <ul>
        <li><strong>Legal form:</strong> SIA (<em>sabiedrība ar ierobežotu atbildību</em> / limited liability company), registered in Latvia</li>
        <li><strong>Commercial Register:</strong> Latvijas Uzņēmumu reģistrs (Enterprise Register of Latvia)</li>
        <li><strong>Registration number:</strong> [000000-0]</li>
        <li><strong>VAT registration number:</strong> LV[00000000000]</li>
      </ul>

      <h2>3. Contact</h2>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:hello@nordoravital.com">hello@nordoravital.com</a></li>
        <li><strong>Telephone:</strong> [+371 XX XXX XXX]</li>
      </ul>

      <h2>4. Authorised Representative</h2>
      <p>[First Name Last Name], Director</p>

      <h2>5. Content Responsibility</h2>
      <p>
        The content of this website has been compiled with the utmost care. We do not, however, accept any liability for the accuracy, completeness, or currency of the information provided. The respective author is solely responsible for the accuracy of opinions expressed in their own contributions.
      </p>

      <h2>6. External Links</h2>
      <p>
        This website may contain links to third-party websites. We have no influence over the content of those external sites and accept no responsibility for them or for any loss or damage that may arise from your use of them. The respective provider or operator of any linked page is solely responsible for its content. At the time of linking, no legal violations were apparent. We will promptly remove any link upon notification of a legal violation.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        All content on this website — including text, images, graphics, logos, and multimedia — is protected by applicable intellectual property and copyright laws. Any reproduction or use beyond the bounds of copyright law requires the prior written consent of Nordora Vital SIA.
      </p>
    </>
  );
}

function ContentDE() {
  return (
    <>
      <p>
        Gemäß Artikel 4 des lettischen Informationsgesellschaftsdienstleistungsgesetzes (<em>Informācijas sabiedrības pakalpojumu likums</em>) sind die folgenden Angaben zum Betreiber dieser Website zu machen.
      </p>

      <h2>1. Anbieter</h2>
      <div className="legal-info-block">
        <strong>Nordora Vital SIA</strong>
        <p>[Straße, Hausnummer]</p>
        <p>Riga, LV-[XXXX]</p>
        <p>Lettland</p>
      </div>

      <h2>2. Unternehmensangaben</h2>
      <ul>
        <li><strong>Rechtsform:</strong> SIA (<em>sabiedrība ar ierobežotu atbildību</em> / Gesellschaft mit beschränkter Haftung), registriert in Lettland</li>
        <li><strong>Handelsregister:</strong> Latvijas Uzņēmumu reģistrs (Unternehmensregister Lettlands)</li>
        <li><strong>Registernummer:</strong> [000000-0]</li>
        <li><strong>Umsatzsteuer-Identifikationsnummer:</strong> LV[00000000000]</li>
      </ul>

      <h2>3. Kontakt</h2>
      <ul>
        <li><strong>E-Mail:</strong> <a href="mailto:hello@nordoravital.com">hello@nordoravital.com</a></li>
        <li><strong>Telefon:</strong> [+371 XX XXX XXX]</li>
      </ul>

      <h2>4. Vertretungsberechtigte Person</h2>
      <p>[Vorname Nachname], Geschäftsführer</p>

      <h2>5. Inhaltliche Verantwortlichkeit</h2>
      <p>
        Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt zusammengestellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Für die Richtigkeit der in eigenen Beiträgen geäußerten Meinungen ist der jeweilige Autor allein verantwortlich.
      </p>

      <h2>6. Externe Links</h2>
      <p>
        Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h2>7. Urheberrecht</h2>
      <p>
        Alle Inhalte dieser Website — Texte, Bilder, Grafiken, Logos und Medien — sind durch geltendes Urheberrecht geschützt. Eine Vervielfältigung oder Verwertung, die über die Grenzen des Urheberrechts hinausgeht, bedarf der vorherigen schriftlichen Zustimmung der Nordora Vital SIA.
      </p>
    </>
  );
}

function ContentLV() {
  return (
    <>
      <p>
        Saskaņā ar Informācijas sabiedrības pakalpojumu likuma 4. pantu tiek sniegta šāda informācija par šīs vietnes operatoru.
      </p>

      <h2>1. Pakalpojumu sniedzējs</h2>
      <div className="legal-info-block">
        <strong>Nordora Vital SIA</strong>
        <p>[Iela, mājas numurs]</p>
        <p>Rīga, LV-[XXXX]</p>
        <p>Latvija</p>
      </div>

      <h2>2. Uzņēmuma rekvizīti</h2>
      <ul>
        <li><strong>Juridiskā forma:</strong> SIA (sabiedrība ar ierobežotu atbildību), reģistrēta Latvijā</li>
        <li><strong>Komercreģistrs:</strong> Latvijas Uzņēmumu reģistrs</li>
        <li><strong>Reģistrācijas numurs:</strong> [000000-0]</li>
        <li><strong>PVN reģistrācijas numurs:</strong> LV[00000000000]</li>
      </ul>

      <h2>3. Kontaktinformācija</h2>
      <ul>
        <li><strong>E-pasts:</strong> <a href="mailto:hello@nordoravital.com">hello@nordoravital.com</a></li>
        <li><strong>Tālrunis:</strong> [+371 XX XXX XXX]</li>
      </ul>

      <h2>4. Pilnvarotā persona</h2>
      <p>[Vārds Uzvārds], Direktors</p>

      <h2>5. Atbildība par saturu</h2>
      <p>
        Šīs vietnes saturs ir sagatavots ar vislielāko rūpību. Tomēr mēs neuzņemamies atbildību par satura precizitāti, pilnīgumu un aktualitāti. Par paša izteikto viedokļu pareizību atbild attiecīgais autors.
      </p>

      <h2>6. Ārējās saites</h2>
      <p>
        Šī vietne var saturēt saites uz trešo pušu ārējām vietnēm. Mēs neatbildam par to saturu. Par saistīto lapu saturu atbild attiecīgais lapas operators. Saites izveides brīdī tiesiska pārkāpuma pazīmes netika konstatētas. Uzzinot par tiesiska pārkāpuma faktu, mēs nekavējoties dzēsīsim attiecīgo saiti.
      </p>

      <h2>7. Intelektuālais īpašums</h2>
      <p>
        Visi šīs vietnes saturā ietvertie elementi — teksti, attēli, grafika, logotipi un multivide — ir aizsargāti ar piemērojamiem intelektuālā īpašuma un autortiesību likumiem. Saturu reproducēt vai izmantot ārpus autortiesību robežām var tikai ar Nordora Vital SIA iepriekšēju rakstisku piekrišanu.
      </p>
    </>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

const meta = {
  en: { title: "Legal Notice", subtitle: "Imprint — company details and legal disclosures" },
  de: { title: "Impressum", subtitle: "Pflichtangaben gemäß lettischem Recht" },
  lv: { title: "Impressums", subtitle: "Obligātā informācija saskaņā ar Latvijas tiesību aktiem" },
} as const;

export default async function ImprintPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "de" || locale === "lv") ? locale : "en";
  const { title, subtitle } = meta[lang];

  return (
    <LegalPageShell title={title} subtitle={subtitle}>
      {lang === "de" ? <ContentDE /> : lang === "lv" ? <ContentLV /> : <ContentEN />}
    </LegalPageShell>
  );
}
