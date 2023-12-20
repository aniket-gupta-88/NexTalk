import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const firstLogin = localStorage.getItem("firstLogin");

  return firstLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
