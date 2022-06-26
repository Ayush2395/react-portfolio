import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTypewriter } from "react-simple-typewriter";

export default function LandingPage() {
  const { text } = useTypewriter({
    words: ["Front-End Developer", "Back-End Developer", "UI/UX Developer"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <section className="mt-5">
      <Row>
        <Col xs="12" sm="12" md="6" lg="6">
          <p className="text-primary">Image</p>
        </Col>
        <Col xs="12" sm="12" md="6" lg="6">
          <p className="text-primary fs-4">Hi!..., I'm</p>
          <h1 className="text-secondary display-1">Ayush</h1>
          <h1 className="text-primary fs-5">
            {/* <Typewriter
              words={[
                "Front-End Developer",
                "Back-End Developer",
                "UI/UX Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="*"
              typeSpeed={50}
              deleteSpeed={70}
              delaySpeed={1500}
            /> */}
            {text}
          </h1>
        </Col>
      </Row>
    </section>
  );
}
