import CrossIcon from "./CrossIcon";

/**
 * Tarjeta de categoría. Dos variantes:
 *  - activa: fondo tinta, ícono cruz, estado "Disponible ahora".
 *  - próxima: tarjeta clara con estado "Próximamente".
 */
type CategoryCardProps = {
  nombre: string;
  activa?: boolean;
};

export default function CategoryCard({
  nombre,
  activa = false,
}: CategoryCardProps) {
  if (activa) {
    return (
      <div className="flex items-center gap-3 rounded-lg bg-tinta px-[18px] py-[18px] text-hueso">
        <CrossIcon width={20} />
        <span className="flex-1 font-archivo text-[19px] font-extrabold uppercase">
          {nombre}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-tierra">
          ● Disponible ahora
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-borde-claro bg-superficie-clara p-4">
      <div className="font-archivo text-[16px] font-bold uppercase text-[#7E776C]">
        {nombre}
      </div>
      <div className="mt-[6px] font-mono text-[9.5px] uppercase tracking-[0.12em] text-[#A89F8D]">
        Próximamente
      </div>
    </div>
  );
}
