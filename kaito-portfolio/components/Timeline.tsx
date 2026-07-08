"use client";

import { timeline } from "@/lib/content";
import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Timeline() {
  const t = useT();

  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
      <SectionHeading
        index="03"
        title="Experience"
        sub={t({
          ja: "チームを動かし、プロダクトを届けてきた経歴。",
          en: "A track record of moving teams and shipping products.",
        })}
      />

      <div className="relative ml-3 md:ml-6">
        <div className="timeline-line absolute top-0 bottom-0 left-0 w-px" />

        <ol className="space-y-14">
          {timeline.map((entry, i) => (
            <Reveal key={entry.title.en} as="li" delay={i * 80} className="relative pl-10 md:pl-16">
              {/* Node */}
              <span className="absolute top-1.5 -left-[7px] h-[15px] w-[15px] rounded-full border-2 border-accent bg-[#07060b] shadow-[0_0_18px_rgba(139,92,246,0.8)]" />

              <p className="display text-xs font-semibold tracking-[0.25em] text-accent-soft uppercase">
                {t(entry.period)}
              </p>
              <h3 className="display mt-2 text-2xl font-bold text-white md:text-3xl">
                {t(entry.title)}
              </h3>
              <p className="mt-1 text-sm font-medium text-foreground/55">{t(entry.org)}</p>

              {entry.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="display rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <ul className="mt-5 space-y-3">
                {entry.details.map((detail) => (
                  <li
                    key={detail.en.slice(0, 40)}
                    className="relative pl-5 text-sm leading-relaxed text-foreground/75 before:absolute before:top-[0.55em] before:left-0 before:h-1.5 before:w-1.5 before:rotate-45 before:bg-accent/70"
                  >
                    {t(detail)}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
