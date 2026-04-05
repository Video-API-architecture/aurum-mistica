import { useContext, useMemo } from "react";
import { WHATSAPP_URL } from "@/constants/whatsapp";
import { WhatsAppInAppModalContext } from "@/components/WhatsAppInAppModalProvider";
import { isSocialInAppBrowser } from "@/lib/inAppBrowser";

export type WhatsAppCtaLink =
  | { isInAppSession: true; openWhatsAppHelper: () => void }
  | { isInAppSession: false; href: string; external: true };

export function useWhatsAppCtaLink(): WhatsAppCtaLink {
  const ctx = useContext(WhatsAppInAppModalContext);
  const openFromProvider = ctx?.openWhatsAppHelper;

  return useMemo(() => {
    if (typeof window === "undefined") {
      return { isInAppSession: false, href: WHATSAPP_URL, external: true };
    }
    if (isSocialInAppBrowser() && openFromProvider) {
      return { isInAppSession: true, openWhatsAppHelper: openFromProvider };
    }
    return { isInAppSession: false, href: WHATSAPP_URL, external: true };
  }, [openFromProvider]);
}
