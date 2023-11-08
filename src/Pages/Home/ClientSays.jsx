/* eslint-disable react/no-unescaped-entities */
import avatar from "../../assets/avatar.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ClientSays = () => {
  return (
    <section className="my-20 pb-10 rounded-lg bg-gray-100">
      <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12">
        <h1 className="text-5xl font-bold text-center">Client Says About US</h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
            <FaQuoteLeft className="text-[#425cecbd] text-2xl" />
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
              
Your Local Tours and Guide Service was exceptional. The knowledgeable and friendly guides made our tour a memorable experience, offering deep insights and unique local perspectives. Highly recommended for all!
            </p>
            <FaQuoteRight className="text-[#425cecbd] text-2xl float-right" />
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-accent :text-gray-900">
            <img
              src={avatar}
              alt={avatar}
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
            />
            <p className="text-xl font-bold leadi">Abir Hossain</p>
            <p className="text-sm uppercase">Sreepur,Gazipur</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
            <FaQuoteLeft className="text-accent text-2xl" />
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
            Your Local Tours and Guide Service provided an exceptional experience. The knowledgeable guides, captivating tours, and personalized approach made our journey unforgettable. Thank you for showcasing our city's beauty!
            </p>
            <FaQuoteRight className="text-accent text-2xl float-right" />
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#425cecbd] dark:text-gray-900">
            <img
              src={avatar}
              alt={avatar}
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
            />
            <p className="text-xl font-bold leadi">Sabbir Ahmed</p>
            <p className="text-sm uppercase">Tongi,Gazipur</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
            <FaQuoteLeft className="text-accent text-2xl" />
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
            Your Local Tours and Guide Service surpassed our expectations. The tours were both educational and fun, thanks to the passionate guides who shared fascinating stories about our city. A must-try experience!
            </p>
            <FaQuoteRight className="text-accent text-2xl float-right" />
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#425cecbd] dark:text-gray-900">
            <img
              src={avatar}
              alt={avatar}
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
            />
            <p className="text-xl font-bold leadi">Romana Akter</p>
            <p className="text-sm uppercase">Gazipur,Dhaka</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
            <FaQuoteLeft className="text-[#425cecbd] text-2xl" />
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
            Choosing your Local Tours and Guide Service was the best decision. The tours were immersive, the guides knowledgeable, and the experience unforgettable. You have truly set the gold standard for local exploration!
            </p>
            <FaQuoteRight className="text-[#425cecbd] text-2xl float-right" />
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-accent dark:text-gray-900">
            <img
              src={avatar}
              alt={avatar}
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
            />
            <p className="text-xl font-bold leadi">Morsed Alam</p>
            <p className="text-sm uppercase">Sreepur,Gazipur</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSays;
