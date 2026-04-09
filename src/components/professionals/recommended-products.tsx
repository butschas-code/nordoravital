import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { RichLine } from "@/components/rich-line";
import { stripRichTags } from "@/lib/i18n-rich";
import { IMAGE_PATHS } from "@/lib/public-images";
import type { ProfessionalProductsCopy } from "@/types/professional-page";

type Props = {
  copy: ProfessionalProductsCopy;
};

export async function RecommendedProducts({ copy }: Props) {
  const t = await getTranslations("ProfessionalProducts");

  const items = [
    {
      image: IMAGE_PATHS.modular.mat,
      title: copy.matTitle,
      desc: copy.matDesc,
    },
    {
      image: IMAGE_PATHS.modular.pad,
      title: copy.padTitle,
      desc: copy.padDesc,
    },
    {
      image: IMAGE_PATHS.modular.twinc,
      title: copy.twincTitle,
      desc: copy.twincDesc,
    },
    {
      image: IMAGE_PATHS.modular.pen,
      title: copy.penTitle,
      desc: copy.penDesc,
    },
    {
      image: IMAGE_PATHS.modular.generator,
      title: copy.generatorTitle,
      desc: copy.generatorDesc,
    },
  ];

  return (
    <section className="space-y-6" aria-labelledby="recommended-products-heading">
      <div className="max-w-3xl space-y-2">
        <h2
          id="recommended-products-heading"
          className="text-2xl font-semibold tracking-tight text-[var(--brand-heading)] sm:text-3xl"
        >
          <RichLine text={copy.title} />
        </h2>
        <p className="text-[var(--brand-muted)]">
          <RichLine text={copy.lead} />
        </p>
      </div>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.title}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)]">
              <div className="relative aspect-[5/4] w-full bg-white/90 dark:bg-zinc-900/80">
                <Image
                  src={item.image}
                  alt={t("productImageAlt", { product: stripRichTags(String(item.title)) })}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width:640px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-[var(--brand-heading)]">
                  <RichLine text={String(item.title)} />
                </h3>
                <p className="mt-2 flex-1 text-sm text-[var(--brand-muted)]">
                  <RichLine text={item.desc} />
                </p>
                <Link
                  href="/how-it-works"
                  className="mt-4 inline-flex text-sm font-medium text-[var(--brand-primary)] underline-offset-4 hover:underline"
                >
                  {copy.detailsLink}
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
