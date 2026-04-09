import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { LegalPageShell } from "@/components/legal/legal-page-shell";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = (await import(`../../../../messages/${locale}.json`)).default as {
    Privacy: { metaTitle: string; metaDescription: string };
  };
  return {
    title: m.Privacy.metaTitle,
    description: m.Privacy.metaDescription,
  };
}

/* ── Locale-specific content components ──────────────────────────────────── */

function ContentEN() {
  return (
    <>
      <h2>1. Who We Are</h2>
      <p>
        The data controller responsible for your personal data is:
      </p>
      <div className="legal-info-block">
        <strong>Nordora Vital SIA</strong>
        <p>[Street Address], Riga LV-[XXXX], Latvia</p>
        <p>Commercial Register No.: [000000-0]</p>
        <p>Email: hello@nordoravital.com</p>
      </div>

      <h2>2. Data We Collect</h2>
      <p>We collect personal data only when you actively provide it or when it arises through your use of our website:</p>
      <ul>
        <li><strong>Contact and inquiry data</strong> — name, email address, phone number, professional role and sector, when you submit a contact, pilot or booking form</li>
        <li><strong>Usage data</strong> — IP address, browser type, operating system, pages visited, timestamps, automatically collected via server logs</li>
        <li><strong>Communication data</strong> — the content of messages you send to us</li>
      </ul>
      <p>We do not collect special-category data (GDPR Art. 9) and do not knowingly process data relating to children.</p>

      <h2>3. Purposes and Legal Bases</h2>
      <p>We process your data for the following purposes:</p>
      <ul>
        <li><strong>Responding to inquiries and managing pilot programme registrations</strong> — on the basis of pre-contractual measures and our legitimate interest in communicating with prospective professional partners (GDPR Art. 6(1)(b) and (f))</li>
        <li><strong>Operating and improving our website</strong> — on the basis of our legitimate interest in maintaining and developing our online services (GDPR Art. 6(1)(f))</li>
        <li><strong>Sending marketing communications</strong>, where you have opted in — on the basis of your consent (GDPR Art. 6(1)(a))</li>
        <li><strong>Complying with legal obligations</strong> such as tax and accounting records — on the basis of legal obligation (GDPR Art. 6(1)(c))</li>
      </ul>

      <h2>4. Retention Periods</h2>
      <p>We retain personal data only for as long as necessary:</p>
      <ul>
        <li>Inquiry and communication data: up to <strong>3 years</strong> from the date of your last contact</li>
        <li>Contract and accounting data: up to <strong>10 years</strong> in accordance with the Latvian Accounting Law (<em>Grāmatvedības likums</em>)</li>
        <li>Consent-based data (e.g. marketing): until you withdraw your consent</li>
      </ul>

      <h2>5. Disclosure of Data</h2>
      <p>We do not sell your personal data. We may share data with:</p>
      <ul>
        <li><strong>Service providers acting as processors</strong> — website hosting, email delivery, CRM — each bound by a data processing agreement</li>
        <li><strong>Authorities and courts</strong>, when legally required or permitted</li>
      </ul>
      <p>All processors are contractually obligated to process data only on our instructions and in accordance with the GDPR.</p>

      <h2>6. International Transfers</h2>
      <p>
        Our primary processing takes place within the European Economic Area (EEA). Where data is transferred outside the EEA, we ensure adequate safeguards are in place — either an European Commission adequacy decision or Standard Contractual Clauses (SCCs).
      </p>

      <h2>7. Cookies and Tracking</h2>
      <p>
        This website uses cookies. For full details of the cookies we use and how to manage them, please see our{" "}
        <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>

      <h2>8. Your Rights</h2>
      <p>Under the GDPR you have the right to:</p>
      <ul>
        <li><strong>Access</strong> (Art. 15) — obtain a copy of the personal data we hold about you</li>
        <li><strong>Rectification</strong> (Art. 16) — have inaccurate data corrected or incomplete data completed</li>
        <li><strong>Erasure</strong> (Art. 17) — request deletion of your data where no legitimate ground for retention exists</li>
        <li><strong>Restriction of processing</strong> (Art. 18) — limit how we process your data in certain circumstances</li>
        <li><strong>Data portability</strong> (Art. 20) — receive your data in a structured, machine-readable format</li>
        <li><strong>Objection</strong> (Art. 21) — object to processing based on legitimate interests or for direct marketing</li>
        <li><strong>Withdraw consent</strong> (Art. 7(3)) — where processing is based on consent, withdraw it at any time without affecting the lawfulness of prior processing</li>
      </ul>
      <p>
        To exercise any of these rights, please email us at <a href="mailto:hello@nordoravital.com">hello@nordoravital.com</a>. We will respond within one calendar month (extendable by a further two months in complex cases, with notice).
      </p>

      <h2>9. Right to Lodge a Complaint</h2>
      <p>
        If you believe we have not handled your data lawfully, you may lodge a complaint with the Latvian supervisory authority:
      </p>
      <div className="legal-info-block">
        <strong>Datu valsts inspekcija (Data State Inspectorate)</strong>
        <p>Elijas iela 17, Rīga, LV-1050, Latvia</p>
        <p>Website: <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer">www.dvi.gov.lv</a></p>
        <p>Email: <a href="mailto:info@dvi.gov.lv">info@dvi.gov.lv</a></p>
      </div>
      <p>You also have the right to contact the supervisory authority in your country of habitual residence or place of work.</p>

      <h2>10. Children</h2>
      <p>
        Our services are directed exclusively at professionals. This website is not intended for individuals under 16 years of age, and we do not knowingly collect data from children.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. The current version is always available at this URL. Where required by law, we will notify you of significant changes.
      </p>

      <h2>12. Contact</h2>
      <p>
        For any questions about this Privacy Policy or our data practices, please contact us at:{" "}
        <a href="mailto:hello@nordoravital.com">hello@nordoravital.com</a>
      </p>
    </>
  );
}

