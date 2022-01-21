import React from "react";
import ReactDOM from "react-dom";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { STYLE_SETTINGS } from "./variables";
import App from "./App";

const theme = createTheme(STYLE_SETTINGS);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,

  document.getElementById("root")
);
