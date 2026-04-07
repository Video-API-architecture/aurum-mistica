import type { ServiceCategory, ServiceData } from "./types";

// ─── PREVISÕES ───────────────────────────────────────────────────────────────

const previsoes: ServiceData[] = [
  {
    slug: "previsao-diaria",
    icon: "🌅",
    title: "Daily Forecast",
    subtitle: "Clarity for your day before it even begins.",
    price: "R$15",
    description:
      "The Daily Forecast brings energetic guidance for the next 24 hours, revealing trends, challenges, and opportunities that may arise. Ideal if you want to make decisions with awareness and align your actions with the flow of the universe. Each reading is tailored to the present moment, offering spiritual guidance to move through the day with clarity and intention.",
    forWhom: "For anyone who feels the day starts without direction or wants to avoid impulsive mistakes.",
    receives: [
      "Energetic reading of the day",
      "Alerts about important situations",
      "Emotional and practical guidance",
    ],
  },
  {
    slug: "previsao-semanal",
    icon: "🌙",
    title: "Weekly Forecast",
    subtitle: "Anticipate movements and prepare for the week.",
    price: "R$35",
    description:
      "A broader reading that shows how energies are likely to unfold over the week. Understand the best moments to act, step back, or take a stand. The Weekly Forecast offers a panoramic view so you can plan ahead, avoid unnecessary conflict, and seize the windows of opportunity the universe presents.",
    forWhom: "For anyone who wants to plan the week better and avoid emotional surprises.",
    receives: [
      "Energetic overview of the week",
      "More favorable and more challenging days",
      "Practical guidance for each phase",
    ],
  },
  {
    slug: "previsao-mensal",
    icon: "📅",
    title: "Monthly Forecast",
    subtitle: "See the month before you live it.",
    price: "R$47",
    description:
      "A deep analysis of the energies that will influence your month. Ideal for important decisions, cycles of beginnings and endings, and emotional planning. The Monthly Forecast offers a complete perspective on the forces at play in the coming weeks so you enter the month with awareness, strategy, and openness to what is ahead.",
    forWhom: "For anyone who wants control, vision, and emotional strategy.",
    receives: [
      "Full reading of the month",
      "Trends in love, work, and personal life",
      "Strategic advice for each area",
    ],
  },
];

// ─── CONSULTAS ESPECÍFICAS ────────────────────────────────────────────────────

const consultasEspecificas: ServiceData[] = [
  {
    slug: "templo-de-afrodite",
    icon: "💕",
    title: "Temple of Aphrodite",
    subtitle: "Awaken your magnetism and power of attraction.",
    price: "R$55",
    cardDesc: "Couple reading",
    description:
      "A session focused on love, seduction, self-esteem, and feminine/affectionate energy. It works through emotional blocks that prevent genuine connection and activates your natural field of attraction. Whether to find new love, strengthen an existing bond, or reconnect with your own affectionate essence, the Temple of Aphrodite offers deep, transformative spiritual guidance.",
    forWhom:
      "For anyone who wants to attract love, reconnect with personal power, or strengthen relationships.",
    receives: [
      "Reading on love and affectionate life",
      "Identification of emotional blocks",
      "Energetic guidance for attraction",
    ],
    relatedSlugs: ["analise-do-casal"],
  },
  {
    slug: "templo-do-diabo",
    icon: "🔥",
    title: "Temple of the Devil",
    subtitle: "Face the shadows that hold you back.",
    price: "R$45",
    description:
      "An intense reading that reveals hidden patterns, emotional habits, dependencies, and inner self-sabotage. There is no softening here—only truth. The Temple of the Devil is for those ready to look their own shadow in the eye and find paths of liberation there. A courageous reading that can shift the trajectory of anyone who truly wants transformation.",
    forWhom: "For anyone who wants real transformation, even when it is uncomfortable.",
    receives: [
      "Revelation of hidden patterns and sabotage",
      "Direct confrontation with inner blocks",
      "Concrete paths to liberation",
    ],
  },
  {
    slug: "dois-caminhos",
    icon: "⚖️",
    title: "Two Paths",
    subtitle: "Decide with awareness.",
    price: "R$35",
    description:
      "Perfect for doubt and indecision. This reading compares two possible paths and reveals the energetic consequences of each choice. It is not about telling you what to do, but illuminating what each direction carries—challenges, opportunities, and the potential of each option—so your decision comes from heart and awareness.",
    forWhom: "For anyone torn between two important decisions.",
    receives: [
      "Comparative analysis of both paths",
      "Energetic consequences of each choice",
      "Grounded spiritual recommendation",
    ],
  },
];

// ─── ANÁLISE DO CASAL (standalone — linked from templo-de-afrodite) ───────────

