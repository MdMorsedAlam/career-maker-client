import { useContext, useEffect, useState } from "react";
import MaxWidth from "../../Components/MaxWidth";
import axios from "axios";
import { MyContext } from "../../Providers/AuthProvider";
import Loading from "../../Components/Loading";

const ManageServices = () => {
  const { user } = useContext(MyContext);
  const [loading,setLoading]=useState(true);
  const [services,setServices]=useState();
  
  useEffect(() => {
    axios
      .get(`http://localhost:3737/api/v1/my-services?email=${user?.email}`)
      .then((res) => {
       setServices(res.data);
        setLoading(false)
      })
      .catch();
  }, [user]);
  if(loading){
   return <Loading/>
  }
  return (
    <MaxWidth>
      <div>

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        services?.map(service=><tr key={service._id}>
         <th>
           <label>
             <input type="checkbox" className="checkbox" />
           </label>
         </th>
         <td>
           <div className="flex items-center space-x-3">
             <div className="avatar">
               <div className="mask mask-squircle w-12 h-12">
                 <img src={service.sphoto} />
               </div>
             </div>
             <div>
               <div className="font-bold">Hart Hagerty</div>
               <div className="text-sm opacity-50">United States</div>
             </div>
           </div>
         </td>
         <td>
           Zemlak, Daniel and Leannon
           <br/>
           <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
         </td>
         <td>Purple</td>
         <th>
           <button className="btn btn-ghost btn-xs">details</button>
         </th>
       </tr>)
       }
      
     
     
    </tbody>
   
    
  </table>
</div>
       
      </div>
    </MaxWidth>
  );
};

export default ManageServices;