function ContentDE() {
  return (
    <>
      <h2>1. Verantwortlicher</h2>
      <p>Verantwortlich im Sinne der DSGVO ist:</p>
      <div className="legal-info-block">
        <strong>Nordora Vital SIA</strong>
        <p>[Straße, Hausnummer], Riga LV-[XXXX], Lettland</p>
        <p>Handelsregisternummer: [000000-0]</p>
        <p>E-Mail: hello@nordoravital.com</p>
      </div>

      <h2>2. Erhobene Daten</h2>
      <p>Wir erheben personenbezogene Daten nur, wenn Sie diese aktiv mitteilen oder sie durch die Nutzung unserer Website entstehen:</p>
      <ul>
        <li><strong>Kontakt- und Anfragedaten</strong> — Name, E-Mail-Adresse, Telefonnummer, berufliche Funktion und Branche, bei Einsendung eines Kontakt-, Pilot- oder Buchungsformulars</li>
        <li><strong>Nutzungsdaten</strong> — IP-Adresse, Browser-Typ, Betriebssystem, aufgerufene Seiten, Zeitstempel, automatisch durch Server-Logs erfasst</li>
        <li><strong>Kommunikationsdaten</strong> — Inhalt der Nachrichten, die Sie uns senden</li>
      </ul>
      <p>Wir erheben keine besonderen Kategorien personenbezogener Daten (Art. 9 DSGVO) und verarbeiten keine Daten von Kindern.</p>

      <h2>3. Zwecke und Rechtsgrundlagen</h2>
      <p>Wir verarbeiten Ihre Daten zu folgenden Zwecken:</p>
      <ul>
        <li><strong>Bearbeitung von Anfragen und Pilot-Programm-Registrierungen</strong> — auf Grundlage vorvertraglicher Maßnahmen sowie unseres berechtigten Interesses (Art. 6 Abs. 1 lit. b und f DSGVO)</li>
        <li><strong>Betrieb und Verbesserung unserer Website</strong> — auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO)</li>
        <li><strong>Versand von Marketing-Kommunikation</strong>, soweit Sie eingewilligt haben — auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</li>
        <li><strong>Erfüllung gesetzlicher Pflichten</strong> (z. B. Steuer- und Buchführungspflichten) — auf Grundlage einer rechtlichen Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)</li>
      </ul>

      <h2>4. Speicherdauer</h2>
      <p>Wir speichern personenbezogene Daten nur so lange wie erforderlich:</p>
      <ul>
        <li>Anfrage- und Kommunikationsdaten: bis zu <strong>3 Jahre</strong> ab dem letzten Kontakt</li>
        <li>Vertrags- und Buchführungsdaten: bis zu <strong>10 Jahre</strong> gemäß dem lettischen Buchführungsgesetz (<em>Grāmatvedības likums</em>)</li>
        <li>Einwilligungsbasierte Daten (z. B. Marketing): bis zum Widerruf der Einwilligung</li>
      </ul>

      <h2>5. Weitergabe von Daten</h2>
      <p>Wir verkaufen Ihre personenbezogenen Daten nicht. Eine Weitergabe erfolgt an:</p>
      <ul>
        <li><strong>Dienstleister als Auftragsverarbeiter</strong> — Website-Hosting, E-Mail-Versand, CRM — jeweils durch Auftragsverarbeitungsverträge gebunden</li>
        <li><strong>Behörden und Gerichte</strong>, soweit gesetzlich erforderlich oder erlaubt</li>
      </ul>

      <h2>6. Internationale Übermittlungen</h2>
      <p>
        Die Datenverarbeitung erfolgt vorrangig innerhalb des Europäischen Wirtschaftsraums (EWR). Bei etwaigen Übermittlungen in Drittländer stellen wir geeignete Garantien sicher — Angemessenheitsbeschluss der Europäischen Kommission oder Standardvertragsklauseln (SCC).
      </p>

      <h2>7. Cookies und Tracking</h2>
      <p>
        Diese Website verwendet Cookies. Einzelheiten entnehmen Sie bitte unserer{" "}
        <Link href="/cookie-policy">Cookie-Richtlinie</Link>.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>Gemäß DSGVO haben Sie das Recht auf:</p>
      <ul>
        <li><strong>Auskunft</strong> (Art. 15) — Kopie der über Sie gespeicherten Daten</li>
        <li><strong>Berichtigung</strong> (Art. 16) — Korrektur unrichtiger oder Vervollständigung unvollständiger Daten</li>
        <li><strong>Löschung</strong> (Art. 17) — Löschung Ihrer Daten, soweit kein legitimer Aufbewahrungsgrund besteht</li>
        <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18) — Einschränkung der Verarbeitung in bestimmten Fällen</li>
        <li><strong>Datenübertragbarkeit</strong> (Art. 20) — Erhalt Ihrer Daten in einem strukturierten, maschinenlesbaren Format</li>
        <li><strong>Widerspruch</strong> (Art. 21) — Widerspruch gegen Verarbeitung auf Grundlage berechtigter Interessen oder für Direktmarketing</li>
        <li><strong>Widerruf der Einwilligung</strong> (Art. 7 Abs. 3) — jederzeitiger Widerruf, ohne Rückwirkung auf die vorangegangene Verarbeitung</li>
      </ul>
      <p>
        Bitte wenden Sie sich an <a href="mailto:hello@nordoravital.com">hello@nordoravital.com</a>. Wir antworten innerhalb eines Kalendermonats.
      </p>

      <h2>9. Beschwerderecht</h2>
      <p>Bei Verstößen gegen das Datenschutzrecht können Sie sich bei der zuständigen Aufsichtsbehörde beschweren:</p>
      <div className="legal-info-block">
        <strong>Datu valsts inspekcija (Lettische Datenschutzbehörde)</strong>
        <p>Elijas iela 17, Rīga, LV-1050, Lettland</p>
        <p>Website: <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer">www.dvi.gov.lv</a></p>
        <p>E-Mail: <a href="mailto:info@dvi.gov.lv">info@dvi.gov.lv</a></p>
      </div>
      <p>Sie können sich auch an die Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsorts oder Arbeitsorts wenden.</p>

      <h2>10. Kinder</h2>
      <p>
        Unsere Dienste richten sich ausschließlich an Fachleute. Diese Website ist nicht für Personen unter 16 Jahren bestimmt, und wir erheben wissentlich keine Daten von Kindern.
      </p>

      <h2>11. Änderungen</h2>
      <p>
        Wir können diese Datenschutzerklärung gelegentlich aktualisieren. Die jeweils aktuelle Fassung ist stets unter dieser URL abrufbar. Soweit rechtlich erforderlich, werden wir Sie über wesentliche Änderungen informieren.
      </p>

      <h2>12. Kontakt</h2>
      <p>
        Bei Fragen zu dieser Datenschutzerklärung wenden Sie sich bitte an:{" "}
        <a href="mailto:hello@nordoravital.com">hello@nordoravital.com</a>
      </p>
    </>
  );
}

