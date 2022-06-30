import React from "react";
import { Col, Row } from "react-bootstrap";
import Tab from "../components/Tabs/Tab";

export default function About() {
  return (
    <section id="about">
      <Row>
        <Col xs="12" sm="12" md="6">
          <h1 className="text-secondary">About me 😎</h1>
          <Tab />
        </Col>
        <Col>
          <h1 className="text-primary">Image</h1>
        </Col>
      </Row>
    </section>
  );
}
