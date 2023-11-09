import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import NotFoundServices from "./NotFoundServices";

const EmailMatchService = ({ singleData }) => {
  const { email, _id } = singleData;
  const [loading, setLoading] = useState(true);
  const [servicec, setServices] = useState();

  useEffect(() => {
    axios
      .get(
        `https://career-maker-server.vercel.app/api/v1/my-services?email=${email}`
      )
      .then((res) => {
        const currentData = res.data;
        const filterData = currentData?.filter((item) => item._id !== _id);
        setServices(filterData);
        setLoading(false);
      })
      .catch();
  }, [email, _id]);
  if (loading) {
    return <Loading />;
  }
  if (servicec?.length === 0) {
    return <NotFoundServices />;
  }
  return (
    <div className="my-20">
      <h1 className="text-center font-bold text-accent text-4xl mb-10">
        More Services Of This Provider
      </h1>
      <Marquee>
        <div className="flex justify-center items-center gap-10 md:gap-36">
          {servicec?.map((service) => (
            <div
              key={service._id}
              className="card md:w-96 w-64 card-compact bg-base-100 shadow-xl"
            >
              <figure className="h-36">
                <img
                  className="w-full h-full object-cover"
                  src={service.sphoto}
                  alt={service.sphoto}
                />
              </figure>
              <div className="card-body">
                <h2 className="text-3xl font-bold">{service.sname}</h2>
                <p className="text-lg font-semibold">
                  Price : $ {service.price}
                </p>
                <p className="italic font-medium">
                  {service.des.length > 100
                    ? service.des.slice(0, 100)
                    : service.des}
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
      </Marquee>
    </div>
  );
};
EmailMatchService.propTypes = {
  singleData: PropTypes.object,
};
export default EmailMatchService;
