import { motion } from "framer-motion";

const results = [
  "Mais leveza emocional",
  "Clareza nas decisões",
  "Melhoras em relacionamentos",
  "Sensação de proteção",
  "Oportunidades surgindo",
];

const ResultsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-3xl mb-6 block">🚀</span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4">
            Resultados <span className="text-gradient-gold">esperados</span>
          </h2>
          <p className="text-muted-foreground font-light mb-12">O que você pode começar a perceber:</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-3 rounded-full border border-primary/30 bg-primary/5 text-foreground font-light"
            >
              ✦ {r}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
