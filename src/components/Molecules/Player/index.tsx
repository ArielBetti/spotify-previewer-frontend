import { FC, memo } from "react";
import { useRecoilValue } from "recoil";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { atomCurrentTrack, atomUser } from "../../../store/atoms";

const Player: FC = () => {
  const user = useRecoilValue(atomUser);
  const currentTrack = useRecoilValue(atomCurrentTrack);

  if (!currentTrack?.uri || !user) return null;

  return (
    <div className="fixed w-screen bg-gray-100 dark:bg-slate-800 left-0 bottom-0 pt-3 dark:border-t dark:border-t-slate-700 border-t border-t-gray-300">
      <div className="flex w-full container mx-auto px-4">
        <div className="flex max-w-lg gap-2 overflow-hidden">
          {currentTrack?.image ? (
            <img
              className="h-16 w-16 rounded-md shadow-md"
              src={currentTrack.image}
              alt=""
            />
          ) : (
            <div className="h-16 w-16 rounded-md shadow-md"></div>
          )}
          <div className="flex flex-col">
            <h2 className="text-sm w-28 whitespace-nowrap truncate">
              {currentTrack.name}
            </h2>
            <h2 className="text-sm w-28 whitespace-nowrap truncate text-slate-700 dark:text-slate-400">
              {currentTrack.name}
            </h2>
          </div>
        </div>
        <AudioPlayer
          autoPlay
          src={currentTrack?.uri}
          showJumpControls={false}
        />
      </div>
    </div>
  );
};

export default memo(Player);
