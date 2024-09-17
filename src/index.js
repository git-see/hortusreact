import React from "react";
import ReactDOM from "react-dom/client";
import "../src/css/app.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// HERE: $ npm i react-router-dom => package.json => BrowserRouter (Routes/Route) & add NavLink with condition (isActive:bool)
reportWebVitals();
