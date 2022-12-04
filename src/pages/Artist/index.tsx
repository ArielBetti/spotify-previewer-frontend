import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { Hero, TapumeLoader, TrackList } from "../../components";
import {
  TSpotifyArtistTopTracks,
  TSpotifySearchAlbumsItem,
  TSpotifySearchArtistsItem,
  TSpotifySearchTracksItem,
} from "../../interfaces";

// recoil: selectors
import { selectorGetArtistTracks } from "../../store/selector";

const Artist: FC = () => {
  const { id } = useParams();

  // local: states
  const [topTracks, setTopTracks] = useState<TSpotifySearchTracksItem[]>();
  const [artist, setArtist] = useState<TSpotifySearchArtistsItem | undefined>(
    undefined
  );

  // recoil: lodable
  const getArtistTracks = useRecoilValueLoadable(
    selectorGetArtistTracks(`${id}`)
  );

  useEffect(() => {
    if (
      getArtistTracks.state === "hasValue" &&
      getArtistTracks.contents !== undefined
    ) {
      if (getArtistTracks.contents?.tracks) {
        setArtist(getArtistTracks?.contents.artist);
        setTopTracks(getArtistTracks.contents.tracks);
      }
    }
  }, [getArtistTracks.state, getArtistTracks.contents]);

  return (
    <div>
      <Hero
        name={artist?.name || ""}
        image={artist?.images?.[0 || 1 || 2]?.url}
      />
      <TapumeLoader open={getArtistTracks.state === "loading"} />
      <TrackList otherTracks={topTracks} />
    </div>
  );
};

export default Artist;
