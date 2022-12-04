import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { atomUser } from "../../../store/atoms";
import ThemeToggle from "../ThemeToggle";

const UserMenu = () => {
  const navigate = useNavigate();

  // local: states
  const [open, setOpen] = useState<boolean>(false);

  // recoil: states
  const user = useRecoilValue(atomUser);

  const onClickButton = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <button onClick={() => onClickButton()} className="flex items-center justify-center">
          <img
            className="h-10 w-10 rounded-full shadow-md cursor-pointer"
            src={user.image}
            alt={`User avatar ${user.name}`}
          />
        </button>
        <div
          className={`${
            open ? "visible opacity-100" : "invisible opacity-0"
          } transition-opacity flex flex-col gap-3 justify-start items-start p-3 h-auto w-40 right-0 bottom-100 absolute bg-gray-100 dark:bg-slate-800 rounded-md shadow-lg border border-gray-300 dark:border-slate-600 mt-1`}
        >
          <div className="flex flex-wrap">
            <h2>
              <span className="font-semibold">Hello</span>{" "}
              <span className="text-sm text-spotify-green">{user.name}</span>
            </h2>
          </div>
          <button
            onClick={() => navigate("/logout")}
            aria-label="Click to app logout"
            className="flex items-center justify-start gap-2 hover:text-white bg-gray-200 dark:bg-slate-900 w-full text-left p-2 rounded-md hover:bg-spotify-green-200 transition-colors"
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(UserMenu);
