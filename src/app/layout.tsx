import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PERITUS Contabilidade | Contabilidade de Alto Padrão em Aracaju",
  description:
    "Escritório de contabilidade premium em Aracaju. Proteja seu patrimônio com quem sabe atacar. Contabilidade empresarial, planejamento tributário e escritório virtual.",
  keywords: "contabilidade aracaju, escritório contabilidade, planejamento tributário, escritório virtual aracaju, contabilidade empresarial",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full antialiased" style={{ fontFamily: "'Tomato Grotesk', sans-serif" }}>{children}</body>
    </html>
  );
}
