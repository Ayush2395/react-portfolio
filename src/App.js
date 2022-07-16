import React, { useEffect } from "react";
import NavMenu from "./components/NavMenu";
import LandingPage from "./pages/LandingPage";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAnglesUp,
  faArrowDown,
  faGraduationCap,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ParticlesBackground from "./components/ParticlesBackground";
import Footer from "./components/Footer";
library.add(faArrowDown, faAnglesUp, faGraduationCap, faScrewdriverWrench);

export default function App() {
  useEffect(() => {
    window.addEventListener("scroll", scrollUpTop);
    window.addEventListener("scroll", headerShadow);
    const script = document.createElement("script");
    script.src =
      'https://kit.fontawesome.com/b15af52e57.js" crossorigin="anonymous';
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

  function headerShadow() {
    const header = document.getElementById("header");
    if (this.scrollY > 80) {
      header.classList.add("header");
    } else {
      header.classList.remove("header");
    }
  }

  return (
    <>
      <div className="container">
        <NavMenu />
        <ParticlesBackground />
        <LandingPage />
        <Project />
        <About />
        <Contact />
        <a href="#" className="up_btn">
          <FontAwesomeIcon icon="fa-solid fa-angles-up" />
        </a>
      </div>
      <Footer />
    </>
  );
}
