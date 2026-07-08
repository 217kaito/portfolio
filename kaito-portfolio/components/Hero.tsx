"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/content";
import { useT } from "@/lib/i18n";

export default function Hero() {
  const t = useT();
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 md:px-10"
    >
      {/* Parallax blobs */}
      <div ref={bgRef} className="absolute inset-0 -z-10 will-change-transform">
        <div
          className="blob h-[45vw] w-[45vw] bg-violet-700/60"
          style={{ top: "-10%", left: "-8%" }}
        />
        <div
          className="blob h-[35vw] w-[35vw] bg-indigo-800/50"
          style={{ bottom: "5%", right: "-5%", animationDelay: "-6s" }}
        />
        <div
          className="blob h-[25vw] w-[25vw] bg-fuchsia-800/40"
          style={{ top: "40%", left: "45%", animationDelay: "-12s" }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <h1 className="display text-[13vw] leading-[1.02] font-bold whitespace-nowrap md:text-[8vw]">
          <span className="text-white">Kaito </span>
          <span className="text-gradient">Portfolio</span>
        </h1>
        <p className="mt-8 max-w-5xl text-base leading-relaxed tracking-[0.1em] text-foreground/75 md:text-xl md:tracking-[0.2em]">
          {t(site.subTagline)}
        </p>
        <p className="mt-3 max-w-5xl text-sm leading-relaxed tracking-[0.1em] text-foreground/50 md:text-base md:tracking-[0.2em]">
          {t({
            ja: "MN-Core × MLSDK の研究から、SaaSの本番運用まで。",
            en: "From MN-Core x MLSDK research to production SaaS operations.",
          })}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#research"
            className="display rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.7)] transition-transform hover:-translate-y-1"
          >
            {t({ ja: "研究を見る", en: "View Research" })}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="display rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent-soft"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground/40">
        <span className="display text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="block h-10 w-px animate-pulse bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
