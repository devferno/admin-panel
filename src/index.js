import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  shape: {
    borderRadius: 8,
  },
});
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
