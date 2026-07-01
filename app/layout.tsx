import type { Metadata, Viewport } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  organizationSchema,
  productSchema,
  faqSchema,
} from "@/lib/structured-data";

// Tipografía — cargada con next/font (self-hosted, sin FOUT, óptimo para LCP)
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#14110F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Grit · Fe que acompaña",
    template: "%s · Grit",
  },
  description:
    "Un recordatorio diario de fe, disciplina y propósito. No un accesorio; una decisión que llevás en la muñeca. Pulsera Grit — Colección Fe. Envíos en todo Paraguay.",
  keywords: [
    "Grit",
    "pulsera",
    "fe",
    "disciplina",
    "propósito",
    "cristiano",
    "Paraguay",
    "NFC",
    "identidad",
  ],
  authors: [{ name: "Grit" }],
  creator: "Grit",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: SITE_URL,
    siteName: "Grit",
    title: "Grit · Fe que acompaña",
    description:
      "Un recordatorio diario de fe, disciplina y propósito. Fuerza en cada toque.",
    images: [
      {
        url: "/img/producto.jpg",
        width: 1536,
        height: 1024,
        alt: "Pulseras Grit — Colección Fe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grit · Fe que acompaña",
    description:
      "Un recordatorio diario de fe, disciplina y propósito. Fuerza en cada toque.",
    images: ["/img/producto.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>
        {children}
        {/* Datos estructurados JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
