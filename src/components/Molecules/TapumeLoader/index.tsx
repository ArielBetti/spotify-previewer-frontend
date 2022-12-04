import { FC } from "react";

// loaders
import { Oval } from "react-loader-spinner";

// types
import type { TTapumeLoader } from "./types";

// ::
const TapumeLoader: FC<TTapumeLoader> = ({ open }) => {
  if (!open) return null;

  return (
    <div className="flex min-w-full min-h-screen overflow-hidden absolute top-0 left-0 items-center justify-center bg-opacity-75 bg-slate-900">
      <Oval
        width={100}
        height={100}
        wrapperStyle={{}}
        color="#1DB954"
        secondaryColor="#11913f"
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default TapumeLoader;
