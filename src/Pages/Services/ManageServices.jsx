import { useContext, useEffect, useState } from "react";
import MaxWidth from "../../Components/MaxWidth";
import axios from "axios";
import { MyContext } from "../../Providers/AuthProvider";
import Loading from "../../Components/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To Delete Your Service",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .get(`http://localhost:3737/api/v1/my-services/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Service Has Been Deleted.",
                icon: "success",
              });

              const remainingData = services.filter(
                (service) => service._id !== id
              );
              setServices(remainingData);
            } else {
              Swal.fire({
                title: "Opps!!",
                text: "Something Went Wrong Please Try Again",
                icon: "error",
              });
            }
          })
          .catch();
      }
    });
  };
  if(services?.length===0){
    return (
      <MaxWidth>
       <div className="my-10">
       <h1 className="text-center font-bold text-accent text-4xl mb-4">
                   My Services
                 </h1>
       <h1 className="text-6xl text-red-500 font-extrabold text-center">No Found Any Service!! <br /> Please Add Your Service</h1>
      </div>
      </MaxWidth>
     );
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
                    <button
                      onClick={() => handelDelete(service._id)}
                      className="btn btn-warning mr-2 uppercase"
                    >
                      X
                    </button>
                    <Link
                      to={`/update/${service._id}`}
                      className="btn btn-accent"
                    >
                      Update
                    </Link>
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
