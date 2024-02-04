import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Menu from "@/pages/Menu";
import Visualize from "@/pages/Visualize";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/visualize/:algorithm",
        element: <Visualize />
      }
    ],
  },
]);

export default router;
