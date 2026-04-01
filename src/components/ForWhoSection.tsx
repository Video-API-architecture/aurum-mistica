import { motion } from "framer-motion";

const forWho = [
  "Pessoas abertas ao espiritual",
  "Quem sente bloqueios na vida",
  "Quem busca mudança real",
];

const notForWho = [
  "Quem não acredita em energia",
  "Quem busca soluções imediatas sem participação",
  "Quem não está disposto a se abrir para o processo",
];

const ForWhoSection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold">
            Para quem <span className="text-gradient-gold">é</span> e para quem <span className="text-gradient-gold">não é</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5"
          >
            <h3 className="font-display text-2xl font-semibold mb-6 text-emerald-400">✅ Para quem é</h3>
            <ul className="space-y-4">
              {forWho.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/85 font-light">
                  <span className="text-emerald-400">→</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5"
          >
            <h3 className="font-display text-2xl font-semibold mb-6 text-red-400">❌ Para quem não é</h3>
            <ul className="space-y-4">
              {notForWho.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/85 font-light">
                  <span className="text-red-400">→</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
