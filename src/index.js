import React from "react";
import ReactDOM from "react-dom/client";
import "./style/custom.scss";
import App from "./App";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import ContextApi from "./api/ContextApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <ContextApi>
      <App />
    </ContextApi>
  </React.Fragment>
);
