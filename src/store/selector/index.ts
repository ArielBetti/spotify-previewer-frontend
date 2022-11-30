import { selector } from "recoil";
import { requester } from "../../api/requester";
import type {
  TSpotifySearch,
  TSpotifySearchTracksItem,
  TSpotifyTracks,
} from "../../interfaces";
import { atomSearch, atomToken, atomTracks } from "../atoms";

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

    if (data) {
      const tracksIds: TSpotifySearchTracksItem[] = data?.tracks?.items;

      const tracksResponse = await requester({
        Authorization: token,
      }).get(`/tracks?market=BR&ids=${tracksIds?.map((track) => track.id)}`);

      Promise.resolve(tracksResponse);

      const tracks: TSpotifySearchTracksItem[] = tracksResponse?.data;

      return { ...data, ...tracks };
    }

    return data;
  },
});
