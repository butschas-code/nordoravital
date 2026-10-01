import Image from "next/image";
import { FadeUp } from "@/components/fade-up";
import { SpaGuestJourney } from "@/components/campaign/spa-guest-journey";

const MODELS = [
  {
    index: "01",
    title: "Standalone session",
    kicker: "A new bookable treatment",
    example: "20–30 minute sanza wellness session",
    rows: [
      {
        label: "Possible positioning",
        body: "Reset · Deep Relax · Recovery · Evening Wind-Down",
      },
      {
        label: "Commercial logic",
        body: "Add a new treatment-menu item without adding another hands-on therapy.",
      },
      {
        label: "Suitable for",
        body: "Guests who want relaxation, recovery or something new between traditional treatments.",
      },
      {
        label: "Example guest price",
        body: "Set according to your existing treatment menu.",
      },
    ],
  },
  {
    index: "02",
    title: "Treatment add-on",
    kicker: "Increase the value of an existing booking",
    example: "sanza → massage, or sauna → sanza → massage, or facial → sanza relaxation",
    rows: [
      {
        label: "How it is offered",
        body: "An optional 10–20 minute premium addition to something the guest was already going to book.",
      },
      {
        label: "Why start here",
        body: "This lets the spa introduce sanza without asking guests to understand an entirely new treatment category first.",
      },
    ],
  },
  {
    index: "03",
    title: "Package component",
    kicker: "Make an existing wellness package feel more distinctive",
    journeys: [
      { name: "Recovery afternoon", steps: "Sauna → sanza → massage → tea / relaxation" },
      { name: "Deep reset", steps: "sanza → treatment → relaxation lounge" },
    ],
    note: "These are example concepts, not fixed Nordora packages.",
  },
  {
    index: "04",
    title: "Premium guest / membership benefit",
    kicker: "Included selectively, rather than sold every time",
    includes: [
      "Premium spa memberships",
      "Wellness weekends",
      "Executive / VIP packages",
      "Sports recovery packages",
      "Retreat programmes",
      "Selected room or suite packages",
    ],
    note: "The business does not have to sell every sanza session separately.",
  },
] as const;

const MENU_CONCEPTS = [
  {
    name: "Sanza Reset",
    duration: "20–30 min",
    image: "/images/campaign/spa-fit-signature.jpg",
    body: "A quiet standalone wellness session for guests who want to stop, reset and decompress.",
    placement: "Treatment room or dedicated relaxation space.",
    journey: "Spa arrival → sanza → relaxation lounge",
  },
  {
    name: "Sanza + Massage",
    duration: "10–15 min sanza + existing massage treatment",
    image: "/images/campaign/day-spa-fit-treatment-enhancer.jpg",
    body: "A simple way to add sanza to a service guests already understand.",
    placement: "Before the massage the guest has already booked.",
    journey: "sanza → massage → tea / relaxation",
  },
  {
    name: "Active Recovery",
    duration: "20–30 min",
    image: "/images/campaign/spa-hotel-hero.jpg",
    body: "For hotel guests returning from the gym, golf, tennis, hiking, cycling, skiing or another active experience.",
    placement: "After the activity, once the guest has showered or used the thermal area.",
    journey: "Activity → shower / sauna → sanza → relaxation",
  },
] as const;

const SCENARIOS = [
  {
    title: "Boutique spa",
    context: "One treatment room",
    start: "Standalone 20–30 minute sanza sessions",
    why: "Simple proposition, easy to test, no need to redesign the whole menu.",
    image: "/images/campaign/day-spa-block-1.jpg",
  },
  {
    title: "Hotel spa",
    context: "Existing massage, sauna and relaxation offering",
    start: "sanza add-on + one signature package",
    why: "Introduces the experience through services guests already understand.",
    image: "/images/campaign/spa-hotel-block-1.jpg",
  },
  {
    title: "Wellness resort",
    context: "Multiple treatment rooms + longer guest stays",
    start: "Standalone sessions + packages + recovery / retreat integration",
    why: "More opportunities to place sanza at different points in the guest journey.",
    image: "/images/campaign/spa-fit-retreat.jpg",
  },
] as const;

const REQUIREMENTS = [
  {
    label: "Space",
    body: "A treatment room, wellness room or suitable quiet relaxation space.",
  },
  {
    label: "Team",
    body: "Staff learn the basic setup and programme workflow.",
  },
  {
    label: "Treatment menu",
    body: "We help identify the simplest way to position sanza within the spa’s existing offer.",
  },
  {
    label: "Launch",
    body: "Start with a small number of sessions or a pilot rather than changing the entire operation.",
  },
  {
    label: "Support",
    body: "Nordora supports setup, team introduction and initial service positioning.",
  },
] as const;

