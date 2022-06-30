import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Image, Row, Stack } from "react-bootstrap";
import { useTypewriter } from "react-simple-typewriter";

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
              <h1 className="text-secondary display-1">Ayush</h1>
              <div className="stroke"></div>
              <h1 className="text-primary fs-3 d-inline">{text}*</h1>
              <div className="stroke-2 mt-3"></div>
              <Stack direction="horizontal" gap="5">
                <a href="#about" className="mt-3 mb-5 border-none btn">
                  About me 😀 <FontAwesomeIcon icon="fa fa-arrow-down" />
                </a>
                <a href="#contact" className="mt-3 mb-5 border-none btn">
                  Contact me 🤙
                </a>
              </Stack>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
