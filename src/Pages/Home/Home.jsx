import Banner from "../../Components/Banner";
import MaxWidth from "../../Components/MaxWidth";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";
import Team from "./Team";
import ContactUs from "./ContactUs";
import ClientSays from "./ClientSays";
import { useQuery } from "@tanstack/react-query";
import ContentLoader from "react-content-loader";

const Home = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["mydata"],
    queryFn: () =>
      fetch("https://career-maker-server.vercel.app/api/v1/services").then(
        (res) => res.json()
      ),
  });
  const MyLoader = () => (
    <ContentLoader viewBox="0 0 380 70">
      {/* Only SVG shapes */}
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    </ContentLoader>
  );
  if (isLoading) {
    return <Loading />;
  }

  document.title = "Home || Local Tours and Guide";
  return (
    <div>
      <Banner />

      <MaxWidth>
        <div className="my-20">
          <h1 className="text-6xl text-center font-bold mb-10">
            Popular Services
          </h1>
          {data?.length < 0 ? (
            MyLoader
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {data?.slice(0, 4).map((service) => (
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
          )}
          <div className="flex justify-center">
            <Link
              to="/services"
              className="btn btn-neutral border-none hover:bg-[#425cecbd] bg-[#425CEC] mt-8 px-10 text-white font-semibold uppercase"
            >
              Show All
            </Link>
          </div>
        </div>
        <ClientSays />
        <Team />
        <ContactUs />
      </MaxWidth>
    </div>
  );
};

export default Home;
