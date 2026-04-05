import { useWhatsAppCtaLink } from "@/hooks/useWhatsAppCtaLink";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const WhatsAppPlainCta = ({ children, className }: Props) => {
  const { href } = useWhatsAppCtaLink();

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
};

export default WhatsAppPlainCta;
