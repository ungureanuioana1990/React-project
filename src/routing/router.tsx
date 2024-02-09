import { createBrowserRouter } from "react-router-dom"
import { PageNotFound } from "../pages/PageNotFound";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
