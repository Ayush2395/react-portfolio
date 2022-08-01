import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Services() {
  const fadeIn = {
    hide: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, type: "tween" },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    isInView ? control.start("visible") : control.start("hide");
  }, [control, isInView]);
  return (
    <>
      <section ref={ref} id="services" className="bg-warning">
        <motion.div
          variants={fadeIn}
          initial="hide"
          animate={control}
          className="main container"
        >
          <Row>
            <Col xs="12" sm="12" md="6" lg="6">
              <h1 className="display-2 fw-bold">Services |</h1>
              <h1 className="display-2 fw-bold">Offer</h1>
              <p className="intro">
                I'll help ambitious business like your generate more profits by
                building awareness, driving, connecting with customers and
                growing overall sales.
              </p>
              <div className="logo mx-4 my-4">
                <img src={logo} alt="logo" />
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6">
              <Row className="mt-3">
                <hr />
                <Col xs="3">
                  <p className="fs-5">01/</p>
                </Col>
                <Col xs="9">
                  <p className="display-4">Web UI/UX</p>
                  <p className="display-4">Design</p>
                </Col>
              </Row>
              <Row>
                <hr />
                <Col xs="3">
                  <p className="fs-5">02/</p>
                </Col>
                <Col xs="9">
                  <p className="display-4">Frontend</p>
                  <p className="display-4">Design</p>
                </Col>
              </Row>
              <Row>
                <hr />
                <Col xs="3">
                  <p className="fs-5">03/</p>
                </Col>
                <Col xs="9">
                  <p className="display-4">Full-Stack</p>
                  <p className="display-4">Web App</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </section>
    </>
  );
}
