import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

// types
import type { TCardItem } from "./types";

// ::
const CardItem: FC<TCardItem> = ({ author, id, image, name, type }) => {
  const navigate = useNavigate();

  return (
    <button
      className="text-left select-none flex flex-col w-36 h-44 gap-1 min-h-fit min-w-fit"
      onClick={() => navigate(`/${type}/${id}`)}
    >
      {image ? (
        <LazyLoadImage
          effect="blur"
          loading="lazy"
          className="cursor-pointer w-32 h-32 rounded-md shadow-md"
          draggable={false}
          src={image}
          alt={`Image of ${name}`}
        />
      ) : (
        <div className="cursor-pointer w-32 h-32 rounded-md shadow-md bg-spotify-green"></div>
      )}
      <h2 className="w-28 text-sm whitespace-nowrap truncate">{name}</h2>
      {author && (
        <h3 className="w-28 text-sm whitespace-nowrap truncate text-slate-700 dark:text-slate-400">
          {author}
        </h3>
      )}
    </button>
  );
};

export default CardItem;
