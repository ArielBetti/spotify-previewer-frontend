import { selector, selectorFamily } from "recoil";
import { requester } from "../../api/requester";
import {
  TSpotifyAlbumTracks,
  TSpotifyArtistTopTracks,
  TSpotifySearch,
  TSpotifySearchTracks,
  TSpotifySearchTracksItem,
} from "../../interfaces";
import { atomSearch, atomToken } from "../atoms";

export const selectorGetUser = selector({
  key: "selectorGetUser",
  get: async ({ get }) => {
    const token = get(atomToken);

    if (!token) return;

    const { data } = await requester({
      Authorization: token,
    }).get("/me");

    return data;
  },
});

export const selectorGetSearch = selector({
  key: "selectorGetSearch",
  get: async ({ get }): Promise<TSpotifySearch | undefined> => {
    const token = get(atomToken);
    const search = get(atomSearch);

    if (!token || !search) return;

    const { data } = await requester({
      Authorization: token,
    }).get(`search?q=${search}&type=track%2Cartist%2Calbum&market=BR&limit=35`);

    Promise.resolve(data);

    if (data?.tracks?.items?.length > 0) {
      const searchTracksId = data?.tracks?.items.map(
        (track: TSpotifySearchTracksItem) => track.id
      );

      const trackSearch = await requester({
        Authorization: token,
      }).get(`tracks?market=BR&ids=${searchTracksId}`);

      Promise.resolve(trackSearch);

      const tracks = trackSearch.data;

      return { ...data, ...tracks };
    }

    return data;
  },
});

export const selectorGetArtistTracks = selectorFamily({
  key: "selectorGetArtistTracks",
  get:
    (id: string) =>
    async ({ get }): Promise<TSpotifyArtistTopTracks | undefined> => {
      const token = get(atomToken);

      if (!token) return;

      const { data } = await requester({
        Authorization: token,
      }).get(`artists/${id}`);

      Promise.resolve(data);

      if (data?.name) {
        const topTracks = await requester({
          Authorization: token,
        }).get(`artists/${id}/top-tracks?market=BR`);

        Promise.resolve(topTracks);

        const tracks = topTracks?.data || null;

        return { artist: { ...data }, ...tracks };
      }

      return data;
    },
});

export const selectorGetAlbum = selectorFamily({
  key: "selectorGetAlbum",
  get:
    (id: string) =>
    async ({ get }): Promise<TSpotifyAlbumTracks | undefined> => {
      const token = get(atomToken);

      if (!token) return;

      const { data } = await requester({
        Authorization: token,
      }).get(`albums/${id}`);

      Promise.resolve(data);

      if (data?.name) {
        const topTracks = await requester({
          Authorization: token,
        }).get(`albums/${id}/tracks?market=BR`);

        Promise.resolve(topTracks);

        const tracks = topTracks?.data?.items || null;

        return { album: { ...data }, tracks: { ...tracks } };
      }

      return data;
    },
});
