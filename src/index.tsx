import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.scss';const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("❌ Root element not found");
}