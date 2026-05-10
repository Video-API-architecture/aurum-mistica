import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import StickyHeader from "@/components/StickyHeader";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StarField from "@/components/StarField";

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined ?? "").replace(/\/$/, "") || window.location.origin;

const BlogListPage = () => {
  const { posts } = useBlogPosts();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Blog | Aurum Mística</title>
        <meta name="description" content="Previsões astrológicas, guias de tarot e reflexões espirituais do Aurum Mística." />
        <link rel="canonical" href={`${siteUrl}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog | Aurum Mística" />
        <meta property="og:description" content="Previsões astrológicas, guias de tarot e reflexões espirituais do Aurum Mística." />
        <meta property="og:url" content={`${siteUrl}/blog`} />
        <meta property="og:image" content={`${siteUrl}/og-share.png`} />
        <meta name="twitter:title" content="Blog | Aurum Mística" />
        <meta name="twitter:description" content="Previsões astrológicas, guias de tarot e reflexões espirituais do Aurum Mística." />
        <meta name="twitter:image" content={`${siteUrl}/og-share.png`} />
      </Helmet>

      <StickyHeader />

      <section className="relative overflow-hidden bg-gradient-cosmic pt-32 pb-20">
        <StarField count={30} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center gap-4"
          >
            <motion.span
              animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl block"
            >
              🔮
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-shimmer-gold leading-tight">
              Blog Aurum Mística
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl">
              Previsões astrológicas, reflexões espirituais e guias de tarot para iluminar o seu caminho.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post) => (
              <motion.article
                key={post.slug}
                variants={cardVariant}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card-mystical p-6 glow-border-hover flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{post.signEmoji}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                    {post.sign}
                  </span>
                </div>

                <h2 className="font-display text-lg font-bold text-foreground leading-snug line-clamp-3">
                  {post.title}
                </h2>

                <p className="text-muted-foreground text-sm font-light leading-relaxed line-clamp-3 flex-1">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/30">
                  <time
                    dateTime={post.date}
                    className="text-xs text-muted-foreground"
                  >
                    {formatDate(post.date)}
                  </time>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1 transition-all duration-200 group"
                  >
                    Ler mais
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
};

export default BlogListPage;
