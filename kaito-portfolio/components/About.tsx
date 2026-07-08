"use client";

import Image from "next/image";
import portrait from "@/public/images/favicon.jpg";
import { about, site } from "@/lib/content";
import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const t = useT();

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
        <Reveal className="flex flex-col items-center gap-6 lg:items-start">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-500 opacity-40 blur-xl" />
            <Image
              src={portrait}
              alt={t({ ja: "Kaitoのプロフィールアイコン", en: "Profile icon of Kaito" })}
              width={240}
              height={240}
              className="relative h-56 w-56 rounded-full border-2 border-accent/50 object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="display text-2xl font-bold text-white">{site.nameLatin}</p>
            <p className="mt-1 text-sm text-foreground/60">
              {t({ ja: "情報科学 修士課程", en: "M.S. candidate in CS" })}
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/85 md:text-xl">
              {t(about.intro)}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85 md:text-xl">
              {t(about.intro2)}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {about.facts.map((fact, i) => (
              <Reveal
                key={fact.label.en}
                delay={i * 120}
                className="glow-card rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="display mb-3 text-sm font-semibold tracking-widest text-accent-soft uppercase">
                  {t(fact.label)}
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed text-foreground/75">
                  {fact.items.map((item) => (
                    <li key={item.en}>{t(item)}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
