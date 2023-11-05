import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainRoute from "./Routes/MainRoute.jsx";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <MainRoute />
    </ThemeProvider>
  </React.StrictMode>
);
