import { useMemo } from "react";
import { getWhatsAppCtaHref, whatsappCtaIsExternal } from "@/constants/whatsapp";

export function useWhatsAppCtaLink() {
  return useMemo(() => {
    const href = getWhatsAppCtaHref();
    return { href, external: whatsappCtaIsExternal(href) } as const;
  }, []);
}
