import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import MaxWidth from "../Components/MaxWidth";
import Footer from "../Components/Footer";

const MainLalyout = () => {
  return (
    <div>
      <MaxWidth>
        
        <Navbar />
      </MaxWidth>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLalyout;
