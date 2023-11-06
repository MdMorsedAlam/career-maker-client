import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";

const SingleData = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState();
  const [loading, setloading] = useState(true);
  // console.log(singleData)
  useEffect(() => {
    axios
      .get(`http://localhost:3737/api/v1/services/${id}`)
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
  return (
    <div className=" max-w-4xl mx-auto my-10">
      <div className="card card-compact bg-base-100 shadow-xl">
        <div>
          <figure className="h-96">
            <img
              className="w-full rounded-lg h-full"
              src={singleData.sphoto}
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="text-3xl font-bold">{singleData.sname}</h2>
          <p className="text-lg font-semibold">Price : {singleData.price}</p>
          <p className="italic font-medium">{singleData.des}</p>
          <p className="font-medium text-[#4d4949]">Area : {singleData.area}</p>

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
          <p className="text-md italic font-semibold">{singleData.des.slice(0,80)}</p>
          <p className="text-lg font-semibold">{singleData.address}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-accent font-semibold text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
