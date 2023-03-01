import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/reset.scss";
import "./styles/common.scss";
import "./styles/index.scss";
import "./styles/variable.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./provaider/ThemProvaider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
