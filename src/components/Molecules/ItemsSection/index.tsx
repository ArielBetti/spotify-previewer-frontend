import { AtSymbolIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRecoilValue } from "recoil";
import { atomAlbums, atomArtists } from "../../../store/atoms";
import CardItem from "../../Atoms/CardItem";
import SectionHeader from "../../Atoms/SectionHeader";
import DraggableItems from "../DraggableItems";

const ItemsSection = () => {
  // recoil: states
  const artists = useRecoilValue(atomArtists);
  const albums = useRecoilValue(atomAlbums);

  return (
    <div className="flex flex-col gap-5">
      {artists?.length > 0 && (
        <div className="flex flex-col gap-3">
          <SectionHeader
            icon={<AtSymbolIcon className="h-5 w-5" />}
            title="Artists"
          />
          <DraggableItems>
            {artists.map((artist) => (
              <CardItem
                key={artist.id}
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
          <SectionHeader
            icon={<Square3Stack3DIcon className="h-5 w-5" />}
            title="Albums"
          />
          <DraggableItems>
            {albums.map((album) => (
              <CardItem
                key={album?.id}
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
