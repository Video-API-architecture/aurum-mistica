import { Helmet } from "react-helmet-async";
import type { AppLocale } from "@/lib/locale";
import { openGraphLocaleFor } from "@/lib/locale";
import { getSiteUrl } from "@/lib/siteUrl";

type Props = {
  title: string;
  description: string;
  canonicalUrl: string;
  locale: AppLocale;
  robotsNoIndex?: boolean;
  /** Optional comma-separated keywords (`meta name="keywords"`). */
  keywords?: string;
};

const WebsiteSeo = ({
  title,
  description,
  canonicalUrl,
  locale,
  robotsNoIndex,
  keywords,
}: Props) => {
  const base = getSiteUrl();
  const imageUrl = `${base}/og-share.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {robotsNoIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={openGraphLocaleFor(locale)} />
      <meta property="og:site_name" content="Aurum Mística" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default WebsiteSeo;
