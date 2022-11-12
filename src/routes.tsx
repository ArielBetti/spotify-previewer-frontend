import { Routes, Route } from "react-router-dom";
import { Auth, Home, Login, Logout } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth" element={<Auth />}>
        <Route path=":token" />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default AppRoutes;
