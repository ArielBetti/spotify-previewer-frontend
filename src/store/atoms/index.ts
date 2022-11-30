import { atom } from "recoil";
import { TSpotifySearchAlbumsItem, TSpotifySearchArtistsItem, TSpotifySearchTracksItem, TUser } from "../../interfaces";
import { localStorageEffect } from "../../utils/localStorageEffect";

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

export const atomArtists = atom<TSpotifySearchArtistsItem[]>({
  key: "atomArtists",
  default: undefined,
});

export const atomAlbums = atom<TSpotifySearchAlbumsItem[]>({
  key: "atomAlbums",
  default: undefined,
});

export const atomTracks = atom<TSpotifySearchTracksItem[]>({
  key: "atomTracks",
  default: undefined,
});

