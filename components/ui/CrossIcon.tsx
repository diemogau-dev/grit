/** Ícono de cruz (símbolo de la colección Fe). */
export default function CrossIcon({
  width = 24,
  className = "",
  fill = "#C2693F",
}: {
  width?: number;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      aria-hidden="true"
      className={className}
    >
      <path d="M10 1h4v5h5v4h-5v13h-4V10H5V6h5z" fill={fill} />
    </svg>
  );
}
