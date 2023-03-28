import { Outlet, Navigate } from "react-router-dom";
import { Routes } from "../../utils/routes-definition";

export const AuthLayout = () => {
  const tokenFromLS = localStorage.getItem("authToken");
  if (tokenFromLS?.length) {
    return <Navigate to={Routes.DashboardRoute} replace />;
  }
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <h3 style={{ textAlign: "center" }}>Authentication page</h3>
      <Outlet />
    </div>
  );
};
