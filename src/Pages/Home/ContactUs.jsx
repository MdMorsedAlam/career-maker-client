/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import Contact from '../../../public/contact.json'


const ContactUs = () => {
  return (
    <div className="grid max-w-screen-xl bg-gray-100 my-20 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leadi lg:text-5xl">
            Contact With Us
          </h2>
        </div>
        <Lottie animationData={Contact}/>
        {/* <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" /> */}
      </div>
      <form className="space-y-6">
        <div>
          <label className="text-sm">Full name</label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded input-accent"
          />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded input-accent"
          />
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded input-accent"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full text-white hover:text-black p-3 text-sm font-bold tracki uppercase rounded bg-accent"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
