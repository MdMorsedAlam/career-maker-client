import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import MaxWidth from "../Components/MaxWidth";


const MainLalyout = () => {
 return (
  <div>
  <MaxWidth> <Navbar/></MaxWidth>
   <MaxWidth><Outlet/></MaxWidth>
   
  </div>
 );
};

export default MainLalyout;