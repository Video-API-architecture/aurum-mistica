import { motion } from "framer-motion";

const painPoints = [
  "Você sente que sua vida está travada?",
  "Parece que nada flui, por mais que você tente?",
  "Relacionamentos difíceis ou desgastantes?",
  "Sensação constante de cansaço ou energia pesada?",
  "Falta de clareza sobre o que fazer ou para onde ir?",
];

const PainSection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4">
            Responda com <span className="text-gradient-gold">sinceridade…</span>
          </h2>
        </motion.div>

        <div className="space-y-4 mb-12">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50"
            >
              <span className="text-primary text-xl mt-0.5">✦</span>
              <p className="text-lg text-foreground/90 font-light">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center p-6 rounded-xl border border-primary/30 bg-primary/5"
        >
          <p className="text-lg md:text-xl text-foreground font-display italic">
            Se você respondeu <span className="text-primary font-semibold">SIM</span> para qualquer uma dessas perguntas,
            existe algo além do físico influenciando sua vida.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSection;
