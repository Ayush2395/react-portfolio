import React from "react";
import { FaBootstrap } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary text-light pt-3">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <p>This portfolio is developed by Ayush</p>
          <p>
            &nbsp;using&nbsp; <FaBootstrap size="25px" />
          </p>
        </div>
      </footer>
    </>
  );
}
