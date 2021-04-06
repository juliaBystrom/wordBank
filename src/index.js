import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import * as theme from "./theme";

ReactDOM.render(
  
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={theme.theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
  

);

reportWebVitals();