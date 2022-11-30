import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import "react-h5-audio-player/lib/styles.css";
import { AtSymbolIcon, MusicalNoteIcon, RectangleStackIcon } from "@heroicons/react/24/outline";

import {
  Button,
  CardItem,
  DraggableItems,
  Input,
  Search,
} from "../../components";
import {
  atomAlbums,
  atomArtists,
  atomTracks,
  atomUser,
} from "../../store/atoms";
import { selectorGetSearch, selectorGetUser } from "../../store/selector";
import { TSpotifySearchTracksItem } from "../../interfaces";

type TCurrentTrack = {
  image?: string;
  author: string[];
  trackName: string;
  trackUrl: string;
};

const Home = () => {
  // local: states
  const [currentTrack, setCurrentTrack] = useState<TCurrentTrack>();

  // recoil: states
  const user = useRecoilValue(atomUser);
  const [artists, setArtists] = useRecoilState(atomArtists);
  const [albums, setAlbums] = useRecoilState(atomAlbums);
  const [tracks, setTracks] = useRecoilState(atomTracks);

  // recoil: loadable
  const getSearchLodable = useRecoilValueLoadable(selectorGetSearch);
  useRecoilValueLoadable(selectorGetUser);

  useEffect(() => {
    if (
      getSearchLodable.state === "hasValue" &&
      getSearchLodable.contents !== undefined
    ) {
      if (getSearchLodable.contents.artists.items.length > 0) {
        setArtists(getSearchLodable.contents.artists.items);
      }
      if (getSearchLodable.contents.albums.items.length > 0) {
        setAlbums(getSearchLodable.contents.albums.items);
      }
      if (getSearchLodable.contents.tracks.length > 0) {
        console.log("chegou", getSearchLodable.contents.tracks);
        setTracks(getSearchLodable.contents.tracks);
      }
    }
  }, [getSearchLodable.state, getSearchLodable.contents]);

  console.log(getSearchLodable.contents);

  return (
    <div>
      <Search />
      <div className="my-3">
        {artists?.length > 0 && (
          <div className="flex flex-col py-5 border-t border-t-zinc-300 dark:border-t-slate-800">
            <div className="flex items-center justify-start gap-2">
              <AtSymbolIcon className="h-5 w-5" />
              <h2>Artistas</h2>
            </div>
            <DraggableItems>
              {artists.map((artist) => (
                <CardItem
                  id={artist?.id}
                  title={artist?.name}
                  image={artist?.images[0 || 1 || 2]?.url}
                />
              ))}
            </DraggableItems>
          </div>
        )}
        {albums?.length > 0 && (
          <div className="flex flex-col py-5 border-t border-t-zinc-300 dark:border-t-slate-800">
            <div className="flex items-center justify-start gap-2">
              <RectangleStackIcon className="h-5 w-5" />
              <h2>Albuns</h2>
            </div>
            <DraggableItems>
              {albums.map((album) => (
                <CardItem
                  id={album.id}
                  title={album.name}
                  image={album.images[0 || 1 || 2].url}
                />
              ))}
            </DraggableItems>
          </div>
        )}
        {tracks?.length > 0 && (
          <div className="py-5 border-t border-t-zinc-300 dark:border-t-slate-800">
            <div className="flex items-center justify-start gap-2">
              <MusicalNoteIcon className="h-5 w-5" />
              <h2>Músicas</h2>
            </div>
            {tracks.map(
              (track: TSpotifySearchTracksItem) =>
                track?.preview_url && (
                  <div
                    className="border-b dark:border-b-slate-800 border-b-zinc-300 py-3 flex gap-3"
                    onClick={() =>
                      setCurrentTrack({
                        author: track?.artists.map((artist) => artist.name),
                        trackName: track.name,
                        trackUrl: track.preview_url,
                        image: track?.album.images?.[0 || 1 || 2]?.url,
                      })
                    }
                  >
                    <img
                      className="rounded-md w-16 h-16"
                      src={track?.album?.images?.[0 || 1 || 2].url}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <h2 className="text-lg md:w-full w-64 whitespace-nowrap truncate">
                        {track?.name}
                      </h2>
                      <h3 className="text-sm md:w-full w-64 whitespace-nowrap truncate">
                        {track?.artists.map((artist) => artist.name)}
                      </h3>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>

      <div
        className={`
        bg-zinc-50 border-t border-t-zinc-200 dark:border-t-slate-700 dark:bg-slate-800 pt-2 w-full left-0 fixed bottom-0 flex justify-center items-center duration-300 ease-out transition-transform ${
          currentTrack ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-start items-center container mx-auto px-4">
          <div className="flex gap-2 w-52">
            <img
              className="w-16 h-16 rounded-md"
              src={currentTrack?.image}
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-sm whitespace-nowrap w-28 truncate">
                {currentTrack?.trackName}
              </span>
              <span className="dark:text-zinc-400 text-slate-700 text-xs w-28 whitespace-nowrap truncate">
                {currentTrack?.author}
              </span>
            </div>
          </div>
          <AudioPlayer
            showJumpControls={false}
            autoPlay
            src={currentTrack?.trackUrl}
            onPlay={(e) => console.log("onPlay")}
            // other props here
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
