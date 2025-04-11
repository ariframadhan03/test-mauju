import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const RouterGuard: React.FC<{
  component: React.FC;
}> = (props) => {
  const cookies = new Cookies();
  const condition = cookies.get("token");

  return condition ? (
    React.createElement(props.component)
  ) : (
    <Navigate to="/login" replace />
  );
};
export default RouterGuard;
