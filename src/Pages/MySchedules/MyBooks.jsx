import { useContext, useEffect, useState } from "react";

import { MyContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Loading from "../../Components/Loading";
import MyBookError from "./MyBookError";
const MyBooks = () => {
  const { user } = useContext(MyContext);
  const [loading, setloading] = useState(true);
  const [myBooked, setMyBooked] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3737/api/v1/my-bookings?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyBooked(res.data);
        setloading(false);
      })
      .catch();
  }, [user]);
  if (loading) {
    return <Loading />;
  }

  if (myBooked?.length == 0) {
    return <MyBookError />;
  }
  return (
    <section className="my-20">
      <h1 className="text-center font-bold text-accent text-4xl mb-4">
        My Bookings
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl font-bold">Photo</th>
              <th className="text-xl font-bold">Service Name</th>
              <th className="text-xl font-bold">Address</th>
              <th className="text-xl font-bold">Price</th>
              <th className="text-xl font-bold">Date</th>
            </tr>
          </thead>
          <tbody>
            {myBooked?.map((book) => (
              <tr key={book._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-44 h-20 rounded-lg">
                        <img className="w-full h-full " src={book.simg} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-lg font-semibold">{book.sname}</td>
                <td className="text-lg font-semibold">{book.uaddress}</td>
                <td className="text-lg font-semibold">$ {book.sprice}</td>
                <td className="text-lg font-semibold">{book.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyBooks;
