import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ProductoPrincipal from "@/components/producto/ProductoPrincipal";
import ProductoPasos from "@/components/producto/ProductoPasos";
import ProductoRecordatorio from "@/components/producto/ProductoRecordatorio";
import ProductoBeneficios from "@/components/producto/ProductoBeneficios";
import ProductoVidaReal from "@/components/producto/ProductoVidaReal";
import ProductoOpiniones from "@/components/producto/ProductoOpiniones";
import ProductoIncluye from "@/components/producto/ProductoIncluye";
import ProductoRegalo from "@/components/producto/ProductoRegalo";
import ProductoCTAFinal from "@/components/producto/ProductoCTAFinal";

export const metadata: Metadata = {
  title: "Pulsera NFC Grit",
  description:
    "Comprá tu pulsera NFC Grit: un recordatorio diario de fe, disciplina y propósito. Tejido premium, cruz bordada y toque a contenido. Envíos a todo Paraguay.",
  alternates: { canonical: "/producto" },
  openGraph: {
    title: "Pulsera NFC Grit",
    description:
      "Un recordatorio diario de fe, disciplina y propósito. Tejido premium, cruz bordada y toque a contenido (NFC).",
    url: "/producto",
    images: [{ url: "/img/producto.jpg", width: 1536, height: 1024 }],
  },
};

/**
 * Página de producto — venta directa de la Pulsera NFC Grit.
 * Arranca en la galería + selector de compra (sin hero previo).
 */
export default function ProductoPage() {
  return (
    <>
      <Header />
      <main>
        <ProductoPrincipal />
        <ProductoPasos />
        <ProductoRecordatorio />
        <ProductoBeneficios />
        <ProductoVidaReal />
        <ProductoOpiniones />
        <ProductoIncluye />
        <ProductoRegalo />
        <FAQ />
        <ProductoCTAFinal />
      </main>
      <Footer />
    </>
  );
}
