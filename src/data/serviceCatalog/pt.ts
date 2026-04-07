import type { ServiceCategory, ServiceData } from "./types";

// ─── PREVISÕES ───────────────────────────────────────────────────────────────

const previsoes: ServiceData[] = [
  {
    slug: "previsao-diaria",
    icon: "🌅",
    title: "Previsão Diária",
    subtitle: "Clareza para o seu dia antes mesmo dele começar.",
    price: "R$15",
    description:
      "A Previsão Diária traz orientações energéticas para as próximas 24 horas, revelando tendências, desafios e oportunidades que podem surgir. Ideal para quem deseja tomar decisões com mais consciência e alinhar suas ações com o fluxo do universo. Cada leitura é personalizada para o momento presente, oferecendo um guia espiritual para navegar o dia com mais clareza e intenção.",
    forWhom:
      "Para quem sente que o dia começa sem direção ou quer evitar erros impulsivos.",
    receives: [
      "Leitura energética do dia",
      "Alertas sobre situações importantes",
      "Direcionamento emocional e prático",
    ],
  },
  {
    slug: "previsao-semanal",
    icon: "🌙",
    title: "Previsão Semanal",
    subtitle: "Antecipe movimentos e prepare-se para a semana.",
    price: "R$35",
    description:
      "Uma leitura mais ampla que revela como as energias vão se desenrolar ao longo da semana. Entenda os melhores momentos para agir, recuar ou se posicionar. A Previsão Semanal oferece uma visão panorâmica que permite planejar com antecedência, evitar conflitos desnecessários e aproveitar as janelas de oportunidade que o universo apresenta.",
    forWhom:
      "Para quem quer planejar melhor a semana e evitar surpresas emocionais.",
    receives: [
      "Panorama energético da semana",
      "Dias mais favoráveis e desafiadores",
      "Orientações práticas para cada fase",
    ],
  },
  {
    slug: "previsao-mensal",
    icon: "📅",
    title: "Previsão Mensal",
    subtitle: "Veja o mês antes de vivê-lo.",
    price: "R$47",
    description:
      "Uma análise profunda das energias que vão influenciar seu mês. Ideal para decisões importantes, ciclos de início e encerramento, e planejamento emocional. A Previsão Mensal oferece uma perspectiva completa sobre as forças em jogo nas próximas semanas, permitindo que você entre no mês com consciência, estratégia e abertura para o que está por vir.",
    forWhom: "Para quem quer controle, visão e estratégia emocional.",
    receives: [
      "Leitura completa do mês",
      "Tendências em amor, trabalho e vida pessoal",
      "Conselhos estratégicos para cada área",
    ],
  },
];

// ─── CONSULTAS ESPECÍFICAS ────────────────────────────────────────────────────

const consultasEspecificas: ServiceData[] = [
  {
    slug: "templo-de-afrodite",
    icon: "💕",
    title: "Templo de Afrodite",
    subtitle: "Desperte seu magnetismo e poder de atração.",
    price: "R$55",
    cardDesc: "Análise do casal",
    description:
      "Um atendimento voltado para amor, sedução, autoestima e energia feminina/afetiva. Trabalha bloqueios emocionais que impedem a conexão genuína e ativa seu campo de atração natural. Seja para encontrar um novo amor, fortalecer uma relação existente ou simplesmente reconectar-se com sua própria essência afetiva, o Templo de Afrodite oferece orientação espiritual profunda e transformadora.",
    forWhom:
      "Para quem quer atrair amor, reconectar-se com seu poder pessoal ou fortalecer relações.",
    receives: [
      "Leitura sobre vida amorosa e afetiva",
      "Identificação de bloqueios emocionais",
      "Direcionamento energético para atração",
    ],
    relatedSlugs: ["analise-do-casal"],
  },
  {
    slug: "templo-do-diabo",
    icon: "🔥",
    title: "Templo do Diabo",
    subtitle: "Encare as sombras que estão te travando.",
    price: "R$45",
    description:
      "Uma leitura intensa que revela padrões ocultos, vícios emocionais, dependências e sabotagens internas. Aqui não há suavização — apenas verdade. O Templo do Diabo é para quem está pronto para olhar nos olhos da própria sombra e encontrar ali os caminhos de libertação. Uma leitura corajosa que pode mudar a trajetória de quem realmente deseja transformação.",
    forWhom: "Para quem quer transformação real, mesmo que desconfortável.",
    receives: [
      "Revelação de padrões ocultos e sabotagens",
      "Confronto direto com bloqueios internos",
      "Caminhos concretos de libertação",
    ],
  },
  {
    slug: "dois-caminhos",
    icon: "⚖️",
    title: "Dois Caminhos",
    subtitle: "Decida com consciência.",
    price: "R$35",
    description:
      "Perfeito para momentos de dúvida e indecisão. Essa leitura compara dois caminhos possíveis e revela as consequências energéticas de cada escolha. Não se trata de ditar o que você deve fazer, mas de iluminar o que cada direção carrega — os desafios, as oportunidades e o potencial de cada opção — para que sua decisão venha do coração e da consciência.",
    forWhom: "Para quem está dividido entre duas decisões importantes.",
    receives: [
      "Análise comparativa dos dois caminhos",
      "Consequências energéticas de cada escolha",
      "Recomendação espiritual fundamentada",
    ],
  },
];

