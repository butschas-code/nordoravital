"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type ProgramGroup = {
  title: string;
  programs: readonly string[];
};

type Props = {
  eyebrow: string;
  headline: string;
  body: readonly string[];
  technologies: readonly string[];
  groups: readonly ProgramGroup[];
  images: {
    mat: string;
    handElectrode: string;
    targetedBodySupport: string;
    personalSettings: string;
    lifestyle: string;
  };
};

const groupIntents = [
  "For mornings, focus and movement readiness.",
  "For evenings, overload and recovery after effort.",
  "For focused attention on one area or moment.",
  "For routines you adjust, repeat and save.",
] as const;

const groupIntentsRu = [
  "Для утра, концентрации и готовности к движению.",
  "Для вечера, перегрузки и восстановления после усилий.",
  "Для сосредоточенного внимания на одной зоне или моменте.",
  "Для процедур, которые вы настраиваете, повторяете и сохраняете.",
] as const;

const technologyNotes = [
  "The full-body field forms the base of the session.",
  "Signal patterns set the session direction.",
  "Focused light support keeps targeted routines precise.",
] as const;

const technologyNotesRu = [
  "Поле для всего тела создает основу сеанса.",
  "Сигнальные паттерны задают направление сеанса.",
  "Фокусированная световая поддержка делает целевые процедуры точными.",
] as const;

const groupImageOrder = [
  "lifestyle",
  "mat",
  "targetedBodySupport",
  "personalSettings",
] as const;

