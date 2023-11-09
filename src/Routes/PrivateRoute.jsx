import { useContext } from "react";
import { MyContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(MyContext);
  const location=useLocation();
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  }
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
