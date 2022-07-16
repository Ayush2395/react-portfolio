import React, { useRef, useState } from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { AiFillGoogleCircle } from "react-icons/ai";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Stack,
} from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../backend/firebase.config";
import { motion } from "framer-motion";

const pullUpEffect = {
  hide: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 2,
    },
  },
};

export default function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({ error: false, msg: "" });
  const messageCollection = collection(db, "message");

  const sendMessage = async (e) => {
    e.preventDefault();
    setError("");

    if (email === "" || message === "" || fname === "" || lname === "") {
      return setError({ error: true, msg: "Missing fields" });
    }

    const messageProp = {
      fname: fname,
      lname: lname,
      email: email,
      message: message,
    };

    await addDoc(messageCollection, messageProp)
      .then(() => {
        setError({
          error: false,
          msg: `Thanks for message me 🤩, I'll contact you ${fname} 🤠`,
        });
        setFname("");
        setLname("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        if (err.code) {
          setError({
            error: true,
            msg: "Message not sent 😢, Please try again",
          });
        }
      });
  };

  return (
    <motion.section
      id="contact"
      variants={pullUpEffect}
      initial="hide"
      whileInView="visible"
    >
      <div className="main">
        <Row>
          <Col xs="12" sm="12" md="6">
            <div className="contact_box">
              <h1 className="fs-1 fw-bolder text-secondary mb-5 contact_title">
                Contact me 😁
              </h1>
              <Container fluid="sm">
                <Form onSubmit={sendMessage}>
                  <Row>
                    <Col xs="12" sm="12" md="6">
                      <Form.Group className="mb-3">
                        <Form.Label
                          htmlFor="name"
                          className="label text-primary"
                        >
                          First name
                        </Form.Label>
                        <Form.Control
                          className="input text-secondary px-4"
                          id="name"
                          placeholder="First name 👦/👧"
                          value={fname}
                          onChange={(e) => setFname(e.target.value)}
                          x-webkit-speech="true"
                          type="text"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs="12" sm="12" md="6">
                      <Form.Group className="mb-3">
                        <Form.Label
                          htmlFor="lname"
                          className="label text-primary"
                        >
                          Last name
                        </Form.Label>
                        <Form.Control
                          className="input text-secondary px-4"
                          id="lname"
                          placeholder="Last name 👦/👧"
                          value={lname}
                          onChange={(e) => setLname(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-primary" htmlFor="email">
                      Email
                    </Form.Label>
                    <Form.Control
                      id="email"
                      type="email"
                      placeholder="Your email address 📧"
                      className="input text-secondary px-4"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          id="message"
                          placeholder="your message 📮"
                          className="text-secondary"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button className="mt-3" type="submit">
                    Send message 📤
                  </Button>
                  {error?.msg && (
                    <Alert
                      className="my-5"
                      variant={error?.error ? "danger" : "success"}
                      dismissible
                      onClose={() => setError("")}
                    >
                      {error?.msg}
                    </Alert>
                  )}
                </Form>
              </Container>
            </div>
          </Col>
          <Col
            xs="12"
            sm="12"
            md="6"
            className=" d-flex justify-content-center align-items-center"
          >
            <div className="social_media mt-5">
              <Stack direction="horizontal" gap="3">
                <a
                  rel="noreferrer"
                  href="https://github.com/Ayush2395"
                  className="icons"
                  target="_blank"
                >
                  <FiGithub color="white" size={25} />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/official_mandal_saab/"
                  className="icons"
                  target="_blank"
                >
                  <FiInstagram color="white" size={25} />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/official_mandal_saab/"
                  className="icons"
                  target="_blank"
                >
                  <AiFillGoogleCircle color="white" size={28} />
                </a>
              </Stack>
              <h3 className="text-primary my-3">Follow me!...</h3>
            </div>
          </Col>
        </Row>
      </div>
    </motion.section>
  );
}
