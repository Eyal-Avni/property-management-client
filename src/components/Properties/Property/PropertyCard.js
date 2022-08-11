import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <Card className="mb-4">
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
        <Link to={`/properties/${property._id}`}>
          <ListGroup.Item>Full Details</ListGroup.Item>
        </Link>
      </ListGroup>
    </Card>
  );
};

export default PropertyCard;
