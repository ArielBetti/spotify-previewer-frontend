import React, { FC } from "react";
import { TCardItem } from "./types";

const CardItem: FC<TCardItem> = ({ id, title, image }) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-center min-w-fit">
      {image ? (
        <img className="rounded-md shadow-md h-32 w-32" draggable={false} src={image} alt={`Foto do ${title}`} />
      ) : (
        <div className="rounded-md shadow-md h-32 w-32 bg-spotify-green"></div>
      )}
      <h2 className="text-sm whitespace-nowrap w-32 truncate">{title}</h2>
    </div>
  );
};

export default CardItem;
