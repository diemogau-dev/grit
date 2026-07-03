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

/** Vista previa del mensaje diario que se muestra en la sección "El contenido". */
export const CONTENIDO_EJEMPLO = {
  etiqueta: "GRIT · HOY",
  fecha: "Martes, 14 de julio",
  texto: "«Todo lo puedo en Cristo que me fortalece.»",
  referencia: "Filipenses 4:13",
  accion: "Hoy: elegí lo difícil, y hacelo de todos modos.",
} as const;

export const CONTENIDO_TIPOS = [
  {
    titulo: "Versículo del día",
    descripcion:
      "Un fragmento breve de la Escritura. Distinto cada día, nunca el mismo dos veces seguidas.",
  },
  {
    titulo: "Reflexión",
    descripcion:
      "Una idea corta para bajarlo a tierra. Sin sermón, sin relleno, sin vueltas.",
  },
  {
    titulo: "Recordatorio",
    descripcion:
      "Una frase de disciplina o propósito, para los días en que la fe sola no alcanza y hace falta empuje.",
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

/* ============================================================
   Página de producto (/producto)
   ============================================================ */

export type ProductoImagen = { src: string; alt: string };

/** Galería de fotos — reusa las fotos de producto ya existentes en /public/img. */
export const PRODUCTO_GALERIA: ProductoImagen[] = [
  { src: "/img/producto.jpg", alt: "Pulseras Grit — Colección Fe" },
  { src: "/img/producto-muneca.jpg", alt: "Pulsera Grit puesta en la muñeca" },
  { src: "/img/producto-cruz.jpg", alt: "Detalle de la cruz bordada en la pulsera Grit" },
  { src: "/img/producto-par.jpg", alt: "Par de pulseras Grit" },
  { src: "/img/producto-logo.jpg", alt: "Detalle del logo Grit bordado" },
];

export type ProductoBundle = {
  id: string;
  cantidad: number;
  nombre: string;
  etiqueta: string;
  precio: number;
  badge?: string;
};

/** Precios placeholder — reemplazar por los precios reales del catálogo. */
export const PRODUCTO_BUNDLES: ProductoBundle[] = [
  {
    id: "1",
    cantidad: 1,
    nombre: "1 Pulsera GRIT",
    etiqueta: "Perfecta para empezar tu hábito diario",
    precio: 79000,
  },
  {
    id: "2",
    cantidad: 2,
    nombre: "2 Pulseras GRIT",
    etiqueta: "Una para vos y otra para regalar",
    precio: 199000,
    badge: "Más popular",
  },
  {
    id: "3",
    cantidad: 3,
    nombre: "3 Pulseras GRIT",
    etiqueta: "Para vos y toda tu familia",
    precio: 269000,
    badge: "Ahorra más",
  },
];

/** Rating agregado que se muestra junto al título del producto y en opiniones. */
export const PRODUCTO_RATING = { promedio: 4.9, total: 23 } as const;

export const PRODUCTO_PASOS = [
  {
    titulo: "Ponete la pulsera",
    descripcion:
      "Ajustala a tu muñeca. Es elástica, cómoda y de talle único: se adapta a la mayoría.",
  },
  {
    titulo: "Acercá tu celular",
    descripcion:
      "Un toque simple, sin apps ni configuraciones. Funciona con cualquier smartphone moderno.",
  },
  {
    titulo: "Recibí tu versículo",
    descripcion:
      "Un mensaje breve, distinto cada día: versículo, reflexión o recordatorio de propósito.",
  },
] as const;

export const PRODUCTO_RECORDATORIO_PUNTOS = [
  "Te ayuda a crear un hábito diario de fe",
  "Te recuerda volver a lo que depende de vos",
  "Es simple, rápido y sin fricción",
] as const;

export const PRODUCTO_BENEFICIOS = [
  {
    titulo: "Tu fe en segundos",
    descripcion: "Un toque y accedés al mensaje del día. Sin scroll, sin distracciones.",
  },
  {
    titulo: "Siempre con vos",
    descripcion: "La llevás puesta todo el día: entreno, trabajo, rutina.",
  },
  {
    titulo: "Sin apps ni batería",
    descripcion: "Tecnología NFC pasiva. No se carga, no se actualiza, no falla.",
  },
  {
    titulo: "Un regalo con propósito",
    descripcion: "Para vos o para alguien que necesita un recordatorio diario.",
  },
  {
    titulo: "Diseño simple",
    descripcion: "Minimalista, cómoda y pensada para durar en tu día a día.",
  },
  {
    titulo: "Experiencia digital",
    descripcion: "Contenido que se renueva solo, sin que tengas que hacer nada.",
  },
] as const;

export const PRODUCTO_INCLUYE = [
  "Pulsera NFC Grit",
  "Acceso a versículos y reflexiones diarias",
  "Instrucciones simples de uso",
  "Packaging premium, listo para regalar",
  "Soporte por WhatsApp",
] as const;

export const PRODUCTO_REGALO_ITEMS = [
  {
    titulo: "Para vos",
    descripcion: "Un recordatorio diario de quién decidiste ser.",
  },
  {
    titulo: "Para tu pareja",
    descripcion: "Una forma simple de acompañar su fe.",
  },
  {
    titulo: "Para un amigo",
    descripcion: "Un gesto con significado, no solo un objeto.",
  },
  {
    titulo: "Para quien lo necesita",
    descripcion: "Alguien que atraviesa un momento difícil y necesita un empujón.",
  },
] as const;

export type ProductoOpinion = {
  quote: string;
  nombre: string;
  ubicacion: string;
  rating: number;
};

/** Opiniones placeholder — reemplazar por reseñas reales de clientes. */
export const PRODUCTO_OPINIONES: ProductoOpinion[] = [
  {
    quote:
      "La toco antes de entrenar y antes de orar. Es el mismo gesto: acordarme de quién quiero ser.",
    nombre: "Nombre Apellido",
    ubicacion: "Asunción, PY",
    rating: 5,
  },
  {
    quote:
      "Pensé que era otro accesorio más. Terminó siendo el recordatorio que más necesitaba en el día.",
    nombre: "Nombre Apellido",
    ubicacion: "Luque, PY",
    rating: 5,
  },
  {
    quote:
      "Se lo regalé a mi hermana y ahora las dos la usamos. Simple, pero significa mucho.",
    nombre: "Nombre Apellido",
    ubicacion: "Ciudad del Este, PY",
    rating: 5,
  },
  {
    quote:
      "No hace falta ninguna app. La toco y ya está: un versículo, treinta segundos, listo.",
    nombre: "Nombre Apellido",
    ubicacion: "Encarnación, PY",
    rating: 5,
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
