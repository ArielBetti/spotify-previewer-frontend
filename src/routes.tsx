import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth, Home, Login } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth" element={<Auth />}>
        <Route path=":token" />
      </Route>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
