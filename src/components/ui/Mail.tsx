import Image from "next/image";
import Star from "../../assects/star.png";
import Cart from "./Cart";

const Mail = () => {
  return (
    <Cart>
      <div className="p-4 relative">
        <div>
          <h1 className="text-4xl font-semibold mb-8">
            {"Let's"} work <span className="text-sky-500">together.</span>
          </h1>
          <Image
            src={Star}
            width={40}
            height={40}
            alt="star"
            className="absolute right-8 -top-4"
          />
        </div>
        <div>
          <form className="space-y-2 my-4">
            <input
              className="p-4 block w-full rounded-lg focus:outline-dashed focus:outline-gray-600 bg-gradient-to-l from-[#262626] to-[#151515]"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              className="p-4 block w-full rounded-lg focus:outline-dashed focus:outline-gray-600 bg-gradient-to-l from-[#262626] to-[#151515]"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="p-4 block w-full rounded-lg focus:outline-dashed focus:outline-gray-600 bg-gradient-to-l from-[#262626] to-[#151515]"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
            <textarea
              className="p-4 block w-full min-h-[150px] rounded-lg focus:outline-dashed focus:outline-gray-600 bg-gradient-to-l from-[#262626] to-[#151515]"
              name="body"
              id="bode"
              placeholder="Message"
            />
            <input
              className="uppercase text-xl font-semibold mx-auto w-full bg-[#333333] p-3 rounded-lg cursor-pointer"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </Cart>
  );
};

export default Mail;
