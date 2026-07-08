import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
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
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="paper-texture antialiased">{children}</body>
    </html>
  );
}
