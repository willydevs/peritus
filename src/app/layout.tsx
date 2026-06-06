import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://peritusac.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "PERITUS Contabilidade | Planejamento Tributário e Contabilidade Empresarial em Aracaju-SE",
  description:
    "Contabilidade de alto padrão em Aracaju. Planejamento tributário, departamento pessoal, escritório virtual e muito mais. 15+ anos, 500+ clientes, R$0 em multas fiscais. Consultoria gratuita.",
  keywords:
    "contabilidade aracaju, planejamento tributário aracaju, escritório contabilidade sergipe, escritório virtual aracaju, abertura empresa aracaju, departamento pessoal aracaju, regularização fiscal se, contabilidade empresarial grageru",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "PERITUS Contabilidade | Planejamento Tributário em Aracaju-SE",
    description:
      "Contabilidade de alto padrão em Aracaju-SE. 15+ anos de experiência, 500+ empresas atendidas, R$0 em multas fiscais. Consultoria gratuita via WhatsApp.",
    siteName: "PERITUS Assessoria Contábil",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PERITUS Assessoria Contábil — Aracaju, SE",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "PERITUS Contabilidade | Planejamento Tributário em Aracaju-SE",
    description:
      "Contabilidade de alto padrão em Aracaju. 15+ anos, 500+ clientes, R$0 em multas. Consultoria gratuita.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "@id": siteUrl,
      name: "PERITUS Assessoria Contábil",
      description:
        "Escritório de contabilidade premium em Aracaju-SE especializado em planejamento tributário, departamento pessoal, escritório virtual e consultoria contábil.",
      url: siteUrl,
      telephone: ["+5579999491000", "+5579991642000"],
      email: "peritus@peritusac.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Terêncio Sampaio, 532",
        addressLocality: "Aracaju",
        addressRegion: "SE",
        postalCode: "49025-020",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -10.9091,
        longitude: -37.0524,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "87",
        bestRating: "5",
        worstRating: "1",
      },
      priceRange: "$$",
      areaServed: [
        { "@type": "City", name: "Aracaju" },
        { "@type": "State", name: "Sergipe" },
      ],
      knowsAbout: [
        "Planejamento Tributário",
        "Contabilidade Empresarial",
        "Departamento Pessoal",
        "Abertura de Empresa",
        "Regularização Fiscal",
        "Escritório Virtual",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços Contábeis PERITUS",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contabilidade Empresarial" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Planejamento Tributário" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Departamento Pessoal" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Abertura de Empresa" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Regularização Fiscal" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Escritório Virtual" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quanto custa a contabilidade na PERITUS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O valor varia conforme o porte da empresa e regime tributário. Oferecemos consultoria gratuita para apresentar uma proposta personalizada.",
          },
        },
        {
          "@type": "Question",
          name: "Posso trocar de contabilidade sem complicações?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Cuidamos de todo o processo de transição, comunicação ao contador anterior e migração de documentos sem interrupção das obrigações fiscais.",
          },
        },
        {
          "@type": "Question",
          name: "O escritório virtual é aceito pela Receita Federal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Nosso endereço em Grageru é aceito para abertura e manutenção de CNPJ perante a Receita Federal, SEFAZ/SE e Prefeitura de Aracaju.",
          },
        },
        {
          "@type": "Question",
          name: "Em quanto tempo consigo abrir minha empresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dependendo do tipo de empresa e atividade, o processo leva de 3 a 15 dias úteis. Cuidamos de todo o trâmite do início ao fim.",
          },
        },
        {
          "@type": "Question",
          name: "Vocês atendem empresas de outros estados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim, atendemos clientes em todo o Brasil de forma 100% digital com reuniões por videoconferência.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full antialiased"
        style={{ fontFamily: "'Tomato Grotesk', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
