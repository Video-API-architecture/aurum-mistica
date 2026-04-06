import { motion, type HTMLMotionProps } from "framer-motion";
import { Link } from "react-router-dom";
import { WHATSAPP_CHAT_PATH } from "@/constants/whatsapp";
import { useWhatsAppCtaLink } from "@/hooks/useWhatsAppCtaLink";
import { useOptionalLocale } from "@/contexts/LocaleContext";
import { localizedPath } from "@/lib/locale";

const MotionLink = motion(Link);

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Client-side navigation to `/whatsapp` (same-origin; works in TikTok in-app browser). */
  toWhatsAppPage?: boolean;
  /** Runs on tap (e.g. close a mobile menu). */
  onClick?: (event: React.MouseEvent) => void;
} & Omit<HTMLMotionProps<"a">, "href" | "target" | "rel" | "onClick">;

const WhatsAppMotionCta = ({ children, className, toWhatsAppPage, onClick, ...motionProps }: Props) => {
  const localeCtx = useOptionalLocale();
  const prefix = localeCtx?.prefix ?? "";

  if (toWhatsAppPage) {
    return (
      <MotionLink
        to={localizedPath(prefix, WHATSAPP_CHAT_PATH)}
        className={className}
        onClick={onClick}
        {...(motionProps as React.ComponentProps<typeof MotionLink>)}
      >
        {children}
      </MotionLink>
    );
  }

  const { href } = useWhatsAppCtaLink();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.a>
  );
};

export default WhatsAppMotionCta;
