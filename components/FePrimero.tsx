import SectionLabel from "./ui/SectionLabel";
import CrossIcon from "./ui/CrossIcon";

/**
 * Por qué fe primero — fondo tinta. Justifica la primera categoría
 * sin tono religioso-excluyente.
 */
export default function FePrimero() {
  return (
    <section className="bg-tinta text-hueso">
      <div className="mx-auto max-w-contenido px-[26px] py-seccion md:px-10">
        <SectionLabel dot="tierra" className="mb-[26px]">
          Por qué fe primero
        </SectionLabel>

        <CrossIcon width={34} className="mb-[22px]" />

        <div className="max-w-[760px]">
          <p className="m-0 font-archivo text-[27px] font-bold leading-[1.16] tracking-[-0.015em] md:text-[32px]">
            Empezamos por la fe. No porque Grit sea una marca religiosa, sino
            porque la fe es donde la pertenencia y el compromiso laten más
            fuerte.
          </p>

          <p className="m-0 mt-[26px] text-[16px] leading-[1.65] text-gris-copy">
            Es nuestro primer idioma. No el único. Con el tiempo, Grit va a
            hablar muchos; pero todos dicen lo mismo: vivir con intención.
          </p>

          <p className="m-0 mt-[18px] text-[16px] leading-[1.65] text-gris-claro">
            Si tu fe te sostiene, esta pulsera la lleva con vos. Si tu camino es
            otro, también vas a encontrar tu Grit. Acá nadie es mejor que nadie;
            solo personas que decidieron no vivir en piloto automático.
          </p>
        </div>
      </div>
    </section>
  );
}
