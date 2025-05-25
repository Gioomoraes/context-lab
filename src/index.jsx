import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { CounterContextProvider } from "./context/CounterContext.jsx";

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
