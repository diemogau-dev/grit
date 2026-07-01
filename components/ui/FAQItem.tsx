"use client";

import { useId, useState } from "react";

/**
 * Ítem de FAQ en acordeón. Animación suave con grid-template-rows (0fr → 1fr),
 * sin librerías. El ícono "+" rota a "×" al abrir.
 */
type FAQItemProps = {
  pregunta: string;
  respuesta: string;
};

export default function FAQItem({ pregunta, respuesta }: FAQItemProps) {
  const [abierto, setAbierto] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-borde-claro">
      <button
        type="button"
        aria-expanded={abierto}
        aria-controls={panelId}
        onClick={() => setAbierto((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-[18px] text-left"
      >
        <span className="font-archivo text-[16.5px] font-semibold leading-[1.25] text-tinta">
          {pregunta}
        </span>
        <span
          aria-hidden="true"
          className={`flex-shrink-0 font-archivo text-[24px] font-normal leading-none text-tierra-oscura transition-transform duration-300 ${
            abierto ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      {/* Contenedor animado: grid 0fr→1fr para expandir sin fijar altura */}
      <div
        id={panelId}
        role="region"
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          abierto ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="m-0 pb-5 pt-1 text-[14.5px] leading-[1.65] text-gris-tinta">
            {respuesta}
          </p>
        </div>
      </div>
    </div>
  );
}