// ─── ANÁLISE DO CASAL (standalone — linked from templo-de-afrodite) ───────────

const analiseDoCalsal: ServiceData = {
  slug: "analise-do-casal",
  icon: "🧿",
  title: "Análise do Casal",
  subtitle: "Entenda a dinâmica real entre vocês.",
  price: "R$55",
  description:
    "Uma leitura profunda da conexão entre duas pessoas, revelando sentimentos, intenções, bloqueios e o futuro da relação. A Análise do Casal vai além das aparências e mostra o que realmente está acontecendo no campo energético entre vocês — o que une, o que afasta e o que pode ser trabalhado para fortalecer o vínculo ou encerrar o ciclo com clareza e paz.",
  forWhom:
    "Para quem quer entender profundamente um relacionamento atual ou passado.",
  receives: [
    "Energia individual de cada pessoa na relação",
    "Dinâmica real do relacionamento",
    "Tendências e potencial futuro da união",
  ],
};

// ─── CONSULTAS ESPECÍFICAS — CATEGORY PAGE ────────────────────────────────────

const consultasEspecificasPage: ServiceData = {
  slug: "consultas-especificas",
  icon: "🎯",
  title: "Consultas Específicas",
  subtitle: "Respostas claras para situações específicas.",
  price: "",
  priceLabel: "A partir de R$35",
  description:
    "Aqui você traz uma situação concreta da sua vida e recebe uma leitura focada, direta e sem rodeios. Cada consulta específica é desenhada para uma necessidade pontual — seja em amor, carreira, família ou decisões importantes. Ideal para quem precisa de clareza imediata sobre algo que está pesando na mente ou no coração.",
  forWhom: "Para quem precisa de clareza imediata sobre algo específico.",
  receives: [
    "Análise direcionada ao tema escolhido",
    "Resposta objetiva e sem rodeios",
    "Orientação prática para o próximo passo",
  ],
};

// ─── LEITURAS PERSONALIZADAS ──────────────────────────────────────────────────

