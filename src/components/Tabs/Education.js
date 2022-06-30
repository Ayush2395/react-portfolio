import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";

export default function Education() {
  return (
    <>
      <Container>
        <div className="stroke text-secondary d-flex justify-content-around align-items-center flex-column">
          <div className="about_icon">
            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
          </div>
          <div className="about_icon">
            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
          </div>
          <div className="about_icon">
            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
          </div>
        </div>
        <div className="details mb-5">
          <p className="fs-7 text-secondary">2017</p>
          <h1 className="text-primary fs-4">
            Govt. Model Sen. Sec. High School
          </h1>
          <p className="text-secondary">
            I compplete my 10th (matriculation) from this school
          </p>
          <p className="text-secondary">Location: Ludhiana, Punjab</p>
        </div>
        <div className="details mb-5">
          <p className="fs-7 text-secondary">2018 - 2019</p>
          <h1 className="text-primary fs-4">
            Govt. Model Sen. Sec. High School
          </h1>
          <p className="text-secondary">
            I compplete my 12th (Non-Medical) from this school
          </p>
          <p className="text-secondary">Location: Ludhiana, Punjab</p>
        </div>
        <div className="details mb-5">
          <p className="fs-7 text-secondary">2019 - Present</p>
          <h1 className="text-primary fs-4">Gulzar Group of Institutes</h1>
          <p className="text-secondary">I'm pursuing B.Tech in CSE.</p>
          <p className="text-secondary">Location: Khanna, Punjab</p>
        </div>
      </Container>
    </>
  );
}
