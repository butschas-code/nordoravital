import { getRussianLegalRows } from "@/lib/russian-content";

type RussianLegalSlug = "cookie-policy" | "imprint" | "privacy" | "terms";

function isHeading(text: string) {
  return /^\d+(\.\d+)?\.\s/.test(text) || /^[А-ЯA-Z][^.!?]{0,90}$/.test(text);
}

export const russianLegalMeta: Record<
  RussianLegalSlug,
  { title: string; subtitle: string; description: string }
> = {
  "cookie-policy": {
    title: "Политика в отношении файлов cookie",
    subtitle: "Последнее обновление: апрель 2026 г.",
    description: "Информация о том, как и почему мы используем файлы cookie на сайте Nordora Vital.",
  },
  imprint: {
    title: "Правовая информация",
    subtitle: "Выходные данные, сведения о компании и юридическая информация · Последнее обновление: апрель 2026 г.",
    description: "Юридическая информация, сведения о компании и контактные данные Nordora Vital SIA.",
  },
  privacy: {
    title: "Политика конфиденциальности",
    subtitle: "Последнее обновление: апрель 2026 г.",
    description: "Информация о том, как Nordora Vital обрабатывает персональные данные.",
  },
  terms: {
    title: "Условия использования",
    subtitle: "Последнее обновление: апрель 2026 г.",
    description: "Условия использования сайта Nordora Vital.",
  },
};

export function RussianLegalContent({ slug }: { slug: RussianLegalSlug }) {
  const rows = getRussianLegalRows(slug);

  return (
    <>
      {rows.map(({ key, text }) => {
        if (isHeading(text)) {
          return (
            <h2 key={key} className="mt-10 text-2xl font-semibold text-[var(--text)]">
              {text}
            </h2>
          );
        }
        return <p key={key}>{text}</p>;
      })}
    </>
  );
}
