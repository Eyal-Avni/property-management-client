import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProperty } from "../../actions/properties";

const NewPropertyForm = () => {
  const [propertyData, setpropertyData] = useState({
    city: "",
    street: "",
    number: NaN,
    floor: NaN,
    apt: NaN,
    size: NaN,
    rooms: NaN,
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProperty(propertyData));
  };
  return (
    <Container className="mb-3 mt-3">
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formAddress">
          <InputGroup className="mb-3">
            <InputGroup.Text>Address</InputGroup.Text>

            <Col xs={6}>
              <FloatingLabel
                name="city"
                label="City"
                aria-required
                value={propertyData.city}
                onChange={(e) =>
                  setpropertyData({ ...propertyData, city: e.target.value })
                }
              >
                <Form.Control aria-label="City" />
              </FloatingLabel>
              <FloatingLabel
                name="street"
                label="Street"
                aria-required
                value={propertyData.street}
                onChange={(e) =>
                  setpropertyData({ ...propertyData, street: e.target.value })
                }
              >
                <Form.Control aria-label="Street" />
              </FloatingLabel>
              <FloatingLabel
                name="number"
                label="Number"
                aria-required
                value={propertyData.number}
                onChange={(e) =>
                  setpropertyData({ ...propertyData, number: e.target.value })
                }
              >
                <Form.Control aria-label="Number" />
              </FloatingLabel>
            </Col>

            <Col Col xs={5}>
              <FloatingLabel
                name="floor"
                label="Floor"
                aria-required
                value={propertyData.floor}
                onChange={(e) =>
                  setpropertyData({ ...propertyData, floor: e.target.value })
                }
              >
                <Form.Control aria-label="Floor" />
              </FloatingLabel>
              <FloatingLabel
                name="apt"
                label="Apt"
                aria-required
                value={propertyData.apt}
                onChange={(e) =>
                  setpropertyData({ ...propertyData, apt: e.target.value })
                }
              >
                <Form.Control aria-label="Apt" />
              </FloatingLabel>
            </Col>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Size</InputGroup.Text>
            <FloatingLabel
              name="size"
              label="Size"
              aria-required
              value={propertyData.size}
              onChange={(e) =>
                setpropertyData({ ...propertyData, size: e.target.value })
              }
            >
              <Form.Control aria-label="Size" />
            </FloatingLabel>
            <InputGroup.Text>m²</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Number of Rooms</InputGroup.Text>
            <FloatingLabel
              name="rooms"
              label="No. of rooms"
              aria-required
              value={propertyData.rooms}
              onChange={(e) =>
                setpropertyData({ ...propertyData, rooms: e.target.value })
              }
            >
              <Form.Control aria-label="Rooms" />
            </FloatingLabel>
          </InputGroup>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default NewPropertyForm;