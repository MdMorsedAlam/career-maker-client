import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import { Link } from "react-router-dom";
import MaxWidth from "../../Components/MaxWidth";
import { BsFillSearchHeartFill } from "react-icons/bs";

const Services = () => {
  const [services, setServices] = useState();
  const [loading, setLoading] = useState(true);
  const [inptValue, setinptValue] = useState("");
  const [isShow, setisShow] = useState(true);
  const [sliceNum, setSliceNum] = useState(6);
  useEffect(() => {
    axios
      .get("http://localhost:3737/api/v1/services")
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handelSearch = () => {
    const filterData = services.filter(
      (service) => service.sname === inptValue
    );
    setServices(filterData);
  };
  const handelShow = () => {
    setSliceNum(services.length);
    setisShow(!isShow);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <MaxWidth>
        <div className="my-20">
          <h1 className="text-6xl text-center font-bold mb-10">Our Services</h1>
          <div className="flex justify-center mb-10">
            <div className="form-control">
              <div className="input-group">
                <input
                  onChange={(e) => setinptValue(e.target.value)}
                  type="search"
                  className="input input-accent input-bordered"
                />
                <button
                  onClick={handelSearch}
                  className="btn btn-accent btn-square"
                >
                  <BsFillSearchHeartFill className="text-2xl text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            {services?.slice(0, sliceNum).map((service) => (
              <div
                key={service._id}
                className="card card-compact bg-base-100 shadow-xl"
              >
                <div>
                  <figure className="h-96">
                    <img
                      className="w-full object-cover rounded-lg h-full"
                      src={service.sphoto}
                      alt="Shoes"
                    />
                  </figure>
                </div>
                <div className="card-body">
                  <h2 className="text-3xl font-bold">{service.sname}</h2>
                  <p className="text-lg font-semibold">
                    Price : {service.price}
                  </p>
                  <p className="italic font-medium">
                    {service.des.length > 100
                      ? service.des.slice(0, 100)
                      : service.des}
                  </p>
                  <p className="font-medium text-[#4d4949]">
                    Area : {service.area}
                  </p>

                  <div className="flex items-center gap-5">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={service.photo}
                      alt=""
                    />
                    <h1 className="text-xl font-bold">{service.name}</h1>
                  </div>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/single-services/${service._id}`}
                      className="btn btn-accent font-semibold text-white"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {isShow ? (
              <button
                onClick={handelShow}
                className="btn btn-neutral border-none hover:bg-[#425cecbd] bg-[#425CEC] mt-8 px-10 text-white font-semibold"
              >
                See More
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Services;
