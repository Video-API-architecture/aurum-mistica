import { useEffect, useMemo, useState } from "react";
import { useSoundCloudPlayer } from "@/contexts/SoundCloudPlayerContext";
import { SOUNDCLOUD_TRACKS, soundcloudPlayerSrc, soundcloudTrackUrl } from "@/lib/soundcloudEmbed";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

/** Inner iframe height (px); tune if the widget looks clipped. */
export const SOUNDCLOUD_BAR_INNER_PX = 120;

/** Delay after mount before the expand animation starts (ms). */
const REVEAL_DELAY_MS = 420;

const SoundCloudPlayerBar = () => {
  const { t } = useTranslation();
  const { trackId, apiFailed, embedIframeCallbackRef } = useSoundCloudPlayer();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setExpanded(true), REVEAL_DELAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  const trackUrl = soundcloudTrackUrl(trackId);
  const iframeSrc = soundcloudPlayerSrc(trackUrl);

  const iframeTitle = useMemo(() => {
    const meta = SOUNDCLOUD_TRACKS.find((x) => x.id === trackId) ?? SOUNDCLOUD_TRACKS[0];
    const line = `${t(meta.titleKey)} — ${t(meta.artistsKey)}`;
    return t("music.iframeTitle", { track: line });
  }, [trackId, t]);

  return (
    <div
      className={cn(
        "relative z-30 w-full bg-black/95 shadow-[0_-8px_32px_-8px_rgb(0_0_0/0.5)] backdrop-blur-xl",
        !expanded && "pointer-events-none",
      )}
      style={{
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <div
        className={cn(
          "grid min-h-0 w-full overflow-hidden border-t border-white/10 transition-[grid-template-rows] duration-700 ease-out",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pb-[env(safe-area-inset-bottom,0px)]">
            <div className="mx-auto flex max-w-6xl items-center px-3 py-2.5 sm:px-6">
              <div
                className={cn(
                  "music-player-shell min-w-0 flex-1 transition-opacity duration-300 ease-out",
                  expanded ? "delay-150 opacity-100" : "opacity-0",
                )}
                style={{ height: SOUNDCLOUD_BAR_INNER_PX }}
              >
                <iframe
                  key={trackId}
                  ref={apiFailed ? undefined : embedIframeCallbackRef}
                  title={iframeTitle}
                  src={iframeSrc}
                  width="100%"
                  height={SOUNDCLOUD_BAR_INNER_PX}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  className="block w-full bg-black"
                  style={{ height: SOUNDCLOUD_BAR_INNER_PX }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundCloudPlayerBar;
