/**
 * Fila de especificación del producto: label (monospace) + valor.
 */
type ProductSpecProps = {
  label: string;
  valor: string;
};

export default function ProductSpec({ label, valor }: ProductSpecProps) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-borde-claro py-[15px]">
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-gris-medio">
        {label}
      </span>
      <span className="text-right text-[14.5px] text-gris-tinta">{valor}</span>
    </div>
  );
}
