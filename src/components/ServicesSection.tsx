import { motion } from "framer-motion";
import WhatsAppMotionCta from "@/components/WhatsAppMotionCta";

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
  { icon: "🎴", title: "1 pergunta - 5 cartas (5 baralhos)", price: "R$30" },
  { icon: "👑", title: "1 pergunta - Mesa Real (1 baralho)", price: "R$70" },
  { icon: "🃏", title: "1 pergunta - 2 baralhos", price: "R$85" },
  { icon: "🔮", title: "1 pergunta - 3 baralhos", price: "R$100" },
  { icon: "✨", title: "1 pergunta - até 5 baralhos", price: "R$130" },
  { icon: "🌟", title: "1 pergunta - até 8 baralhos", price: "R$150" },
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

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-gradient-cosmic">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionHeaderVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Nossos <span className="text-shimmer-gold">Serviços</span>
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Escolha a consulta ideal para o seu momento
          </p>
        </motion.div>

        {/* Perguntas Avulsas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionHeaderVariants}
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
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card-mystical p-6 text-center glow-border-hover group cursor-default"
              >
                <motion.span
                  className="text-3xl block mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.span>
                <h5 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h5>
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
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card-mystical p-6 text-center glow-border-hover group cursor-default"
              >
                <motion.span
                  className="text-3xl block mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.span>
                <h5 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{item.title}</h5>
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
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card-mystical p-6 text-center glow-border-hover group cursor-default"
              >
                <motion.span
                  className="text-3xl block mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.span>
                <h5 className="font-display text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h5>
                <p className="text-primary font-bold text-xl">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sessões Ao Vivo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionHeaderVariants}
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
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                className={`relative card-mystical p-8 text-center transition-all duration-300 glow-border-hover ${
                  s.popular ? "border-primary/50 scale-[1.02] glow-gold" : ""
                }`}
              >
                {s.popular && (
                  <motion.div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-4 py-1 rounded-full tracking-wider shimmer"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    MAIS POPULAR
                  </motion.div>
                )}
                <motion.span
                  className="text-4xl block mb-4"
                  animate={s.popular ? { scale: [1, 1.1, 1] } : {}}
                  transition={s.popular ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
                >
                  {s.icon}
                </motion.span>
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
                <WhatsAppMotionCta
                  toWhatsAppPage
                  className="shimmer inline-block bg-gradient-gold text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 text-sm tracking-wide"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  AGENDAR
                </WhatsAppMotionCta>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
