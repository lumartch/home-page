import { createBrowserRouter } from "react-router-dom";
import App from "./pages/demo/App";
import Landing from "./pages/landing/Landing";

export const AppPaths = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/demo",
    element: <App />,
  },
]);
