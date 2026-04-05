import { useWhatsAppCtaLink } from "@/hooks/useWhatsAppCtaLink";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Same behavior as {@link WhatsAppMotionCta} for non-motion anchor/footer links.
 */
const WhatsAppPlainCta = ({ children, className }: Props) => {
  const wa = useWhatsAppCtaLink();

  if (wa.isInAppSession) {
    return (
      <button type="button" onClick={wa.openWhatsAppHelper} className={className}>
        {children}
      </button>
    );
  }

  return (
    <a href={wa.href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
};

export default WhatsAppPlainCta;
