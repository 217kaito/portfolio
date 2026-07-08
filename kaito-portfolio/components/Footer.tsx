"use client";

import { site } from "@/lib/content";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-white/5 px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="display text-sm text-foreground/40">
          © {new Date().getFullYear()} {site.nameLatin}
        </p>
        <div className="flex items-center gap-6 text-sm">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 transition-colors hover:text-accent-soft"
          >
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-foreground/50 transition-colors hover:text-accent-soft"
          >
            Email
          </a>
          <a
            href="#top"
            className="text-foreground/50 transition-colors hover:text-accent-soft"
          >
            {t({ ja: "トップへ ↑", en: "Back to top ↑" })}
          </a>
        </div>
      </div>
    </footer>
  );
}
