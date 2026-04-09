import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = (await import(`../../../../messages/${locale}.json`)).default as {
    Terms: { metaTitle: string; metaDescription: string };
  };
  return {
    title: m.Terms.metaTitle,
    description: m.Terms.metaDescription,
  };
}

/* ── Locale-specific content components ──────────────────────────────────── */

function ContentEN() {
  return (
    <>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the website at nordoravital.com (the &ldquo;Website&rdquo;), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Website.
      </p>

      <h2>2. About This Website</h2>
      <p>
        This Website is operated by Nordora Vital SIA (&ldquo;Nordora Vital&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). It provides information about the sanza wellness system — a pulsed electromagnetic field (PEMF), biofrequency and light therapy device — and related professional services.
      </p>

      <h2>3. Not Medical or Health Advice</h2>
      <div className="legal-warning">
        <p>
          <strong>The content on this Website is for informational purposes only. It does not constitute medical advice, diagnosis, treatment, or professional healthcare guidance of any kind.</strong>
        </p>
      </div>
      <p>
        The sanza system is a wellness device and is not a substitute for professional medical care. Any information provided about physiological effects is based on general research and the reported experiences of wellness professionals. You should always consult a qualified healthcare provider before beginning, modifying, or discontinuing any health or wellness programme.
      </p>
      <p>
        We expressly exclude any representation that the sanza system can prevent, treat, or cure any disease, medical condition, or health disorder.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on this Website — including text, images, graphics, logos, icons, videos, and software — is the property of Nordora Vital SIA or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, publicly display, or commercially exploit any content without our prior written consent.
      </p>

      <h2>5. Permitted Use</h2>
      <p>You may use this Website solely for lawful personal or professional information purposes. You must not:</p>
      <ul>
        <li>Use the Website in any way that impairs, disrupts, or damages its functioning or availability</li>
        <li>Attempt to gain unauthorised access to any part of the Website or its underlying systems</li>
        <li>Transmit viruses, malware, or any other harmful or disruptive code</li>
        <li>Systematically harvest or extract content by automated means (scraping)</li>
        <li>Use the Website for any unlawful, fraudulent, or harmful purpose</li>
      </ul>

      <h2>6. Disclaimer of Warranties</h2>
      <p>
        The Website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the fullest extent permitted by law, we disclaim all warranties — express or implied — including any implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Website will be uninterrupted, error-free, or free of harmful components.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by Latvian law, Nordora Vital SIA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Website or any information contained therein.
      </p>
      <p>
        Our total aggregate liability to you under these Terms shall not exceed EUR 100, except in cases of gross negligence or wilful misconduct, or where liability cannot be limited under mandatory law.
      </p>
      <p>
        Nothing in these Terms limits or excludes any rights you may have as a consumer under mandatory EU or Latvian consumer protection legislation.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        This Website may contain links to external websites operated by third parties. These links are provided for convenience only and do not constitute any endorsement. We have no control over, and accept no responsibility for, the content or practices of any linked site.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of the Republic of Latvia, without regard to conflict-of-law principles. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Latvia, without prejudice to any mandatory consumer rights under applicable EU law.
      </p>

      <h2>10. Dispute Resolution</h2>
      <p>
        If you are a consumer resident in the European Union, you may refer any dispute to the EU Online Dispute Resolution (ODR) platform operated by the European Commission:
      </p>
      <p>
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
      </p>
      <p>For disputes involving Latvian consumers, you may also contact:</p>
      <div className="legal-info-block">
        <strong>Patērētāju tiesību aizsardzības centrs (PTAC)</strong>
        <p>Consumer Rights Protection Centre</p>
        <p>Brīvības iela 55, Rīga, LV-1010, Latvia</p>
        <p>Website: <a href="https://www.ptac.gov.lv" target="_blank" rel="noopener noreferrer">www.ptac.gov.lv</a></p>
      </div>

      <h2>11. Amendments</h2>
      <p>
        We reserve the right to amend these Terms at any time. The current version is always available at this URL. Your continued use of the Website following any amendment constitutes acceptance of the updated Terms.
      </p>
    </>
  );
}

