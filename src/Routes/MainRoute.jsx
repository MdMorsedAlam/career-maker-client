import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";
import MainLalyout from "../Layouts/MainLalyout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
const route = createBrowserRouter([
  {
    path: "/",
    element:<MainLalyout/>,
    errorElement:<Error/>,
    children:[
     {
      path:'/',
      element:<Home/>
     },
     {
      path:'/about',
      element:<About/>
     },
     {
      path:'/login',
      element:<Login/>
     },
     {
      path:'/register',
      element:<Register/>
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
