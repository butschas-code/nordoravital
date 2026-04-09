import { BrandAtmosphere } from "@/components/brand-atmosphere";

/**
 * Live session preview mockup (PEMF / biofrequency / light readouts).
 * Previously shown on the home welcome band; lives on How it works for explanation context.
 */
export function SessionPreviewGraphic() {
  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-raised)] ring-1 ring-[var(--border)]">
        <BrandAtmosphere variant="pulse" />

        <div className="absolute inset-x-5 top-5 flex items-center justify-between">
          <div className="inline-flex items-center rounded-full border border-[var(--brand)]/25 bg-white/75 px-3 py-1 shadow-sm backdrop-blur-md">
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)]">
              Live session preview
            </span>
          </div>
          <div className="inline-flex items-center rounded-full border border-[var(--brand)]/25 bg-white/75 px-2.5 py-1 shadow-sm backdrop-blur-md">
            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-strong)]">
              Ready
            </span>
          </div>
        </div>

        <div className="absolute inset-x-5 top-[44%] -translate-y-1/2 space-y-2.5">
          {[
            { label: "PEMF", value: "7.83 Hz", level: 72 },
            { label: "Biofrequency", value: "Programme 08", level: 55 },
            { label: "Light", value: "Warm · local", level: 40 },
          ].map((row) => (
            <div
              key={row.label}
              className="rounded-xl border border-[var(--brand)]/20 bg-white/60 px-3 py-2 shadow-sm backdrop-blur-md"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-strong)]">
                  {row.label}
                </span>
                <span className="font-heading text-[0.72rem] font-semibold text-[var(--text)]">
                  {row.value}
                </span>
              </div>
              <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-[var(--brand)]/12">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${row.level}%`,
                    background: "linear-gradient(90deg, var(--brand) 0%, var(--brand-secondary) 100%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[var(--brand)]/25 bg-white/75 p-4 shadow-sm backdrop-blur-md">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-secondary)] [&_strong]:normal-case">
            <strong className="font-semibold">sanza</strong> System
          </p>
          <p className="mt-1 font-heading text-sm leading-snug text-[var(--text)]">
            PEMF · Biofrequency · Light — one premium ritual, your room.
          </p>
        </div>
      </div>
    </div>
  );
}
