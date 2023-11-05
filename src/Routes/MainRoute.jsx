import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";
import MainLalyout from "../Layouts/MainLalyout";
import Home from "../Pages/Home/Home";
const route = createBrowserRouter([
  {
    path: "/",
    element:<MainLalyout/>,
    children:[
     {
      path:'/',
      element:<Home/>
     }
    ]
  },
]);

const MainRoute = ({ children }) => {
  return <RouterProvider router={route}>{children}</RouterProvider>;
};

MainRoute.propTypes = {
  children: PropTypes.node,
};
export default MainRoute;
