import type { ServiceCategory, ServiceData } from "./types";

// ─── PREVISÕES ───────────────────────────────────────────────────────────────

const previsoes: ServiceData[] = [
  {
    slug: "previsao-diaria",
    icon: "🌅",
    title: "Previsión diaria",
    subtitle: "Claridad para tu día antes de que empiece.",
    price: "R$15",
    description:
      "La Previsión diaria trae orientación energética para las próximas 24 horas, revelando tendencias, retos y oportunidades. Ideal si quieres decidir con conciencia y alinear tus acciones con el flujo del universo. Cada lectura se adapta al momento presente y ofrece una guía espiritual para transitar el día con claridad e intención.",
    forWhom: "Para quien siente que el día empieza sin dirección o quiere evitar errores impulsivos.",
    receives: [
      "Lectura energética del día",
      "Alertas sobre situaciones importantes",
      "Orientación emocional y práctica",
    ],
  },
  {
    slug: "previsao-semanal",
    icon: "🌙",
    title: "Previsión semanal",
    subtitle: "Anticipa movimientos y prepárate para la semana.",
    price: "R$35",
    description:
      "Una lectura más amplia que muestra cómo pueden desenvolverse las energías durante la semana. Comprende los mejores momentos para actuar, retirarte o tomar posición. La Previsión semanal ofrece una visión panorámica para planificar con antelación, evitar conflictos innecesarios y aprovechar las ventanas de oportunidad del universo.",
    forWhom: "Para quien quiere planificar mejor la semana y evitar sorpresas emocionales.",
    receives: [
      "Panorama energético de la semana",
      "Días más favorables y más desafiantes",
      "Orientación práctica para cada fase",
    ],
  },
  {
    slug: "previsao-mensal",
    icon: "📅",
    title: "Previsión mensual",
    subtitle: "Ve el mes antes de vivirlo.",
    price: "R$47",
    description:
      "Un análisis profundo de las energías que influirán en tu mes. Ideal para decisiones importantes, ciclos de inicio y cierre, y planificación emocional. La Previsión mensual ofrece una perspectiva completa sobre las fuerzas en juego en las próximas semanas para que entres en el mes con conciencia, estrategia y apertura a lo que viene.",
    forWhom: "Para quien quiere control, visión y estrategia emocional.",
    receives: [
      "Lectura completa del mes",
      "Tendencias en amor, trabajo y vida personal",
      "Consejos estratégicos para cada área",
    ],
  },
];

// ─── CONSULTAS ESPECÍFICAS ────────────────────────────────────────────────────

const consultasEspecificas: ServiceData[] = [
  {
    slug: "templo-de-afrodite",
    icon: "💕",
    title: "Templo de Afrodita",
    subtitle: "Despierta tu magnetismo y poder de atracción.",
    price: "R$55",
    cardDesc: "Análisis de pareja",
    description:
      "Una sesión orientada al amor, la seducción, la autoestima y la energía femenina/afectiva. Trabaja bloqueos emocionales que impiden la conexión genuina y activa tu campo natural de atracción. Ya sea para encontrar un nuevo amor, fortalecer una relación o reconectar con tu propia esencia afectiva, el Templo de Afrodita ofrece orientación espiritual profunda y transformadora.",
    forWhom:
      "Para quien quiere atraer amor, reconectar con su poder personal o fortalecer vínculos.",
    receives: [
      "Lectura sobre vida amorosa y afectiva",
      "Identificación de bloqueos emocionales",
      "Direccionamiento energético para la atracción",
    ],
    relatedSlugs: ["analise-do-casal"],
  },
  {
    slug: "templo-do-diabo",
    icon: "🔥",
    title: "Templo del Diablo",
    subtitle: "Enfrenta las sombras que te frenan.",
    price: "R$45",
    description:
      "Una lectura intensa que revela patrones ocultos, hábitos emocionales, dependencias y autosabotajes internos. Aquí no hay suavizado—solo verdad. El Templo del Diablo es para quien está listo para mirar a los ojos a su propia sombra y encontrar ahí caminos de liberación. Una lectura valiente que puede cambiar la trayectoria de quien realmente desea transformación.",
    forWhom: "Para quien quiere transformación real, aunque sea incómoda.",
    receives: [
      "Revelación de patrones ocultos y sabotajes",
      "Enfrentamiento directo con bloqueos internos",
      "Caminos concretos de liberación",
    ],
  },
  {
    slug: "dois-caminhos",
    icon: "⚖️",
    title: "Dos caminos",
    subtitle: "Decide con conciencia.",
    price: "R$35",
    description:
      "Perfecto para momentos de duda e indecisión. Esta lectura compara dos caminos posibles y revela las consecuencias energéticas de cada elección. No se trata de decirte qué hacer, sino de iluminar lo que cada dirección trae—retos, oportunidades y el potencial de cada opción—para que tu decisión nazca del corazón y la conciencia.",
    forWhom: "Para quien está dividido entre dos decisiones importantes.",
    receives: [
      "Análisis comparativo de los dos caminos",
      "Consecuencias energéticas de cada elección",
      "Recomendación espiritual fundamentada",
    ],
  },
];