const leituras: ServiceData[] = [
  {
    slug: "1-pergunta-5-cartas",
    icon: "🎴",
    title: "1 pergunta - 5 cartas (5 baralhos)",
    subtitle: "Leitura objetiva com múltiplas perspectivas energéticas.",
    price: "R$30",
    description:
      "Uma leitura com uma pergunta central respondida através de 5 cartas extraídas de 5 baralhos diferentes. Cada baralho traz uma voz energética distinta, oferecendo perspectivas variadas sobre a mesma situação. O resultado é uma leitura rica, multifacetada e objetiva, ideal para quem quer entender diferentes ângulos de uma questão com rapidez.",
    forWhom:
      "Para quem tem uma dúvida específica e quer uma resposta clara e abrangente.",
    receives: [
      "Leitura de 5 cartas de 5 baralhos distintos",
      "Múltiplas perspectivas sobre sua pergunta",
      "Resposta clara e direta por áudio",
    ],
  },
  {
    slug: "1-pergunta-mesa-real",
    icon: "👑",
    title: "1 pergunta - Mesa Real",
    subtitle: "Leitura tradicional completa com um único baralho.",
    price: "R$70",
    description:
      "A Mesa Real é um dos spreads mais completos e tradicionais do tarot. Com um único baralho, ela oferece uma leitura profunda e detalhada sobre a sua pergunta, explorando passado, presente, futuro, obstáculos, influências externas e o potencial do desfecho. Uma leitura clássica para quem valoriza profundidade e tradição.",
    forWhom:
      "Para quem quer uma leitura completa e aprofundada de uma única questão.",
    receives: [
      "Spread da Mesa Real com análise completa",
      "Visão de passado, presente e futuro",
      "Identificação de obstáculos e potenciais",
    ],
  },
  {
    slug: "1-pergunta-2-baralhos",
    icon: "🃏",
    title: "1 pergunta - 2 baralhos",
    subtitle: "Duas camadas de interpretação para maior clareza.",
    price: "R$85",
    description:
      "Utilizando dois baralhos diferentes, essa leitura oferece duas camadas energéticas sobre a mesma pergunta. A combinação de dois oráculos distintos cria uma teia de significados mais rica, onde os símbolos se completam e ampliam a compreensão da situação. Ideal para quem quer mais do que uma resposta direta — quer entender a complexidade por trás dela.",
    forWhom:
      "Para quem quer uma leitura com mais profundidade e nuance do que o formato simples.",
    receives: [
      "Leitura com 2 baralhos complementares",
      "Duas perspectivas energéticas integradas",
      "Análise aprofundada da situação",
    ],
  },
  {
    slug: "1-pergunta-3-baralhos",
    icon: "🔮",
    title: "1 pergunta - 3 baralhos",
    subtitle: "Visão ampliada com três energias diferentes.",
    price: "R$100",
    description:
      "Com três baralhos distintos, essa leitura oferece uma visão ainda mais ampla e precisa. As três energias se entrelaçam para revelar camadas que muitas vezes passam despercebidas em leituras convencionais. É o formato ideal para situações complexas que envolvem múltiplos fatores e pessoas, onde a profundidade da análise faz toda a diferença.",
    forWhom:
      "Para quem enfrenta uma situação complexa e precisa de uma leitura detalhada.",
    receives: [
      "Leitura com 3 baralhos distintos",
      "Visão ampliada com três energias",
      "Análise de situações de maior complexidade",
    ],
  },
  {
    slug: "1-pergunta-5-baralhos",
    icon: "✨",
    title: "1 pergunta - até 5 baralhos",
    subtitle: "Leitura profunda com múltiplos oráculos.",
    price: "R$130",
    description:
      "Uma das leituras mais ricas disponíveis, utilizando até 5 baralhos para cobrir a sua pergunta sob múltiplos ângulos energéticos. Cada oráculo adiciona uma voz única à leitura, criando uma análise extraordinariamente completa. Para quem sente que a situação merece ser vista em toda a sua profundidade e complexidade.",
    forWhom:
      "Para quem busca uma leitura realmente aprofundada com múltiplas perspectivas.",
    receives: [
      "Leitura com até 5 baralhos",
      "Múltiplas vozes energéticas integradas",
      "Análise completa e detalhada",
    ],
  },
  {
    slug: "1-pergunta-8-baralhos",
    icon: "🌟",
    title: "1 pergunta - até 8 baralhos",
    subtitle: "Análise extremamente completa e detalhada.",
    price: "R$150",
    description:
      "A leitura mais abrangente do portfólio. Com até 8 baralhos, cada aspecto da sua pergunta é examinado sob uma lente energética diferente. O resultado é uma análise extraordinariamente rica, que revela padrões, conexões e significados que só aparecem quando múltiplos sistemas de oráculo trabalham em conjunto. Para quem quer o máximo de clareza e profundidade possível.",
    forWhom:
      "Para quem quer a leitura mais completa e detalhada disponível.",
    receives: [
      "Leitura com até 8 baralhos distintos",
      "Análise extraordinariamente completa",
      "Revelação de padrões e conexões profundas",
    ],
  },
];

// ─── LEITURAS PERSONALIZADAS — CATEGORY PAGE ─────────────────────────────────

const leiturasPersonalizadasPage: ServiceData = {
  slug: "leituras-personalizadas",
  icon: "🔮",
  title: "Leituras Personalizadas",
  subtitle: "Uma leitura totalmente adaptada à sua energia.",
  price: "",
  priceLabel: "A partir de R$30",
  description:
    "Aqui a leitura é construída de acordo com a sua necessidade específica, podendo envolver múltiplos baralhos, diferentes abordagens e spreads exclusivos. Não existe um formato fixo — cada leitura personalizada é única, desenhada a partir da sua pergunta, da sua energia e do que o universo tem a dizer naquele momento. É a experiência mais exclusiva e profunda que oferecemos.",
  forWhom: "Para quem quer algo mais profundo, exclusivo e totalmente personalizado.",
  receives: [
    "Leitura 100% sob medida para sua situação",
    "Abordagem personalizada com oráculos escolhidos",
    "Análise aprofundada e exclusiva",
  ],
};

