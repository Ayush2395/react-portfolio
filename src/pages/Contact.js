import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import cv from "../assets/cv/cv.pdf";
import { motion, useInView, useAnimation } from "framer-motion";
import { useAppState } from "../api/ContextApi";
import { addDoc } from "firebase/firestore";

export default function Contact() {
  // Animation setup
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

  // form submission
  const { error, setError, messageCollection } = useAppState();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmissionForm = async (event) => {
    event.preventDefault();
    setError("");
    if (
      fname === "" ||
      lname === "" ||
      subject === "" ||
      email === "" ||
      message === ""
    )
      return setError({ error: true, msg: "Missing Fields" });

    const messageOBJ = {
      fname: fname,
      lname: lname,
      subject: subject,
      email: email,
      message: message,
    };

    await addDoc(messageCollection, messageOBJ)
      .then(() => {
        setError({ error: false, msg: "Your message is sent 😁" });
      })
      .catch((err) => {
        setError({ error: true, msg: err.code });
      });

    setFname("");
    setLname("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <>
      <section ref={ref} id="contact" className="bg-warning">
        <motion.div
          variants={fadeIn}
          initial="hide"
          animate={control}
          className="main container"
        >
          <h1 className="display-4 text-light">Let's Talk</h1>
          <Row>
            <Col xs="12" sm="12" md="6" lg="6">
              <Form onSubmit={handleSubmissionForm}>
                <Row>
                  <Col xs="12" sm="12" md="6" lg="6">
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light" htmlFor="fname">
                        First Name
                      </Form.Label>
                      <Form.Control
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        id="fname"
                        type="text"
                        placeholder="Jack"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="6">
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light" htmlFor="lname">
                        Last Name
                      </Form.Label>
                      <Form.Control
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        id="lname"
                        type="text"
                        placeholder="Olsen"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="6" lg="6">
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light" htmlFor="email">
                        Email
                      </Form.Label>
                      <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        type="email"
                        placeholder="example@mail.com"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="6">
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light" htmlFor="subject">
                        Subject
                      </Form.Label>
                      <Form.Control
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        id="subject"
                        type="text"
                        placeholder="Frontend work"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label className="text-light" htmlFor="message">
                    Message
                  </Form.Label>
                  <Form.Control
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    as="textarea"
                    id="message"
                    type="text"
                    placeholder="Hi!...😁"
                  />
                </Form.Group>
                <Button type="submit" className="mb-3 w-25" variant="primary">
                  Send{" "}
                  <FontAwesomeIcon
                    className="fa-bounce"
                    icon="fa-solid fa-paper-plane"
                  />
                </Button>
              </Form>
              {error?.msg && (
                <Alert
                  variant={error?.error ? "danger" : "success"}
                  dismissible
                  onClose={() => {
                    setError("");
                  }}
                >
                  {error.msg}
                </Alert>
              )}
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center contact_section"
              xs="12"
              sm="12"
              md="6"
              lg="6"
            >
              <div className="logo_2">
                <img className="d-block" width={150} src={logo} alt="logo" />
                <a href={cv} className="btn btn-dark">
                  Download CV
                </a>
              </div>
            </Col>
          </Row>
        </motion.div>
      </section>
    </>
  );
}
