import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const body = Zen_Kaku_Gothic_New({
  variable: "--font-body",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaito Portfolio",
  description:
    "Portfolio of Kaito: HPC x deep learning accelerator researcher and software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${body.variable} ${display.variable} antialiased`}>
      <body className="grain">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
