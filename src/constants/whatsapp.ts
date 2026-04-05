/** Country code + number, no + or spaces (Brazil). */
export const WHATSAPP_PHONE_E164 = "5521967622489" as const;

/**
 * Default chat link for CTAs. Uses wa.me instead of api.whatsapp.com so in-app
 * browsers (e.g. TikTok) are less likely to block the redirect to WhatsApp.
 */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_E164}` as const;

/**
 * Same copy + instructions as the in-app modal. Primary CTAs (header, hero, final CTA) open that flow in TikTok/IG in-app browsers; other WhatsApp links use wa.me directly.
 * Kept for bookmarks and direct /whatsapp links.
 */
export const WHATSAPP_CHAT_PATH = "/whatsapp" as const;

/** Human-readable for UI (Brazil). */
export const WHATSAPP_DISPLAY_BR = "(21) 96762-2489" as const;

/** E.164 with + for copy / tel. */
export const WHATSAPP_E164_PLUS = `+${WHATSAPP_PHONE_E164}` as const;