// ─── ANÁLISE DO CASAL (standalone — linked from templo-de-afrodite) ───────────

const analiseDoCalsal: ServiceData = {
  slug: "analise-do-casal",
  icon: "🧿",
  title: "Análisis de pareja",
  subtitle: "Comprende la dinámica real entre ustedes.",
  price: "R$55",
  description:
    "Una lectura profunda de la conexión entre dos personas, revelando sentimientos, intenciones, bloqueos y el futuro de la relación. El Análisis de pareja va más allá de las apariencias y muestra lo que realmente ocurre en el campo energético entre ustedes—lo que une, lo que aleja y lo que puede trabajarse para fortalecer el vínculo o cerrar el ciclo con claridad y paz.",
  forWhom:
    "Para quien quiere comprender en profundidad una relación actual o pasada.",
  receives: [
    "Energía individual de cada persona en la relación",
    "Dinámica real de la relación",
    "Tendencias y potencial futuro de la unión",
  ],
};

// ─── CONSULTAS ESPECÍFICAS — CATEGORY PAGE ────────────────────────────────────

const consultasEspecificasPage: ServiceData = {
  slug: "consultas-especificas",
  icon: "🎯",
  title: "Consultas específicas",
  subtitle: "Respuestas claras para situaciones concretas.",
  price: "",
  priceLabel: "Desde R$35",
  description:
    "Traes una situación concreta de tu vida y recibes una lectura enfocada, directa y sin rodeos. Cada consulta específica está diseñada para una necesidad puntual—amor, carrera, familia o decisiones importantes. Ideal si necesitas claridad inmediata sobre algo que pesa en la mente o el corazón.",
  forWhom: "Para quien necesita claridad inmediata sobre algo específico.",
  receives: [
    "Análisis dirigido al tema elegido",
    "Respuesta objetiva y sin rodeos",
    "Orientación práctica para el siguiente paso",
  ],
};

// ─── LEITURAS PERSONALIZADAS ──────────────────────────────────────────────────

