import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import connectDB from "./db.js";
// const { connectDB } = require("./db.js");

connectDB();
console.log("HELLO WORLD");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
