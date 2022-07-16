import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Image, Row, Stack } from "react-bootstrap";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    x: -450,
  },
  vissible: {
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.8,
      type: "spring",
      stiffness: 120,
    },
  },
};

const buttonEffect = {
  hover: {
    opacity: 0.8,
    boxShadow: "0px 0px 8px #00adb5",
    textShadow: "0px 0px 3px #eeeeee",
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

export default function LandingPage() {
  const { text } = useTypewriter({
    words: [
      "Front-End Developer 💻",
      "Back-End Developer 🎒",
      "UI/UX Developer 😎",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <section className="mt-5" id="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.8,
          type: "tween",
        }}
        className="main"
      >
        <div className="home_section">
          <Row>
            <Col
              className="d-flex justify-content-center align-items-center"
              xs={{ order: "first" }}
              sm={{ order: "last" }}
              md={6}
              lg="6"
            >
              <div className="profile_pic">
                <Image
                  width={300}
                  roundedCircle
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="profile-pic"
                />
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6">
              <div className="intro">
                <p className="text-primary fs-5">Hi!...</p>
                <p className="text-primary fs-5">I'm</p>
                <motion.div
                  variants={containerVariant}
                  initial="hidden"
                  animate="vissible"
                  transition={{
                    duration: 0.3,
                    delay: 1.5,
                    type: "spring",
                    stiffness: 120,
                  }}
                >
                  <h1 className="text-secondary display-1">Ayush</h1>
                </motion.div>

                <div className="stroke"></div>
                <h1 className="text-primary fs-3 d-inline">{text}*</h1>
                <div className="stroke-2 mt-3"></div>
                <Stack direction="horizontal" gap="5">
                  <motion.a
                    variants={buttonEffect}
                    whileHover="hover"
                    href="#about"
                    className="mt-3 mb-5 border-none btn"
                  >
                    About me 😀 <FontAwesomeIcon icon="fa fa-arrow-down" />
                  </motion.a>
                  <motion.a
                    variants={buttonEffect}
                    whileHover="hover"
                    href="#contact"
                    className="mt-3 mb-5 border-none btn"
                  >
                    Contact me 🤙
                  </motion.a>
                </Stack>
              </div>
            </Col>
          </Row>
        </div>
      </motion.div>
    </section>
  );
}
