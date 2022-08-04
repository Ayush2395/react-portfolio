import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { Row, Col, Image, Button, Stack } from "react-bootstrap";
import { motion, useInView, useAnimation } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
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
      <section ref={ref} id="projects" className="bg-warning">
        <motion.div
          variants={fadeIn}
          initial="hide"
          animate={control}
          className="main container"
        >
          <Row>
            <Col xs="12" sm="12" md="4" lg="4">
              <Row>
                <Col>
                  <h1 className="display-1 fw-normal">Latest</h1>
                  <h1 className="display-1 fw-normal">Projects</h1>
                </Col>
              </Row>
              <Row>
                <Row>
                  <hr />
                  <Col xs="9">
                    <h1 className="fs-3">React Portfolio</h1>
                    <h1 className="fs-3">Web design</h1>
                  </Col>
                  <Col xs="3">
                    <a
                      href="https://github.com/Ayush2395/react-portfolio"
                      className="btn btn-primary circle_btn bg-primary"
                    >
                      <FontAwesomeIcon
                        icon="fa-solid fa-arrow-up"
                        className="fa-bounce"
                        style={{ rotate: "45deg" }}
                      />
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Image
                      className="w-100 justify-self-center"
                      rounded
                      fluid
                      src="https://user-images.githubusercontent.com/37956873/182311874-2ea5a05b-c696-4ff4-9543-b59571ce2441.png"
                      alt="website"
                      width={350}
                    />
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col xs="12" sm="12" md="4" lg="4" className="mb-4">
              <Row className="position-relative top-25 row-2 mb-5">
                <hr />
                <Col xs="9">
                  <h1 className="fs-3">Web Tools</h1>
                  <h1 className="fs-3">Page design</h1>
                </Col>
                <Col xs="3">
                  <a
                    href="https://github.com/Ayush2395/webtools"
                    className="btn btn-primary circle_btn bg-primary"
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-arrow-up"
                      className="fa-bounce"
                      style={{ rotate: "45deg" }}
                    />
                  </a>
                </Col>
                <Row className="mb-5">
                  <Col>
                    <Image
                      className="w-100 justify-self-center"
                      rounded
                      fluid
                      src="https://user-images.githubusercontent.com/37956873/182526315-bfb76127-1d7f-4342-b966-54a975890b9f.png"
                      alt="website"
                      width={350}
                    />
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col xs="12" sm="12" md="4" lg="4" className="mb-5">
              <Row className="position-relative top-0 mb-5">
                <hr />
                <Col xs="9">
                  <h1 className="fs-3">Speedmil</h1>
                  <h1 className="fs-3">Page design</h1>
                </Col>
                <Col xs="3">
                  <a
                    href="https://github.com/Ayush2395/Speedmil"
                    className="btn btn-primary circle_btn bg-primary"
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-arrow-up"
                      className="fa-bounce"
                      style={{ rotate: "45deg" }}
                    />
                  </a>
                </Col>
                <Row>
                  <Col>
                    <Image
                      className="d-block mb-3 w-100 justify-self-center"
                      rounded
                      fluid
                      src="https://user-images.githubusercontent.com/37956873/182526690-f74a5034-af56-45a1-9a50-7b6257af3a18.png"
                      alt="website"
                      width={350}
                    />
                    <Stack direction="horizontal" gap="3">
                      <a
                        href="https://github.com/Ayush2395?tab=repositories"
                        className="btn btn-light"
                        target="_blank"
                        rel="noreferrer"
                      >
                        More Projects{" "}
                        <AiFillGithub className="fa-fade" size="25px" />
                      </a>
                      <Button
                        onClick={() => {
                          navigate("/projects-display");
                        }}
                      >
                        Search projects{" "}
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                      </Button>
                    </Stack>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </section>
    </>
  );
}
