import React from "react";
import Properties from "./Properties";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PropertiesMain = () => {
  return (
    <Container>
      <Row className="mb-3">
        <Col md={10} xs={10}>
          <h3>All properties:</h3>
        </Col>
        <Col md={2} xs={2}>
          <Link to={"/properties/new"}>
            <Button>Add new property</Button>
          </Link>
        </Col>
      </Row>
      <Properties />
    </Container>
  );
};

export default PropertiesMain;
