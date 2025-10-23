import React from "react";
import { Navigate, useLocation } from "react-router";
import {useAuth} from "../Contexts/AuthContext"

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="signin" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
