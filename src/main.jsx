import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainRoute from "./Routes/MainRoute.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./Providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <MainRoute />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
