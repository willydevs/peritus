import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PERITUS Contabilidade | Contabilidade de Alto Padrão em Aracaju",
  description:
    "Escritório de contabilidade premium em Aracaju. Proteja seu patrimônio com quem sabe atacar. Contabilidade empresarial, planejamento tributário e escritório virtual.",
  keywords: "contabilidade aracaju, escritório contabilidade, planejamento tributário, escritório virtual aracaju, contabilidade empresarial",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
