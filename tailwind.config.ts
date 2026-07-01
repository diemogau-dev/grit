import type { Config } from "tailwindcss";

/**
 * Configuración Tailwind — Sistema visual Grit v2.
 * Paleta, tipografía y espaciados extraídos del brand kit.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondos / copy
        tinta: "#14110F", // fondo oscuro principal
        "tinta-2": "#211D19", // fondo oscuro secundario (ritual, CTA)
        hueso: "#F2EEE6", // fondo claro / copy sobre oscuro
        // Acentos (tierra / arcilla)
        tierra: "#C2693F", // acento primario
        "tierra-oscura": "#7A3B2B", // acento secundario
        // Grises de soporte
        "gris-medio": "#8C857A",
        "gris-oscuro": "#5C564D",
        "gris-claro": "#A39C90",
        "gris-copy": "#C9C2B6", // texto sobre fondo oscuro
        "gris-tinta": "#3A342E", // texto sobre fondo claro
        // Bordes / superficies
        borde: "#2E2922", // borde sobre oscuro
        "borde-claro": "#D8D1C3", // borde sobre claro
        "superficie-clara": "#EDE9E0", // tarjetas sobre hueso
      },
      fontFamily: {
        // Se enlazan a las variables CSS de next/font (ver app/layout.tsx)
        archivo: ["var(--font-archivo)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      spacing: {
        // Espaciado generoso entre secciones (mín 74px)
        seccion: "74px",
      },
      maxWidth: {
        contenido: "1120px", // ancho máximo de contenido en desktop
      },
    },
  },
  plugins: [],
};

export default config;
