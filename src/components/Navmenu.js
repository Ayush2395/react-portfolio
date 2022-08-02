import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Form,
  InputGroup,
} from "react-bootstrap";
import logo from "../assets/img/logo.svg";

export default function Navmenu() {
  return (
    <>
      <Navbar id="header" fixed="top" bg="light" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" width={30} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-false-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-false-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-false-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                className=" m-auto"
                id={`offcanvasNavbarLabel-false-${false}`}
              >
                <img src={logo} alt="logo" width={80} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                {/* <Nav.Link href="#testimonials">Testimonials</Nav.Link> */}
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <Form className="d-flex searchForm">
                <InputGroup>
                  <Form.Control
                    type="search"
                    className="me-auto"
                    placeholder="project name"
                  />
                  <InputGroup.Text className="text-primary">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                  </InputGroup.Text>
                </InputGroup>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
