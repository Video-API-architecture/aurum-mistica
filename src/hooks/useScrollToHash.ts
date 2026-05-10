import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET_PX = 72;

function scrollToId(id: string): boolean {
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  return true;
}

/**
 * After navigating to the home page with a hash (e.g. from /blog to /#servicos),
 * React Router does not scroll to the section — we align manually (sticky header offset included).
 */
export function useScrollToHash(): void {
  const { hash, pathname } = useLocation();

  useLayoutEffect(() => {
    const id = hash.replace(/^#/, "").trim();
    if (!id) return;

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const tryScroll = () => {
      if (cancelled) return;
      scrollToId(id);
    };

    // First paint + delayed retries (sections mount after route transition / animations)
    tryScroll();
    [16, 64, 200, 450].forEach((ms) => {
      timeouts.push(
        setTimeout(() => {
          if (!cancelled) tryScroll();
        }, ms),
      );
    });

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [hash, pathname]);
}
