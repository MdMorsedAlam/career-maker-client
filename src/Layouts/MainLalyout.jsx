import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLalyout = () => {
 return (
  <div>
   <Navbar/>
   <Outlet/>
   
  </div>
 );
};

export default MainLalyout;