const FORMULA = [
  "Number of bookable sessions per day",
  "Guest price or package value",
  "Operating days",
] as const;

function SectionIntro({
  id,
  eyebrow,
  title,
  lead,
  onDark = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  onDark?: boolean;
}) {
  return (
    <FadeUp className="max-w-3xl">
      <p
        className={`text-[0.72rem] font-semibold uppercase leading-snug tracking-[0.11em] sm:text-sm sm:tracking-[0.16em] md:text-[0.9375rem] md:tracking-[0.18em] ${
          onDark ? "text-white/72" : "text-[var(--brand-strong)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 font-heading text-[clamp(1.8rem,8vw,2.7rem)] font-bold leading-[1.08] tracking-tight sm:text-[clamp(2rem,5vw,2.7rem)] md:text-[clamp(2rem,4vw,2.7rem)] ${
          onDark ? "text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.4)]" : "text-[var(--text)]"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            onDark ? "text-white/80" : "text-[var(--muted)]"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </FadeUp>
  );
}

export function SpaBusinessSections() {
  return (
    <>
      <section
        className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-16 sm:py-20 md:py-24 lg:py-28"
        aria-labelledby="spa-commercial-models-heading"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <SectionIntro
            id="spa-commercial-models-heading"
            eyebrow="How you can offer it"
            title="One system. Several ways to turn it into a guest experience."
            lead="sanza does not have to become a completely new department or treatment category. Start with the commercial model that best fits your existing spa."
          />
          <ul className="mt-9 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:gap-7" style={{ gridAutoRows: "1fr" }}>
            {MODELS.map((model, index) => (
              <li key={model.index} className="h-full">
                <FadeUp delay={Math.min(index + 1, 4) as 1 | 2 | 3 | 4} className="h-full">
                  <article className="campaign-card flex h-full flex-col p-5 sm:p-7">
                    <p className="font-heading text-[2rem] font-bold leading-none text-[var(--brand-strong)]">
                      {model.index}
                    </p>
                    <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-[var(--text)] sm:text-2xl">
                      {model.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand-strong)]">
                      {model.kicker}
                    </p>
                    {"example" in model ? (
                      <p className="mt-5 text-base leading-relaxed text-[var(--text)]">
                        <span className="font-semibold">Example. </span>
                        {model.example}
                      </p>
                    ) : null}
                    {"rows" in model ? (
                      <dl className="mt-5 space-y-4">
                        {model.rows.map((row) => (
                          <div key={row.label}>
                            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                              {row.label}
                            </dt>
                            <dd className="mt-1.5 text-base leading-relaxed text-[var(--muted)]">{row.body}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}
                    {"journeys" in model ? (
                      <ul className="mt-5 space-y-4">
                        {model.journeys.map((journey) => (
                          <li key={journey.name} className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                              {journey.name}
                            </p>
                            <p className="mt-1.5 text-base leading-relaxed text-[var(--text)]">{journey.steps}</p>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {"includes" in model ? (
                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {model.includes.map((item) => (
                          <li key={item} className="flex gap-2 text-base leading-relaxed text-[var(--muted)]">
                            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {"note" in model ? (
                      <p className="mt-5 text-base leading-relaxed text-[var(--text)]">{model.note}</p>
                    ) : null}
                  </article>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="home-band-full home-band--quotes relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-16 sm:py-20 md:py-24 lg:py-28"
        aria-labelledby="spa-menu-concepts-heading"
      >
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <SectionIntro
            id="spa-menu-concepts-heading"
            eyebrow="On the menu"
            title="What could sanza look like on your treatment menu?"
            onDark
          />
          <FadeUp delay={1}>
            <p className="mt-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
              Example concepts — branding, duration and pricing are yours.
            </p>
          </FadeUp>
          <ul className="mt-8 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {MENU_CONCEPTS.map((concept, index) => (
              <li key={concept.name} className="h-full">
                <FadeUp delay={Math.min(index + 1, 3) as 1 | 2 | 3} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-2xl sm:rounded-3xl">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={concept.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#082721]/80 via-[#082721]/15 to-transparent" />
                      <p className="absolute bottom-4 left-5 right-5 font-heading text-2xl font-semibold text-white">
                        {concept.name}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                        {concept.duration}
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-white/90">{concept.body}</p>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/55">
                        Possible placement
                      </p>
                      <p className="mt-1.5 text-base leading-relaxed text-white/88">{concept.placement}</p>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/55">
                        Possible guest journey
                      </p>
                      <p className="mt-1.5 text-base leading-relaxed text-white">{concept.journey}</p>
                    </div>
                  </article>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] bg-[var(--bg)] py-16 sm:py-20 md:py-24 lg:py-28"
        aria-labelledby="spa-capacity-heading"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <SectionIntro
            id="spa-capacity-heading"
            eyebrow="A framework, not a forecast"
            title="The business case starts with the room you already have."
          />
          <FadeUp delay={1}>
            <div className="mx-auto mt-10 max-w-3xl">
              <p className="text-center font-heading text-lg font-semibold text-[var(--text)] sm:text-xl">
                One sanza setup
              </p>
              <p aria-hidden className="my-3 text-center text-2xl text-[var(--brand-strong)]">
                ↓
              </p>
              <ol className="space-y-3">
                {FORMULA.map((item, index) => (
                  <li key={item}>
                    {index > 0 ? (
                      <p aria-hidden className="mb-3 text-center font-heading text-xl text-[var(--brand-strong)]">
                        ×
                      </p>
                    ) : null}
                    <p className="campaign-card px-5 py-4 text-center text-base font-medium leading-relaxed text-[var(--text)] sm:text-lg">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
              <p aria-hidden className="my-3 text-center font-heading text-xl text-[var(--brand-strong)]">
                =
              </p>
              <p className="rounded-2xl border border-[var(--brand)] bg-[var(--surface)] px-5 py-4 text-center font-heading text-lg font-semibold text-[var(--text)] sm:text-xl">
                Potential service revenue
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={2}>
            <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              <p>
                The actual commercial model depends on your treatment menu, occupancy, session length, staffing and how you choose to position sanza.
              </p>
              <div className="campaign-card p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                  Therapist time
                </p>
                <p className="mt-3 text-[var(--text)]">
                  Unlike a massage or other continuously hands-on treatment, sanza can potentially create bookable guest time without requiring the same level of continuous therapist attention.
                </p>
                <p className="mt-3">
                  Designed to require limited hands-on involvement once the guest is comfortably set up.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section
        className="campaign-band-soft relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] py-16 sm:py-20 md:py-24 lg:py-28"
        aria-labelledby="spa-scenarios-heading"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <SectionIntro
            id="spa-scenarios-heading"
            eyebrow="Operating examples"
            title="Start with the model that fits your spa."
            lead="These are operating examples, not promises about performance."
          />
          <ul className="mt-9 grid gap-5 sm:mt-12 lg:grid-cols-3 lg:gap-6">
            {SCENARIOS.map((scenario, index) => (
              <li key={scenario.title} className="h-full">
                <FadeUp delay={Math.min(index + 1, 3) as 1 | 2 | 3} className="h-full">
                  <article className="campaign-card group flex h-full flex-col overflow-hidden">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={scenario.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="font-heading text-xl font-semibold text-[var(--text)]">{scenario.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-[var(--muted)]">{scenario.context}</p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                        Start with
                      </p>
                      <p className="mt-1.5 text-base leading-relaxed text-[var(--text)]">{scenario.start}</p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
                        Why
                      </p>
                      <p className="mt-1.5 text-base leading-relaxed text-[var(--muted)]">{scenario.why}</p>
                    </div>
                  </article>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] bg-[#fbf7ef] py-16 sm:py-20 md:py-24"
        aria-labelledby="spa-journey-heading"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <SectionIntro
            id="spa-journey-heading"
            eyebrow="Guest flow"
            title="How sanza fits into a spa day"
            lead="Where exactly would we put this? Choose the guest. The path shows one realistic place for sanza beside what you already offer."
          />
          <FadeUp delay={1} className="mt-8 sm:mt-10">
            <SpaGuestJourney />
          </FadeUp>
        </div>
      </section>

      <section
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] bg-[var(--bg)] py-16 sm:py-20 md:py-24 lg:py-28"
        aria-labelledby="spa-requirements-heading"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
          <SectionIntro
            id="spa-requirements-heading"
            eyebrow="What you need"
            title="What does introducing sanza require?"
          />
          <FadeUp delay={1}>
            <dl className="campaign-card mt-8 divide-y divide-[var(--border)] sm:mt-10">
              {REQUIREMENTS.map((item) => (
                <div key={item.label} className="grid gap-2 px-5 py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-baseline sm:gap-8 sm:px-7 sm:py-6">
                  <dt className="font-heading text-lg font-semibold text-[var(--text)]">{item.label}</dt>
                  <dd className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">{item.body}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
