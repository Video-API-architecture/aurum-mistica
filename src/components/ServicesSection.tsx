import { motion } from "framer-motion";

const previsoes = [
  { icon: "📅", title: "Previsão Diária", price: "R$15" },
  { icon: "📆", title: "Previsão Semanal", price: "R$35" },
  { icon: "🌙", title: "Previsão Mensal", price: "R$47" },
];

const consultasEspecificas = [
  { icon: "💕", title: "Templo de Afrodite", desc: "Análise do casal", price: "R$55" },
  { icon: "🔥", title: "Templo do Diabo", desc: "", price: "R$45" },
  { icon: "🛤️", title: "Dois Caminhos", desc: "", price: "R$35" },
];

const leituras = [
  { icon: "🎴", title: "1 pergunta – 5 cartas (5 baralhos)", price: "R$30" },
  { icon: "👑", title: "1 pergunta – Mesa Real (1 baralho)", price: "R$70" },
  { icon: "🃏", title: "1 pergunta – 2 baralhos", price: "R$85" },
  { icon: "🔮", title: "1 pergunta – 3 baralhos", price: "R$100" },
  { icon: "✨", title: "1 pergunta – até 5 baralhos", price: "R$130" },
  { icon: "🌟", title: "1 pergunta – até 8 baralhos", price: "R$150" },
];

const sessoes = [
  {
    icon: "⚡",
    title: "Express",
    duration: "15 min",
    price: "R$90",
    features: ["Perguntas ilimitadas", "Consulta focada", "Vídeo ou voz"],
    popular: false,
  },
  {
    icon: "🌙",
    title: "Completa",
    duration: "40 min",
    price: "R$150",
    features: ["Perguntas ilimitadas", "Interpretação completa", "Canalização guiada"],
    popular: true,
  },
  {
    icon: "🔱",
    title: "Profunda",
    duration: "1h30",
    price: "R$250",
    features: ["Perguntas ilimitadas", "Sessão transformadora", "Mergulho espiritual completo"],
    popular: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-gradient-cosmic">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Escolha a consulta ideal para o seu momento
          </p>
        </motion.div>

        {/* Perguntas Avulsas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-center mb-2">
            🎴 Perguntas Avulsas
          </h3>
          <p className="text-center text-muted-foreground font-light mb-8 text-sm">
            Respostas por áudio • ✅ Prazo de entrega: até 24 horas
          </p>

          {/* Previsões */}
          <h4 className="font-display text-xl font-semibold text-primary mb-4 text-center">Previsões</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {previsoes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-mystical p-6 text-center hover:border-primary/40 transition-colors group"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h5 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h5>
                <p className="text-primary font-bold text-xl">{item.price}</p>
              </motion.div>
            ))}
          </div>

          {/* Consultas Específicas */}
          <h4 className="font-display text-xl font-semibold text-primary mb-4 text-center">Consultas Específicas</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {consultasEspecificas.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-mystical p-6 text-center hover:border-primary/40 transition-colors group"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h5 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h5>
                {item.desc && <p className="text-muted-foreground text-sm mb-2">{item.desc}</p>}
                <p className="text-primary font-bold text-xl">{item.price}</p>
              </motion.div>
            ))}
          </div>

          {/* Leituras Personalizadas */}
          <h4 className="font-display text-xl font-semibold text-primary mb-4 text-center">Leituras Personalizadas</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leituras.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-mystical p-6 text-center hover:border-primary/40 transition-colors group"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h5 className="font-display text-base font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h5>
                <p className="text-primary font-bold text-xl">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sessões Ao Vivo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-center mb-2">
            🔮 Sessões Ao Vivo
          </h3>
          <p className="text-center text-muted-foreground font-light mb-8 text-sm">
            Perguntas ilimitadas • Consulta em tempo real
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sessoes.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative card-mystical p-8 text-center hover:border-primary/40 transition-all duration-300 ${
                  s.popular ? "border-primary/50 scale-[1.02] glow-gold" : ""
                }`}
              >
                {s.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-4 py-1 rounded-full tracking-wider">
                    MAIS POPULAR
                  </div>
                )}
                <span className="text-4xl block mb-4">{s.icon}</span>
                <h4 className="font-display text-2xl font-bold mb-1">{s.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{s.duration}</p>
                <p className="text-primary font-bold text-3xl mb-6">{s.price}</p>
                <ul className="space-y-3 text-sm text-foreground/80 mb-6">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 justify-center">
                      <span className="text-primary">✦</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://api.whatsapp.com/send/?phone=5521967622489&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-gold text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 text-sm tracking-wide"
                >
                  AGENDAR
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;