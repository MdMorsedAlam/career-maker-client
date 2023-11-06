import { useContext } from "react";
import { MyContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Loading";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(MyContext);
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
