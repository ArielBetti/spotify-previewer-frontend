import { FC } from "react";
import { IButtonProps } from "./types";

const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-spotify-green hover:bg-spotify-green-200 transition-colors px-3 py-2 rounded-sm shadow-sm"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
