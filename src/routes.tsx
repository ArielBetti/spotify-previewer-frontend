import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Auth, Home, Login, Logout } from "./pages";

const AppRoutes = () => {
  const [lightTheme, setLightTheme] = useState(false);

  useEffect(() => {
    lightTheme ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [lightTheme]);

  return (
    <div>
      <button onClick={() => setLightTheme(!lightTheme)}>set</button>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth" element={<Auth />}>
        <Route path=":token" />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
    </div>
  );
};

export default AppRoutes;
