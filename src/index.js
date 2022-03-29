import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

// Start with editing our index.js in our create-react-app

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
