import { motion } from "framer-motion";

const trustBadges = [
  { icon: "⏰", text: "Respostas em 24h" },
  { icon: "🔒", text: "100% Confidencial" },
  { icon: "📜", text: "Métodos Tradicionais" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="relative container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Sobre <span className="text-gradient-gold">Aurum Mística</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Aurum Mística é um espaço de consultas espirituais autênticas, onde cada leitura é feita com
            dedicação, respeito e profundidade. Utilizamos métodos tradicionais de tarot e canalização para
            oferecer orientação clara e transformadora para o seu caminho.
          </p>
          <div className="card-mystical p-6 max-w-lg mx-auto">
            <p className="text-foreground font-display text-xl italic">
              "O universo fala através das cartas. Cabe a nós ouvir com o coração aberto."
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {trustBadges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-mystical p-6 text-center"
            >
              <span className="text-3xl block mb-3">{badge.icon}</span>
              <p className="font-display font-semibold text-foreground">{badge.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;