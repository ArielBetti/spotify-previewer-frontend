import { lazy, Suspense } from "react";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import { useRecoilValue } from "recoil";
import { atomUser } from "../../../store/atoms";
import InlineLoader from "../../Atoms/InlineLoader";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../../Atoms/ThemeToggle";

const UserMenu = lazy(() => import("../../Atoms/UserMenu"));

const Header = () => {
  const navigate = useNavigate();

  const isLogged = useRecoilValue(atomUser);

  return (
    <div className="z-20 shadow-md fixed left-0 top-0 w-full h-16 bg-gray-200 border-b border-b-gray-300 dark:bg-slate-800 dark:border-b-slate-600">
      <div className="flex h-full w-full justify-between items-center container mx-auto px-4">
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer flex gap-1 items-center"
        >
          <MusicalNoteIcon className="h-6 w-6 text-spotify-green" />
          <h1 className="text-xl font-bold">Xpotify Lite</h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <ThemeToggle />
          <Suspense fallback={<InlineLoader open />}>
            {isLogged && <UserMenu />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Header;
