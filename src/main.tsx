import React from "react";
import "@mantine/core/styles.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";

const portal = document.getElementById("root");

if (portal === null) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(portal).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
