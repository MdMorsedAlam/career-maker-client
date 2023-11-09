import MaxWidth from "../../Components/MaxWidth";

const MyBookError = () => {
 return (
  <MaxWidth>
   <div className="my-10">
   <h1 className="text-center font-bold text-accent text-4xl mb-4">
               My Bookings
             </h1>
   <h1 className="text-6xl text-red-500 font-extrabold text-center">Not Found Any Service!! <br /> Please Book Service</h1>
  </div>
  </MaxWidth>
 );
};

export default MyBookError;