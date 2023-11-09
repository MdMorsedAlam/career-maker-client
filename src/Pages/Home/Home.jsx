import { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import axios from "axios";
import MaxWidth from "../../Components/MaxWidth";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";
import Team from "./Team";
import ContactUs from "./ContactUs";
import ClientSays from "./ClientSays";

const Home = () => {
  const [services, setServices] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://career-maker-server.vercel.app/api/v1/services")
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    document.title = "Home || Local Tours and Guide";
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Banner />

      <MaxWidth>
        <div className="my-20">
          <h1 className="text-6xl text-center font-bold mb-10">
            Popular Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services?.slice(0, 4).map((service) => (
              <div
                key={service._id}
                data-aos="zoom-out-up"
                className="card card-compact bg-base-100 shadow-xl"
              >
                <figure className="h-96">
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
          <div className="flex justify-center">
            <Link
              to="/services"
              className="btn btn-neutral border-none hover:bg-[#425cecbd] bg-[#425CEC] mt-8 px-10 text-white font-semibold uppercase"
            >
              Show All
            </Link>
          </div>
        </div>
        <ClientSays/>
        <Team />
        <ContactUs />
      </MaxWidth>
    </div>
  );
};

export default Home;