function ContentDE() {
  return (
    <>
      <h2>1. Zustimmung zu den Bedingungen</h2>
      <p>
        Durch den Zugriff auf oder die Nutzung der Website unter nordoravital.com (die &bdquo;Website&ldquo;) stimmen Sie diesen Nutzungsbedingungen zu. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie die Website bitte nicht.
      </p>

      <h2>2. Über diese Website</h2>
      <p>
        Diese Website wird von Nordora Vital SIA betrieben. Sie enthält Informationen über das sanza Wellness-System — ein Gerät für gepulste elektromagnetische Felder (PEMF), Biofrequenz- und Lichttherapie — sowie damit zusammenhängende professionelle Dienste.
      </p>

      <h2>3. Kein medizinischer Rat</h2>
      <div className="legal-warning">
        <p>
          <strong>Die Inhalte dieser Website dienen ausschließlich Informationszwecken. Sie stellen keine medizinische Beratung, Diagnose, Behandlung oder professionelle Gesundheitsberatung dar.</strong>
        </p>
      </div>
      <p>
        Das sanza-System ist ein Wellness-Gerät und kein Ersatz für professionelle medizinische Versorgung. Angaben zu physiologischen Wirkungen basieren auf allgemeiner Forschung und berichteten Erfahrungen von Wellness-Fachleuten. Konsultieren Sie stets einen qualifizierten Arzt oder Gesundheitsfachmann, bevor Sie ein Gesundheits- oder Wellness-Programm beginnen, ändern oder abbrechen.
      </p>
      <p>
        Wir schließen ausdrücklich jede Zusicherung aus, dass das sanza-System Krankheiten oder Beschwerden verhindern, behandeln oder heilen kann.
      </p>

      <h2>4. Geistiges Eigentum</h2>
      <p>
        Sämtliche Inhalte dieser Website — Texte, Bilder, Grafiken, Logos, Icons, Videos und Software — sind Eigentum der Nordora Vital SIA oder ihrer Lizenzgeber und durch geltendes Recht geschützt. Ohne unsere ausdrückliche schriftliche Zustimmung sind Vervielfältigung, Verbreitung, Änderung, öffentliche Darstellung oder kommerzielle Verwertung untersagt.
      </p>

      <h2>5. Zulässige Nutzung</h2>
      <p>Die Website darf ausschließlich für rechtmäßige persönliche oder berufliche Informationszwecke genutzt werden. Folgendes ist untersagt:</p>
      <ul>
        <li>Beeinträchtigung oder Störung des Website-Betriebs oder der Verfügbarkeit</li>
        <li>Unberechtigter Zugriffsversuch auf Teile der Website oder ihrer Systeme</li>
        <li>Übermittlung von Viren, Malware oder sonstigem Schadcode</li>
        <li>Systematisches automatisiertes Auslesen von Website-Inhalten (Scraping)</li>
        <li>Nutzung für rechtswidrige, betrügerische oder schädliche Zwecke</li>
      </ul>

      <h2>6. Gewährleistungsausschluss</h2>
      <p>
        Die Website wird &bdquo;wie besehen&ldquo; und &bdquo;wie verfügbar&ldquo; bereitgestellt. Im gesetzlich zulässigen Rahmen schließen wir alle Gewährleistungen aus — ausdrückliche wie stillschweigende, einschließlich stillschweigender Zusicherungen der Marktgängigkeit und Eignung für einen bestimmten Zweck.
      </p>

      <h2>7. Haftungsbeschränkung</h2>
      <p>
        Im nach lettischem Recht zulässigen Rahmen haftet Nordora Vital SIA nicht für mittelbare, zufällige, besondere oder Folgeschäden aus der Nutzung der Website oder aus dem Vertrauen auf deren Inhalte.
      </p>
      <p>
        Unsere Gesamthaftung übersteigt nicht 100 EUR, außer bei grober Fahrlässigkeit oder Vorsatz oder soweit die Haftung nach zwingendem Recht nicht beschränkt werden kann.
      </p>
      <p>
        Gesetzliche Verbraucherrechte nach EU- und lettischem Recht bleiben unberührt.
      </p>

      <h2>8. Externe Links</h2>
      <p>
        Diese Website kann Links zu externen Websites Dritter enthalten. Diese Links dienen ausschließlich der Bequemlichkeit und stellen keine Billigung dar. Wir übernehmen keine Verantwortung für den Inhalt oder die Praktiken verlinkter Seiten.
      </p>

      <h2>9. Anwendbares Recht</h2>
      <p>
        Diese Nutzungsbedingungen unterliegen dem Recht der Republik Lettland. Ausschließlicher Gerichtsstand ist Lettland, unbeschadet zwingender EU-Verbraucherschutzrechte.
      </p>

      <h2>10. Streitbeilegung</h2>
      <p>
        EU-Verbraucher können die Online-Streitbeilegungsplattform der Europäischen Kommission nutzen:
      </p>
      <p>
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
      </p>

      <h2>11. Änderungen</h2>
      <p>
        Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Die jeweils aktuelle Fassung ist stets unter dieser URL abrufbar. Die weitere Nutzung der Website nach einer Änderung gilt als Zustimmung zu den aktualisierten Bedingungen.
      </p>
    </>
  );
}

