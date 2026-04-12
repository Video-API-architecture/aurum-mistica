/** Anchor id for inline music section — shared with scroll targets. */
export const MUSIC_SECTION_ID = "musica";

/** Dark player chrome — SoundCloud `theme_color` (no `#`). */
export const SOUNDCLOUD_THEME_HEX = "000000";

/** Play / scrub accent — matches site `--primary` gold hsl(43 80% 52%). */
export const SOUNDCLOUD_ACCENT_HEX = "e6b93a";

/** Single featured track; `url` is the SoundCloud permalink (short share links also work in the widget). */
export const SOUNDCLOUD_TRACKS = [
  {
    id: "athair-ar-neamh",
    url: "https://soundcloud.com/enya/athair-ar-neamh-2009",
    titleKey: "music.trackTitle" as const,
    artistsKey: "music.trackArtists" as const,
  },
] as const;

export function soundcloudTrackUrl(trackId: string) {
  return SOUNDCLOUD_TRACKS.find((t) => t.id === trackId)?.url ?? SOUNDCLOUD_TRACKS[0].url;
}

/** Shared widget chrome — black theme + gold accent; see https://developers.soundcloud.com/docs/api/html5-widget */
function soundcloudEmbedParams(trackUrl: string) {
  return new URLSearchParams({
    url: trackUrl,
    theme_color: SOUNDCLOUD_THEME_HEX,
    color: SOUNDCLOUD_ACCENT_HEX,
    auto_play: "true",
    hide_related: "true",
    show_comments: "false",
    show_user: "true",
    show_reposts: "false",
    show_teaser: "false",
    visual: "false",
    show_artwork: "true",
    show_playcount: "false",
    buying: "false",
    sharing: "false",
    download: "false",
  });
}

export function soundcloudPlayerSrc(trackUrl: string) {
  return `https://w.soundcloud.com/player/?${soundcloudEmbedParams(trackUrl).toString()}`;
}

/** Options for `widget.load()` — keeps API path in sync with iframe `src`. */
export function soundcloudWidgetLoadOptions(autoPlay: boolean) {
  return {
    auto_play: autoPlay,
    theme_color: `#${SOUNDCLOUD_THEME_HEX}`,
    color: `#${SOUNDCLOUD_ACCENT_HEX}`,
    hide_related: true,
    show_comments: false,
    show_user: true,
    show_reposts: false,
    show_teaser: false,
    visual: false,
    show_artwork: true,
    show_playcount: false,
    buying: false,
    sharing: false,
    download: false,
  };
}
