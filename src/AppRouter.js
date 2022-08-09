import React from "react";
import PropertiesMain from "./components/Properties/PropertiesMain";
import Tenants from "./components/Tenants/Tenants";
import Tasks from "./components/Tasks/Tasks";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<PropertiesMain />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
