import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { getSiteUrl } from "@/lib/siteUrl";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import StickyHeader from "@/components/StickyHeader";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StarField from "@/components/StarField";
import WhatsAppMotionCta from "@/components/WhatsAppMotionCta";

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const BlogNotFound = () => (
  <>
    <Helmet>
      <title>Artigo não encontrado | Aurum Mística</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <main className="min-h-screen bg-background overflow-x-hidden">
      <StickyHeader />
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="text-5xl mb-6">🌙</p>
          <h1 className="text-2xl font-display font-bold text-shimmer-gold mb-4">
            Artigo não encontrado
          </h1>
          <p className="text-muted-foreground mb-8">
            Este artigo não existe ou foi removido.
          </p>
          <Link
            to="/blog"
            className="shimmer inline-block bg-gradient-gold text-primary-foreground font-semibold px-8 py-3 rounded-lg"
          >
            Ver todos os artigos
          </Link>
        </div>
      </div>
      <FooterSection />
    </main>
  </>
);

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { bySlug } = useBlogPosts();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const post = slug ? bySlug[slug] : undefined;

  if (!post) return <BlogNotFound />;

  const base = getSiteUrl();

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>{post.title} | Aurum Mística</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`${base}/blog/${post.slug}`} />

        {/* Open Graph — article */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | Aurum Mística`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={`${base}/blog/${post.slug}`} />
        <meta property="og:image" content={`${base}/og-share.png`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Aurum Mística" />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Aurum Mística`} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={`${base}/og-share.png`} />

        {/* JSON-LD BlogPosting */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: "pt-BR",
          url: `${base}/blog/${post.slug}`,
          image: `${base}/og-share.png`,
          keywords: post.tags.join(", "),
          author: {
            "@type": "Organization",
            name: "Aurum Mística",
            url: base,
          },
          publisher: {
            "@type": "Organization",
            name: "Aurum Mística",
            logo: { "@type": "ImageObject", url: `${base}/og-share.png` },
          },
          about: { "@type": "Thing", name: post.sign },
          mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/blog/${post.slug}` },
        })}</script>
      </Helmet>

      <StickyHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-cosmic pt-32 pb-16">
        <StarField count={30} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-4"
          >
            <motion.div variants={childVariant}>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                Voltar ao Blog
              </Link>
            </motion.div>

            <motion.div variants={childVariant} className="text-6xl md:text-7xl">
              <motion.span
                animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                {post.signEmoji}
              </motion.span>
            </motion.div>

            <motion.h1
              variants={childVariant}
              className="text-3xl md:text-5xl font-display font-bold text-shimmer-gold leading-tight"
            >
              {post.title}
            </motion.h1>

            <motion.div
              variants={childVariant}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <time dateTime={post.date} className="text-sm text-muted-foreground">
                {formatDate(post.date)}
              </time>
              <span className="text-border/60">·</span>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {post.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto px-6 max-w-3xl">
          <article className="prose-custom">
            {post.sections.map((section, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={sectionVariant}
                transition={{ delay: i * 0.05 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-shimmer-gold mb-6 flex items-center gap-3">
                  <span className="text-primary text-lg">✦</span>
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.content.split("\n\n").map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-foreground/80 font-light leading-relaxed text-base md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </article>
        </div>
      </section>

      {/* CTA */}
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
              🌟
            </motion.span>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-shimmer-gold mb-4">
              Quer uma leitura personalizada?
            </h2>

            <p className="text-lg text-muted-foreground font-light mb-8">
              As previsões astrológicas mostram o caminho — uma consulta de tarot revela os detalhes do seu momento único.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppMotionCta
                toWhatsAppPage
                className="shimmer inline-block bg-gradient-gold text-primary-foreground font-semibold text-lg px-10 py-4 rounded-lg shadow-gold hover:scale-105 transition-transform duration-300 animate-pulse-gold tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Consultar Agora
              </WhatsAppMotionCta>
              <Link
                to="/blog"
                className="inline-block border-2 border-primary/50 text-primary font-semibold text-lg px-8 py-4 rounded-lg hover:bg-primary/10 hover:border-primary/70 transition-all duration-300 tracking-wide"
              >
                Ver mais artigos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
};

export default BlogPostPage;
