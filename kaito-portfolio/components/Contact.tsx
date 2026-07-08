"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const t = useT();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // GitHub Pages is static hosting, so the form opens the user's mail client
  // with the subject and body prefilled instead of POSTing to a backend.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      t({
        ja: `ポートフォリオサイトからのお問い合わせ（${name}様）`,
        en: `Portfolio inquiry from ${name}`,
      }),
    );
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm text-white placeholder:text-foreground/35 focus:border-accent focus:outline-none transition-colors";

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="blob h-[35vw] w-[35vw] bg-violet-800/50"
          style={{ bottom: "-10%", left: "20%" }}
        />
      </div>

      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <SectionHeading
          index="07"
          title="Contact"
          sub={t({
            ja: "お仕事のご相談・ご質問など、お気軽にご連絡ください。送信ボタンでメールソフトが開きます。",
            en: "Feel free to reach out about opportunities or questions. Submitting opens your mail client.",
          })}
        />

        <Reveal>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t({ ja: "お名前", en: "Your name" })}
              className={inputClass}
            />
            <textarea
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t({ ja: "メッセージ", en: "Your message" })}
              className={`${inputClass} resize-y`}
            />
            <div className="flex flex-wrap items-center gap-5">
              <button
                type="submit"
                className="display rounded-full bg-accent px-9 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.7)] transition-transform hover:-translate-y-1"
              >
                {t({ ja: "メールで送信", en: "Send via Email" })}
              </button>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-foreground/55 underline-offset-4 hover:text-accent-soft hover:underline"
              >
                {site.email}
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
