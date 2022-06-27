import React, { useEffect } from "react";
import NavMenu from "./components/NavMenu";
import LandingPage from "./pages/LandingPage";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAnglesUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faArrowDown, faAnglesUp);

export default function App() {
  useEffect(() => {
    window.addEventListener("scroll", scrollUpTop);
  }, []);

  function scrollUpTop() {
    const scrollUp = document.querySelector(".up_btn");
    const scrollY = window.pageYOffset;
    if (scrollY >= 560) {
      scrollUp.classList.add("popUp");
    } else {
      scrollUp.classList.remove("popUp");
    }
  }
  return (
    <>
      <div className="container">
        <NavMenu />
        {/* <ParticlesBackground /> */}
        <LandingPage />
        <Project />
        <About />
        <Contact />
        <a href="#" className="up_btn">
          <FontAwesomeIcon icon="fa-solid fa-angles-up" />
        </a>
      </div>
    </>
  );
}
