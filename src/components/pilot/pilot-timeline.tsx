import type { ReactNode } from "react";

type Step = {
  title: string;
  body: ReactNode;
};

type Props = {
  timelineTitle: string;
  steps: Step[];
};

/** Timeline-style layout: schematic on large screens, stacked cards on small. */
export function PilotTimeline({ timelineTitle, steps }: Props) {
  const n = steps.length;
  const w = 920;
  const pad = 64;
  const usable = w - 2 * pad;
  const stepX = n > 1 ? usable / (n - 1) : 0;
  const positions = steps.map((_, i) => pad + i * stepX);

  return (
    <section className="space-y-8" aria-labelledby="pilot-timeline-heading">
      <h2
        id="pilot-timeline-heading"
        className="text-2xl font-semibold tracking-tight text-[var(--brand-heading)] sm:text-3xl"
      >
        {timelineTitle}
      </h2>

      <div
        className="hidden rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 lg:block"
        role="img"
        aria-label={timelineTitle}
      >
        <svg
          viewBox={`0 0 ${w} 100`}
          className="mx-auto h-auto w-full max-w-5xl text-[var(--brand-primary)]"
          aria-hidden
        >
          <line
            x1={pad}
            y1="48"
            x2={w - pad}
            y2="48"
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.35"
          />
          {positions.map((cx, i) => (
            <g key={i}>
              <circle
                cx={cx}
                cy="48"
                r="20"
                fill="var(--color-background)"
                stroke="currentColor"
                strokeWidth="3"
              />
              <text
                x={cx}
                y="54"
                textAnchor="middle"
                fill="currentColor"
                className="font-bold"
                fontSize="14"
                fontFamily="system-ui, sans-serif"
              >
                {i + 1}
              </text>
            </g>
          ))}
        </svg>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <h3 className="text-sm font-semibold text-[var(--brand-heading)]">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--brand-muted)]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ol className="space-y-6 lg:hidden">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="relative flex gap-4 rounded-xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--brand-primary)] bg-[var(--color-background)] text-sm font-bold text-[var(--brand-primary)]"
              aria-hidden
            >
              {i + 1}
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold text-[var(--brand-heading)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--brand-muted)]">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
