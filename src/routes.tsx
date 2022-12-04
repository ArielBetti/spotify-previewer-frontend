import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { TapumeLoader } from "./components";
import { Album, Artist, Auth, Login, Logout } from "./pages";

const Home = lazy(() => import("./pages/Home"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth" element={<Auth />}>
        <Route path=":token" />
      </Route>
      <Route
        path="/home"
        element={
          <Suspense fallback={<TapumeLoader open />}>
            <Home />
          </Suspense>
        }
      />
      <Route path="/artist" element={<Artist />}>
        <Route path=":id" />
      </Route>
      <Route path="/album" element={<Album />}>
        <Route path=":id" />
      </Route>
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default AppRoutes;
