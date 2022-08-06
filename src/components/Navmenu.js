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
import { Link } from "react-router-dom";
import { useAppState } from "../api/ContextApi";

export default function Navmenu({ dark, darkMode, darkModeText }) {
  const { searchTerm, getSearchResult } = useAppState();
  return (
    <>
      <Navbar
        id="header"
        fixed="top"
        bg={darkMode}
        variant={darkMode}
        expand="lg"
        className="mb-3"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" width={30} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-false-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-false-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-false-${false}`}
            placement="end"
          >
            <Offcanvas.Header
              className={`bg-${darkMode} text-${darkModeText}`}
              closeButton
            >
              <Offcanvas.Title
                className=" m-auto"
                id={`offcanvasNavbarLabel-false-${false}`}
              >
                <img src={logo} alt="logo" width={80} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={`bg-${darkMode} text-${darkModeText}`}>
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
                    value={searchTerm}
                    onChange={getSearchResult}
                  />
                  <InputGroup.Text className="text-primary">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                  </InputGroup.Text>
                </InputGroup>
              </Form>
              <div className="d-flex justify-content-center align-items-center mx-2 mt-2">
                <Form.Check
                  type="switch"
                  onClick={dark}
                  label={darkMode.toUpperCase()}
                />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