const analiseDoCalsal: ServiceData = {
  slug: "analise-do-casal",
  icon: "🧿",
  title: "Couple Analysis",
  subtitle: "Understand the real dynamic between you.",
  price: "R$55",
  description:
    "A deep reading of the connection between two people, revealing feelings, intentions, blocks, and the future of the relationship. Couple Analysis goes beyond appearances and shows what is really happening in the energetic field between you—what binds, what distances, and what can be worked on to strengthen the bond or close the cycle with clarity and peace.",
  forWhom:
    "For anyone who wants to deeply understand a current or past relationship.",
  receives: [
    "Individual energy of each person in the relationship",
    "Real dynamic of the relationship",
    "Trends and future potential of the union",
  ],
};

// ─── CONSULTAS ESPECÍFICAS — CATEGORY PAGE ────────────────────────────────────

const consultasEspecificasPage: ServiceData = {
  slug: "consultas-especificas",
  icon: "🎯",
  title: "Specific Consultations",
  subtitle: "Clear answers for specific situations.",
  price: "",
  priceLabel: "From R$35",
  description:
    "You bring a concrete situation from your life and receive a focused, direct reading without detours. Each specific consultation is designed for a precise need—love, career, family, or important decisions. Ideal when you need immediate clarity about something weighing on your mind or heart.",
  forWhom: "For anyone who needs immediate clarity about something specific.",
  receives: [
    "Analysis focused on the chosen topic",
    "Objective answer without detours",
    "Practical guidance for the next step",
  ],
};

// ─── LEITURAS PERSONALIZADAS ──────────────────────────────────────────────────

const leituras: ServiceData[] = [
  {
    slug: "1-pergunta-5-cartas",
    icon: "🎴",
    title: "1 question - 5 cards (5 decks)",
    subtitle: "Focused reading with multiple energetic perspectives.",
    price: "R$30",
    description:
      "One central question answered through 5 cards drawn from 5 different decks. Each deck brings a distinct energetic voice, offering varied perspectives on the same situation. The result is a rich, multifaceted, objective reading—ideal if you want to understand different angles of a matter quickly.",
    forWhom: "For anyone with a specific doubt who wants a clear, comprehensive answer.",
    receives: [
      "Reading with 5 cards from 5 distinct decks",
      "Multiple perspectives on your question",
      "Clear, direct answer by audio",
    ],
  },
  {
    slug: "1-pergunta-mesa-real",
    icon: "👑",
    title: "1 question - Royal Table",
    subtitle: "Full traditional reading with a single deck.",
    price: "R$70",
    description:
      "The Royal Table is one of the most complete and traditional tarot spreads. With a single deck, it offers a deep, detailed reading on your question, exploring past, present, future, obstacles, external influences, and the potential outcome. A classic reading for those who value depth and tradition.",
    forWhom: "For anyone who wants a complete, in-depth reading on a single matter.",
    receives: [
      "Royal Table spread with full analysis",
      "View of past, present, and future",
      "Identification of obstacles and potentials",
    ],
  },
  {
    slug: "1-pergunta-2-baralhos",
    icon: "🃏",
    title: "1 question - 2 decks",
    subtitle: "Two layers of interpretation for greater clarity.",
    price: "R$85",
    description:
      "Using two different decks, this reading offers two energetic layers on the same question. The combination of two distinct oracles creates a richer web of meaning where symbols complement each other and broaden understanding. Ideal when you want more than a straight answer—you want the complexity behind it.",
    forWhom: "For anyone who wants more depth and nuance than a simple format.",
    receives: [
      "Reading with 2 complementary decks",
      "Two integrated energetic perspectives",
      "In-depth analysis of the situation",
    ],
  },
  {
    slug: "1-pergunta-3-baralhos",
    icon: "🔮",
    title: "1 question - 3 decks",
    subtitle: "Expanded view with three different energies.",
    price: "R$100",
    description:
      "With three distinct decks, this reading offers an even broader, more precise view. The three energies intertwine to reveal layers that often go unnoticed in conventional readings. Ideal for complex situations involving multiple factors and people, where depth of analysis makes all the difference.",
    forWhom: "For anyone facing a complex situation who needs a detailed reading.",
    receives: [
      "Reading with 3 distinct decks",
      "Expanded view with three energies",
      "Analysis of higher-complexity situations",
    ],
  },
  {
    slug: "1-pergunta-5-baralhos",
    icon: "✨",
    title: "1 question - up to 5 decks",
    subtitle: "Deep reading with multiple oracles.",
    price: "R$130",
    description:
      "One of the richest readings available, using up to 5 decks to cover your question from multiple energetic angles. Each oracle adds a unique voice, creating an extraordinarily complete analysis. For when you feel the situation deserves to be seen in full depth and complexity.",
    forWhom: "For anyone seeking a truly in-depth reading with multiple perspectives.",
    receives: [
      "Reading with up to 5 decks",
      "Multiple integrated energetic voices",
      "Complete, detailed analysis",
    ],
  },
  {
    slug: "1-pergunta-8-baralhos",
    icon: "🌟",
    title: "1 question - up to 8 decks",
    subtitle: "Extremely complete and detailed analysis.",
    price: "R$150",
    description:
      "The most comprehensive reading in the portfolio. With up to 8 decks, every aspect of your question is examined through a different energetic lens. The result is an extraordinarily rich analysis revealing patterns, connections, and meanings that only appear when multiple oracle systems work together. For maximum clarity and depth.",
    forWhom: "For anyone who wants the most complete and detailed reading available.",
    receives: [
      "Reading with up to 8 distinct decks",
      "Extraordinarily complete analysis",
      "Revelation of deep patterns and connections",
    ],
  },
];

