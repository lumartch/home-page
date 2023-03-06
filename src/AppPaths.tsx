import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing/Landing";

export const AppPaths = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  }
]);
