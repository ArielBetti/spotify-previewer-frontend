import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AppRoutes from "./routes";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <div className={"transition-colors bg-zinc-100 min-h-screen text-black dark:bg-slate-900 dark:text-white py-24"}>
        <div className="container mx-auto px-4">
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </div>
      </div>
    </RecoilRoot>
  </React.StrictMode>
);
