import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { MyContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import MaxWidth from "../../Components/MaxWidth";
import EmailMatchService from "./EmailMatchService";

const SingleData = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState();
  const { user } = useContext(MyContext);
  const [loading, setloading] = useState(true);
  // console.log(singleData)
  useEffect(() => {
    axios
      .get(`https://career-maker-server.vercel.app/api/v1/services/${id}`)
      .then((res) => {
        setSingleData(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  if (loading) {
    return <Loading />;
  }

  const handelBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const uaddress = form.address.value;
    const uemail = user.email;
    const sname = singleData.name;
    const simg = singleData.sphoto;
    const semail = singleData.email;
    const sprice = singleData.price;
    const bookData = {
      uemail,
      uaddress,
      date,
      sname,
      simg,
      semail,
      sprice,
    };
    axios
      .post("https://career-maker-server.vercel.app/api/v1/bookings", bookData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You Are Successfully Booked This Service",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch();
  };
  document.title = "Details || Local Tours and Guide";
  return (
    <MaxWidth>
      <div className=" max-w-4xl mx-auto my-10">
        <div className="card card-compact bg-base-100 shadow-xl">
          <div>
            <figure className="h-96">
              <img
                className="w-full rounded-lg h-full"
                src={singleData.sphoto}
                alt={singleData.sphoto}
              />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="text-3xl font-bold">{singleData.sname}</h2>
            <p className="text-lg font-semibold">
              Price : $ {singleData.price}
            </p>
            <p className="italic font-medium">{singleData.des}</p>
            <p className="font-medium text-[#4d4949]">
              Area : {singleData.area}
            </p>

            <div>
              <p className="text-lg font-semibold italic mb-2">Author Info :</p>
              <div className="flex items-center gap-5">
                <img
                  className="w-10 h-10 rounded-full"
                  src={singleData.photo}
                  alt=""
                />
                <h1 className="text-xl font-bold">{singleData.name}</h1>
              </div>
              <p className="text-md italic font-semibold">
                {singleData.des.slice(0, 80)}
              </p>
              <p className="text-lg font-semibold">{singleData.address}</p>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-accent font-semibold text-white"
                onClick={() => document.getElementById("modal").showModal()}
              >
                Book Now
              </button>
              <dialog id="modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <form onSubmit={handelBooking}>
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
                          value={singleData.name}
                          disabled
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
                          value={singleData.price}
                          disabled
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
                          value={singleData.photo}
                          disabled
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
                          disabled
                          value={singleData.email}
                          className="input input-bordered input-info w-full required"
                        />
                      </div>
                    </div>
                    <h1 className="text-center font-semibold text-accent text-2xl mt-4">
                      Coustomer Info
                    </h1>
                    <div className="flex items-center justify-between gap-4">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text font-bold text-lg">
                            Email
                          </span>
                        </label>
                        <input
                          type="email"
                          value={user.email}
                          disabled
                          className="input input-bordered input-info w-full required"
                        />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text font-bold text-lg">
                            Date
                          </span>
                        </label>
                        <input
                          type="date"
                          name="date"
                          required
                          className="input input-bordered input-info w-full required"
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text font-bold text-lg">
                            Address
                          </span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          required
                          placeholder="Enter Your Address"
                          className="input input-bordered input-info w-full required"
                        />
                      </div>
                    </div>
                    <div className="modal-action">
                      <button
                        type="submit"
                        className="btn btn-accent text-white"
                      >
                        Purchase this Service
                      </button>
                      <form method="dialog">
                        <button className="btn btn-neutral">Close</button>
                      </form>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <EmailMatchService singleData={singleData} />
    </MaxWidth>
  );
};

export default SingleData;
