/**
 * Detects embedded browsers from major social apps that often block external
 * app links (WhatsApp, tel:, etc.) or show a “copy link / open in browser” gate.
 */
export function isSocialInAppBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return /TikTok|Instagram|FBAN|FBAV|FB_IAB|Line\/|LinkedInApp|Snapchat/i.test(ua);
}
