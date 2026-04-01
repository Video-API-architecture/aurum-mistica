import { motion } from "framer-motion";

const rituals = [
  {
    icon: "🍯",
    title: "Adoçamento",
    desc: "Suaviza relações, dissolve mágoas e reaproxima pessoas. Ideal para quem deseja reconquistar o amor, melhorar laços familiares ou tornar convivências mais harmoniosas.",
    color: "from-amber-500/20 to-amber-700/5",
  },
  {
    icon: "🛡️",
    title: "Proteção",
    desc: "Cria um escudo energético ao seu redor. Bloqueia inveja, olho gordo e energias negativas que drenam sua força vital e impedem seu progresso.",
    color: "from-blue-500/20 to-blue-700/5",
  },
  {
    icon: "🚪",
    title: "Abertura de Caminhos",
    desc: "Remove bloqueios espirituais e desobstrui as áreas da sua vida que parecem estagnadas. Trabalho, finanças, oportunidades — tudo começa a fluir.",
    color: "from-emerald-500/20 to-emerald-700/5",
  },
  {
    icon: "🔥",
    title: "Empoderamento e Magnetismo",
    desc: "Ativa seu poder pessoal e magnetismo natural. Aumenta sua autoconfiança, presença e capacidade de atrair aquilo que deseja para sua vida.",
    color: "from-red-500/20 to-red-700/5",
  },
];

const RitualsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4">
            Nossos <span className="text-gradient-gold">Rituais</span>
          </h2>
          <p className="text-muted-foreground font-light">Cada ritual é escolhido de forma personalizada para sua necessidade</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {rituals.map((ritual, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl border border-border/50 bg-gradient-to-br ${ritual.color} backdrop-blur-sm hover:border-primary/30 transition-colors duration-500 group`}
            >
              <span className="text-4xl block mb-4">{ritual.icon}</span>
              <h3 className="font-display text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {ritual.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">{ritual.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualsSection;
