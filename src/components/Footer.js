import React from "react";
import { FaBootstrap } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary text-light pt-3">
        <p className="w-100 text-center">
          &copy; 2022. All rights reserved.
        </p>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <p>Portfolio is designed by Ayush,</p>
          <p>
            &nbsp;using&nbsp; <FaBootstrap size="25px" />
          </p>
        </div>
      </footer>
    </>
  );
}
