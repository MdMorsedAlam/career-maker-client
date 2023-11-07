import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";
import MainLalyout from "../Layouts/MainLalyout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import Services from "../Pages/Services/Services";
import AddServices from "../Pages/Services/AddServices";
import PrivateRoute from "./PrivateRoute";
import SingleData from "../Pages/SingleData/SingleData";
import ManageServices from "../Pages/Services/ManageServices";
const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLalyout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/addservices",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/single-services/:id",
        element: <PrivateRoute><SingleData /></PrivateRoute>,
        
      },
      {
        path:'my-services',
        element:<ManageServices/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

const MainRoute = ({ children }) => {
  return <RouterProvider router={route}>{children}</RouterProvider>;
};

MainRoute.propTypes = {
  children: PropTypes.node,
};
export default MainRoute;
