import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProperty } from "../../actions/properties";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const NewPropertyForm = () => {
  const [propertyData, setpropertyData] = useState({
    city: null,
    street: null,
    number: null,
    floor: null,
    apt: null,
    size: null,
    rooms: null,
  });

  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    dispatch(createProperty(propertyData));
    navigate("/properties");
  };

  const clear = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = null)
    );
    setpropertyData({
      city: null,
      street: null,
      number: null,
      floor: null,
      apt: null,
      size: null,
      rooms: null,
    });
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3>New property</h3>
        <Row className="mb-3">
          <h6>Address</h6>
          <Form.Group lg="4" as={Col}>
            <Form.Control
              required
              type="text"
              placeholder="City"
              name="city"
              value={propertyData.city}
              onChange={(e) =>
                setpropertyData({ ...propertyData, city: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              This line is required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group lg="4" as={Col}>
            <Form.Control
              required
              type="text"
              placeholder="Street"
              name="street"
              value={propertyData.street}
              onChange={(e) =>
                setpropertyData({ ...propertyData, street: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              This line is required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group lg="4" as={Col}>
            <Form.Control
              required
              type="text"
              placeholder="Number"
              name="number"
              value={propertyData.number}
              onChange={(e) =>
                setpropertyData({ ...propertyData, number: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              This line is required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group lg="6" as={Col}>
            <Form.Control
              type="text"
              placeholder="Floor"
              name="floor"
              value={propertyData.floor}
              onChange={(e) =>
                setpropertyData({ ...propertyData, floor: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group lg="6" as={Col}>
            <Form.Control
              type="text"
              placeholder="Apartment"
              name="apt"
              value={propertyData.apt}
              onChange={(e) =>
                setpropertyData({ ...propertyData, apt: e.target.value })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <h6>Additional details</h6>
          <Form.Group lg="6" as={Col}>
            <InputGroup>
              <Form.Control
                required
                type="text"
                placeholder="Size"
                name="size"
                value={propertyData.size}
                onChange={(e) =>
                  setpropertyData({ ...propertyData, size: e.target.value })
                }
              />
              <InputGroup.Text>m²</InputGroup.Text>
            </InputGroup>

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              This line is required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group lg="6" as={Col}>
            <Form.Control
              required
              type="text"
              placeholder="No. of rooms"
              name="rooms"
              value={propertyData.rooms}
              onChange={(e) =>
                setpropertyData({ ...propertyData, rooms: e.target.value })
              }
            />

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              This line is required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
        <Button variant="danger" onClick={clear} value="Reset">
          Clear
        </Button>
      </Form>
    </Container>
  );
};

export default NewPropertyForm;
