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
        <Col md={9} xs={9}>
          <h3>All properties:</h3>
        </Col>
        <Col md={3} xs={3}>
          <Link to={"/properties/new"}>
            <Button style={{ display: "block", width: "100%" }}>
              Add new property
            </Button>
          </Link>
        </Col>
      </Row>
      <Properties />
    </Container>
  );
};

export default PropertiesMain;
