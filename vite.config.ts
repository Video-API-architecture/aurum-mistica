import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "http://localhost:8080").replace(/\/$/, "");

  function escapeHtmlAttr(value: string) {
    return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  }

  function buildOrganizationJsonLd() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Aurum Mística",
      alternateName: "Aurum Mistica",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/og-share.png`,
      description:
        "Consultas de tarot e orientação espiritual com leituras personalizadas. Clareza no amor, carreira e no seu caminho.",
      sameAs: ["https://www.tiktok.com/@aurummisticaoficial"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+5521967622489",
          availableLanguage: ["pt-BR", "Portuguese"],
        },
      ],
    };
  }

  return {
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "html-site-url-for-social",
      // Use __SITE_URL__ (not %…%) so Vite's HTML pipeline does not treat placeholders as URI-encoded.
      transformIndexHtml(html: string) {
        const googleToken = (env.VITE_GOOGLE_SITE_VERIFICATION ?? "").trim();
        const bingToken = (env.VITE_BING_SITE_VERIFICATION ?? "").trim();
        const googleMeta = googleToken
          ? `    <meta name="google-site-verification" content="${escapeHtmlAttr(googleToken)}" />\n`
          : "";
        const bingMeta = bingToken
          ? `    <meta name="msvalidate.01" content="${escapeHtmlAttr(bingToken)}" />\n`
          : "";
        const ldScript = `    <script type="application/ld+json">${JSON.stringify(buildOrganizationJsonLd())}</script>\n`;

        return html
          .replaceAll("__SITE_URL__", siteUrl)
          .replace("    __GOOGLE_SITE_VERIFICATION_META__\n", googleMeta)
          .replace("    __BING_SITE_VERIFICATION_META__\n", bingMeta)
          .replace("    __JSON_LD_ORGANIZATION__\n", ldScript);
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
};
});
