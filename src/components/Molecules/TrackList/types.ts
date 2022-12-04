import type { TSpotifySearchTracksItem } from "../../../interfaces"

export type TTrackListProps = {
  otherTracks?: TSpotifySearchTracksItem[],
  albumImage?: string,
  forceOtherTracks?: boolean,
}
