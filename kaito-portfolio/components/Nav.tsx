"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { useLanguage, useT } from "@/lib/i18n";

export default function Nav() {
  const { lang, setLang } = useLanguage();
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-[#07060b]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a
          href="#top"
          className="display text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          KAITO<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="display text-sm text-foreground/70 transition-colors hover:text-accent-soft"
            >
              {t(item.label)}
            </a>
          ))}
          <LangToggle lang={lang} setLang={setLang} />
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[#07060b]/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="display rounded-lg px-3 py-3 text-base text-foreground/80 hover:bg-white/5 hover:text-accent-soft"
              >
                {t(item.label)}
              </a>
            ))}
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="display rounded-lg px-3 py-3 text-base text-foreground/80 hover:bg-white/5 hover:text-accent-soft"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: "ja" | "en";
  setLang: (l: "ja" | "en") => void;
}) {
  return (
    <div className="display flex overflow-hidden rounded-full border border-white/15 text-xs">
      {(["ja", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 font-medium uppercase transition-colors ${
            lang === l
              ? "bg-accent text-white"
              : "text-foreground/60 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
