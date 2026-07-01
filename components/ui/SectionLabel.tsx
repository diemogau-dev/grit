/**
 * Etiqueta superior de sección: punto de color + nombre en monospace.
 * El punto alterna entre tierra (#C2693F) y tierra oscura (#7A3B2B)
 * según el fondo de la sección.
 */
type SectionLabelProps = {
  children: React.ReactNode;
  /** Color del punto de acento. */
  dot?: "tierra" | "tierra-oscura";
  className?: string;
};

export default function SectionLabel({
  children,
  dot = "tierra",
  className = "",
}: SectionLabelProps) {
  const dotColor = dot === "tierra" ? "bg-tierra" : "bg-tierra-oscura";
  return (
    <div className={`grit-label ${className}`}>
      <span
        className={`h-[7px] w-[7px] flex-shrink-0 rounded-full ${dotColor}`}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
