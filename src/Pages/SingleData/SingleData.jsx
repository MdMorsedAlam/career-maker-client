import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";

const SingleData = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState();
  const [loading,setloading]=useState(true)
  console.log(singleData)
  useEffect(() => {
    axios
      .get(`http://localhost:3737/api/v1/services/${id}`)
      .then((res) =>{
       setSingleData(res.data)
       setloading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  if(loading){
   return <Loading/>
  }
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default SingleData;
