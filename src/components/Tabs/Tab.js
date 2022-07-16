import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Education from "./Education";
import Skills from "./Skills";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("education");
  return (
    <Container fluid="xs" className="mb-5">
      <div className="text-primary tabs">
        <div className="options w-md-50">
          <li
            onClick={() => {
              setActiveTab("education");
            }}
            className={activeTab === "education" ? "active" : ""}
          >
            Educations
          </li>
          <li
            onClick={() => {
              setActiveTab("skills");
            }}
            className={activeTab === "skills" ? "active" : ""}
          >
            Skills
          </li>
        </div>
      </div>
      <div className="outlets">
        {activeTab === "education" ? <Education /> : <Skills />}
      </div>
    </Container>
  );
}
