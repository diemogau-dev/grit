import SectionLabel from "./ui/SectionLabel";
import ImageSlot from "./ui/ImageSlot";
import ProductSpec from "./ui/ProductSpec";
import { PRODUCT_SPECS } from "@/lib/content";

/**
 * El producto — fondo hueso. Dos fotos (muñeca + detalle cruz),
 * descripción emotiva y tabla de especificaciones.
 * Desktop: imágenes a la izquierda, copy + specs a la derecha.
 */
export default function Producto() {
  return (
    <section id="producto" className="bg-hueso text-tinta">
      <div className="mx-auto max-w-contenido px-[26px] py-seccion md:px-10">
        <SectionLabel dot="tierra-oscura" className="mb-[22px]">
          El producto
        </SectionLabel>

        <h2 className="m-0 mb-[26px] font-archivo text-[34px] font-extrabold uppercase leading-[1.02] tracking-[-0.02em] md:text-[44px]">
          Es lo que <span className="text-tierra-oscura">representa.</span>
        </h2>

        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-14">
          {/* Fotos (image-slots rellenables) */}
          <div className="mb-[26px] grid grid-cols-[1.3fr_1fr] gap-[10px] lg:mb-0">
            <ImageSlot
              id="grit-producto-muneca"
              radius={6}
              placeholder="Foto en la muñeca · uso real"
              className="aspect-[3/4] w-full"
            />
            <ImageSlot
              id="grit-producto-cruz"
              radius={6}
              placeholder="Detalle · la cruz bordada"
              className="aspect-[3/4] w-full"
            />
          </div>

          {/* Copy + specs */}
          <div>
            <p className="m-0 mb-7 text-[16.5px] leading-[1.6] text-gris-tinta">
              Una declaración silenciosa que llevás puesta:{" "}
              <strong className="font-semibold text-tierra-oscura">
                decidí dejar de vivir en piloto automático.
              </strong>{" "}
              No grita, no se exhibe. Solo te lo recuerda, cada vez que la mirás.
            </p>

            <div className="border-t-2 border-tinta">
              {PRODUCT_SPECS.map((spec) => (
                <ProductSpec
                  key={spec.label}
                  label={spec.label}
                  valor={spec.valor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
