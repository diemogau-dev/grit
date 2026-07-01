/**
 * Paso del ritual (Tap → Reflexionar → Progreso).
 * Número en círculo, línea conectora vertical (mobile) y contenido.
 * El primer paso usa el acento tierra; los siguientes, neutro.
 */
type RitualStepProps = {
  numero: string;
  titulo: string;
  etiqueta: string;
  descripcion: string;
  activo?: boolean;
  /** Oculta la línea conectora en el último paso. */
  ultimo?: boolean;
};

export default function RitualStep({
  numero,
  titulo,
  etiqueta,
  descripcion,
  activo = false,
  ultimo = false,
}: RitualStepProps) {
  return (
    <div className="flex gap-[18px]">
      {/* Columna: número + línea conectora */}
      <div className="flex flex-col items-center">
        <div
          className={`flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border-[1.5px] font-archivo text-[16px] font-extrabold ${
            activo
              ? "border-tierra text-tierra"
              : "border-[#4A443B] text-gris-copy"
          }`}
        >
          {numero}
        </div>
        {!ultimo && (
          <div
            className="my-[6px] w-[1.5px] flex-1"
            style={{
              background: activo
                ? "linear-gradient(#C2693F,#3A352D)"
                : "#3A352D",
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Contenido del paso */}
      <div className={ultimo ? "" : "pb-[26px]"}>
        <div className="font-archivo text-[21px] font-extrabold uppercase tracking-[-0.01em]">
          {titulo}
        </div>
        <div
          className={`my-[5px] mb-[9px] font-mono text-[11px] uppercase tracking-[0.12em] ${
            activo ? "text-tierra" : "text-gris-medio"
          }`}
        >
          {etiqueta}
        </div>
        <p className="m-0 text-[14.5px] leading-[1.6] text-gris-claro">
          {descripcion}
        </p>
      </div>
    </div>
  );
}
