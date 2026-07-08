"use client";

import { projects, site } from "@/lib/content";
import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const t = useT();

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
      <SectionHeading
        index="05"
        title="Projects"
        sub={t({
          ja: "手を動かして学んだこと、作ったもの。代表的なものを一部掲載しています。",
          en: "Things I've built and learned by doing — a selection of representative work.",
        })}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.url + project.title.en} delay={(i % 2) * 120}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="display text-xl leading-snug font-bold text-white md:text-2xl">
                  {t(project.title)}
                </h3>
                <span className="mt-1 shrink-0 text-foreground/40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-soft">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
              <p className="mt-4 grow text-sm leading-relaxed text-foreground/70">
                {t(project.description)}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="display rounded-full bg-accent/10 px-3 py-1 text-xs text-accent-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="display inline-block rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent-soft"
        >
          {t({ ja: "その他のプロジェクトはGitHubで ↗", en: "See more on GitHub ↗" })}
        </a>
      </Reveal>
    </section>
  );
}
