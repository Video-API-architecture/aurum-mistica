import { isSocialInAppBrowser } from "@/lib/inAppBrowser";

/** Country code + number, no + or spaces (Brazil). */
export const WHATSAPP_PHONE_E164 = "5521967622489" as const;

/**
 * Default chat link for CTAs. Uses wa.me instead of api.whatsapp.com so in-app
 * browsers (e.g. TikTok) are less likely to block the redirect to WhatsApp.
 */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_E164}` as const;

/** Same-origin page for users in restrictive in-app browsers (see getWhatsAppCtaHref). */
export const WHATSAPP_CHAT_PATH = "/whatsapp" as const;

/** Human-readable for UI (Brazil). */
export const WHATSAPP_DISPLAY_BR = "(21) 96762-2489" as const;

/** E.164 with + for copy / tel. */
export const WHATSAPP_E164_PLUS = `+${WHATSAPP_PHONE_E164}` as const;

export function whatsappCtaIsExternal(href: string): boolean {
  return href.startsWith("http");
}

/**
 * In TikTok/Instagram/Facebook in-app browsers, external wa.me links are often
 * blocked or replaced with a “open in browser” screen. Those users get a
 * same-origin route so navigation works; the page offers copy + instructions.
 */
export function getWhatsAppCtaHref(): string {
  if (typeof window === "undefined") return WHATSAPP_URL;
  return isSocialInAppBrowser() ? WHATSAPP_CHAT_PATH : WHATSAPP_URL;
}
