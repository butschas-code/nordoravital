import Image from "next/image";
import { getMessages, getTranslations } from "next-intl/server";
import { richParts } from "@/lib/i18n-rich";
import type { HowItWorksCopy } from "@/types/how-it-works";
import { IMAGE_PATHS } from "@/lib/public-images";

type ModuleDef = {
  image: string;
  title: keyof Pick<
    HowItWorksCopy,
    | "modularGeneratorTitle"
    | "modularMatTitle"
    | "modularPadTitle"
    | "modularTwincTitle"
    | "modularPenTitle"
    | "modularHandTitle"
  >;
  bullets: keyof Pick<
    HowItWorksCopy,
    | "modularGeneratorBullets"
    | "modularMatBullets"
    | "modularPadBullets"
    | "modularTwincBullets"
    | "modularPenBullets"
    | "modularHandBullets"
  >;
  imageAlt: keyof Pick<
    HowItWorksCopy,
    | "modularGeneratorImageAlt"
    | "modularMatImageAlt"
    | "modularPadImageAlt"
    | "modularTwincImageAlt"
    | "modularPenImageAlt"
    | "modularHandImageAlt"
  >;
};

const MODULES: ModuleDef[] = [
  {
    image: IMAGE_PATHS.modular.generator,
    title: "modularGeneratorTitle",
    bullets: "modularGeneratorBullets",
    imageAlt: "modularGeneratorImageAlt",
  },
  {
    image: IMAGE_PATHS.modular.mat,
    title: "modularMatTitle",
    bullets: "modularMatBullets",
    imageAlt: "modularMatImageAlt",
  },
  {
    image: IMAGE_PATHS.modular.pad,
    title: "modularPadTitle",
    bullets: "modularPadBullets",
    imageAlt: "modularPadImageAlt",
  },
  {
    image: IMAGE_PATHS.modular.twinc,
    title: "modularTwincTitle",
    bullets: "modularTwincBullets",
    imageAlt: "modularTwincImageAlt",
  },
  {
    image: IMAGE_PATHS.modular.pen,
    title: "modularPenTitle",
    bullets: "modularPenBullets",
    imageAlt: "modularPenImageAlt",
  },
  {
    image: IMAGE_PATHS.modular.handElectrodes,
    title: "modularHandTitle",
    bullets: "modularHandBullets",
    imageAlt: "modularHandImageAlt",
  },
];

export async function ModularComponents() {
  const t = await getTranslations("HowItWorks");
  const messages = await getMessages();
  const hw = messages.HowItWorks as HowItWorksCopy;

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {MODULES.map((mod) => {
        const bullets = hw[mod.bullets];
        return (
          <article
            key={mod.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)]"
          >
            <div className="relative aspect-[4/3] w-full bg-white/90 dark:bg-zinc-900/80">
              <Image
                src={mod.image}
                alt={t(mod.imageAlt)}
                fill
                className="object-contain p-6"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-[var(--brand-heading)]">
                {t.rich(mod.title, richParts.default)}
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-[var(--brand-muted)]">
                {bullets.map((line, bi) => (
                  <li key={bi}>{line}</li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
