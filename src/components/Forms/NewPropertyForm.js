import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { createProperty } from "../../actions/properties";
import Container from "react-bootstrap/Container";
import { useFormik } from "formik";
import { propertySchema } from "../../schemas";
import { useNavigate } from "react-router-dom";

const NewPropertyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log("submiting");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(createProperty(values));
    actions.resetForm();
    navigate("/properties");
  };

  const onClick = (actions) => {
    actions.resetForm();
  };
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
    isSubmitting,
    handleReset,
  } = useFormik({
    initialValues: {
      city: "",
      street: "",
      number: "",
      floor: "",
      apt: "",
      size: "",
      rooms: "",
    },
    validationSchema: propertySchema,
    onSubmit,
    onClick,
  });

  return (
    <Container>
      <Form noValidate onSubmit={handleSubmit}>
        <h3>New property</h3>
        <Row className="mb-3">
          <h6>Address</h6>
          <Form.Group lg="4" as={Col}>
            <Form.Control
              id="city"
              type="text"
              placeholder="City"
              value={values.city}
              onChange={handleChange}
              isInvalid={!!errors.city}
              isValid={touched.city && !errors.city}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group lg="4" as={Col}>
            <Form.Control
              id="street"
              type="text"
              placeholder="Street"
              value={values.street}
              onChange={handleChange}
              isInvalid={!!errors.street}
              isValid={touched.street && !errors.street}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.street}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group lg="4" as={Col}>
            <Form.Control
              id="number"
              type="text"
              placeholder="Number"
              value={values.number}
              onChange={handleChange}
              isInvalid={!!errors.number}
              isValid={touched.number && !errors.number}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.number}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group lg="6" as={Col}>
            <Form.Control
              id="floor"
              type="text"
              placeholder="Floor"
              value={values.floor}
              onChange={handleChange}
              isInvalid={!!errors.floor}
              isValid={touched.floor && !errors.floor}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.floor}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group lg="6" as={Col}>
            <Form.Control
              id="apt"
              type="text"
              placeholder="Apartment"
              value={values.apt}
              onChange={handleChange}
              isInvalid={!!errors.apt}
              isValid={touched.apt && !errors.apt}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.apt}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <h6>Additional details</h6>
          <Form.Group lg="6" as={Col}>
            <Form.Control
              id="size"
              type="text"
              placeholder="Size"
              value={values.size}
              onChange={handleChange}
              isInvalid={!!errors.size}
              isValid={touched.size && !errors.size}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.size}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group lg="6" as={Col}>
            <Form.Control
              id="rooms"
              type="text"
              placeholder="No. of rooms"
              value={values.rooms}
              onChange={handleChange}
              isInvalid={!!errors.rooms}
              isValid={touched.rooms && !errors.rooms}
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.rooms}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button disabled={isSubmitting} type="submit">
          Submit form
        </Button>
        <Button variant="danger" onClick={handleReset}>
          Clear
        </Button>
      </Form>
    </Container>
  );
};

export default NewPropertyForm;
