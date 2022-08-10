import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProperties } from "./actions/properties.js";
import AppRouter from "./AppRouter.js";
import { NavLink, BrowserRouter } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="home">Property Management App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/properties">
                Properties
              </Nav.Link>
              <Nav.Link as={NavLink} to="/tenants">
                Tenants
              </Nav.Link>
              <Nav.Link as={NavLink} to="/tasks">
                Tasks & Alerts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
