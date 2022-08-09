import React from "react";
import NewPropertyForm from "../Forms/NewPropertyForm";
import Properties from "./Properties";
import Container from "react-bootstrap/Container";

const PropertiesMain = () => {
  return (
    <Container>
      <NewPropertyForm />
      <Properties />
    </Container>
  );
};

export default PropertiesMain;
