"use client";

import { publications } from "@/lib/content";
import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Publications() {
  const t = useT();

  return (
    <section id="publications" className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
      <SectionHeading index="06" title="Publications" />

      <ol className="space-y-6">
        {publications.map((pub, i) => {
          const title = typeof pub.title === "string" ? pub.title : t(pub.title);
          return (
            <Reveal
              key={title}
              as="li"
              delay={i * 120}
              className="glow-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:flex-row md:items-center md:gap-8"
            >
              <span className="display shrink-0 text-4xl font-bold text-accent/40 md:text-5xl">
                {pub.year}
              </span>
              <div>
                <p className="text-base leading-snug font-semibold text-white md:text-lg">
                  {title}
                </p>
                <p className="mt-2 text-sm text-foreground/60">
                  <span className="text-accent-soft">{t(pub.venue)}</span>
                  {" · "}
                  {t(pub.type)}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
