import SectionLabel from "./ui/SectionLabel";
import FAQItem from "./ui/FAQItem";
import { FAQS } from "@/lib/content";

/**
 * FAQ — fondo hueso. 12 preguntas en acordeón animado.
 */
export default function FAQ() {
  return (
    <section id="faq" className="bg-hueso text-tinta">
      <div className="mx-auto max-w-contenido px-[26px] py-seccion md:px-10">
        <SectionLabel dot="tierra-oscura" className="mb-[22px]">
          Preguntas frecuentes
        </SectionLabel>

        <h2 className="m-0 mb-[30px] font-archivo text-[34px] font-extrabold uppercase leading-[1.02] tracking-[-0.02em] md:text-[44px]">
          Lo que querés saber.
        </h2>

        <div className="mx-auto max-w-[760px] border-t border-borde-claro">
          {FAQS.map((faq) => (
            <FAQItem
              key={faq.pregunta}
              pregunta={faq.pregunta}
              respuesta={faq.respuesta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
