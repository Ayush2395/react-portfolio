import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  ButtonGroup,
  Carousel,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { useAppState } from "../api/ContextApi";
import { addDoc, onSnapshot } from "firebase/firestore";
// import Slider from "react-slick";

export default function Testimonial() {
  const [show, setShow] = useState(false);
  const { testimonialCollection, error, setError } = useAppState();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [testimonial, setTestimonial] = useState([]);

  const fetchTestimonialResponse = () => {
    onSnapshot(testimonialCollection, (data) => {
      setTestimonial(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    fetchTestimonialResponse();
  }, []);

  const handleTestimonialForm = async (event) => {
    event.preventDefault();
    setError("");

    if (message === "" || name === "")
      return setError({
        error: true,
        msg: "Missing Fields, Please try Again.",
      });

    const testimonialOBJ = { name: name, message: message };

    await addDoc(testimonialCollection, testimonialOBJ)
      .then(() => {
        setError({
          error: false,
          msg: "Your Response submitted, Close the tab",
        });
      })
      .catch((err) => setError({ error: true, msg: err.code }));

    setName("");
    setMessage("");
  };

  // const arr = [
  //   {
  //     name: "Ayush",
  //     msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  //   },
  //   {
  //     name: "Bhanu",
  //     msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  //   },
  //   {
  //     name: "Gobinda",
  //     msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  //   },
  //   {
  //     name: "Dhiraj",
  //     msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  //   },
  // ];
  return (
    <>
      <div className="testimonial">
        <div className="main container">
          <h1 className="display-6 w-100 text-center text-primary">
            Testimonials
          </h1>
          <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "35vh" }}
          >
            <div className="w-100" style={{ maxWidth: "600px" }}>
              <Row className="mb-3">
                <Carousel className="bg-primary p-4 rounded text-light">
                  {testimonial.map((item) => {
                    return (
                      <Carousel.Item key={item.id}>
                        <Col>
                          <Row>
                            <Col
                              xs="12"
                              sm="3"
                              className="d-flex justify-content-center align-items-center"
                            >
                              <div className="circle_btn bg-warning">
                                <FontAwesomeIcon icon="fa-solid fa-user" />
                              </div>
                            </Col>
                            <Col xs="12" sm="9">
                              <p>{item.name}</p>
                              <p>{item.message}</p>
                            </Col>
                          </Row>
                        </Col>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </Row>
              <Button
                className="circle_btn bg-primary m-auto"
                onClick={() => setShow(true)}
              >
                <FontAwesomeIcon
                  className="fa-shake"
                  icon="fa-solid fa-pen-clip"
                />
              </Button>
              <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                className="bg-warning"
              >
                <Modal.Header className="bg-primary text-light">
                  <Modal.Title>Your testimonial</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-primary">
                  {error?.msg && (
                    <Alert
                      variant={error?.error ? "danger" : "success"}
                      dismissible
                      onClose={() => setError("")}
                    >
                      {error?.msg}
                    </Alert>
                  )}
                  <Form onSubmit={handleTestimonialForm}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light" htmlFor="name">
                        Your name
                      </Form.Label>
                      <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Your full name ✨"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light" htmlFor="name">
                        Message
                      </Form.Label>
                      <Form.Control
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        as="textarea"
                        type="text"
                        placeholder="Your kind words ✨"
                      />
                    </Form.Group>
                    <ButtonGroup className="w-100">
                      <Button type="submit" variant="warning">
                        Send
                      </Button>
                      <Button onClick={() => setShow(false)} variant="danger">
                        Close
                      </Button>
                    </ButtonGroup>
                  </Form>
                </Modal.Body>
              </Modal>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
