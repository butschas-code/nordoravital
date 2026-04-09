import type { HowItWorksCopy } from "@/types/how-it-works";

type Props = {
  hw: HowItWorksCopy;
};

export function ProgrammesSection({ hw }: Props) {
  return (
    <div className="space-y-4">
      <h3
        id="biofrequency-programmes"
        className="font-heading text-xl font-bold text-[var(--text)] sm:text-2xl"
      >
        {hw.programmesSectionTitle}
      </h3>
      <p className="max-w-3xl leading-relaxed text-[var(--brand-muted)]">
        {hw.programmesIntro}
      </p>

      <div className="hidden md:block">
        <div className="overflow-x-auto rounded-xl border border-[var(--brand-border)] shadow-sm">
          <table className="min-w-[640px] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)]">
                <th scope="col" className="px-4 py-3 font-semibold text-[var(--brand-heading)]">
                  {hw.programmeColIndex}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-[var(--brand-heading)]">
                  {hw.programmeColName}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-[var(--brand-heading)]">
                  {hw.programmeColDesc}
                </th>
              </tr>
            </thead>
            <tbody>
              {hw.programmes.map((row, i) => (
                <tr
                  key={`row-${i}-${row.name}`}
                  className="border-b border-[var(--brand-border)] last:border-0 odd:bg-white/50 even:bg-[var(--brand-surface)]/50 dark:odd:bg-zinc-900/30 dark:even:bg-zinc-900/50"
                >
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-[var(--brand-heading)]">
                    {i + 1}
                  </td>
                  <td className="px-4 py-3 font-medium text-[var(--brand-heading)]">
                    {row.name}
                  </td>
                  <td className="px-4 py-3 text-[var(--brand-muted)]">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 md:hidden">
        {hw.programmes.map((row, i) => (
          <details
            key={`${i}-${row.name}`}
            className="group rounded-xl border border-[var(--brand-border)] bg-[var(--brand-surface)] px-4 py-2"
          >
            <summary className="cursor-pointer list-none py-2 font-semibold text-[var(--brand-heading)] [&::-webkit-details-marker]:hidden">
              <span className="mr-2 text-[var(--brand-muted)]">{i + 1}.</span>
              {row.name}
              <span className="ml-2 text-xs font-normal text-[var(--brand-muted)] group-open:hidden">
                ({hw.programmeColDesc})
              </span>
            </summary>
            <p className="border-t border-[var(--brand-border)] pb-2 pt-3 text-sm leading-relaxed text-[var(--brand-muted)]">
              {row.description}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
