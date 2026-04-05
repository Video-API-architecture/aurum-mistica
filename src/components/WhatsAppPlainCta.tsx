import { useWhatsAppCtaLink } from "@/hooks/useWhatsAppCtaLink";

type Props = {
  children: React.ReactNode;
  className?: string;
  useInAppHelper?: boolean;
};

/**
 * Same behavior as {@link WhatsAppMotionCta} for non-motion anchor/footer links.
 */
const WhatsAppPlainCta = ({ children, className, useInAppHelper }: Props) => {
  const wa = useWhatsAppCtaLink({ useInAppHelper });

  if ("href" in wa) {
    return (
      <a href={wa.href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={wa.openWhatsAppHelper} className={className}>
      {children}
    </button>
  );
};

export default WhatsAppPlainCta;
