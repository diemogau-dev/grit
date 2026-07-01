import SectionLabel from "./ui/SectionLabel";
import ImageSlot from "./ui/ImageSlot";
import TestimonialCard from "./ui/TestimonialCard";
import { TESTIMONIAL } from "@/lib/content";

/** IDs de los slots de UGC (rellenables por drag & drop). */
const UGC_SLOTS = [1, 2, 3, 4, 5, 6];

/**
 * Comunidad — fondo tinta. Grilla de UGC (image-slots) + testimonial.
 */
export default function Comunidad() {
  return (
    <section className="bg-tinta text-hueso">
      <div className="mx-auto max-w-contenido px-[26px] py-seccion md:px-10">
        <SectionLabel dot="tierra" className="mb-[22px]">
          Comunidad
        </SectionLabel>

        <h2 className="m-0 mb-[18px] max-w-[720px] font-archivo text-[33px] font-extrabold uppercase leading-[1.04] tracking-[-0.02em] md:text-[42px]">
          No comprás una pulsera. Compartís una forma de vivir.
        </h2>

        <p className="m-0 mb-[34px] max-w-[620px] text-[16px] leading-[1.65] text-gris-copy">
          Cuando reconocés a alguien que la lleva, no pensás «tenemos la misma
          pulsera». Pensás:{" "}
          <span className="text-tierra">compartimos una decisión.</span>
        </p>

        {/* Grilla UGC */}
        <div className="mb-[10px] grid grid-cols-3 gap-2 md:grid-cols-6">
          {UGC_SLOTS.map((n) => (
            <ImageSlot
              key={n}
              id={`grit-ugc-${n}`}
              radius={6}
              placeholder="UGC"
              className="aspect-square w-full"
            />
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-[18px] max-w-[620px]">
          <TestimonialCard
            quote={TESTIMONIAL.quote}
            nombre={TESTIMONIAL.nombre}
            ubicacion={TESTIMONIAL.ubicacion}
            avatarId="grit-testi-avatar"
          />
        </div>

        <div className="mt-[22px] text-center font-mono text-[11px] uppercase tracking-[0.14em] text-gris-medio">
          @grit.py · #FeQueSeUsa
        </div>
      </div>
    </section>
  );
}
