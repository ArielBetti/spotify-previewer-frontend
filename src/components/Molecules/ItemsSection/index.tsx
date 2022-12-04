import { AtSymbolIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRecoilValue } from "recoil";
import { atomAlbums, atomArtists } from "../../../store/atoms";
import CardItem from "../../Atoms/CardItem";
import DraggableItems from "../DraggableItems";

const ItemsSection = () => {
  // recoil: states
  const artists = useRecoilValue(atomArtists);
  const albums = useRecoilValue(atomAlbums);

  return (
    <div className="flex flex-col gap-5">
      {artists?.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center justify-start">
            <AtSymbolIcon className="h-5 w-5" />
            <h2>Artists</h2>
          </div>
          <DraggableItems>
            {artists.map((artist) => (
              <CardItem
                type="artist"
                id={artist.id}
                name={artist.name}
                image={artist?.images?.[0 || 1 || 2]?.url}
              />
            ))}
          </DraggableItems>
        </div>
      )}
      {artists?.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center justify-start">
            <Square3Stack3DIcon className="h-5 w-5" />
            <h2>Albums</h2>
          </div>
          <DraggableItems>
            {albums.map((album) => (
              <CardItem
                type="album"
                id={album.id}
                name={album.name}
                image={album?.images?.[0 || 1 || 2]?.url}
                author={album?.artists?.map((artist) => artist?.name)}
              />
            ))}
          </DraggableItems>
        </div>
      )}
    </div>
  );
};

export default ItemsSection;
