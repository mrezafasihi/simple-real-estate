import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { EstateContextProvider } from "./context/RealEstateContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EstateContextProvider>
      <App />
    </EstateContextProvider>
  </React.StrictMode>
);
