import avatar from "../../assets/avatar.png";
const Team = () => {
  return (
    <section className="mb-20 dark:bg-gray-800 py-20 rounded-lg dark:text-gray-100">
      <div className="flex flex-col items-center justify-center p-4 space-y-8">
        <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">
          Team Members
        </h1>
        <p className="max-w-2xl text-center dark:text-gray-400">
          Our Local Tours and Guide service organization is your gateway to
          immersive and authentic travel experiences. Our passionate guides and
          experts are dedicated to showcasing the unique charm and hidden gems
          of our local destinations.
        </p>
        <div className="flex flex-row flex-wrap-reverse justify-center">
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-20 h-20 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src={avatar}
            />
            <p className="text-xl font-semibold">Maymona Alam</p>
            <p className="dark:text-gray-400">Graphic Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-20 h-20 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src={avatar}
            />
            <p className="text-xl font-semibold">Romana Akter</p>
            <p className="dark:text-gray-400">React Developer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-20 h-20 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src={avatar}
            />
            <p className="text-xl font-semibold">Morsed Alam</p>
            <p className="dark:text-gray-400">Front End Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-20 h-20 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src={avatar}
            />
            <p className="text-xl font-semibold">Sabbir Ahmed</p>
            <p className="dark:text-gray-400">Full Stack Developer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-20 h-20 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src={avatar}
            />
            <p className="text-xl font-semibold">Abir Hossain</p>
            <p className="dark:text-gray-400">MERN Stack Developer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-20 h-20 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src={avatar}
            />
            <p className="text-xl font-semibold">Shomon Ahmed</p>
            <p className="dark:text-gray-400">Back End Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