const groupImageFocus = ["center 32%", "center 44%", "center 50%", "center 52%"] as const;

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const parent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export function ProgramLibraryExperience({
  eyebrow,
  headline,
  body,
  technologies,
  groups,
  images,
}: Props) {
  const locale = useLocale();
  const isRussian = locale === "ru";
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeGroup = groups[activeIndex] ?? groups[0];
  const activeImage = images[groupImageOrder[activeIndex] ?? "lifestyle"];
  const localizedGroupIntents = isRussian ? groupIntentsRu : groupIntents;
  const localizedTechnologyNotes = isRussian ? technologyNotesRu : technologyNotes;

  const motionProps = useMemo(
    () =>
      prefersReducedMotion
        ? {}
        : {
            whileInView: "show" as const,
            viewport: { once: true, margin: "-12% 0px" },
          },
    [prefersReducedMotion],
  );

  return (
    <motion.div
      {...motionProps}
      variants={parent}
      className="mx-auto max-w-[1180px]"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
        <motion.div variants={rise} className="max-w-[680px]">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/82">
            {eyebrow}
          </p>
          <h2 className="mt-5 max-w-[11ch] font-heading text-[clamp(3rem,7vw,6.25rem)] font-bold leading-[0.91] tracking-normal text-white">
            {headline}
          </h2>
          <p className="mt-7 max-w-[62ch] text-[1.06rem] leading-[1.78] text-white/88 sm:text-[1.14rem]">
            {body[0]}
          </p>

          <div className="mt-8 overflow-hidden rounded-[8px] border border-[#f6f1ea]/16 bg-[#123f36]">
            {technologies.map((technology, index) => (
              <div
                key={technology}
                className="grid gap-4 border-b border-[#f6f1ea]/12 p-4 last:border-b-0 sm:grid-cols-[3rem_1fr]"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-[#f6f1ea]/18 text-[0.68rem] font-extrabold tracking-[0.12em] text-white/82">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-[1.18rem] font-bold leading-none text-white">
                    {technology}
                  </h3>
                  <p className="mt-2 max-w-[28rem] text-[0.88rem] leading-[1.5] text-white/82">
                    {localizedTechnologyNotes[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={rise}
          className="grid gap-3"
        >
          <div className="relative overflow-hidden rounded-[8px] border border-[#f6f1ea]/18 bg-[#d9d2c7] shadow-[0_36px_110px_rgba(0,0,0,0.26)]">
            <div className="relative aspect-[1.08/1] min-h-[340px] sm:aspect-[1.55/1]">
            <motion.div
              key={activeImage}
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={activeImage}
                alt={`${activeGroup.title} sanza program setup`}
                fill
                className="object-cover"
                style={{ objectPosition: groupImageFocus[activeIndex] ?? "center center" }}
                sizes="(max-width: 1023px) 100vw, 620px"
                priority
              />
            </motion.div>
            <div
              className={`absolute inset-0 ${
                activeIndex === 3
                  ? "bg-[linear-gradient(180deg,rgba(9,45,39,0)_42%,rgba(9,45,39,0.58)_100%)]"
                  : "bg-[linear-gradient(180deg,rgba(9,45,39,0.02)_28%,rgba(9,45,39,0.84)_100%)]"
              }`}
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <p className="w-fit rounded-full border border-[#f6f1ea]/24 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.17em] text-white/88">
                {isRussian ? "Активное состояние" : "Active state"}
              </p>
              <h3 className="mt-3 max-w-[14ch] font-heading text-[clamp(2rem,4vw,3.35rem)] font-bold leading-[0.98] text-white">
                {activeGroup.title}
              </h3>
              <p className="mt-3 max-w-[34rem] text-[1rem] leading-[1.58] text-white">
                {localizedGroupIntents[activeIndex]}
              </p>
            </div>
            </div>
          </div>

        <motion.div
          id="program-family-selector"
          className="grid gap-3 sm:grid-cols-2"
        >
          {groups.map((group, index) => {
            const selected = index === activeIndex;
            return (
              <motion.button
                type="button"
                key={group.title}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
                className={`group grid min-h-[12.75rem] overflow-hidden rounded-[8px] border text-left transition duration-300 ${
                  selected
                    ? "border-[#f1ddd7]/76 bg-[#f6f1ea] text-[#092d27]"
                    : "border-[#f6f1ea]/16 bg-[#f6f1ea]/7 text-white hover:border-[#f6f1ea]/34 hover:bg-[#f6f1ea]/11"
                }`}
                aria-pressed={selected}
              >
                <div className="grid h-full grid-rows-[auto_1fr_auto] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[0.67rem] font-extrabold uppercase tracking-[0.16em] ${
                        selected
                          ? "border-[#092d27]/16 text-[#6f8a7a]"
                          : "border-[#f6f1ea]/16 text-white/82"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`h-px flex-1 ${
                        selected ? "bg-[#092d27]/14" : "bg-[#f6f1ea]/12"
                      }`}
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="max-w-[12ch] font-heading text-[clamp(1.65rem,3vw,2.5rem)] font-bold leading-[0.98]">
                      {group.title}
                    </h3>
                    <p
                      className={`mt-4 max-w-[24rem] text-[0.98rem] leading-[1.58] ${
                        selected ? "text-[#31443b]" : "text-white/88"
                      }`}
                    >
                      {localizedGroupIntents[index]}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.programs.map((program) => (
                      <span
                        key={program}
                        className={`rounded-[8px] border px-3 py-2 text-[0.82rem] font-extrabold leading-none ${
                          selected
                            ? "border-[#6f8a7a]/22 bg-[#fffaf3]/70 text-[#0e3d34]"
                            : "border-[#f6f1ea]/14 bg-[#092d27]/26 text-white"
                        }`}
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
        </motion.div>
      </div>

      <motion.details
        variants={rise}
        className="mt-5 rounded-[8px] border border-[#f6f1ea]/14 bg-[#f6f1ea]/6 p-5"
      >
        <summary className="cursor-pointer text-[0.95rem] font-bold text-white">
          {isRussian ? "Ознакомьтесь с полной логикой программы" : "Read the full program logic"}
        </summary>
        <div className="mt-5 grid gap-4 text-[0.96rem] leading-[1.72] text-white/88 lg:grid-cols-3">
          {body.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </motion.details>

    </motion.div>
  );
}
