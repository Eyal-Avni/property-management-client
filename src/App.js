import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProperties } from "./actions/properties.js";
import AppRouter from "./AppRouter.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="home">Property Management App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="properties">Properties</Nav.Link>
            <Nav.Link href="tenants">Tenants</Nav.Link>
            <Nav.Link href="tasks">Tasks & Alerts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <AppRouter />
    </>
  );
};

export default App;
