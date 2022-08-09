import React from "react";
import Property from "./Property/Property";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Properties = () => {
  const properties = useSelector((state) => state.properties);
  console.log(properties);
  return !properties.length ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <Container>
      <h1>All properties:</h1>
      {properties.map((property) => (
        <Property property={property} />
      ))}
    </Container>
  );
};

export default Properties;
