import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type HomeLegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  children: ReactNode;
};

export function HomeLegalPage({
  eyebrow,
  title,
  description,
  updated,
  children,
}: HomeLegalPageProps) {
  return (
    <main className="bg-[#f6f1ea]">
      <section className="relative overflow-hidden border-b border-[#d8cec2] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(165,133,146,0.16),transparent_30%),radial-gradient(circle_at_12%_12%,rgba(111,138,122,0.16),transparent_30%)]"
        />
        <div className="relative mx-auto max-w-[980px]">
          <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#6f8a7a]">
            {eyebrow}
          </p>
          <h1 className="font-heading text-[clamp(2.45rem,6vw,5.7rem)] leading-[0.98] tracking-tight text-[#17221d]">
            {title}
          </h1>
          <p className="mt-7 max-w-[760px] text-[1.08rem] leading-[1.75] text-[#1e2a22]/90 sm:text-[1.24rem]">
            {description}
          </p>
          <p className="mt-6 text-sm font-medium text-[#6f8a7a]">{updated}</p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <article className="home-legal-prose mx-auto max-w-[920px] rounded-[8px] border border-[#d8cec2] bg-[#fffaf2]/84 p-6 shadow-[0_24px_76px_rgba(30,42,34,0.08)] sm:p-10 lg:p-12">
          {children}
        </article>
      </section>
    </main>
  );
}

export function HomeLegalContactBlock({
  registerLabel = "Commercial Register No.",
  emailLabel = "Email",
}: {
  registerLabel?: string;
  emailLabel?: string;
}) {
  return (
    <div className="rounded-[8px] border border-[#d8cec2] bg-[#f6f1ea] p-5">
      <strong>Nordora Vital SIA</strong>
      <p>Vēja iela 4-2, Ādaži, LV-2164, Latvia</p>
      <p>{registerLabel}: 40203739804</p>
      <p>
        {emailLabel}: <a href="mailto:info@nordoravital.com">info@nordoravital.com</a>
      </p>
    </div>
  );
}

export function HomeLegalLinks({
  related = "Related pages",
  privacy = "Privacy Policy",
  terms = "Terms",
  cookies = "Cookie Policy",
  imprint = "Imprint",
}: {
  related?: string;
  privacy?: string;
  terms?: string;
  cookies?: string;
  imprint?: string;
}) {
  return (
    <p>
      {related}: <Link href="/privacy">{privacy}</Link>,{" "}
      <Link href="/terms">{terms}</Link>,{" "}
      <Link href="/cookie-policy">{cookies}</Link>,{" "}
      <Link href="/imprint">{imprint}</Link>.
    </p>
  );
}
