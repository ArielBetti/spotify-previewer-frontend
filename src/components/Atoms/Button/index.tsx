import { FC } from "react";
import { IButtonProps } from "./types";

const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-pink-700 hover:bg-pink-800 transition-colors px-3 py-2 rounded-sm shadow-sm text-white"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
