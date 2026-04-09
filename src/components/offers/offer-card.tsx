import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  paragraphs: ReactNode[];
  pricingSectionTitle: string;
  pricingLines: string[];
  pricingHint: string;
  ctaLabel: string;
  ctaHref?: string;
};

export function OfferCard({
  imageSrc,
  imageAlt,
  title,
  paragraphs,
  pricingSectionTitle,
  pricingLines,
  pricingHint,
  ctaLabel,
  ctaHref = "/pilot",
}: Props) {
  return (
    <article className="card-brand flex h-full flex-col overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--panel)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain p-8 transition-transform duration-500 hover:scale-105"
          sizes="(max-width:768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="font-heading text-h3 text-[var(--text)]">{title}</h2>

        <div className="mt-4 space-y-3 text-small leading-relaxed text-[var(--muted)]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Pricing panel */}
        <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
          <p className="text-sm font-semibold text-[var(--text)]">
            {pricingSectionTitle}
          </p>
          <ul className="mt-2 space-y-1.5 pl-1">
            {pricingLines.map((line, i) => (
              <li key={i} className="flex items-start gap-2 text-small text-[var(--muted)]">
                <span aria-hidden className="mt-0.5 text-[var(--brand)]">✦</span>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">{pricingHint}</p>

        <div className="mt-6">
          <Link href={ctaHref} className="btn-primary w-full sm:w-auto">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
