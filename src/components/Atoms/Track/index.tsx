import { FC, useMemo } from "react";
import { useRecoilState } from "recoil";

// loader
import { Audio } from "react-loader-spinner";

// icons
import { PlayIcon } from "@heroicons/react/24/solid";

// recoil: atoms
import { atomCurrentTrack } from "../../../store/atoms";

// types
import type { TTrackProps } from "./types";

// ::
const Track: FC<TTrackProps> = ({ authors, image, name, uri }) => {
  // recoil: states
  const [currentTrack, setTrack] = useRecoilState(atomCurrentTrack);

  // memo: states
  const currentPlaying = useMemo(
    () => currentTrack?.uri === uri,
    [currentTrack]
  );

  const onPlayTrack = () =>
    setTrack({
      name,
      uri,
      image,
    });

  return (
    <div className="flex gap-3 w-full">
      {image ? (
        <img
          className="h-16 w-16 rounded-md shadow-md"
          src={image}
          alt={`Image for ${name}`}
        />
      ) : (
        <div className="h-16 w-16 rounded-md shadow-md"></div>
      )}
      <div className="flex flex-col justify-start items-start overflow-hidden">
        <h2 className="lg:w-80 w-44 whitespace-nowrap truncate">{name}</h2>
        {authors && (
          <h2 className="lg:w-full w-44 whitespace-nowrap truncate text-sm text-slate-700 dark:text-slate-400">
            {authors}
          </h2>
        )}
        {currentPlaying ? (
          <Audio
            height={16}
            width={16}
            color="#1DB954"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        ) : (
          <button
            aria-label={`click for play track ${name}`}
            onClick={() => onPlayTrack()}
          >
            <PlayIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Track;
