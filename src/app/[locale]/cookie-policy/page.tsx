import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { LegalPageShell } from "@/components/legal/legal-page-shell";

type Props = { params: Promise<{ locale: string }> };

const metaByLocale = {
  en: {
    title: "Cookie Policy | Nordora Vital",
    description: "Information about how and why we use cookies on the Nordora Vital website.",
  },
  de: {
    title: "Cookie-Richtlinie | Nordora Vital",
    description: "Informationen darüber, wie und warum wir Cookies auf der Nordora Vital-Website verwenden.",
  },
  lv: {
    title: "Sīkdatņu politika | Nordora Vital",
    description: "Informācija par to, kā un kāpēc mēs izmantojam sīkdatnes Nordora Vital vietnē.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale === "de" || locale === "lv") ? locale : "en";
  return {
    title: metaByLocale[lang].title,
    description: metaByLocale[lang].description,
  };
}

/* ── Locale-specific content components ──────────────────────────────────── */

function ContentEN() {
  return (
    <>
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help the site function correctly, remember your preferences, and give operators insight into how the site is used. Cookies are widely supported across all modern browsers.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>We use cookies to:</p>
      <ul>
        <li>Ensure the Website operates correctly (strictly necessary)</li>
        <li>Remember your language preference across visits</li>
        <li>Understand how visitors interact with the Website, so we can improve it</li>
      </ul>
      <p>
        We do not use cookies for advertising, remarketing, or cross-site tracking.
      </p>

      <h2>3. Types of Cookies We Use</h2>

      <h3>Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the Website to function. Without them, core features such as language selection cannot operate. They cannot be switched off.
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>NEXT_LOCALE</code></td>
            <td>Stores your chosen language preference</td>
            <td>Up to 1 year</td>
          </tr>
          <tr>
            <td>Session cookies</td>
            <td>Maintain basic website session state</td>
            <td>Session (deleted on browser close)</td>
          </tr>
        </tbody>
      </table>

      <h3>Functional Cookies</h3>
      <p>
        These cookies remember choices you make on the Website — such as language and display preferences — to provide a more personalised experience on return visits.
      </p>

      <h3>Analytics Cookies</h3>
      <p>
        Where analytics tools are active on this Website, they may set cookies that help us count visits, understand traffic sources, and measure how visitors use individual pages. All data is collected in aggregate and does not identify individual visitors.
      </p>
      <p>
        If you opt out of analytics cookies, we will not be able to include your visit in our statistics, though your experience of the Website will not be affected.
      </p>

      <h2>4. Third-Party Cookies</h2>
      <p>
        Where third-party services are embedded in the Website (for example, maps or social media widgets), those providers may set their own cookies subject to their own privacy and cookie policies. We do not control third-party cookies. Please consult the relevant third party&apos;s policies for further information.
      </p>

      <h2>5. Your Choices</h2>
      <p>
        You can manage and delete cookies through your browser settings at any time. Instructions for common browsers:
      </p>
      <ul>
        <li><strong>Chrome</strong> — Settings &rarr; Privacy and Security &rarr; Cookies and other site data</li>
        <li><strong>Firefox</strong> — Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data</li>
        <li><strong>Safari</strong> — Preferences &rarr; Privacy &rarr; Manage Website Data</li>
        <li><strong>Edge</strong> — Settings &rarr; Cookies and site permissions</li>
      </ul>
      <p>
        Please note that disabling certain cookies may affect the functionality of this Website, including the ability to switch languages.
      </p>
      <p>
        Where a cookie consent tool is displayed on the Website, you may set or adjust your preferences at any time using that tool.
      </p>

      <h2>6. Further Information</h2>
      <p>
        For details about how we handle your personal data more broadly, please see our <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <p>
        For any questions about our use of cookies, please contact us at:{" "}
        <a href="mailto:hello@nordoravital.com">hello@nordoravital.com</a>
      </p>
    </>
  );
}

function ContentDE() {
  return (
    <>
      <h2>1. Was sind Cookies?</h2>
      <p>
        Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden. Sie helfen der Website, korrekt zu funktionieren, Ihre Präferenzen zu speichern und den Betreibern Einblick in die Nutzung der Website zu geben.
      </p>

      <h2>2. Wofür wir Cookies verwenden</h2>
      <p>Wir verwenden Cookies, um:</p>
      <ul>
        <li>den ordnungsgemäßen Betrieb der Website sicherzustellen (technisch notwendig)</li>
        <li>Ihre Sprachpräferenz über Besuche hinweg zu speichern</li>
        <li>zu verstehen, wie Besucher mit der Website interagieren, und die Website zu verbessern</li>
      </ul>
      <p>
        Wir verwenden keine Cookies für Werbung, Remarketing oder Website-übergreifendes Tracking.
      </p>

      <h2>3. Arten der verwendeten Cookies</h2>

      <h3>Technisch notwendige Cookies</h3>
      <p>
        Diese Cookies sind für den Betrieb der Website unerlässlich. Ohne sie funktionieren Grundfunktionen wie die Sprachwahl nicht. Sie können nicht deaktiviert werden.
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Zweck</th>
            <th>Dauer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>NEXT_LOCALE</code></td>
            <td>Speichert Ihre gewählte Sprachpräferenz</td>
            <td>Bis zu 1 Jahr</td>
          </tr>
          <tr>
            <td>Session-Cookies</td>
            <td>Erhält grundlegenden Session-Status der Website</td>
            <td>Sitzung (beim Schließen des Browsers gelöscht)</td>
          </tr>
        </tbody>
      </table>

      <h3>Funktionale Cookies</h3>
      <p>
        Diese Cookies speichern Ihre Entscheidungen auf der Website — z. B. Sprach- und Anzeigeeinstellungen — für eine personalisiertere Erfahrung bei Folgebesuchen.
      </p>

      <h3>Analytische Cookies</h3>
      <p>
        Wenn Analysetools auf dieser Website aktiv sind, können sie Cookies setzen, die uns helfen, Besuche zu zählen, Zugriffsquellen zu verstehen und die Nutzung einzelner Seiten zu messen. Alle Daten werden aggregiert erhoben und identifizieren keine Einzelpersonen.
      </p>

      <h2>4. Drittanbieter-Cookies</h2>
      <p>
        Wenn Drittanbieter-Dienste in die Website eingebettet sind (z. B. Karten oder Social-Media-Widgets), können deren Anbieter eigene Cookies gemäß ihren eigenen Richtlinien setzen. Wir haben keinen Einfluss auf Drittanbieter-Cookies. Bitte konsultieren Sie die jeweiligen Datenschutz- und Cookie-Richtlinien der Drittanbieter.
      </p>

      <h2>5. Ihre Auswahlmöglichkeiten</h2>
      <p>Sie können Cookies jederzeit über Ihre Browser-Einstellungen verwalten und löschen:</p>
      <ul>
        <li><strong>Chrome</strong> — Einstellungen &rarr; Datenschutz und Sicherheit &rarr; Cookies und andere Websitedaten</li>
        <li><strong>Firefox</strong> — Einstellungen &rarr; Datenschutz &amp; Sicherheit &rarr; Cookies und Website-Daten</li>
        <li><strong>Safari</strong> — Einstellungen &rarr; Datenschutz &rarr; Website-Daten verwalten</li>
        <li><strong>Edge</strong> — Einstellungen &rarr; Cookies und Websiteberechtigungen</li>
      </ul>
      <p>
        Das Deaktivieren bestimmter Cookies kann die Funktionalität dieser Website beeinträchtigen, einschließlich der Sprachwechselfunktion.
      </p>

      <h2>6. Weitere Informationen</h2>
      <p>
        Informationen zum Umgang mit Ihren personenbezogenen Daten finden Sie in unserer <Link href="/privacy">Datenschutzerklärung</Link>.
      </p>
      <p>
        Bei Fragen zu Cookies kontaktieren Sie uns bitte unter:{" "}
        <a href="mailto:hello@nordoravital.com">hello@nordoravital.com</a>
      </p>
    </>
  );
}

function ContentLV() {
  return (
    <>
      <h2>1. Kas ir sīkdatnes?</h2>
      <p>
        Sīkdatnes ir nelielas teksta datnes, kas tiek saglabātas jūsu ierīcē, apmeklējot vietni. Tās palīdz vietnei darboties pareizi, atceras jūsu preferences un sniedz operatoriem ieskatu par vietnes izmantošanu.
      </p>

      <h2>2. Kā mēs izmantojam sīkdatnes</h2>
      <p>Mēs izmantojam sīkdatnes, lai:</p>
      <ul>
        <li>nodrošinātu vietnes pareizu darbību (obligāti nepieciešamās)</li>
        <li>atcerētos jūsu valodas izvēli starp apmeklējumiem</li>
        <li>izprastu, kā apmeklētāji mijiedarbojas ar vietni, un uzlabotu to</li>
      </ul>
      <p>
        Mēs neizmantojam sīkdatnes reklāmai, atkārtotai mērķauditorijas sasniegšanai vai izsekošanai dažādās vietnēs.
      </p>

      <h2>3. Mūsu izmantotās sīkdatņu veidi</h2>

      <h3>Obligāti nepieciešamās sīkdatnes</h3>
      <p>
        Šīs sīkdatnes ir neaizstājamas vietnes darbībai. Bez tām nevar darboties pamata funkcijas, piemēram, valodas maiņa. Tās nevar atspējot.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nosaukums</th>
            <th>Mērķis</th>
            <th>Ilgums</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>NEXT_LOCALE</code></td>
            <td>Saglabā jūsu izvēlēto valodas preferences</td>
            <td>Līdz 1 gadam</td>
          </tr>
          <tr>
            <td>Sesijas sīkdatnes</td>
            <td>Uztur vietnes sesijas pamata stāvokli</td>
            <td>Sesija (dzēstas, aizverot pārlūkprogrammu)</td>
          </tr>
        </tbody>
      </table>

      <h3>Funkcionālās sīkdatnes</h3>
      <p>
        Šīs sīkdatnes atceras jūsu izvēles vietnē — piemēram, valodas un attēlojuma iestatījumus — lai nodrošinātu personalizētāku pieredzi turpmākajos apmeklējumos.
      </p>

      <h3>Analītikas sīkdatnes</h3>
      <p>
        Ja vietnē ir aktīvi analītikas rīki, tie var iestatīt sīkdatnes, kas palīdz mums skaitīt apmeklējumus, izprast trafika avotus un novērtēt atsevišķu lapu izmantošanu. Visi dati tiek apkopoti agregētā veidā un neidentificē atsevišķas personas.
      </p>

      <h2>4. Trešo pušu sīkdatnes</h2>
      <p>
        Ja vietnē ir integrēti trešo pušu pakalpojumi (piemēram, iegultās kartes vai sociālo tīklu logrīki), to nodrošinātāji var iestatīt savas sīkdatnes saskaņā ar savām politikām. Mums nav kontroles pār trešo pušu sīkdatnēm. Lūdzu, skatiet attiecīgā trešās puses privātuma un sīkdatņu politiku.
      </p>

      <h2>5. Jūsu izvēles iespējas</h2>
      <p>Sīkdatnes varat pārvaldīt un dzēst jebkurā laikā pārlūkprogrammas iestatījumos:</p>
      <ul>
        <li><strong>Chrome</strong> — Iestatījumi &rarr; Privātums un drošība &rarr; Sīkdatnes un citi vietnes dati</li>
        <li><strong>Firefox</strong> — Iestatījumi &rarr; Privātums un drošība &rarr; Sīkdatnes un vietnes dati</li>
        <li><strong>Safari</strong> — Preferences &rarr; Privātums &rarr; Pārvaldīt vietnes datus</li>
        <li><strong>Edge</strong> — Iestatījumi &rarr; Sīkdatnes un vietnes atļaujas</li>
      </ul>
      <p>
        Dažu sīkdatņu atspējošana var ietekmēt šīs vietnes funkcionalitāti, tostarp valodas maiņas iespēju.
      </p>

      <h2>6. Papildu informācija</h2>
      <p>
        Sīkāku informāciju par to, kā mēs apstrādājam jūsu personas datus, skatiet mūsu <Link href="/privacy">Privātuma politikā</Link>.
      </p>
      <p>
        Jautājumu gadījumā par sīkdatnēm sazinieties ar mums:{" "}
        <a href="mailto:hello@nordoravital.com">hello@nordoravital.com</a>
      </p>
    </>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

const pageMeta = {
  en: { title: "Cookie Policy", subtitle: "Last updated: April 2026" },
  de: { title: "Cookie-Richtlinie", subtitle: "Stand: April 2026" },
  lv: { title: "Sīkdatņu politika", subtitle: "Pēdējo reizi atjaunināts: 2026. gada aprīlī" },
} as const;

export default async function CookiePolicyPage({ params }: Props) {
  const { locale } = await params;
  const lang = (locale === "de" || locale === "lv") ? locale : "en";
  const { title, subtitle } = pageMeta[lang];

  return (
    <LegalPageShell title={title} subtitle={subtitle}>
      {lang === "de" ? <ContentDE /> : lang === "lv" ? <ContentLV /> : <ContentEN />}
    </LegalPageShell>
  );
}
