import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const PropertyFull = () => {
  const { id } = useParams();

  const properties = useSelector((state) => state.properties);
  const property = Object.assign(
    {},
    ...properties.filter((res) => res._id === id)
  );

  return (
    <Container className="d-flex justify-content-center">
      <Card className="mt-3 ">
        <Card.Img
          align="center"
          variant="top"
          src="/House_clip_art.svg"
          style={{ width: "30%" }}
        />
        <Card.Body>
          <Card.Title>Full property details for ID - {id}</Card.Title>
          <Card.Text>
            Some freestyle description of the property - not yet implemanted
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Address -{property.number} {property.street}, {property.city}{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            floor: {property.floor}, Apartment Number: {property.apt}
          </ListGroup.Item>
          <ListGroup.Item>Size - {property.size}</ListGroup.Item>
          <ListGroup.Item>No. of rooms - {property.rooms}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link
            href="#"
            style={{
              textDecoration: "none",
            }}
          >
            <Button variant="danger">Remove</Button>
          </Card.Link>
          <Card.Link
            href="#"
            style={{
              textDecoration: "none",
            }}
          >
            <Button variant="info">Edit</Button>
          </Card.Link>
          <Card.Link>
            <Link
              to={"/properties"}
              style={{
                textDecoration: "none",
              }}
            >
              <Button>Back to all properties</Button>
            </Link>
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PropertyFull;
