import { motion } from "framer-motion";

const steps = [
  { icon: "💫", title: "Atendimento personalizado", desc: "Conversa individual para entender sua situação" },
  { icon: "🔍", title: "Análise energética", desc: "Leitura profunda do seu campo espiritual" },
  { icon: "🔮", title: "Indicação do ritual ideal", desc: "O melhor caminho para o seu momento" },
  { icon: "⚡", title: "Execução + orientação", desc: "Ritual realizado com acompanhamento completo" },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold">
            Como <span className="text-gradient-gold">funciona</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4 text-primary font-semibold text-sm">
                {i + 1}
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
