import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

console.log("MAIN.JSX LADDAD"); // <-- denna MÅSTE synas

const root = document.getElementById("root");

if (!root) {
  console.error("❌ HITTAR INTE #root");
} else {
  console.log("✅ HITTAR #root");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
