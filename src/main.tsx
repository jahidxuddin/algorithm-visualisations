import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
