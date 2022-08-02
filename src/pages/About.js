import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { SiBootstrap, SiAdobexd, SiFirebase } from "react-icons/si";
import { motion, useInView, useAnimation } from "framer-motion";

export default function About() {
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
      <section ref={ref} className="about_section" id="about">
        <motion.div
          variants={fadeIn}
          initial="hide"
          animate={control}
          className="main container"
        >
          <Row>
            <Col xs="12" sm="12" md="6" lg="6">
              <h1 className="display-1 fw-normal">Skills &</h1>
              <h1 className="display-1 fw-normal">Education</h1>
              <p className="intro">
                🦋 A spcialist in UI/UX design. ✨ A passion of mine is
                designing and solving problems through user experience, 😊
                primarly on modern web UI.
              </p>
              <p className="fs-3 text-info mt-4">Skills</p>
              <Row className="mb-4 mt-4">
                <Col xs="4">
                  <div className="circle_btn">
                    <FontAwesomeIcon
                      className="fa-bounce"
                      icon="fa-solid fa-swatchbook"
                    />
                  </div>
                  <p className="m-auto">Visual Design</p>
                </Col>
                <Col xs="4">
                  <div className="circle_btn">
                    <DiReact className="fa-bounce" size="35px" />
                  </div>
                  <p className="m-auto">ReactJs</p>
                </Col>
                <Col xs="4">
                  <div className="circle_btn">
                    <TbBrandJavascript className="fa-bounce" />
                  </div>
                  <p className="m-auto">JavaScript</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs="4">
                  <div className="circle_btn">
                    <SiBootstrap className="fa-bounce" />
                  </div>
                  <p className="m-auto">Bootstrap</p>
                </Col>
                <Col xs="4">
                  <div className="circle_btn">
                    <SiAdobexd className="fa-bounce" />
                  </div>
                  <p className="m-auto">Adobe XD</p>
                </Col>
                <Col xs="4">
                  <div className="circle_btn">
                    <SiFirebase className="fa-bounce" />
                  </div>
                  <p className="m-auto">Firebase</p>
                </Col>
              </Row>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6">
              <p className="fs-2 text-info mt-3">Education</p>
              <Row className="mt-3">
                <hr />
                <Col xs="3">
                  <p className="fs-5">2017</p>
                </Col>
                <Col xs="9">
                  <p className="fs-5">Matriculation</p>
                  <p className="fs-4 fw-bold text-primary">
                    Govt. Model Sen. Sec. Smart School
                  </p>
                  <p>Ludhiana, Punjab</p>
                </Col>
              </Row>
              <Row>
                <hr />
                <Col xs="3">
                  <p className="fs-5">2019</p>
                </Col>
                <Col xs="9">
                  <p className="fs-5">Non-Medical</p>
                  <p className="fs-4 fw-bold text-primary">
                    Govt. Model Sen. Sec. Smart School
                  </p>
                  <p>Ludhiana, Punjab</p>
                </Col>
              </Row>
              <Row>
                <hr />
                <Col xs="3">
                  <p className="fs-5">Pursuing</p>
                </Col>
                <Col xs="9">
                  <p className="fs-5">B.Tech in CSE</p>
                  <p className="fs-4 fw-bold text-primary">
                    Gulzar Group of Institutes
                  </p>
                  <p>Khanna, Punjab</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </section>
    </>
  );
}
