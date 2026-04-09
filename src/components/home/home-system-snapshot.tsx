import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { richParts } from "@/lib/i18n-rich";
import { FadeUp } from "@/components/fade-up";
import { IMAGE_PATHS } from "@/lib/public-images";

const BULLETS: { titleKey: string; bodyKey: string }[] = [
  { titleKey: "systemBullet1Title", bodyKey: "systemBullet1Body" },
  { titleKey: "systemBullet2Title", bodyKey: "systemBullet2Body" },
  { titleKey: "systemBullet3Title", bodyKey: "systemBullet3Body" },
  { titleKey: "systemBullet4Title", bodyKey: "systemBullet4Body" },
];

const PRODUCT_STRIP = [
  { src: IMAGE_PATHS.home.productGenerator, label: "systemProductLabelGen" as const },
  { src: IMAGE_PATHS.home.productMat, label: "systemProductLabelMat" as const },
  { src: IMAGE_PATHS.home.productPad, label: "systemProductLabelPad" as const },
  { src: IMAGE_PATHS.home.productPen, label: "systemProductLabelPen" as const },
];

export async function HomeSystemSnapshot() {
  const t = await getTranslations("Home");

  return (
    <section
      className="home-band-full home-band--system-visual py-20 md:py-28 lg:py-32"
      aria-labelledby="home-system-heading"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <FadeUp className="order-2 lg:order-1">
            <h2
              id="home-system-heading"
              className="font-heading text-[clamp(1.85rem,4.4vw,2.85rem)] font-bold leading-[1.08] tracking-tight text-[var(--text)]"
            >
              {t.rich("systemTitle", richParts.default)}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              {t.rich("systemLead", richParts.default)}
            </p>
            <ul className="mt-8 space-y-3">
              {BULLETS.map((b, i) => (
                <li
                  key={b.titleKey}
                  className="flex gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3.5 text-sm shadow-sm transition duration-300 hover:border-[var(--brand)]/40 hover:shadow-[var(--shadow-raised)]"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-white"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <span className="flex min-w-0 flex-col gap-1.5">
                    <span className="font-semibold leading-snug text-[var(--text)]">{t(b.titleKey)}</span>
                    <span className="leading-relaxed text-[var(--muted)]">{t(b.bodyKey)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={1} className="relative order-1 lg:order-2">
            {/* Background bloom */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-br from-[var(--brand)]/15 via-transparent to-[var(--brand-secondary)]/10 blur-3xl"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--surface)] via-[var(--panel)] to-[var(--panel-deep)]">
              {/* Decorative concentric arcs */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 400 300"
                fill="none"
              >
                <circle cx="200" cy="150" r="140" stroke="var(--brand)" strokeWidth="0.6" opacity="0.15" />
                <circle cx="200" cy="150" r="100" stroke="var(--brand)" strokeWidth="0.5" opacity="0.12" />
                <circle cx="200" cy="150" r="60" stroke="var(--brand)" strokeWidth="0.4" opacity="0.1" />
              </svg>
              <Image
                src={IMAGE_PATHS.home.systemHero}
                alt={t("systemImageAlt")}
                fill
                className="relative object-contain object-center p-0 drop-shadow-2xl"
                sizes="(max-width:1023px) 100vw, 50vw"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2.5">
              {PRODUCT_STRIP.map((item) => (
                <div
                  key={item.src}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:border-[var(--brand)]/40 hover:shadow-[var(--shadow-raised)]"
                >
                  <Image
                    src={item.src}
                    alt={t(item.label)}
                    fill
                    className="object-contain p-2 transition duration-500 group-hover:scale-110"
                    sizes="120px"
                  />
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
