import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const PageNotFound = () => {
  return (
    <Container className="mb-3">
      <Card style={{ width: "50%" }}>
        <Card.Img variant="top" src="/404.png" />
        <Card.Body>
          <Card.Title>
            Looks like you are lost, the page you are trying to reach does not
            exist
          </Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PageNotFound;