// ─── LEITURAS PERSONALIZADAS — CATEGORY PAGE ─────────────────────────────────

const leiturasPersonalizadasPage: ServiceData = {
  slug: "leituras-personalizadas",
  icon: "🔮",
  title: "Custom Readings",
  subtitle: "A reading fully adapted to your energy.",
  price: "",
  priceLabel: "From R$30",
  description:
    "Here the reading is built according to your specific need, possibly involving multiple decks, different approaches, and exclusive spreads. There is no fixed format—each custom reading is unique, shaped from your question, your energy, and what the universe has to say in that moment. Our most exclusive and profound experience.",
  forWhom: "For anyone who wants something deeper, exclusive, and fully personalized.",
  receives: [
    "100% tailor-made reading for your situation",
    "Personalized approach with chosen oracles",
    "In-depth, exclusive analysis",
  ],
};

// ─── SESSÕES AO VIVO ──────────────────────────────────────────────────────────

const sessoes: ServiceData[] = [
  {
    slug: "sessao-express",
    icon: "⚡",
    title: "Express Session",
    subtitle: "Immediate clarity in 15 minutes.",
    price: "R$90",
    duration: "15 min",
    features: ["Unlimited questions", "Focused session", "Video or voice"],
    popular: false,
    description:
      "When you need a quick, direct answer, the Express Session is the right choice. In 15 minutes of live consultation we go straight to the point—no detours, no filler. Ideal if you have a specific, urgent question and want immediate clarity from an experienced reader. Powerful, objective, and transformative.",
    forWhom: "For anyone with little time who still needs immediate spiritual guidance.",
    receives: [
      "Live consultation by video or voice",
      "Focused, direct reading",
      "Unlimited questions within the time",
    ],
  },
  {
    slug: "sessao-completa",
    icon: "🌙",
    title: "Full Session",
    subtitle: "The complete spiritual journey.",
    price: "R$150",
    duration: "40 min",
    features: [
      "Unlimited questions",
      "Full interpretation",
      "Guided channeling",
    ],
    popular: true,
    description:
      "The Full Session is the perfect balance of depth and time. In 40 live minutes you have space to explore what matters most, with guided channeling and detailed card interpretation. The most popular choice because it gives most people what they need: enough time to go deep without getting lost.",
    forWhom: "For anyone who wants to explore one or more themes in depth with guided support.",
    receives: [
      "Live consultation by video or voice",
      "Complete, in-depth interpretation",
      "Guided channeling during the session",
    ],
  },
  {
    slug: "sessao-profunda",
    icon: "🔱",
    title: "Deep Session",
    subtitle: "Full spiritual dive for real transformation.",
    price: "R$250",
    duration: "1h30",
    features: [
      "Unlimited questions",
      "Transformative session",
      "Full spiritual immersion",
    ],
    popular: false,
    description:
      "The Deep Session is for turning points that call for truly complete spiritual support. In 90 minutes we dive into multiple layers of your life—love, career, purpose, blocks, and potential. A transformative experience beyond simple answers: a reunion with your own path.",
    forWhom: "For anyone ready for deep, wide-ranging spiritual transformation.",
    receives: [
      "Live consultation by video or voice",
      "Dive into multiple life areas",
      "Transformative, comprehensive session",
    ],
  },
];

// ─── CATEGORY DEFINITIONS ─────────────────────────────────────────────────────

export const EN_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "previsoes",
    label: "Forecasts",
    emoji: "🎴",
    deliveryNote: "Answers by audio • Delivery within 24 hours",
    services: previsoes,
  },
  {
    id: "consultas-especificas",
    label: "Specific Consultations",
    emoji: "🎯",
    slug: "consultas-especificas",
    deliveryNote: "Answers by audio • Delivery within 24 hours",
    services: consultasEspecificas,
  },
  {
    id: "leituras-personalizadas",
    label: "Custom Readings",
    emoji: "🔮",
    slug: "leituras-personalizadas",
    deliveryNote: "Answers by audio • Delivery within 24 hours",
    services: leituras,
  },
  {
    id: "sessoes",
    label: "Live Sessions",
    emoji: "🔮",
    deliveryNote: "Unlimited questions • Real-time consultation",
    services: sessoes,
  },
];

// ─── FLAT LOOKUP MAP ──────────────────────────────────────────────────────────

export const EN_ALL_SERVICES: ServiceData[] = [
  ...previsoes,
  consultasEspecificasPage,
  ...consultasEspecificas,
  analiseDoCalsal,
  leiturasPersonalizadasPage,
  ...leituras,
  ...sessoes,
];
