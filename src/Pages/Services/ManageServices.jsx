import { useContext, useEffect, useState } from "react";
import MaxWidth from "../../Components/MaxWidth";
import axios from "axios";
import { MyContext } from "../../Providers/AuthProvider";
import Loading from "../../Components/Loading";
import Swal from "sweetalert2";

const ManageServices = () => {
  const { user } = useContext(MyContext);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3737/api/v1/my-services?email=${user?.email}`)
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch();
  }, [user]);
  if (loading) {
    return <Loading />;
  }

  const handelDelete=id=>{
   axios
   .get(`http://localhost:3737/api/v1/my-services/${id}`)
   .then((res) => {
    if(res.data.deletedCount>0){
     Swal.fire({
      title: "Good job!",
      text: "Data Has Been Deleted",
      icon: "success",
    });
    }else{
     Swal.fire({
      title: "Opps!!",
      text: "Something Went Wrong Please Try Again",
      icon: "error",
    });
    }
     
   })
   .catch();
  }
  return (
    <MaxWidth>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-xl font-bold">Photo</th>
                <th className="text-xl font-bold">Service Name</th>
                <th className="text-xl font-bold">Price</th>
                <th className="text-xl font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {services?.map((service) => (
                <tr key={service._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-44 h-20 rounded-lg">
                          <img
                            className="w-full h-full "
                            src={service.sphoto}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-lg font-semibold">{service.sname}</td>
                  <td className="text-lg font-semibold">{service.price}</td>
                  <th>
                    <button onClick={()=>handelDelete(service._id)} className="btn btn-warning mr-2 uppercase">
                      X
                    </button>
                    <button className="btn btn-accent">Update</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MaxWidth>
  );
};

export default ManageServices;
