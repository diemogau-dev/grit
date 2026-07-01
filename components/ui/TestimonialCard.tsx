import ImageSlot from "./ImageSlot";

/**
 * Tarjeta de testimonio: quote + avatar (image-slot) + nombre y ubicación.
 */
type TestimonialCardProps = {
  quote: string;
  nombre: string;
  ubicacion: string;
  avatarId: string;
};

export default function TestimonialCard({
  quote,
  nombre,
  ubicacion,
  avatarId,
}: TestimonialCardProps) {
  return (
    <div className="rounded-[10px] border border-borde p-6">
      <p className="m-0 mb-[18px] font-archivo text-[19px] font-semibold leading-[1.3]">
        «{quote}»
      </p>
      <div className="flex items-center gap-3">
        <ImageSlot
          id={avatarId}
          shape="circle"
          placeholder=""
          className="h-10 w-10 flex-shrink-0"
        />
        <div>
          <div className="text-[13.5px] font-semibold text-hueso">{nombre}</div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-gris-medio">
            {ubicacion}
          </div>
        </div>
      </div>
    </div>
  );
}
