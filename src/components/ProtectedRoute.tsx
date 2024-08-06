import { Navigate, Outlet } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ permission }: { permission?: string }) => {
  const { hasPermission } = useRole();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/signin" />;
  }

  if (permission && !hasPermission(permission)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