const leituras: ServiceData[] = [
  {
    slug: "1-pergunta-5-cartas",
    icon: "🎴",
    title: "1 pregunta – 5 cartas (5 mazos)",
    subtitle: "Lectura objetiva con múltiples perspectivas energéticas.",
    price: "R$30",
    description:
      "Una pregunta central respondida con 5 cartas de 5 mazos distintos. Cada mazo aporta una voz energética diferente y perspectivas variadas sobre la misma situación. El resultado es una lectura rica, multifacética y objetiva, ideal si quieres entender varios ángulos de un asunto con rapidez.",
    forWhom: "Para quien tiene una duda concreta y quiere una respuesta clara y amplia.",
    receives: [
      "Lectura de 5 cartas de 5 mazos distintos",
      "Múltiples perspectivas sobre tu pregunta",
      "Respuesta clara y directa por audio",
    ],
  },
  {
    slug: "1-pergunta-mesa-real",
    icon: "👑",
    title: "1 pregunta – Mesa Real",
    subtitle: "Lectura tradicional completa con un solo mazo.",
    price: "R$70",
    description:
      "La Mesa Real es una de las tiradas más completas y tradicionales del tarot. Con un solo mazo ofrece una lectura profunda y detallada sobre tu pregunta: pasado, presente, futuro, obstáculos, influencias externas y potencial del desenlace. Una lectura clásica para quien valora profundidad y tradición.",
    forWhom: "Para quien quiere una lectura completa y profunda sobre un solo tema.",
    receives: [
      "Tirada Mesa Real con análisis completo",
      "Visión de pasado, presente y futuro",
      "Identificación de obstáculos y potenciales",
    ],
  },
  {
    slug: "1-pergunta-2-baralhos",
    icon: "🃏",
    title: "1 pregunta – 2 mazos",
    subtitle: "Dos capas de interpretación para mayor claridad.",
    price: "R$85",
    description:
      "Con dos mazos distintos, esta lectura ofrece dos capas energéticas sobre la misma pregunta. La combinación de dos oráculos crea una red de significados más rica, donde los símbolos se complementan y amplían la comprensión. Ideal si quieres más que una respuesta directa—quieres la complejidad detrás.",
    forWhom: "Para quien quiere una lectura con más profundidad y matices que el formato simple.",
    receives: [
      "Lectura con 2 mazos complementarios",
      "Dos perspectivas energéticas integradas",
      "Análisis profundo de la situación",
    ],
  },
  {
    slug: "1-pergunta-3-baralhos",
    icon: "🔮",
    title: "1 pregunta – 3 mazos",
    subtitle: "Visión ampliada con tres energías distintas.",
    price: "R$100",
    description:
      "Con tres mazos distintos, la visión es aún más amplia y precisa. Las tres energías se entrelazan para revelar capas que a menudo pasan desapercibidas. Es el formato ideal para situaciones complejas con varios factores y personas, donde la profundidad del análisis marca la diferencia.",
    forWhom: "Para quien enfrenta una situación compleja y necesita una lectura detallada.",
    receives: [
      "Lectura con 3 mazos distintos",
      "Visión ampliada con tres energías",
      "Análisis de situaciones de mayor complejidad",
    ],
  },
  {
    slug: "1-pergunta-5-baralhos",
    icon: "✨",
    title: "1 pregunta – hasta 5 mazos",
    subtitle: "Lectura profunda con múltiples oráculos.",
    price: "R$130",
    description:
      "Una de las lecturas más ricas: hasta 5 mazos cubren tu pregunta desde múltiples ángulos energéticos. Cada oráculo añade una voz única y un análisis extraordinariamente completo. Para cuando sientes que la situación merece verse en toda su profundidad y complejidad.",
    forWhom: "Para quien busca una lectura realmente profunda con múltiples perspectivas.",
    receives: [
      "Lectura con hasta 5 mazos",
      "Múltiples voces energéticas integradas",
      "Análisis completo y detallado",
    ],
  },
  {
    slug: "1-pergunta-8-baralhos",
    icon: "🌟",
    title: "1 pregunta – hasta 8 mazos",
    subtitle: "Análisis extremadamente completo y detallado.",
    price: "R$150",
    description:
      "La lectura más amplia del portafolio. Con hasta 8 mazos, cada aspecto de tu pregunta se examina con una lente energética distinta. El resultado es un análisis extraordinariamente rico que revela patrones, conexiones y significados que solo aparecen cuando varios sistemas oraculares trabajan juntos. Para máxima claridad y profundidad.",
    forWhom: "Para quien quiere la lectura más completa y detallada disponible.",
    receives: [
      "Lectura con hasta 8 mazos distintos",
      "Análisis extraordinariamente completo",
      "Revelación de patrones y conexiones profundas",
    ],
  },
];

// ─── LEITURAS PERSONALIZADAS — CATEGORY PAGE ─────────────────────────────────

const leiturasPersonalizadasPage: ServiceData = {
  slug: "leituras-personalizadas",
  icon: "🔮",
  title: "Lecturas personalizadas",
  subtitle: "Una lectura totalmente adaptada a tu energía.",
  price: "",
  priceLabel: "Desde R$30",
  description:
    "Aquí la lectura se construye según tu necesidad específica, con varios mazos, enfoques distintos y tiradas exclusivas. No hay formato fijo—cada lectura personalizada es única, diseñada a partir de tu pregunta, tu energía y lo que el universo tiene que decir en ese momento. Nuestra experiencia más exclusiva y profunda.",
  forWhom: "Para quien quiere algo más profundo, exclusivo y totalmente personalizado.",
  receives: [
    "Lectura 100% a medida para tu situación",
    "Enfoque personalizado con oráculos elegidos",
    "Análisis profundo y exclusivo",
  ],
};

