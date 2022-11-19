import { FC } from "react";
import { IInputProps } from "./types";

const Input: FC<IInputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col w-full">
      {label && <label>{label}</label>}
      <input
        className="bg-white text-black placeholder:text-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-gray-400 p-2 rounded-sm shadow-sm focus:outline-none w-full"
        {...props}
      />
    </div>
  );
};

export default Input;
