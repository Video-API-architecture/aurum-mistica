import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import WebsiteSeo from "@/components/WebsiteSeo";
import { useLocale } from "@/contexts/LocaleContext";
import { getSiteUrl } from "@/lib/siteUrl";
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

const BlogListPage = () => {
  const { posts } = useBlogPosts();
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { locale } = useLocale();
  const canonicalUrl = `${getSiteUrl()}${pathname}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <WebsiteSeo
        title={t("meta.blogListTitle")}
        description={t("meta.blogListDesc")}
        canonicalUrl={canonicalUrl}
        locale={locale}
      />

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
                className="card-mystical glow-border-hover flex flex-col"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex flex-col gap-4 p-6 flex-1 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{post.signEmoji}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                      {post.sign}
                    </span>
                  </div>

                  <h2 className="font-display text-lg font-bold text-foreground leading-snug line-clamp-3 hover:text-primary transition-colors duration-200">
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
                    <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:underline">
                      Ler mais
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
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
