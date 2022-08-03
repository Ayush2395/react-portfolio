import React from "react";
import { Card, Container } from "react-bootstrap";

export default function NoPageFound() {
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <div className="w-100" style={{ maxWidth: "600px" }}>
          <Card>
            <Card.Body>
              <Card.Title>Page not Found !!!...</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
