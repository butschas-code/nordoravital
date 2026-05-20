import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type DarkMarketingCardProps = {
  title: ReactNode;
  body: ReactNode;
  cta?: ReactNode;
  href?: ComponentProps<typeof Link>["href"];
  media: ReactNode;
  mediaClassName?: string;
  titleInsetClassName?: string;
  bodyClassName?: string;
  eyebrow?: ReactNode;
};

export function DarkMarketingCard({
  title,
  body,
  cta,
  href,
  media,
  mediaClassName = "",
  titleInsetClassName = "right-20",
  bodyClassName = "",
  eyebrow,
}: DarkMarketingCardProps) {
  return (
    <article className="glass-card-dark group relative flex h-full flex-col overflow-hidden">
      <div className={`relative aspect-[4/3] w-full overflow-hidden ${mediaClassName}`}>
        {media}
        <h3 className={`pro-card-title absolute bottom-5 left-5 ${titleInsetClassName}`}>
          {title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col border-t border-white/10 bg-black/25 p-6">
        {eyebrow ? (
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/58">
            {eyebrow}
          </p>
        ) : null}
        <div className={`pro-card-body flex-1 ${bodyClassName}`}>{body}</div>
        {cta && href ? (
          <Link href={href} className="pro-card-link group/link mt-5 inline-flex items-center gap-1.5 transition hover:gap-2.5 hover:text-white/90">
            {cta}
            <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-0.5">
              →
            </span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
