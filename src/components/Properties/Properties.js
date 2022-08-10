import React from "react";
import PropertyCard from "./Property/PropertyCard";
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
      <Row xs={1} md={2}>
        {properties.map((property) => (
          <Col md={3} xs={6}>
            <PropertyCard property={property} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Properties;
