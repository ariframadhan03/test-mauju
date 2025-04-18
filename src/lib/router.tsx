import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../features/login/pages/login";
import Register from "../features/register/pages/register";
import Dashboard from "../features/dashboard/pages/dashboard";
import Layout from "../layout";
import DashboardForm from "../features/dashboard/pages/dashboardForm";
import Profile from "../features/profile/pages/profile";
import RouterGuard from "./routerGuard";

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
      {
        path: "",
        element: <RouterGuard component={Layout} />,
        children: [
          {
            path: "dashboard",
            children: [
              {
                path: "",
                element: <Dashboard />,
              },
              {
                path: "form",
                element: <DashboardForm />,
              },
              {
                path: ":id",
                element: <DashboardForm />,
              },
            ],
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);
