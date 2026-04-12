const SOUNDCLOUD_WIDGET_API_SRC = "https://w.soundcloud.com/player/api.js";

export type SoundCloudWidgetLoadOptions = {
  auto_play?: boolean;
  callback?: () => void;
  /** Dark / black player background */
  theme_color?: string;
  color?: string;
  hide_related?: boolean;
  show_comments?: boolean;
  show_user?: boolean;
  show_reposts?: boolean;
  show_teaser?: boolean;
  visual?: boolean;
  show_artwork?: boolean;
  show_playcount?: boolean;
  buying?: boolean;
  sharing?: boolean;
  download?: boolean;
};

export type SoundCloudWidget = {
  load: (url: string, options?: SoundCloudWidgetLoadOptions) => void;
  play: () => void;
  bind: (eventName: string, listener: (...args: unknown[]) => void) => void;
  unbind: (eventName: string) => void;
  /** Async getter — widget is paused when `paused` is true. */
  isPaused: (callback: (paused: boolean) => void) => void;
};

type SoundCloudGlobal = {
  Widget: ((el: HTMLIFrameElement | string) => SoundCloudWidget) & {
    Events: { READY: string };
  };
};

declare global {
  interface Window {
    SC?: SoundCloudGlobal;
  }
}

export function loadSoundCloudGlobal(): Promise<SoundCloudGlobal> {
  if (window.SC?.Widget) return Promise.resolve(window.SC);

  return new Promise((resolve, reject) => {
    let pollId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = window.setTimeout(() => {
      if (pollId !== undefined) window.clearInterval(pollId);
      reject(new Error("SoundCloud Widget API timeout"));
    }, 15_000);

    const finish = (sc: SoundCloudGlobal) => {
      window.clearTimeout(timeoutId);
      if (pollId !== undefined) window.clearInterval(pollId);
      resolve(sc);
    };

    const fail = (err: Error) => {
      window.clearTimeout(timeoutId);
      if (pollId !== undefined) window.clearInterval(pollId);
      reject(err);
    };

    if (document.querySelector(`script[src="${SOUNDCLOUD_WIDGET_API_SRC}"]`)) {
      pollId = window.setInterval(() => {
        if (window.SC?.Widget) finish(window.SC);
      }, 50);
      return;
    }

    const script = document.createElement("script");
    script.src = SOUNDCLOUD_WIDGET_API_SRC;
    script.async = true;
    script.onload = () => {
      window.setTimeout(() => {
        if (window.SC?.Widget) finish(window.SC);
        else fail(new Error("SC.Widget missing"));
      }, 0);
    };
    script.onerror = () => fail(new Error("SoundCloud Widget script failed"));
    document.body.appendChild(script);
  });
}

export async function getSoundCloudWidget(iframe: HTMLIFrameElement): Promise<SoundCloudWidget> {
  const SC = await loadSoundCloudGlobal();
  return SC.Widget(iframe);
}
