import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../features/login/pages/login";
import Register from "../features/register/pages/register";
import Dashboard from "../features/dashboard/pages/dashboard";
import Layout from "../layout";
import DashboardForm from "../features/dashboard/pages/dashboardForm";

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
        element: <Layout />,
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
        ],
      },
    ],
  },
]);
