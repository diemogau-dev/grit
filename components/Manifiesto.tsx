import SectionLabel from "./ui/SectionLabel";

/**
 * Manifiesto — fondo hueso. Frase fuerte + párrafo de apoyo.
 */
export default function Manifiesto() {
  return (
    <section className="bg-hueso text-tinta">
      <div className="mx-auto max-w-contenido px-[26px] py-seccion md:px-10">
        <SectionLabel dot="tierra-oscura" className="mb-[26px]">
          El manifiesto
        </SectionLabel>

        <p className="m-0 max-w-[820px] font-archivo text-[31px] font-bold leading-[1.14] tracking-[-0.015em] md:text-[40px]">
          Un recordatorio, no un accesorio. La llevás para no olvidar quién
          decidiste ser y para no llegar al final del camino{" "}
          <span className="text-tierra-oscura">
            arrepentido de no haber buscado tu mejor versión.
          </span>
        </p>

        <p className="m-0 mt-7 max-w-[420px] text-[16px] leading-[1.65] text-gris-oscuro">
          Cada día la ves y recordás tu propósito. Sin ruido, sin promesas
          mágicas, sin urgencias inventadas. Solo vos y la dirección que
          tomaste.
        </p>
      </div>
    </section>
  );
}
