import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Routes } from "../routes-definition";

const ProtectedRoute = () => {
  const tokenFromLS = localStorage.getItem("authToken");

  if (!tokenFromLS?.length) {
    return <Navigate to={Routes.LoginRoute} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
