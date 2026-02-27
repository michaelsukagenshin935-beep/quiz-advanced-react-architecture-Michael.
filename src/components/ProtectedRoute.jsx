import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

function ProtectedRoute({ children }) {
  const { state } = useContext(GlobalContext);

  if (!state.user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;  