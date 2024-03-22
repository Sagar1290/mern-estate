import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { userData } = useSelector((state) => state.user);
  return userData ? <Outlet /> : <Navigate to="/join-us" />;
};

export default PrivateRoute;