function ContentLV() {
  return (
    <>
      <h2>1. Pārzinis</h2>
      <p>Par jūsu personas datu apstrādi atbildīgais pārzinis ir:</p>
      <div className="legal-info-block">
        <strong>Nordora Vital SIA</strong>
        <p>[Iela, mājas numurs], Rīga LV-[XXXX], Latvija</p>
        <p>Reģistrācijas numurs: [000000-0]</p>
        <p>E-pasts: hello@nordoravital.com</p>
      </div>

      <h2>2. Mūsu apkopotie dati</h2>
      <p>Mēs apkopojam personas datus tikai tad, ja jūs tos aktīvi sniedzat vai tie rodas, izmantojot mūsu vietni:</p>
      <ul>
        <li><strong>Kontaktinformācija un pieprasījumu dati</strong> — vārds, e-pasta adrese, tālruņa numurs, profesionālā loma un nozare, aizpildot kontaktu, izmēģinājuma vai rezervācijas veidlapu</li>
        <li><strong>Lietošanas dati</strong> — IP adrese, pārlūkprogrammas veids, operētājsistēma, apmeklētās lapas, laika zīmogi, automātiski reģistrēti servera žurnālos</li>
        <li><strong>Saziņas dati</strong> — jūsu nosūtīto ziņojumu saturs</li>
      </ul>
      <p>Mēs neapkopojam īpašu kategoriju personas datus (VDAR 9. pants) un neapstrādājam bērnu datus.</p>

      <h2>3. Mērķi un juridiskie pamati</h2>
      <p>Mēs apstrādājam jūsu datus šādiem mērķiem:</p>
      <ul>
        <li><strong>Pieprasījumu apstrāde un izmēģinājuma programmas reģistrācija</strong> — pamatojoties uz pirmslīguma pasākumiem un mūsu leģitīmajām interesēm (VDAR 6. panta 1. punkta b) un f) apakšpunkts)</li>
        <li><strong>Vietnes darbība un uzlabošana</strong> — pamatojoties uz mūsu leģitīmajām interesēm (VDAR 6. panta 1. punkta f) apakšpunkts)</li>
        <li><strong>Mārketinga saziņas nosūtīšana</strong>, ja esat devis piekrišanu — pamatojoties uz piekrišanu (VDAR 6. panta 1. punkta a) apakšpunkts)</li>
        <li><strong>Likumīgo pienākumu izpilde</strong> (grāmatvedība, nodokļi) — pamatojoties uz juridisku pienākumu (VDAR 6. panta 1. punkta c) apakšpunkts)</li>
      </ul>

      <h2>4. Glabāšanas periodi</h2>
      <p>Mēs glabājam personas datus tikai tik ilgi, cik nepieciešams:</p>
      <ul>
        <li>Pieprasījumu un saziņas dati: līdz <strong>3 gadiem</strong> no pēdējā kontakta datuma</li>
        <li>Līguma un grāmatvedības dati: līdz <strong>10 gadiem</strong> saskaņā ar Grāmatvedības likumu</li>
        <li>Dati, kuru apstrāde balstās uz piekrišanu (piemēram, mārketings): līdz piekrišanas atsaukšanai</li>
      </ul>

      <h2>5. Datu nodošana trešajām pusēm</h2>
      <p>Mēs nepārdodam jūsu personas datus. Dati var tikt nodoti:</p>
      <ul>
        <li><strong>Pakalpojumu sniedzējiem kā apstrādātājiem</strong> — tīmekļa mitināšana, e-pasta piegāde, CRM — ar datu apstrādes līgumiem</li>
        <li><strong>Iestādēm un tiesām</strong>, ja to pieprasa vai atļauj likums</li>
      </ul>

      <h2>6. Starptautiskā datu nosūtīšana</h2>
      <p>
        Datu apstrāde galvenokārt notiek Eiropas Ekonomikas zonā (EEZ). Ja dati tiek nosūtīti ārpus EEZ, mēs nodrošinām atbilstošas garantijas — Eiropas Komisijas lēmumu par aizsardzības pietiekamību vai standarta līguma klauzulas (SLC).
      </p>

      <h2>7. Sīkdatnes un izsekošana</h2>
      <p>
        Šī vietne izmanto sīkdatnes. Sīkāku informāciju skatiet mūsu{" "}
        <Link href="/cookie-policy">Sīkdatņu politikā</Link>.
      </p>

      <h2>8. Jūsu tiesības</h2>
      <p>Saskaņā ar VDAR jums ir tiesības uz:</p>
      <ul>
        <li><strong>Piekļuvi</strong> (15. pants) — saņemt to personas datu kopiju, ko mēs par jums glabājam</li>
        <li><strong>Labošanu</strong> (16. pants) — neprecīzu datu labošanu vai nepilnīgu datu papildināšanu</li>
        <li><strong>Dzēšanu</strong> (17. pants) — datu dzēšanu, ja nav leģitīma glabāšanas pamatojuma</li>
        <li><strong>Apstrādes ierobežošanu</strong> (18. pants) — apstrādes ierobežošanu noteiktos apstākļos</li>
        <li><strong>Datu pārnesamību</strong> (20. pants) — datu saņemšanu strukturētā, mašīnlasāmā formātā</li>
        <li><strong>Iebildumu</strong> (21. pants) — iebildumu pret apstrādi, kas balstīta uz leģitīmajām interesēm vai tiešo mārketingu</li>
        <li><strong>Piekrišanas atsaukšanu</strong> (7. panta 3. punkts) — jebkurā laikā bez ietekmes uz iepriekšējo apstrādi</li>
      </ul>
      <p>
        Lai izmantotu savas tiesības, sazinieties ar mums: <a href="mailto:hello@nordoravital.com">hello@nordoravital.com</a>. Mēs atbildēsim viena kalendārā mēneša laikā.
      </p>

      <h2>9. Tiesības iesniegt sūdzību</h2>
      <p>Ja uzskatāt, ka esam pārkāpuši datu aizsardzības tiesību aktus, varat iesniegt sūdzību:</p>
      <div className="legal-info-block">
        <strong>Datu valsts inspekcija</strong>
        <p>Elijas iela 17, Rīga, LV-1050, Latvija</p>
        <p>Tīmekļvietne: <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer">www.dvi.gov.lv</a></p>
        <p>E-pasts: <a href="mailto:info@dvi.gov.lv">info@dvi.gov.lv</a></p>
      </div>
      <p>Varat arī vērsties pie uzraudzības iestādes savā pastāvīgās dzīvesvietas vai darba vietas valstī.</p>

      <h2>10. Bērni</h2>
      <p>
        Mūsu pakalpojumi ir paredzēti tikai profesionāļiem. Šī vietne nav paredzēta personām, kas jaunākas par 16 gadiem, un mēs apzināti neapkopojam bērnu datus.
      </p>

      <h2>11. Izmaiņas</h2>
      <p>
        Mēs varam periodiski atjaunināt šo privātuma politiku. Pašreizējā versija vienmēr ir pieejama šajā URL. Likumā noteiktajos gadījumos mēs informēsim jūs par būtiskām izmaiņām.
      </p>

      <h2>12. Kontakti</h2>
      <p>
        Jautājumu gadījumā par šo privātuma politiku vai mūsu datu apstrādi sazinieties ar mums:{" "}
        <a href="mailto:hello@nordoravital.com">hello@nordoravital.com</a>
      </p>
    </>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

const meta = {
  en: { title: "Privacy Policy", subtitle: "Last updated: April 2026" },
  de: { title: "Datenschutzerklärung", subtitle: "Stand: April 2026" },
  lv: { title: "Privātuma politika", subtitle: "Pēdējo reizi atjaunināts: 2026. gada aprīlī" },
} as const;

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "de" || locale === "lv") ? locale : "en";
  const { title, subtitle } = meta[lang];

  return (
    <LegalPageShell title={title} subtitle={subtitle}>
      {lang === "de" ? <ContentDE /> : lang === "lv" ? <ContentLV /> : <ContentEN />}
    </LegalPageShell>
  );
}
