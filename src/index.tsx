import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

window.React = require("react");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(<App />);
