import React from "react";

// components
import Navmenu from "./components/Navmenu";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Projects from "./pages/Projects";

// dependencies and modules
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faPaperPlane,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

library.add(
  faMagnifyingGlass,
  faPaperPlane,
  faArrowAltCircleRight,
  faSwatchbook
);

export default function App() {
  return (
    <>
      <Navmenu />
      <Home />
      <Services />
      <About />
      <Projects />
    </>
  );
}
