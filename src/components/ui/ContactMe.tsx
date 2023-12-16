"use client";
import { AiOutlineSend } from "react-icons/ai";

const ContactMe = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="relative py-12 px-4">
      <div className="absolute top-40 right-[50%] h-32 w-32 rotate-45 bg-gradient-to-l from-[#5FBCFF] to-[#A471FB] blur-xl"></div>
      <div className="hidden md:block absolute bottom-12 left-[6%] rotate-45 h-32 w-32 bg-gradient-to-t from-[#5FBCFF] to-[#A471FB] blur-sm rounded-xl"></div>
      <div className="hidden md:block absolute bottom-0 md:bottom-24 md:right-10 rounded-full right-[30%] h-40 w-40 rotate-45 bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] blur-lg"></div>
      {/* Skill divder  */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-full h-[3px] bg-blue-500 rounded-full"></div>
          <div>
            <h1 className="w-44 md:w-72 text-center text-xl md:text-3xl font-semibold">
              “Get in Touch”
            </h1>
          </div>
          <div className="w-full h-[3px] bg-blue-500 rounded-full"></div>
        </div>
        <p className="text-center mt-4 mb-12">
          Want to more about me? Please send me message what do you want?
        </p>
        {/* main part  */}
        <div className="mx-4 mx:mx-12 lg:mx-20">
          <form onSubmit={handleSubmit}>
            <div className="md:grid grid-cols-3 gap-3 justify-between">
              <div>
                <input
                  className="w-full p-1 my-1 border border-blue-500 rounded-sm backdrop-blur-lg bg-gray-700/50"
                  type="text"
                  name="name"
                  placeholder="Name"
                  id=""
                />
              </div>
              <div>
                <input
                  className="w-full p-1 my-1 border border-blue-500 rounded-sm backdrop-blur-lg bg-gray-700/50"
                  type="email"
                  name="email"
                  placeholder="Email"
                  id=""
                />
              </div>
              <div>
                <input
                  className="w-full p-1 my-1 border border-blue-500 rounded-sm backdrop-blur-lg bg-gray-700/50"
                  type="text"
                  name="phoneNumber"
                  placeholder="Contact Number"
                  id=""
                />
              </div>
            </div>
            <div>
              <input
                className="w-full font-semibold p-1 my-1 border border-blue-500 rounded-sm backdrop-blur-lg bg-gray-700/50"
                type="text"
                name="subject"
                placeholder="Subject"
                id=""
              />
            </div>
            <div>
              <textarea
                className="w-full min-h-[200px] p-1 my-1 border border-blue-500 rounded-sm backdrop-blur-lg bg-gray-700/50"
                name="message"
                placeholder="Message"
                id=""
              />
            </div>
            <div className="mx-auto flex justify-center items-center gap-2 w-fit text-center cursor-pointer transition duration-0 hover:duration-500 px-4 hover:text-[#050C13] rounded-sm py-1 bg-gradient-to-r from-[#5FBCFF] to-[#A471FB]">
              <input className="" type="submit" value="Send Message" />
              <AiOutlineSend size={20} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
