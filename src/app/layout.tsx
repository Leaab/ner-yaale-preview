import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ner Yaalé — Mon école en Israël",
  description:
    "Ner Yaalé accompagne les familles francophones dans le choix des écoles en Israël. L'Alya de vos enfants commence par le bon choix d'école.",
  keywords: [
    "Alya",
    "école Israël",
    "orientation scolaire",
    "familles francophones",
    "Ner Yaalé",
  ],
  openGraph: {
    title: "Ner Yaalé — Mon école en Israël",
    description:
      "Accompagnement des familles francophones pour le choix des écoles en Israël.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sora.variable} ${plusJakarta.variable}`}>
      <body className="paper-texture antialiased">{children}</body>
    </html>
  );
}
