import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../features/login/pages/login";
import Register from "../features/register/pages/register";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to={"/login"} />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
