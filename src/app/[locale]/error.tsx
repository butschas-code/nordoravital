"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  const t = useTranslations("Error");

  useEffect(() => {
    // Digest only: the message can contain request data. Vercel logs hold the server-side stack.
    console.error(JSON.stringify({ level: "error", event: "page.error", digest: error.digest ?? null }));
  }, [error]);

  return (
    <div role="alert" className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-heading text-3xl text-[var(--brand-heading)]">{t("title")}</h1>
      <p className="mt-4 text-base leading-relaxed text-[var(--brand-muted)]">{t("body")}</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--brand-primary)] px-5 py-2.5 font-medium text-white"
        >
          {t("retry")}
        </button>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--brand-border)] px-5 py-2.5 font-medium text-[var(--brand-heading)]"
        >
          {t("home")}
        </Link>
      </div>
    </div>
  );
}
