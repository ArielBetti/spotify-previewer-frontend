import { FC } from "react";

// types
import type { IButtonProps } from "./types";

// ::
const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-spotify-green hover:bg-spotify-green-200  px-3 py-2 rounded-sm shadow-sm"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
