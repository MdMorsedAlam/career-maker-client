import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import MaxWidth from "../Components/MaxWidth";
import Banner from "../Components/Banner";


const MainLalyout = () => {
 return (
  <div>
  <MaxWidth> <Navbar/></MaxWidth>
  <Banner/>
   <MaxWidth><Outlet/></MaxWidth>
   
  </div>
 );
};

export default MainLalyout;