import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ana M.",
    text: "Fiquei impressionada com a precisão da leitura. Cada carta fez sentido na minha vida atual. Me ajudou a tomar uma decisão que eu vinha adiando há meses.",
    stars: 5,
  },
  {
    name: "João S.",
    text: "A sessão ao vivo foi transformadora. As cartas trouxeram clareza sobre meu relacionamento e o que eu precisava mudar. Recomendo muito!",
    stars: 5,
  },
  {
    name: "Carla R.",
    text: "Já fiz várias consultas e sempre me surpreendo. A Aurum Mística tem um dom especial para canalizar as mensagens certas no momento certo.",
    stars: 5,
  },
  {
    name: "Pedro L.",
    text: "Estava passando por um momento difícil na carreira. A leitura me mostrou caminhos que eu não enxergava. Em poucas semanas, as coisas começaram a mudar.",
    stars: 5,
  },
];

const SocialProofSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            O Que Dizem <span className="text-gradient-gold">Nossos Clientes</span>
          </h2>
          <p className="text-muted-foreground font-light">Depoimentos reais de quem já transformou seu caminho</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-mystical p-8 relative hover:glow-gold transition-shadow duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-primary text-lg">★</span>
                ))}
              </div>
              <span className="text-primary/20 text-6xl font-display absolute top-4 right-6">"</span>
              <p className="text-foreground/85 font-light leading-relaxed mb-6 relative z-10">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold">
                  {t.name[0]}
                </div>
                <span className="text-sm text-muted-foreground font-medium">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;