import { Navigate } from "react-router-dom";
import { isAuthenticated } from "@/core/protected-routes/auth";

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}