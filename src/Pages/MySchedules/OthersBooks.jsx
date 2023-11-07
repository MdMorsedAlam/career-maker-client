import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Loading from "../../Components/Loading";
import OthersBookError from "./OthersBookError";

const OthersBooks = () => {
 const { user } = useContext(MyContext);
  const [loading, setloading] = useState(true);
 const [othersBooked, setothersBooked] = useState();
 useEffect(() => {
  axios
    .get(`http://localhost:3737/api/v1/others-bookings?email=${user.email}`)
    .then((res) => {
      setothersBooked(res.data);
      setloading(false);
    })
    .catch((err) => {
      console.log(err);
    });
}, [user]);
if (loading) {
 return <Loading />;
}
if(othersBooked?.length==0){
 return <OthersBookError/>
}
 return (
  <section className="mb-20">
       <h1 className="text-center font-bold text-accent text-4xl mb-4">
               Booked My Services
             </h1>
 
             <div className="overflow-x-auto">
           <table className="table">
             {/* head */}
             <thead>
               <tr>
                 <th className="text-xl font-bold">Photo</th>
                 <th className="text-xl font-bold">Service Name</th>
                 <th className="text-xl font-bold">Address</th>
                 <th className="text-xl font-bold">Price</th>
                 <th className="text-xl font-bold">Action</th>
               </tr>
             </thead>
             <tbody>
               {othersBooked?.map((book) => (
                 <tr key={book._id}>
                   <td>
                     <div className="flex items-center space-x-3">
                       <div className="avatar">
                         <div className="w-44 h-20 rounded-lg">
                           <img
                             className="w-full h-full "
                             src={book.simg}
                           />
                         </div>
                       </div>
                     </div>
                   </td>
                   <td className="text-lg font-semibold">{book.sname}</td>
                   <td className="text-lg font-semibold">{book.uaddress}</td>
                   <td className="text-lg font-semibold">{book.sprice}</td>
                   <td className="text-lg font-semibold">
                    <select className="select select-accent max-w-xs">
                     <option value="">Pending</option>
                     <option value="">In Progress</option>
                     <option value="">Completed</option>
                    </select>
                    </td>
                   
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
             
       </section>
 );
};

export default OthersBooks;