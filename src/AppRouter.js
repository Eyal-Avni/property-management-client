import React from "react";
import PropertiesMain from "./components/Properties/PropertiesMain";
import Tenants from "./components/Tenants/Tenants";
import Tasks from "./components/Tasks/Tasks";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import PropertyFull from "./components/Properties/Property/PropertyFull";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import NewPropertyForm from "./components/Forms/NewPropertyForm";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/properties">
        <Route index element={<PropertiesMain />}></Route>
        <Route path=":id" element={<PropertyFull />} />
        <Route path="new" element={<NewPropertyForm />} />
      </Route>
      <Route path="/tenants" element={<Tenants />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
