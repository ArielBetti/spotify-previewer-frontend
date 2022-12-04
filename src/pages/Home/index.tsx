import { useEffect, useMemo } from "react";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";

// atomic: components
import {
  InlineLoader,
  ItemsSection,
  Search,
  TrackList,
} from "../../components";

// recoil: atoms
import { atomAlbums, atomArtists, atomTracks } from "../../store/atoms";

// recoil: selectors
import { selectorGetSearch, selectorGetUser } from "../../store/selector";

// ::
const Home = () => {
  // recoil: states
  const setArtists = useSetRecoilState(atomArtists);
  const setAlbums = useSetRecoilState(atomAlbums);
  const setTracks = useSetRecoilState(atomTracks);

  // recoil: loadable
  const getSearchLodable = useRecoilValueLoadable(selectorGetSearch);
  useRecoilValueLoadable(selectorGetUser);

  // memo: states
  const displayInlineLoader = useMemo(() => {
    // includes all possible loadings in this page
    if (getSearchLodable.state === "loading") {
      return true;
    }

    return false;
  }, [getSearchLodable]);

  useEffect(() => {
    if (
      getSearchLodable.state === "hasValue" &&
      getSearchLodable.contents !== undefined
    ) {
      if (getSearchLodable.contents?.albums?.items?.length > 0) {
        setAlbums(getSearchLodable.contents.albums.items);
      }
      if (getSearchLodable.contents?.artists?.items?.length > 0) {
        setArtists(getSearchLodable.contents.artists.items);
      }
      if (getSearchLodable.contents?.tracks?.length > 0) {
        setTracks(getSearchLodable.contents.tracks);
      }
    }
  }, [getSearchLodable.state, getSearchLodable.contents]);

  return (
    <div>
      <Search />
      <InlineLoader open={displayInlineLoader} text="Carregando..." />
      <div className="py-10">
        <ItemsSection />
      </div>
      <TrackList />
    </div>
  );
};

export default Home;
