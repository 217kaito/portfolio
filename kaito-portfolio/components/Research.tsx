"use client";

import { research } from "@/lib/content";
import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Research() {
  const t = useT();

  return (
    <section id="research" className="relative overflow-hidden py-28 md:py-40">
      {/* Backdrop accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="blob h-[40vw] w-[40vw] bg-violet-900/50"
          style={{ top: "10%", right: "-15%" }}
        />
        <p className="display text-outline absolute top-8 -left-4 text-[22vw] leading-none font-bold opacity-30 select-none">
          HPC
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          index="04"
          title="Research"
          sub={t({
            ja: "アクセラレータの性能を、ソフトウェアで引き出す。",
            en: "Unlocking accelerator performance through software.",
          })}
        />

        <div className="space-y-10">
          {research.map((item, i) => (
            <Reveal
              key={item.title.en}
              delay={i * 100}
              className="glow-card rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:p-12"
            >
              <span className="display inline-block rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold tracking-wider text-accent-soft">
                {t(item.badge)}
              </span>
              <h3 className="display mt-5 text-2xl leading-snug font-bold text-white md:text-3xl">
                {t(item.title)}
              </h3>
              <div className="mt-6 space-y-4">
                {item.paragraphs.map((p) => (
                  <p
                    key={p.en.slice(0, 40)}
                    className="text-[15px] leading-relaxed text-foreground/75 md:text-base"
                  >
                    {t(p)}
                  </p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="display rounded-full border border-white/10 px-3 py-1 text-xs text-foreground/55"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
