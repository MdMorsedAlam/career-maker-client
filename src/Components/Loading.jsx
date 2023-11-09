import Lottie from "lottie-react";
import loading from '../../public/loading.json'

const Loading = () => {
 return (
  <div className="flex justify-center items-center h-[70vh]">
   <Lottie className="w-full h-full" animationData={loading}/>
   
  </div>
 );
};

export default Loading;