// ─── SESSÕES AO VIVO ──────────────────────────────────────────────────────────

const sessoes: ServiceData[] = [
  {
    slug: "sessao-express",
    icon: "⚡",
    title: "Sessão Express",
    subtitle: "Clareza imediata em 15 minutos.",
    price: "R$90",
    duration: "15 min",
    features: ["Perguntas ilimitadas", "Consulta focada", "Vídeo ou voz"],
    popular: false,
    description:
      "Quando você precisa de uma resposta rápida e direta, a Sessão Express é a escolha certa. Em 15 minutos de consulta ao vivo, vamos direto ao ponto — sem rodeios, sem enrolação. Ideal para quem tem uma dúvida específica e urgente, e quer clareza imediata de uma leiturista experiente. Poderosa, objetiva e transformadora.",
    forWhom:
      "Para quem tem pouco tempo disponível mas precisa de orientação espiritual imediata.",
    receives: [
      "Consulta ao vivo por vídeo ou voz",
      "Leitura focada e direta",
      "Perguntas ilimitadas dentro do tempo",
    ],
  },
  {
    slug: "sessao-completa",
    icon: "🌙",
    title: "Sessão Completa",
    subtitle: "A jornada espiritual completa.",
    price: "R$150",
    duration: "40 min",
    features: [
      "Perguntas ilimitadas",
      "Interpretação completa",
      "Canalização guiada",
    ],
    popular: true,
    description:
      "A Sessão Completa é o equilíbrio perfeito entre profundidade e tempo. Em 40 minutos ao vivo, você tem espaço para explorar os temas que mais importam, com canalização guiada e interpretação detalhada das cartas. É a escolha mais popular porque oferece o que a maioria das pessoas precisa: tempo suficiente para ir fundo sem se perder.",
    forWhom:
      "Para quem quer explorar um ou mais temas em profundidade com orientação guiada.",
    receives: [
      "Consulta ao vivo por vídeo ou voz",
      "Interpretação completa e aprofundada",
      "Canalização guiada durante a sessão",
    ],
  },
  {
    slug: "sessao-profunda",
    icon: "🔱",
    title: "Sessão Profunda",
    subtitle: "Mergulho espiritual completo para transformação real.",
    price: "R$250",
    duration: "1h30",
    features: [
      "Perguntas ilimitadas",
      "Sessão transformadora",
      "Mergulho espiritual completo",
    ],
    popular: false,
    description:
      "A Sessão Profunda é para quem está em um ponto de virada e precisa de um acompanhamento espiritual verdadeiramente completo. Em 1 hora e 30 minutos, mergulhamos em múltiplas camadas da sua vida — amor, carreira, propósito, bloqueios e potenciais. Uma experiência transformadora que vai além de simples respostas: é um reencontro com o seu próprio caminho.",
    forWhom:
      "Para quem está pronto para uma transformação espiritual profunda e abrangente.",
    receives: [
      "Consulta ao vivo por vídeo ou voz",
      "Mergulho em múltiplos aspectos da vida",
      "Sessão transformadora e abrangente",
    ],
  },
];

// ─── CATEGORY DEFINITIONS ─────────────────────────────────────────────────────

export const PT_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "previsoes",
    label: "Previsões",
    emoji: "🎴",
    deliveryNote: "Respostas por áudio • ✅ Prazo de entrega: até 24 horas",
    services: previsoes,
  },
  {
    id: "consultas-especificas",
    label: "Consultas Específicas",
    emoji: "🎯",
    slug: "consultas-especificas",
    deliveryNote: "Respostas por áudio • ✅ Prazo de entrega: até 24 horas",
    services: consultasEspecificas,
  },
  {
    id: "leituras-personalizadas",
    label: "Leituras Personalizadas",
    emoji: "🔮",
    slug: "leituras-personalizadas",
    deliveryNote: "Respostas por áudio • ✅ Prazo de entrega: até 24 horas",
    services: leituras,
  },
  {
    id: "sessoes",
    label: "Sessões Ao Vivo",
    emoji: "🔮",
    deliveryNote: "Perguntas ilimitadas • Consulta em tempo real",
    services: sessoes,
  },
];

// ─── FLAT LOOKUP MAP ──────────────────────────────────────────────────────────

export const PT_ALL_SERVICES: ServiceData[] = [
  ...previsoes,
  consultasEspecificasPage,
  ...consultasEspecificas,
  analiseDoCalsal,
  leiturasPersonalizadasPage,
  ...leituras,
  ...sessoes,
];
