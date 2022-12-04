import { atom } from "recoil";
import { TCurrentTrack, TSpotifySearchAlbumsItem, TSpotifySearchArtistsItem, TSpotifySearchTracksItem, TUser } from "../../interfaces";
import { localStorageEffect } from "../../utils/localStorageEffect";

export const atomTheme = atom<'dark' | 'light'>({
  key: "atomTheme",
  default: "dark",
  effects: [localStorageEffect("atomTheme")],
});

export const atomToken = atom<string>({
  key: "atomToken",
  default: "",
  effects: [localStorageEffect("atomToken")],
});

export const atomUser = atom<TUser>({
  key: "atomUser",
  default: undefined,
  effects: [localStorageEffect("atomUser")],
});

export const atomSearch = atom<string>({
  key: "atomSearch",
  default: '',
});

export const atomAlbums = atom<TSpotifySearchAlbumsItem[]>({
  key: "atomAlbums",
  default: [],
});

export const atomArtists = atom<TSpotifySearchArtistsItem[]>({
  key: "atomArtists",
  default: [],
});

export const atomTracks = atom<TSpotifySearchTracksItem[]>({
  key: "atomTracks",
  default: [],
});

export const atomCurrentTrack = atom<TCurrentTrack>({
  key: 'atomCurrentTrack',
  default: undefined,
})
