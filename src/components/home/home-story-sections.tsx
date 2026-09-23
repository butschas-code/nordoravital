import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { IMAGE_PATHS } from "@/lib/public-images";
import { BrandArc } from "@/components/brand-arc";
import { ContactDrawerTrigger } from "@/components/contact/contact-drawer-trigger";
import { OptimizedBackgroundVideo } from "@/components/optimized-background-video";
import { FadeUp } from "@/components/fade-up";
import { richParts } from "@/lib/i18n-rich";

const container = "relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10";
const sectionTitle =
  "font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-[var(--text)]";
const eyebrow = "text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-strong)]";

export async function HomeHero() {
  const t = await getTranslations("HomeStory");

  return (
    <section
      className="relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden bg-[var(--bg)]"
      aria-labelledby="home-hero-heading"
    >
      <div className="relative min-h-[min(92dvh,880px)] lg:min-h-[min(88dvh,800px)]">
        <div className="absolute inset-0">
          <OptimizedBackgroundVideo
            src={IMAGE_PATHS.hero.backgroundVideo}
            poster={IMAGE_PATHS.hero.backgroundPhoto}
            priority
          />
        </div>
        <div className="home-hero-overlay pointer-events-none absolute inset-0" aria-hidden />
        <div className="arc-watermark" aria-hidden>
          <BrandArc color="#FFFFFF" size={700} className="absolute -right-24 -top-24 opacity-[0.06]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[min(92dvh,880px)] max-w-[1200px] flex-col justify-end px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 md:px-8 lg:min-h-[min(88dvh,800px)] lg:pb-20 lg:pt-24 lg:px-10">
          <div className="ml-auto w-full max-w-xl pb-4 text-right sm:max-w-2xl">
            <p className="campaign-eyebrow fade-up mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-white/90 sm:text-[0.875rem] sm:tracking-[0.16em]">
              {t("heroKicker")}
            </p>
            <h1 id="home-hero-heading" className="fade-up fade-up-delay-1 font-heading text-h1 text-white">
              {t("heroHeadline")}
            </h1>
            <p className="fade-up fade-up-delay-2 mt-6 max-w-[52ch] text-xl leading-[1.65] text-white/92 md:ml-auto md:text-2xl md:leading-[1.55]">
              {t.rich("heroSubheadline", richParts.onDark)}
            </p>
            <div className="fade-up fade-up-delay-3 mt-10 flex flex-col items-end gap-3 sm:flex-row sm:justify-end sm:gap-4">
              <ContactDrawerTrigger
                className="btn-primary inline-flex justify-center"
                options={{ message: t("tryMeetMessage") }}
              >
                {t("ctaFeel")}
              </ContactDrawerTrigger>
              <Link href="/how-it-works" className="btn-ghost-white inline-flex justify-center">
                {t("heroSecondaryCta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function HomeManifesto() {
  const t = await getTranslations("HomeStory");
  const lines = ["manifestoLine1", "manifestoLine2", "manifestoLine3", "manifestoLine4"] as const;

  return (
    <section
      className="home-band-full campaign-band-soft py-24 sm:py-28 md:py-32"
      aria-labelledby="home-manifesto-heading"
    >
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <div>
            <FadeUp>
              <p className={eyebrow}>{t("manifestoEyebrow")}</p>
              <h2
                id="home-manifesto-heading"
                className="mt-4 font-heading text-[clamp(1.85rem,4.2vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]"
              >
                {t("manifestoTitle")}
              </h2>
            </FadeUp>
            <FadeUp delay={1}>
              <ul className="mt-10 space-y-5 border-l-2 border-[var(--brand)]/40 pl-6">
                {lines.map((key) => (
                  <li key={key} className="text-lg leading-[1.65] text-[var(--text)] opacity-90 sm:text-xl">
                    {t(key)}
                  </li>
                ))}
              </ul>
              <p className="mt-10 font-heading text-xl font-semibold leading-snug text-[var(--brand-strong)] sm:text-2xl">
                {t("manifestoClosing")}
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={1} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)]">
              <Image
                src="/images/Sanza%20mat%2001.jpg"
                alt={t("manifestoImageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export async function HomeScene() {
  const t = await getTranslations("HomeStory");

  return (
    <section className="home-band-full py-24 sm:py-28 lg:py-32" aria-labelledby="home-scene-heading">
      <div className={container}>
        <FadeUp className="mx-auto max-w-3xl text-center">
          <p className={eyebrow}>{t("sceneEyebrow")}</p>
          <h2 id="home-scene-heading" className={`mt-4 ${sectionTitle}`}>
            {t("sceneTitle")}
          </h2>
          <p className="mt-5 font-heading text-lg font-semibold text-[var(--muted)]">{t("sceneTime")}</p>
        </FadeUp>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <FadeUp delay={1} className="h-full">
            <article className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                {t("sceneBeforeLabel")}
              </p>
              <p className="mt-4 text-lg leading-[1.7] text-[var(--text)] opacity-85 sm:text-xl">
                {t("sceneBefore")}
              </p>
            </article>
          </FadeUp>
          <FadeUp delay={2} className="h-full">
            <article className="flex h-full flex-col rounded-3xl bg-[var(--brand-deep)] p-7 text-white shadow-[var(--shadow-raised)] sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/75">
                {t("sceneAfterLabel")}
              </p>
              <p className="mt-4 text-lg leading-[1.7] text-white/95 sm:text-xl">{t("sceneAfter")}</p>
            </article>
          </FadeUp>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-[var(--muted)]">
          {t.rich("sceneNote", richParts.default)}
        </p>
      </div>
    </section>
  );
}

export async function HomeOrigin() {
  const t = await getTranslations("HomeStory");
  const facts = [
    { title: "originFact1Title", body: "originFact1Body" },
    { title: "originFact2Title", body: "originFact2Body" },
    { title: "originFact3Title", body: "originFact3Body" },
  ] as const;

  return (
    <section
      className="home-band-full py-20 sm:py-24 lg:py-28"
      aria-labelledby="home-origin-heading"
    >
      <div className={container}>
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className={eyebrow}>{t("originEyebrow")}</p>
          <h2
            id="home-origin-heading"
            className="mt-4 font-heading text-[clamp(1.75rem,4vw,2.6rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]"
          >
            {t("originTitle")}
          </h2>
        </FadeUp>

        <dl className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
          {facts.map((f, i) => (
            <FadeUp key={f.title} delay={(i + 1) as 1 | 2 | 3} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)]">
                <dt className="font-heading text-xl font-bold leading-snug text-[var(--brand-strong)]">
                  {t(f.title)}
                </dt>
                <dd className="mt-3 text-base leading-relaxed text-[var(--muted)]">{t(f.body)}</dd>
              </div>
            </FadeUp>
          ))}
        </dl>
      </div>
    </section>
  );
}

export async function HomeTrySession() {
  const t = await getTranslations("HomeStory");
  const options = [
    { title: "tryMeetTitle", body: "tryMeetBody", cta: "tryMeetCta", message: "tryMeetMessage" },
    { title: "tryRentTitle", body: "tryRentBody", cta: "tryRentCta", message: "tryRentMessage" },
  ] as const;

  return (
    <section
      className="home-band-full campaign-band-soft py-24 sm:py-28 lg:py-32"
      aria-labelledby="home-try-heading"
    >
      <div className={container}>
        <FadeUp className="mx-auto max-w-3xl text-center">
          <p className={eyebrow}>{t("tryEyebrow")}</p>
          <h2 id="home-try-heading" className={`mt-4 ${sectionTitle}`}>
            {t("tryTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-[1.65] text-[var(--text)] opacity-90 sm:text-xl">
            {t.rich("tryLead", richParts.default)}
          </p>
        </FadeUp>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {options.map((o, i) => (
            <FadeUp key={o.title} delay={(i + 1) as 1 | 2} className="h-full">
              <article className="flex h-full flex-col rounded-3xl bg-[var(--surface)] p-7 shadow-[var(--shadow-card)] ring-1 ring-[var(--border)] sm:p-9">
                <h3 className="font-heading text-2xl font-bold leading-tight text-[var(--text)]">{t(o.title)}</h3>
                <p className="mt-4 flex-1 text-lg leading-[1.65] text-[var(--muted)]">{t(o.body)}</p>
                <ContactDrawerTrigger
                  className={`${i === 0 ? "btn-primary" : "btn-outline"} mt-8 inline-flex justify-center self-start`}
                  options={{ message: t(o.message) }}
                >
                  {t(o.cta)}
                </ContactDrawerTrigger>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function HomeClosing() {
  const t = await getTranslations("HomeStory");

  return (
    <section
      className="home-band-full bg-[var(--brand-deep)] py-24 text-white sm:py-28 lg:py-32"
      aria-labelledby="home-closing-heading"
    >
      <div className={container}>
        <FadeUp className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/75">{t("closingEyebrow")}</p>
          <h2
            id="home-closing-heading"
            className="mt-4 font-heading text-[clamp(1.9rem,4.4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white"
          >
            {t("closingTitle")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.65] text-white/90 sm:text-xl">
            {t.rich("closingBody", richParts.onDark)}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ContactDrawerTrigger
              className="btn-primary inline-flex justify-center"
              options={{ message: t("tryMeetMessage") }}
            >
              {t("ctaFeel")}
            </ContactDrawerTrigger>
            <Link href="/pilot-program" className="btn-ghost-white inline-flex justify-center">
              {t("closingSecondaryCta")}
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
