import { motion, type HTMLMotionProps } from "framer-motion";
import { useWhatsAppCtaLink } from "@/hooks/useWhatsAppCtaLink";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Runs on tap (e.g. close a mobile menu); receives the same event as Framer motion handlers. */
  onClick?: (event: React.MouseEvent) => void;
} & Omit<HTMLMotionProps<"a">, "href" | "target" | "rel" | "onClick">;

/**
 * WhatsApp CTA: opens wa.me in a normal browser; in TikTok/Instagram in-app browsers opens the helper modal instead of navigating away from the landing page.
 */
const WhatsAppMotionCta = ({ children, className, onClick, ...motionProps }: Props) => {
  const wa = useWhatsAppCtaLink();

  if ("href" in wa) {
    return (
      <motion.a
        href={wa.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={className}
      onClick={(e) => {
        onClick?.(e);
        wa.openWhatsAppHelper();
      }}
      {...(motionProps as unknown as HTMLMotionProps<"button">)}
    >
      {children}
    </motion.button>
  );
};

export default WhatsAppMotionCta;
