import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import { FC, memo } from "react";
import { useRecoilValue } from "recoil";
import { atomTracks } from "../../../store/atoms";
import SectionHeader from "../../Atoms/SectionHeader";
import Track from "../../Atoms/Track";
import { TTrackListProps } from "./types";

const TrackList: FC<TTrackListProps> = ({
  albumImage,
  otherTracks,
  forceOtherTracks,
}) => {
  // recoil: states
  const tracks = useRecoilValue(atomTracks);

  const TrackSectionHeader = () => (
    <SectionHeader
      icon={<MusicalNoteIcon className="h-5 w-5" />}
      title="Tracks"
    />
  );

  if (otherTracks) {
    if (otherTracks.length === 0) return null;

    return (
      <div className="flex flex-col gap-2 justify-start items-start w-full">
        <TrackSectionHeader />
        {otherTracks?.map(
          (track) =>
            track?.preview_url && (
              <div
                key={track?.id}
                className="py-3 border-t dark:border-t-slate-800 border-t-gray-300 w-full"
              >
                <Track
                  name={track.name}
                  uri={track.preview_url}
                  authors={track.artists?.map((artist) => artist.name)}
                  image={albumImage || track.album?.images?.[0 || 1 || 2]?.url}
                />
              </div>
            )
        )}
      </div>
    );
  }

  if (!forceOtherTracks && tracks.length > 0) {
    return (
      <div className="flex flex-col gap-2 justify-start items-start w-full">
        <TrackSectionHeader />
        {tracks.map(
          (track) =>
            track?.preview_url && (
              <div
                key={track?.id}
                className="py-3 border-t dark:border-t-slate-800 border-t-gray-300 w-full"
              >
                <Track
                  name={track.name}
                  uri={track.preview_url}
                  authors={track.artists?.map((artist) => artist.name)}
                  image={track.album.images?.[0 || 1 || 2]?.url}
                />
              </div>
            )
        )}
      </div>
    );
  }

  return null;
};

export default memo(TrackList);
