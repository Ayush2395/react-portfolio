import React from "react";
import { Col, Row } from "react-bootstrap";
import Tab from "../components/Tabs/Tab";
import { motion } from "framer-motion";
import logo from "../assets/img/logo.svg";

const containerVariant = {
  hidden: {
    opacity: 0,
    y: 450,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      type: "initial",
    },
  },
};

export default function About() {
  return (
    <>
      <motion.section
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        id="about"
      >
        <div className="main">
          <Row>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "last" }}
              md={{ order: "first" }}
            >
              <h1 className="text-secondary">About me 😎</h1>
              <Tab />
            </Col>
            <Col>
              <div
                className="d-flex justify-content-center align-items-center text-primary"
                style={{ minHeight: "90vh" }}
              >
                <img className="logo" src={logo} alt="logo" />
              </div>
            </Col>
          </Row>
        </div>
      </motion.section>
    </>
  );
}
