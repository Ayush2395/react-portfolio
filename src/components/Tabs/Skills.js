import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa";
import { DiCss3, DiJavascript, DiReact, DiSass } from "react-icons/di";
import React from "react";
import { Container, Stack } from "react-bootstrap";

export default function Skills() {
  return (
    <>
      <Container>
        <div className="stroke text-secondary d-flex justify-content-around align-items-center flex-column">
          <div className="about_icon">
            <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
          </div>
          <div className="about_icon">
            <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
          </div>
          <div className="about_icon">
            <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
          </div>
        </div>
        <div className="details mb-5">
          <p className="fs-7 text-secondary">73%</p>
          <h1 className="text-primary fs-4">HTML, CSS and JavaScript</h1>
          <p className="text-secondary">
            I've knowlegde of HTML,CSS and JavaScript language.
          </p>
          <p className="text-secondary">
            <Stack direction="horizontal" gap="3">
              <AiFillHtml5 size={35} />
              <DiCss3 size={35} />
              <DiJavascript size={35} />
            </Stack>
          </p>
        </div>
        <div className="details mb-5">
          <p className="fs-7 text-secondary">78%</p>
          <h1 className="text-primary fs-4">ReactJs Framework</h1>
          <p className="text-secondary">
            I've knowlegde of ReactJs framework to frontend.
          </p>
          <p className="text-secondary">
            <Stack direction="horizontal" gap="3">
              <DiReact size={35} />
              <AiFillHtml5 size={35} />
              <DiSass size={35} />
            </Stack>
          </p>
        </div>
        <div className="details mb-5">
          <p className="fs-7 text-secondary">52%</p>
          <h1 className="text-primary fs-4">Bootstrap 5</h1>
          <p className="text-secondary">
            I've knowlegde of Bootstrap 5 and React-Bootstrap.
          </p>
          <p className="text-secondary">
            <Stack direction="horizontal" gap="3">
              <FaBootstrap size={35} />
              <DiSass size={35} />
            </Stack>
          </p>
        </div>
      </Container>
    </>
  );
}
