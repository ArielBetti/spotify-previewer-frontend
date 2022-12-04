import { FC } from "react";
import { THeroProps } from "./types";

const Hero: FC<THeroProps> = ({ name, image }) => {
  return (
    <div className="flex w-full pt-3 pb-10 gap-6 flex-wrap lg:flex-row flex-col lg:justify-start lg:items-center items-center justify-center">
      {image ? (
        <img
          className="h-40 w-40 rounded-full shadow-lg"
          src={image}
          alt={`${name} image`}
        />
      ) : (
        <div className="h-40 w-40 rounded-full shadow-lg bg-spotify-green"></div>
      )}
      <h2 className="lg:text-4xl text-xl border-b border-b-spotify-green">
        {name}
      </h2>
    </div>
  );
};

export default Hero;