function ContentLV() {
  return (
    <>
      <h2>1. Noteikumu pieņemšana</h2>
      <p>
        Piekļūstot vietnei nordoravital.com vai to izmantojot, jūs piekrītat šiem lietošanas noteikumiem. Ja nepiekrītat, lūdzam neizmantot šo vietni.
      </p>

      <h2>2. Par šo vietni</h2>
      <p>
        Šo vietni uztur Nordora Vital SIA. Tā sniedz informāciju par sanza labklājības sistēmu — pulsētā elektromagnētiskā lauka (PEMF), biofrekvences un gaismas terapijas ierīci — un saistītiem profesionāliem pakalpojumiem.
      </p>

      <h2>3. Tas nav medicīnisks ieteikums</h2>
      <div className="legal-warning">
        <p>
          <strong>Šīs vietnes saturs ir paredzēts tikai informatīviem nolūkiem. Tas nav medicīnisks ieteikums, diagnoze, ārstēšanas norāde vai profesionāla veselības aprūpes vadlīnija.</strong>
        </p>
      </div>
      <p>
        sanza sistēma ir labklājības ierīce, un tā neaizstāj profesionālu medicīnisko aprūpi. Jebkura informācija par fizioloģiskajiem efektiem ir balstīta uz vispārēju pētījumu un labklājības speciālistu ziņotajām pieredzēm. Pirms uzsākat, maināt vai pārtraucat jebkuru veselības vai labklājības programmu, vienmēr konsultējieties ar kvalificētu veselības aprūpes speciālistu.
      </p>
      <p>
        Mēs skaidri neapgalvojam, ka sanza sistēma var novērst, ārstēt vai izārstēt jebkādu slimību, veselības traucējumu vai patoloģisku stāvokli.
      </p>

      <h2>4. Intelektuālais īpašums</h2>
      <p>
        Visi šīs vietnes saturu — teksti, attēli, grafika, logotipi, ikonas, videoklipi un programmatūra — pieder Nordora Vital SIA vai tās licencdevējiem un ir aizsargāts ar piemērojamiem tiesību aktiem. Bez mūsu iepriekšējas rakstiskas piekrišanas saturu nedrīkst reproducēt, izplatīt, modificēt, publiski demonstrēt vai izmantot komerciāliem nolūkiem.
      </p>

      <h2>5. Atļautā lietošana</h2>
      <p>Vietni drīkst izmantot tikai likumīgiem personiskiem vai profesionāliem informatīviem nolūkiem. Aizliegts:</p>
      <ul>
        <li>Traucēt vai bojāt vietnes darbību vai pieejamību</li>
        <li>Mēģināt nelikumīgi piekļūt vietnes daļām vai sistēmām</li>
        <li>Izplatīt vīrusus, ļaunatūru vai citu kaitīgu kodu</li>
        <li>Sistematizēti automātiski iegūt vietnes saturu</li>
        <li>Izmantot vietni nelikumīgiem, krāpnieciskiem vai kaitīgiem mērķiem</li>
      </ul>

      <h2>6. Garantiju izslēgšana</h2>
      <p>
        Vietne tiek nodrošināta &bdquo;tāda, kāda tā ir&ldquo; un &bdquo;tādā veidā, kādā tā ir pieejama&ldquo;. Likumā atļautajā apmērā mēs izslēdzam visas garantijas — tiešas un netiešas.
      </p>

      <h2>7. Atbildības ierobežošana</h2>
      <p>
        Latvijas tiesību aktos atļautajā apmērā Nordora Vital SIA neuzņemas atbildību par netiešiem, nejaušiem, īpašiem vai izrietošiem zaudējumiem, kas rodas no vietnes lietošanas vai nespējas to izmantot.
      </p>
      <p>
        Mūsu kopējā atbildība jums saskaņā ar šiem noteikumiem nepārsniedz 100 EUR, izņemot rupjas nolaidības vai tīša nodarījuma gadījumus vai ja atbildību nevar ierobežot saskaņā ar imperatīvajām tiesību normām.
      </p>
      <p>
        Šis ierobežojums neietekmē patērētāju likumīgās tiesības saskaņā ar ES un Latvijas patērētāju tiesību aktiem.
      </p>

      <h2>8. Ārējās saites</h2>
      <p>
        Vietne var saturēt saites uz trešo pušu ārējām vietnēm. Šīs saites ir sniegtas tikai ērtībai un nav uzskatāmas par apstiprināšanu. Mēs neatbildam par saistīto vietņu saturu vai praksi.
      </p>

      <h2>9. Piemērojamie tiesību akti</h2>
      <p>
        Šos noteikumus reglamentē Latvijas Republikas tiesību akti. Strīdi tiek izskatīti Latvijas tiesās, ievērojot piemērojamās ES patērētāju tiesības.
      </p>

      <h2>10. Strīdu izšķiršana</h2>
      <p>
        ES patērētāji var izmantot Eiropas Komisijas tiešsaistes strīdu izšķiršanas (ODR) platformu:
      </p>
      <p>
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
      </p>
      <p>Latvijas patērētāji var arī vērsties:</p>
      <div className="legal-info-block">
        <strong>Patērētāju tiesību aizsardzības centrs (PTAC)</strong>
        <p>Brīvības iela 55, Rīga, LV-1010, Latvija</p>
        <p>Tīmekļvietne: <a href="https://www.ptac.gov.lv" target="_blank" rel="noopener noreferrer">www.ptac.gov.lv</a></p>
      </div>

      <h2>11. Grozījumi</h2>
      <p>
        Mēs paturam tiesības jebkurā laikā grozīt šos noteikumus. Pašreizējā versija vienmēr ir pieejama šajā URL. Turpinot izmantot vietni pēc grozījumiem, jūs piekrītat atjauninātajiem noteikumiem.
      </p>
    </>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

const meta = {
  en: { title: "Terms of Use", subtitle: "Last updated: April 2026" },
  de: { title: "Nutzungsbedingungen", subtitle: "Stand: April 2026" },
  lv: { title: "Lietošanas noteikumi", subtitle: "Pēdējo reizi atjaunināts: 2026. gada aprīlī" },
} as const;

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "de" || locale === "lv") ? locale : "en";
  const { title, subtitle } = meta[lang];

  return (
    <LegalPageShell title={title} subtitle={subtitle}>
      {lang === "de" ? <ContentDE /> : lang === "lv" ? <ContentLV /> : <ContentEN />}
    </LegalPageShell>
  );
}
