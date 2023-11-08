import MaxWidth from "../../Components/MaxWidth";
import MyBooks from "./MyBooks";
import OthersBooks from "./OthersBooks";



const MySchedules = () => {

 
  // console.log(othersBooked);
  // console.log(myBooked);
 
  document.title = "My-Schedules || Local Tours and Guide";
  return (
    <MaxWidth>
      <MyBooks/>
      <OthersBooks/>
      
    </MaxWidth>
  );
};

export default MySchedules;
