import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { useTypewriter } from "react-simple-typewriter";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiBuymeacoffee } from "react-icons/si";
import profile from "../assets/img/profile.png";
import { motion } from "framer-motion";

export default function Home() {
  const { text } = useTypewriter({
    words: ["Design", "Frontend", "Backend"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 70,
    delaySpeed: 1500,
  });
  return (
    <>
      <section id="home">
        <div className="main container">
          <Row className="mt-3">
            <Col xs="12" sm="12" md="6" lg="6">
              <h1 className="display-1 fw-bold">I Have</h1>
              <h1 className="display-1 fw-bold">{text}||</h1>
              <h1 className="display-1 fw-bold mb-3">Experience</h1>
              <p className="intro">
                Hi, I'm Ayush, Full-Stack Web Developer - creating bold & brave
                interface design and web application for companies all across
                the world.
              </p>
              <Stack direction="horizontal" gap="2">
                <a href="#contact" className="btn btn-primary">
                  Let's Talk&nbsp;
                  <FontAwesomeIcon
                    className="fa-bounce"
                    icon="fa-solid fa-paper-plane"
                  />
                </a>
                <a href="#projects" className="btn btn-light">
                  Projects&nbsp;
                  <FontAwesomeIcon
                    style={{ rotate: "-45deg" }}
                    className="fa-fade"
                    icon="fa-regular fa-circle-right"
                  />
                </a>
              </Stack>
              <div className="d-flex justify-content-between align-items-center flex-wrap social_media mt-4">
                <span className="">Check out my</span>

                <div className="d-flex justify-content-between align-items-center w-50 ">
                  <div className="circle_btn">
                    <a
                      href="https://github.com/Ayush2395"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                  <div className="circle_btn">
                    <a
                      href="https://instagram.com/official_mandal_saab"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillInstagram />
                    </a>
                  </div>
                  <div className="circle_btn">
                    <a
                      href="https://www.buymeacoffee.com/ayush27"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SiBuymeacoffee />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              xs={{ order: "first" }}
              sm="12"
              md={{ order: "last" }}
              lg="6"
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={profile}
                alt="profile"
                className="profile"
                width={380}
              />
            </Col>
          </Row>
          <motion.div
            initial={{ y: 20, rotate: 90 }}
            whileInView={{ y: 0 }}
            transition={{ yoyo: Infinity, duration: 0.5, type: "tween" }}
            className="scroll_down"
          >
            {"---Scroll Down-->"}
          </motion.div>
        </div>
      </section>
    </>
  );
}
