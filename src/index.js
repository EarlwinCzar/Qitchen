import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/utils.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container); // eslint-disable-line no-undef

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
