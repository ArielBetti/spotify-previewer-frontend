import { FC, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { Hero, TapumeLoader, TrackList } from "../../components";
import type {
  SpotifyAlbumPage,
  TSpotifyAlbumTracks,
  TSpotifySearchAlbumsItem,
  TSpotifySearchArtists,
  TSpotifySearchArtistsItem,
  TSpotifySearchTracksItem,
} from "../../interfaces";

// recoil: selectors
import { selectorGetAlbum } from "../../store/selector";

const Album: FC = () => {
  const { id } = useParams();

  // local: states
  const [albumTracks, setAlbumTracks] = useState<TSpotifySearchTracksItem[]>();
  const [album, setAlbum] = useState<SpotifyAlbumPage | undefined>(undefined);

  // recoil: lodable
  const getAlbumTracks = useRecoilValueLoadable(selectorGetAlbum(`${id}`));

  // memo: states
  const albumImage = useMemo(() => {
    return album?.images?.[0 || 1 || 2]?.url;
  }, [album]);

  useEffect(() => {
    if (
      getAlbumTracks.state === "hasValue" &&
      getAlbumTracks.contents !== undefined
    ) {

      if (getAlbumTracks.contents?.tracks) {
        const tracks = getAlbumTracks.contents.tracks;

        const trackList = Object.keys(tracks)?.map(
          (track) => tracks[Number(track)]
        );

        setAlbum(getAlbumTracks?.contents.album);
        setAlbumTracks(trackList || []);
      }
    }
  }, [getAlbumTracks.state, getAlbumTracks.contents]);

  return (
    <div>
      <Hero
        name={album?.artists?.[0]?.name || ""}
        image={albumImage}
      />
      <TapumeLoader open={getAlbumTracks.state === "loading"} />
      <TrackList albumImage={albumImage} forceOtherTracks otherTracks={albumTracks} />
    </div>
  );
};

export default Album;
