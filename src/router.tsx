import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RootLayout from "@/layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default router;
