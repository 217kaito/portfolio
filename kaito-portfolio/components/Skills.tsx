"use client";

import { skills } from "@/lib/content";
import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons: Record<string, string> = {
  code: "M8 6l-6 6 6 6M16 6l6 6-6 6",
  cloud: "M6 19a4 4 0 010-8 6 6 0 0111.3-2A4.5 4.5 0 0117.5 19H6z",
  tools: "M14.7 6.3a4 4 0 00-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 005.4-5.4l-2.9 2.9-2.1-2.1 2.9-2.9z",
};

const marqueeItems = [
  "Python",
  "TypeScript",
  "C/C++",
  "Verilog HDL",
  "AWS EC2",
  "Docker",
  "Next.js",
  "MN-Core",
  "Optuna",
  "PostgreSQL",
  "TDD",
  "Claude Code",
];

export default function Skills() {
  const t = useT();

  return (
    <section id="skills" className="relative py-28 md:py-40">
      {/* Marquee band */}
      <div className="mb-20 overflow-hidden border-y border-white/5 py-5 select-none">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="display mx-6 text-2xl font-bold whitespace-nowrap text-white/10 md:text-4xl"
                >
                  {item} <span className="text-accent/30">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          index="02"
          title="Skills"
          sub={t({
            ja: "研究から本番運用まで、ハードウェアの理解とソフトウェアの実装力を両輪に。",
            en: "From research to production — grounded in both hardware understanding and software craftsmanship.",
          })}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal
              key={group.icon}
              delay={i * 130}
              className="glow-card rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent-soft)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={icons[group.icon]} />
                </svg>
              </div>
              <h3 className="display mb-5 text-xl font-bold text-white">
                {t(group.category)}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-3 border-b border-white/5 pb-2.5"
                  >
                    <span className="text-sm font-medium text-foreground/90">
                      {item.name}
                    </span>
                    {t(item.note) && (
                      <span className="text-xs text-foreground/45">
                        {t(item.note)}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
