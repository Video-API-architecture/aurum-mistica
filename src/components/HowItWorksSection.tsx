import { motion } from "framer-motion";

const steps = [
  { icon: "📱", title: "Escolha seu Serviço", desc: "Selecione a consulta ideal para você" },
  { icon: "💬", title: "Entre em Contato", desc: "Envie sua pergunta via WhatsApp" },
  { icon: "🔮", title: "Receba sua Leitura", desc: "Áudio, vídeo ou chamada ao vivo" },
  { icon: "✨", title: "Transforme seu Caminho", desc: "Orientação espiritual personalizada" },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Como <span className="text-gradient-gold">Funciona</span>
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