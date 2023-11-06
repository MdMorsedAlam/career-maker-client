import { useContext } from "react";
import MaxWidth from "../../Components/MaxWidth";
import { MyContext } from "../../Providers/AuthProvider";


const AddServices = () => {
  const { user } = useContext(MyContext);
  const handelAddService=e=>{
   e.preventDefault()
   console.log("Hello Helo")
  }
  
  return (
    <MaxWidth>
      <div className="min-h-screen py-10 bg-base-200">
        <h1 className="text-6xl text-center font-bold">Add Service</h1>
        <form onSubmit={handelAddService}>
          <div className="w-2/3 mx-auto space-y-5">
            <h1 className="text-center font-semibold text-accent text-2xl mt-4">
              Service Info
            </h1>
            <div className="flex items-center justify-between gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">
                    Service Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Service Name"
                  name="sname"
                  className="input input-bordered input-info w-full required"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">
                    Service Price
                  </span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Service Price"
                  className="input input-bordered input-info w-full required"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">
                    Service Photo
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Service Photo"
                  name="sphoto"
                  className="input input-bordered input-info w-full required"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  name="des"
                  placeholder="Description"
                  className="input input-bordered input-info w-full required"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">
                    Service Area
                  </span>
                </label>
                <input
                  type="text"
                  name="area"
                  placeholder="Service Area"
                  className="input input-bordered input-info w-full required"
                />
              </div>
            </div>
            <h1 className="text-center font-semibold text-accent text-2xl mt-4">
              Provider Info
            </h1>
            <div className="flex items-center justify-between gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">
                    Provider Name
                  </span>
                </label>
                <input
                  type="text"
                  value={user.displayName}
                  placeholder="Provider Name"
                  className="input input-bordered input-info w-full required"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">
                    Provider Email
                  </span>
                </label>
                <input
                  type="email"
                  value={user.email}
                  className="input input-bordered input-info w-full required"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">
                    Provider Photo
                  </span>
                </label>
                <input
                  type="text"
                  value={user.photoURL}
                  className="input input-bordered input-info w-full required"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-block btn-outline btn-accent">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </MaxWidth>
  );
};

export default AddServices;
