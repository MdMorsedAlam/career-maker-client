import axios from "axios";
import MaxWidth from "../../Components/MaxWidth";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateService = () => {
  const loadData = useLoaderData();
  const navigate = useNavigate();
  const handelUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const sname = form.sname.value;
    const price = form.price.value;
    const sphoto = form.sphoto.value;
    const des = form.des.value;
    const area = form.area.value;
    const address = form.address.value;
    const pdes = form.pdes.value;
    const updateData = {
      address,
      pdes,
      sname,
      price,
      sphoto,
      des,
      area,
    };
    axios
      .patch(
        `http://localhost:3737/api/v1/update-service/${loadData._id}`,
        updateData
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Service Has Been Updated",
            icon: "success",
          });
          navigate("/my-services");
        } else {
          Swal.fire({
            title: "Oppss!",
            text: "You Didn't Update Anyting ",
            icon: "error",
          });
        }
      })
      .catch();
  };
  return (
    <MaxWidth>
      <div className="min-h-screen py-10 bg-base-200">
        <h1 className="text-6xl text-center font-bold">Update Service</h1>
        <form onSubmit={handelUpdateService}>
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
                  defaultValue={loadData.sname}
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
                  defaultValue={loadData.price}
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
                  defaultValue={loadData.sphoto}
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
                  defaultValue={loadData.des}
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
                  defaultValue={loadData.area}
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
                    Provider Address
                  </span>
                </label>
                <input
                  type="text"
                  name="address"
                  defaultValue={loadData.address}
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
                  name="pdes"
                  defaultValue={loadData.pdes}
                  className="input input-bordered input-info w-full required"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-block btn-outline btn-accent"
            >
              Update Service
            </button>
          </div>
        </form>
      </div>
    </MaxWidth>
  );
};

export default UpdateService;
