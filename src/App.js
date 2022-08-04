import React, { useEffect } from "react";

// components
import Navmenu from "./components/Navmenu";
import Home from "./pages/Home";

// dependencies and modules
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faPaperPlane,
  faSwatchbook,
  faUser,
  faArrowUp,
  faGear,
  faPenClip,
  faTarp,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Routes } from "react-router-dom";
import NoPageFound from "./components/NoPageFound";
import ProjectDisplay from "./pages/ProjectDisplay";
library.add(
  faMagnifyingGlass,
  faPaperPlane,
  faArrowAltCircleRight,
  faSwatchbook,
  faUser,
  faArrowUp,
  faGear,
  faPenClip,
  faTarp
);

export default function App() {
  const handleHeaderShadow = () => {
    const header = document.getElementById("header");
    const scrollY = window.pageYOffset;
    scrollY >= 80
      ? header.classList.add("header")
      : header.classList.remove("header");
  };

  const handleScrollUpButton = () => {
    const scrollUpButton = document.querySelector(".scroll_up_btn");
    const scrollY = window.pageYOffset;

    if (scrollY > 560) {
      scrollUpButton.classList.add("show_up_btn");
    } else {
      scrollUpButton.classList.remove("show_up_btn");
    }
  };

  const handleActiveLink = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach((currentLink) => {
      const sectionHeight = currentLink.offsetHeight;
      const sectionTop = currentLink.offsetTop - 50;
      const sectionID = currentLink.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".navbar-nav a[href*=" + sectionID + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".navbar-nav a[href*=" + sectionID + "]")
          .classList.remove("active-link");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderShadow);
    window.addEventListener("scroll", handleScrollUpButton);
    window.addEventListener("scroll", handleActiveLink);
  }, []);

  return (
    <>
      <Navmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects-display" element={<ProjectDisplay />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <div className="scroll_up_btn d-flex justify-content-center align-item-center">
        <a href="#home" rel="noreferrer" className="btn btn-success">
          <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
        </a>
      </div>
    </>
  );
}
