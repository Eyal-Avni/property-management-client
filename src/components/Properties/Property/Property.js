import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Property = ({ property }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Body>
        <Card.Title>
          {property.number} {property.street} {property.city}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Floor: {property.floor}</ListGroup.Item>
        <ListGroup.Item>Apartment number: {property.apt}</ListGroup.Item>
        <ListGroup.Item>Number of rooms: {property.rooms}</ListGroup.Item>
        <ListGroup.Item>Size: {property.size} m²</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Property;
