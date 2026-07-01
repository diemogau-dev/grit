import SectionLabel from "./ui/SectionLabel";
import CategoryCard from "./ui/CategoryCard";
import {
  CATEGORIA_ACTIVA,
  CATEGORIAS_PROXIMAS,
  CATEGORIAS_EXTRA,
} from "@/lib/content";

/**
 * Próximas categorías — fondo hueso. Categoría activa (Fe) + grid de próximas.
 */
export default function ProximasCategorias() {
  return (
    <section className="bg-hueso text-tinta">
      <div className="mx-auto max-w-contenido px-[26px] py-seccion md:px-10">
        <SectionLabel dot="tierra-oscura" className="mb-[22px]">
          Lo que se viene
        </SectionLabel>

        <h2 className="m-0 mb-3 font-archivo text-[34px] font-extrabold uppercase leading-[1.02] tracking-[-0.02em] md:text-[44px]">
          Hoy, fe.
          <br />
          Mañana, todo lo demás.
        </h2>

        <p className="m-0 mb-[30px] max-w-[360px] text-[16px] leading-[1.6] text-gris-oscuro">
          Un mismo objetivo, muchos idiomas. Estas son las próximas colecciones;
          distintos caminos hacia la misma decisión.
        </p>

        {/* Categoría activa */}
        <div className="mb-[10px]">
          <CategoryCard nombre={CATEGORIA_ACTIVA.nombre} activa />
        </div>

        {/* Próximas categorías */}
        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-3">
          {CATEGORIAS_PROXIMAS.map((cat) => (
            <CategoryCard key={cat.nombre} nombre={cat.nombre} />
          ))}
        </div>

        <div className="mt-[18px] text-center font-mono text-[11px] uppercase tracking-[0.1em] text-gris-medio">
          {CATEGORIAS_EXTRA}
        </div>
      </div>
    </section>
  );
}
