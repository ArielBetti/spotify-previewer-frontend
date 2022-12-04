import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { Header } from "../components";
import Player from "../components/Molecules/Player";
import AppRoutes from "../routes";
import { atomTheme } from "../store/atoms";

const App = () => {
  const theme = useRecoilValue(atomTheme);

  useEffect(() => {
    if (
      theme === "dark" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 transition-colors bg-gray-100 text-black dark:bg-slate-900 dark:text-white min-w-screen min-h-screen">
      <div className="container mx-auto px-4 pb-40 pt-24">
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </div>
      <Player />
    </div>
  );
};

export default App;
