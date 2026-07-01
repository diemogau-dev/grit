/**
 * Contenido / copy de la landing de Grit.
 * Centralizado acá para mantener las secciones limpias y facilitar
 * futuras iteraciones de copy sin tocar la maquetación.
 *
 * NOTA DE MARCA: el tono es auténtico, exigente sin juzgar, optimista pero
 * realista. Nunca urgencia falsa, culpa ni promesas mágicas.
 */

export const RITUAL_STEPS = [
  {
    numero: "01",
    titulo: "Tap",
    etiqueta: "Tocás la pulsera",
    // Copy reforzado: explica el "por qué" del tap (sugerencia de conversión).
    descripcion:
      "Un gesto simple, en los momentos que necesites. Acercás el celular y listo. Cada toque es un voto a favor de quien decidiste ser.",
    activo: true,
  },
  {
    numero: "02",
    titulo: "Reflexionar",
    etiqueta: "Accedés a una verdad",
    descripcion:
      "Un versículo, una reflexión, un recordatorio de propósito. Breve, sin humo, sin app.",
    activo: false,
  },
  {
    numero: "03",
    titulo: "Progreso",
    etiqueta: "Volvés con intención",
    descripcion:
      "No es magia. Es constancia, repetida cuando nadie mira. Pequeñas decisiones que se acumulan.",
    activo: false,
  },
] as const;

export const PRODUCT_SPECS = [
  { label: "Material", valor: "Tejido elástico premium, tacto suave" },
  { label: "Símbolo", valor: "Cruz bordada, no estampada" },
  { label: "Tecnología", valor: "Toque a contenido (NFC), sin batería" },
  { label: "Uso", valor: "Resistente al día a día: entreno, agua, rutina" },
] as const;

export type Categoria = {
  nombre: string;
  activa: boolean;
};

export const CATEGORIA_ACTIVA: Categoria = { nombre: "Fe", activa: true };

export const CATEGORIAS_PROXIMAS: Categoria[] = [
  { nombre: "Estoicismo", activa: false },
  { nombre: "Psicología", activa: false },
  { nombre: "Motivación", activa: false },
  { nombre: "Performance", activa: false },
  { nombre: "Business", activa: false },
  { nombre: "Running · Hyrox", activa: false },
];

export const CATEGORIAS_EXTRA = "+ Liderazgo · Lectura · Hábitos · Recuperación";

export type Testimonial = {
  quote: string;
  nombre: string;
  ubicacion: string;
};

export const TESTIMONIAL: Testimonial = {
  quote:
    "La toco antes de entrenar y antes de orar. Es el mismo gesto: acordarme de quién quiero ser.",
  nombre: "Nombre Apellido",
  ubicacion: "Asunción, PY",
};

export type FAQ = {
  pregunta: string;
  respuesta: string;
};

export const FAQS: FAQ[] = [
  {
    pregunta: "¿Qué es Grit, exactamente?",
    respuesta:
      "Grit es una marca de identidad. La pulsera es el primer producto: un recordatorio físico del compromiso que tomaste con vos mismo. No vendemos un accesorio; te devolvemos una decisión, todos los días.",
  },
  {
    pregunta: "¿Cómo funciona el toque («tap»)?",
    respuesta:
      "La pulsera tiene un chip de interacción (NFC). Acercás tu celular y accedés al instante a contenido: un versículo, una reflexión, un recordatorio. Sin batería y sin tener que cargar nada.",
  },
  {
    pregunta: "¿Necesito descargar una app?",
    respuesta:
      "No. El toque abre el contenido directo en el navegador de tu celular. Si en el futuro sumamos una app, siempre va a ser opcional, nunca un requisito.",
  },
  {
    pregunta: "¿Tengo que ser religioso para usarla?",
    respuesta:
      "No. Empezamos por la fe porque es donde la pertenencia late más fuerte, pero Grit es para cualquiera que decidió vivir con intención. Tu camino es tuyo, y la pulsera lo acompaña sin juzgar.",
  },
  {
    pregunta: "¿De qué material es?",
    respuesta:
      "Tejido elástico premium, de tacto suave y pensado para el uso diario. La cruz va bordada, no estampada: no se despega ni se borra con el tiempo.",
  },
  {
    pregunta: "¿Aguanta el día a día?",
    respuesta:
      "Sí. Está hecha para acompañarte entrenando, en el agua y en la rutina. Es resistente y cómoda para llevarla siempre puesta, sin que tengas que cuidarla.",
  },
  {
    pregunta: "¿Qué talle elijo?",
    respuesta:
      "Es elástica y de talle único: se adapta a la mayoría de las muñecas. Si tenés dudas, escribinos antes de comprar y te ayudamos a elegir.",
  },
  {
    pregunta: "¿Qué contenido recibo al tocarla?",
    respuesta:
      "Contenido breve y con intención: versículos, reflexiones y recordatorios de disciplina y propósito. Lo vamos renovando para que siga acompañándote a lo largo del tiempo.",
  },
  {
    pregunta: "¿Hacen envíos en todo Paraguay?",
    respuesta:
      "Sí. Enviamos a Asunción, Gran Asunción y todo el interior. Coordinamos el envío con vos apenas confirmás tu pedido.",
  },
  {
    pregunta: "¿Cómo pago?",
    respuesta:
      "Aceptamos transferencia y tarjeta. Te pasamos los datos al finalizar el pedido. Sin cuotas escondidas ni letra chica.",
  },
  {
    pregunta: "¿Cuánto tarda el envío?",
    respuesta:
      "En Asunción y alrededores, normalmente entre 24 y 72 horas. Al interior puede tomar unos días más según la zona. Te avisamos cada paso.",
  },
  {
    pregunta: "¿Puedo cambiarla o devolverla?",
    respuesta:
      "Sí. Si algo no está bien, escribinos dentro de los primeros 7 días y lo resolvemos: cambio o devolución sin vueltas. Queremos que la lleves porque querés, no porque tengas que hacerlo.",
  },
];

/** Enlaces de contacto / redes. Centralizados para reusar en CTA y footer. */
export const LINKS = {
  // Número placeholder de Paraguay — reemplazar por el real.
  whatsapp:
    "https://wa.me/595000000000?text=Hola%20Grit%2C%20quiero%20conseguir%20mi%20pulsera",
  instagram: "https://instagram.com/grit.py",
  contacto: "mailto:hola@grit.py",
} as const;
