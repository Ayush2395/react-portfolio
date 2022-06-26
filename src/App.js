import React from "react";
import NavMenu from "./components/NavMenu";
import LandingPage from "./pages/LandingPage";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <div className="container">
        <NavMenu />
        <LandingPage />
        <Project />
        <About />
        <Contact />
      </div>
    </>
  );
}
