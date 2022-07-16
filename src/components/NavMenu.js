import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.png";

export default function NavMenu() {
  return (
    <>
      <Navbar bg="dark" fixed="top" variant="dark" expand="lg" id="header">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" width={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
