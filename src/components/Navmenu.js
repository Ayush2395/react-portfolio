import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navbar, Container, Nav, Form, InputGroup } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { useAppState } from "../api/ContextApi";
import { Link } from "react-router-dom";

export default function Navmenu({ dark, darkMode, darkModeText }) {
  const { searchTerm, getSearchResult } = useAppState();
  return (
    <>
      <Navbar
        collapseOnSelect
        variant={darkMode}
        bg={darkMode}
        expand="lg"
        id="header"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" width="35" />
          </Navbar.Brand>
          <Navbar.Toggle className="border border-0">
            <div className="toggle-icon bar-1"></div>
            <div className="toggle-icon bar-2"></div>
            <div className="toggle-icon bar-3"></div>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto me-sm-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <InputGroup className="searchForm mb-2">
              <Form.Control
                type="search"
                value={searchTerm}
                onChange={getSearchResult}
                className="me-auto"
                placeholder="search project"
              />
              <InputGroup.Text>
                <FontAwesomeIcon
                  className={`text-${darkModeText}`}
                  icon="fa-solid fa-magnifying-glass"
                />
              </InputGroup.Text>
            </InputGroup>
            <Form.Check
              type="switch"
              className="mx-2"
              onClick={dark}
              label={darkMode}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
