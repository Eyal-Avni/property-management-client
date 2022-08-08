import React from "react";
import Property from "./Property/Property";
import { useSelector } from "react-redux";
import NewPropertyForm from "../Forms/NewPropertyForm";

const Properties = () => {
  const properties = useSelector((state) => state.properties);
  console.log(properties);
  return (
    <>
      <h1>Properties</h1>
      <NewPropertyForm />
      <Property />
    </>
  );
};

export default Properties;
