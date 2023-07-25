import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
