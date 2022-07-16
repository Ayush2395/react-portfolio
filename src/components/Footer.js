import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <p className="text-secondary d-flex justify-content-center align-items-center">
              This portfolio developed 💻 by Ayush 😀 &copy; 2022
            </p>
          </Col>
        </Row>
      </footer>
    </>
  );
}
