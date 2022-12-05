import React from "react";
import ReactDOM from "react-dom/client";

import { RecoilRoot } from "recoil";

import "./global.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import App from "./core/app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
