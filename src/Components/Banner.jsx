import MaxWidth from "./MaxWidth";
// import { Typewriter } from 'react-simple-typewriter'
// import { useTypewriter } from 'react-simple-typewriter'

const Banner = () => {
  return (
    <div className="text-center">
      <div className="w-full h-[450px] absolute">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/vx2vYmj/banner.jpg"
        />
      </div>
      <div className=" relative w-full h-[450px] bg-gradient-to-r from-[#2a282887] to-[#0a0909d6] ">
        <MaxWidth>
          <div className="h-[450px] flex justify-center md:justify-end items-center">
            <div className="flex flex-col justify-center items-center space-y-4 text-white">
              <h1 className="md:text-6xl text-4xl font-bold">
                Local Tours <span className="text-[#425CEC]">and</span> Guide
              </h1>
              <p className="md:text-xl font-semibold italic text-[#ddd]">
                Local tours and guides offer immersive experiences,
                <br /> combining culture and history with exploration. <br />{" "}
                Knowledgeable guides lead travelers through destinations, <br />{" "}
                revealing hidden gems and stories, <br /> enhancing the travel
                experience.
              </p>
              <button className="btn bg-[#425CEC] hover:text-white font-semibold border-none hover:bg-[#3046c4]">
                Book Now
              </button>
            </div>
          </div>
        </MaxWidth>
      </div>
    </div>
  );
};

export default Banner;
