import React from "react";
import Properties from "./components/Properties/Properties";
import Tenants from "./components/Tenants/Tenants";
import Tasks from "./components/Tasks/Tasks";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
