import { useContext, useMemo } from "react";
import { WHATSAPP_URL } from "@/constants/whatsapp";
import { WhatsAppInAppModalContext } from "@/components/WhatsAppInAppModalProvider";
import { isSocialInAppBrowser } from "@/lib/inAppBrowser";

export type WhatsAppCtaLink =
  | { isInAppSession: true; openWhatsAppHelper: () => void }
  | { isInAppSession: false; href: string; external: true };

export type UseWhatsAppCtaLinkOptions = {
  /**
   * When true (only for a few primary CTAs), TikTok/Instagram in-app browsers open the /whatsapp-equivalent modal instead of leaving the page.
   * Other links always use wa.me directly.
   */
  useInAppHelper?: boolean;
};

export function useWhatsAppCtaLink(options?: UseWhatsAppCtaLinkOptions): WhatsAppCtaLink {
  const useInAppHelper = options?.useInAppHelper === true;
  const ctx = useContext(WhatsAppInAppModalContext);
  const openFromProvider = ctx?.openWhatsAppHelper;

  return useMemo(() => {
    if (typeof window === "undefined") {
      return { isInAppSession: false, href: WHATSAPP_URL, external: true };
    }
    if (useInAppHelper && isSocialInAppBrowser() && openFromProvider) {
      return { isInAppSession: true, openWhatsAppHelper: openFromProvider };
    }
    return { isInAppSession: false, href: WHATSAPP_URL, external: true };
  }, [openFromProvider, useInAppHelper]);
}
