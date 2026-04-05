import { useMemo } from "react";
import { WHATSAPP_URL } from "@/constants/whatsapp";

/** Direct WhatsApp deep link for CTAs that are not routed via `/whatsapp`. */
export function useWhatsAppCtaLink() {
  return useMemo(() => ({ href: WHATSAPP_URL as string }), []);
}