// ─── SESSÕES AO VIVO ──────────────────────────────────────────────────────────

const sessoes: ServiceData[] = [
  {
    slug: "sessao-express",
    icon: "⚡",
    title: "Sesión exprés",
    subtitle: "Claridad inmediata en 15 minutos.",
    price: "R$90",
    duration: "15 min",
    features: ["Preguntas ilimitadas", "Consulta enfocada", "Vídeo o voz"],
    popular: false,
    description:
      "Cuando necesitas una respuesta rápida y directa, la Sesión exprés es la opción indicada. En 15 minutos de consulta en vivo vamos al grano—sin rodeos. Ideal si tienes una duda concreta y urgente y quieres claridad inmediata de una tarotista experimentada. Potente, objetiva y transformadora.",
    forWhom: "Para quien tiene poco tiempo pero necesita orientación espiritual inmediata.",
    receives: [
      "Consulta en vivo por vídeo o voz",
      "Lectura enfocada y directa",
      "Preguntas ilimitadas dentro del tiempo",
    ],
  },
  {
    slug: "sessao-completa",
    icon: "🌙",
    title: "Sesión completa",
    subtitle: "El viaje espiritual completo.",
    price: "R$150",
    duration: "40 min",
    features: [
      "Preguntas ilimitadas",
      "Interpretación completa",
      "Canalización guiada",
    ],
    popular: true,
    description:
      "La Sesión completa equilibra profundidad y tiempo. En 40 minutos en vivo tienes espacio para explorar lo que más importa, con canalización guiada e interpretación detallada de las cartas. La opción más popular porque da lo que la mayoría necesita: tiempo suficiente para profundizar sin perderse.",
    forWhom: "Para quien quiere explorar uno o más temas en profundidad con guía.",
    receives: [
      "Consulta en vivo por vídeo o voz",
      "Interpretación completa y profunda",
      "Canalización guiada durante la sesión",
    ],
  },
  {
    slug: "sessao-profunda",
    icon: "🔱",
    title: "Sesión profunda",
    subtitle: "Inmersión espiritual completa para transformación real.",
    price: "R$250",
    duration: "1h30",
    features: [
      "Preguntas ilimitadas",
      "Sesión transformadora",
      "Inmersión espiritual completa",
    ],
    popular: false,
    description:
      "La Sesión profunda es para momentos de cambio que piden acompañamiento espiritual verdaderamente completo. En 1 hora y 30 minutos profundizamos en varias capas de tu vida—amor, carrera, propósito, bloqueos y potenciales. Una experiencia transformadora que va más allá de respuestas simples: un reencuentro con tu propio camino.",
    forWhom: "Para quien está listo para una transformación espiritual profunda y amplia.",
    receives: [
      "Consulta en vivo por vídeo o voz",
      "Inmersión en múltiples aspectos de la vida",
      "Sesión transformadora e integral",
    ],
  },
];

// ─── CATEGORY DEFINITIONS ─────────────────────────────────────────────────────

export const ES_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "previsoes",
    label: "Previsiones",
    emoji: "🎴",
    deliveryNote: "Respuestas por audio • Plazo de entrega: hasta 24 horas",
    services: previsoes,
  },
  {
    id: "consultas-especificas",
    label: "Consultas específicas",
    emoji: "🎯",
    slug: "consultas-especificas",
    deliveryNote: "Respuestas por audio • Plazo de entrega: hasta 24 horas",
    services: consultasEspecificas,
  },
  {
    id: "leituras-personalizadas",
    label: "Lecturas personalizadas",
    emoji: "🔮",
    slug: "leituras-personalizadas",
    deliveryNote: "Respuestas por audio • Plazo de entrega: hasta 24 horas",
    services: leituras,
  },
  {
    id: "sessoes",
    label: "Sesiones en vivo",
    emoji: "🔮",
    deliveryNote: "Preguntas ilimitadas • Consulta en tiempo real",
    services: sessoes,
  },
];

// ─── FLAT LOOKUP MAP ──────────────────────────────────────────────────────────

export const ES_ALL_SERVICES: ServiceData[] = [
  ...previsoes,
  consultasEspecificasPage,
  ...consultasEspecificas,
  analiseDoCalsal,
  leiturasPersonalizadasPage,
  ...leituras,
  ...sessoes,
];
