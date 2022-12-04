import { FC } from "react";
import { Oval } from "react-loader-spinner";

// types
import type { TInlineLoaderProps } from "./types";

// ::
const InlineLoader: FC<TInlineLoaderProps> = ({ open, text }) => {
  if (!open) return null;

  return (
    <div className="flex max-w-md py-2 gap-2 items-center justify-start">
      <Oval
        width={20}
        height={20}
        wrapperStyle={{}}
        color="#1DB954"
        secondaryColor="#11913f"
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      {text}
    </div>
  );
};

export default InlineLoader;
