import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SERVICES_BY_SLUG, type ServiceData } from "@/data/services";
import StickyHeader from "@/components/StickyHeader";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhatsAppMotionCta from "@/components/WhatsAppMotionCta";
import StarField from "@/components/StarField";

// ─── Animation variants (mirrors HeroSection pattern) ────────────────────────

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const ServiceHeroSection = ({ service }: { service: ServiceData }) => (
  <section className="relative overflow-hidden bg-gradient-cosmic pt-32 pb-20">
    <StarField count={30} />
    {/* Ambient glow blob */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />

    <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-4"
      >
        {/* Back link */}
        <motion.div variants={childVariant}>
          <Link
            to="/#servicos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            Voltar aos Serviços
          </Link>
        </motion.div>

        {/* Icon */}
        <motion.div
          variants={childVariant}
          className="text-6xl md:text-7xl"
        >
          <motion.span
            animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            {service.icon}
          </motion.span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={childVariant}
          className="text-3xl md:text-5xl font-display font-bold text-shimmer-gold leading-tight"
        >
          {service.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={childVariant}
          className="text-lg md:text-xl text-muted-foreground font-light max-w-xl"
        >
          {service.subtitle}
        </motion.p>

        {/* Price badge */}
        {(service.price || service.priceLabel) && (
          <motion.div variants={childVariant} className="mt-2">
            <div className="card-mystical inline-block px-8 py-3 text-center">
              {service.priceLabel && (
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-widest">
                  {service.priceLabel}
                </p>
              )}
              {service.price && (
                <p className="text-primary font-bold text-3xl font-display">
                  {service.price}
                </p>
              )}
              {service.duration && (
                <p className="text-muted-foreground text-sm mt-1">
                  ⏱ {service.duration}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  </section>
);

// ─── Details ──────────────────────────────────────────────────────────────────

const ServiceDetailsSection = ({ service }: { service: ServiceData }) => (
  <section className="py-20 bg-gradient-dark">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left — description + for whom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
          className="flex flex-col gap-8"
        >
          <div>
            <h2 className="text-2xl font-display font-bold text-shimmer-gold mb-4">
              Sobre este Serviço
            </h2>
            <p className="text-foreground/80 font-light leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="card-mystical p-6 glow-border-hover">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              ✦ Para quem é
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              {service.forWhom}
            </p>
          </div>
        </motion.div>

        {/* Right — what you receive */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariant}
          transition={{ delay: 0.15 }}
        >
          <div className="card-mystical p-8 glow-border-hover h-full">
            <h3 className="text-xl font-display font-bold text-shimmer-gold mb-6">
              O que você recebe
            </h3>
            <ul className="space-y-4">
              {service.receives.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-primary mt-0.5 shrink-0">✦</span>
                  <span className="text-foreground/80 font-light">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Duration divider for sessões */}
            {service.duration && (
              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="text-primary">⏱</span>
                  Duração: <span className="font-semibold text-foreground">{service.duration}</span>
                </p>
              </div>
            )}

            {/* Features for sessões */}
            {service.features && service.features.length > 0 && !service.duration && (
              <div className="mt-6 pt-6 border-t border-border/30 space-y-2">
                {service.features.map((f, i) => (
                  <p key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="text-primary">✦</span> {f}
                  </p>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── CTA ──────────────────────────────────────────────────────────────────────

const ServiceCTASection = ({ service }: { service: ServiceData }) => (
  <section className="py-20 relative overflow-hidden bg-gradient-cosmic">
    <StarField count={15} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl pointer-events-none" />

    <div className="relative z-10 container mx-auto px-6 max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="text-5xl block mb-6"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {service.icon}
        </motion.span>

        <h2 className="text-3xl md:text-4xl font-display font-bold text-shimmer-gold mb-4">
          Pronto para começar?
        </h2>

        {service.price && (
          <p className="text-lg text-muted-foreground font-light mb-8">
            {service.title} disponível por{" "}
            <span className="text-primary font-semibold">{service.price}</span>
          </p>
        )}
        {!service.price && service.priceLabel && (
          <p className="text-lg text-muted-foreground font-light mb-8">
            {service.priceLabel}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppMotionCta
            toWhatsAppPage
            className="shimmer inline-block bg-gradient-gold text-primary-foreground font-semibold text-lg px-10 py-4 rounded-lg shadow-gold hover:scale-105 transition-transform duration-300 animate-pulse-gold tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            SOLICITAR AGORA
          </WhatsAppMotionCta>
          <Link
            to="/#servicos"
            className="inline-block border-2 border-primary/50 text-primary font-semibold text-lg px-8 py-4 rounded-lg hover:bg-primary/10 hover:border-primary/70 transition-all duration-300 tracking-wide"
          >
            VER TODOS OS SERVIÇOS
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── Related services ─────────────────────────────────────────────────────────

const RelatedServicesSection = ({ slugs }: { slugs: string[] }) => {
  const related = slugs
    .map((s) => SERVICES_BY_SLUG[s])
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-display font-bold text-shimmer-gold">
            Veja também
          </h3>
        </motion.div>

        <div className={`grid gap-6 ${related.length === 1 ? "grid-cols-1 max-w-sm mx-auto" : "grid-cols-1 sm:grid-cols-2"}`}>
          {related.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="card-mystical p-6 text-center glow-border-hover"
            >
              <motion.span
                className="text-4xl block mb-3"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {s.icon}
              </motion.span>
              <h4 className="font-display text-lg font-semibold mb-1 text-foreground">
                {s.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-3">{s.subtitle}</p>
              {s.price && (
                <p className="text-primary font-bold text-xl mb-4">{s.price}</p>
              )}
              <div className="flex gap-2 justify-center flex-wrap">
                <WhatsAppMotionCta
                  toWhatsAppPage
                  className="shimmer bg-gradient-gold text-primary-foreground font-semibold px-4 py-2 rounded-lg text-xs tracking-wide"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Solicitar
                </WhatsAppMotionCta>
                <Link
                  to={`/servicos/${s.slug}`}
                  className="border border-primary/50 text-primary font-semibold px-4 py-2 rounded-lg text-xs hover:bg-primary/10 transition-all duration-300"
                >
                  Saber Mais
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 404 inline ───────────────────────────────────────────────────────────────

const ServiceNotFound = () => (
  <main className="min-h-screen bg-background overflow-x-hidden">
    <StickyHeader />
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="text-5xl mb-6">🔮</p>
        <h1 className="text-2xl font-display font-bold text-shimmer-gold mb-4">
          Serviço não encontrado
        </h1>
        <p className="text-muted-foreground mb-8">
          O serviço que você procura não existe ou foi movido.
        </p>
        <Link
          to="/#servicos"
          className="shimmer inline-block bg-gradient-gold text-primary-foreground font-semibold px-8 py-3 rounded-lg"
        >
          Ver todos os serviços
        </Link>
      </div>
    </div>
    <FooterSection />
  </main>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const service = slug ? SERVICES_BY_SLUG[slug] : undefined;

  if (!service) return <ServiceNotFound />;

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <StickyHeader />
      <ServiceHeroSection service={service} />
      <ServiceDetailsSection service={service} />
      <ServiceCTASection service={service} />
      {service.relatedSlugs && service.relatedSlugs.length > 0 && (
        <RelatedServicesSection slugs={service.relatedSlugs} />
      )}
      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
};

export default ServicePage;
