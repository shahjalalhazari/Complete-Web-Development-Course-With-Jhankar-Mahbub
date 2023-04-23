import React from "react";
import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Loading. Loading.. Loading...</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
