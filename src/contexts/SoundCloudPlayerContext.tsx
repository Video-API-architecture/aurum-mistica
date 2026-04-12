import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { soundcloudTrackUrl, soundcloudWidgetLoadOptions, SOUNDCLOUD_TRACKS } from "@/lib/soundcloudEmbed";
import { getSoundCloudWidget, type SoundCloudWidget } from "@/lib/soundcloudWidgetApi";

const DEFAULT_TRACK_ID = SOUNDCLOUD_TRACKS[0].id;

type SoundCloudPlayerContextValue = {
  trackId: string;
  apiFailed: boolean;
  embedIframeCallbackRef: (node: HTMLIFrameElement | null) => void;
};

const SoundCloudPlayerContext = createContext<SoundCloudPlayerContextValue | null>(null);

export function useSoundCloudPlayer() {
  const ctx = useContext(SoundCloudPlayerContext);
  if (!ctx) throw new Error("useSoundCloudPlayer must be used within SoundCloudPlayerProvider");
  return ctx;
}

function attachAutoplay(widget: SoundCloudWidget, trackUrl: string, cancelled: () => boolean) {
  const tryPlay = () => {
    if (cancelled()) return;
    try {
      widget.play();
    } catch {
      /* autoplay policy */
    }
  };

  const SC = window.SC!;
  const ready = SC.Widget.Events.READY;
  widget.unbind(ready);
  widget.bind(ready, tryPlay);

  // Permalink + API flags — more reliable than relying on iframe `src` alone (avoids missing READY if it fires early).
  widget.load(trackUrl, {
    ...soundcloudWidgetLoadOptions(true),
    callback: tryPlay,
  });

  // If READY already fired during async init, nudge playback.
  window.requestAnimationFrame(() => {
    if (cancelled()) return;
    try {
      widget.isPaused((paused) => {
        if (cancelled() || !paused) return;
        tryPlay();
      });
    } catch {
      tryPlay();
    }
  });
}

export function SoundCloudPlayerProvider({ children }: { children: ReactNode }) {
  const [apiFailed, setApiFailed] = useState(false);
  const [embedGeneration, setEmbedGeneration] = useState(0);

  const embedIframeRef = useRef<HTMLIFrameElement | null>(null);
  const cancelledRef = useRef(false);

  const embedIframeCallbackRef = useCallback((node: HTMLIFrameElement | null) => {
    embedIframeRef.current = node;
    setEmbedGeneration((g) => g + 1);
  }, []);

  useLayoutEffect(() => {
    cancelledRef.current = false;
    if (apiFailed) return;
    const iframe = embedIframeRef.current;
    if (!iframe) return;

    async function run() {
      try {
        const widget = await getSoundCloudWidget(iframe);
        if (cancelledRef.current) return;

        const trackUrl = soundcloudTrackUrl(DEFAULT_TRACK_ID);
        const cancelled = () => cancelledRef.current;

        attachAutoplay(widget, trackUrl, cancelled);
      } catch {
        if (!cancelledRef.current) setApiFailed(true);
      }
    }

    void run();

    return () => {
      cancelledRef.current = true;
    };
  }, [apiFailed, embedGeneration]);

  const value: SoundCloudPlayerContextValue = {
    trackId: DEFAULT_TRACK_ID,
    apiFailed,
    embedIframeCallbackRef,
  };

  return (
    <SoundCloudPlayerContext.Provider value={value}>{children}</SoundCloudPlayerContext.Provider>
  );
}
