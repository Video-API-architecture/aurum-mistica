import { motion, type HTMLMotionProps } from "framer-motion";
import { useWhatsAppCtaLink } from "@/hooks/useWhatsAppCtaLink";

type Props = {
  children: React.ReactNode;
  className?: string;
  /**
   * Set on the few primary CTAs only; in TikTok/IG in-app browsers those open the helper modal (same content as /whatsapp).
   */
  useInAppHelper?: boolean;
  /** Runs on tap (e.g. close a mobile menu); receives the same event as Framer motion handlers. */
  onClick?: (event: React.MouseEvent) => void;
} & Omit<HTMLMotionProps<"a">, "href" | "target" | "rel" | "onClick">;

/**
 * WhatsApp CTA: opens wa.me. With `useInAppHelper`, TikTok/Instagram in-app browsers show the helper modal instead of navigating away.
 */
const WhatsAppMotionCta = ({ children, className, useInAppHelper, onClick, ...motionProps }: Props) => {
  const wa = useWhatsAppCtaLink({ useInAppHelper });

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
