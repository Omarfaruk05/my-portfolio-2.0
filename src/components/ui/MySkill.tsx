import Image from "next/image";
import Backend from "../../assects/Business 1.png";
import Frontend from "../../assects/3d laptop 2.png";
import Design from "../../assects/ui 1.png";
import Solution from "../../assects/time2 1.png";

const MySkill = () => {
  return (
    <div className="relative py-12 px-4">
      <div className="absolute top-40 right-[50%] h-32 w-32 rotate-45 bg-gradient-to-l from-[#5FBCFF] to-[#A471FB] blur-xl"></div>
      <div className="absolute bottom-12 left-[6%] rotate-45 h-32 w-32 bg-gradient-to-t from-[#5FBCFF] to-[#A471FB] blur-sm rounded-xl"></div>
      <div className="absolute bottom-32 right-[24%] rotate-45 h-60 w-60 bg-gradient-to-t from-[#5FBCFF] to-[#A471FB] blur-xl rounded-full"></div>
      {/* Skill divder  */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 pb-24">
          <div className="w-full h-[3px] bg-blue-500 rounded-full"></div>
          <div>
            <h1 className="w-44 md:w-72 text-center text-xl md:text-3xl font-semibold">
              “What Can I do ?”
            </h1>
          </div>
          <div className="w-full h-[3px] bg-blue-500 rounded-full"></div>
        </div>

        {/* main content  */}
        <div className="px:2 md:px-8 lg:px-24 md:grid grid-cols-2 gap-8 ">
          <div className="border border-blue-500 mb-3 rounded-md backdrop-blur-lg bg-gray-700/50">
            <Image
              className="m-4"
              width={200}
              height={150}
              src={Frontend}
              alt=""
            />
            <h5 className="text-lg font-semibold text-end mr-12">
              Front-end Development
            </h5>
          </div>
          <div className="border border-blue-500 mb-3 rounded-md backdrop-blur-lg bg-gray-700/50">
            <Image
              className="m-4"
              width={190}
              height={150}
              src={Backend}
              alt=""
            />
            <h5 className="text-lg font-semibold text-end mr-12">
              Backend Development
            </h5>
          </div>
          <div className="border border-blue-500 mb-3 rounded-md backdrop-blur-lg bg-gray-700/50">
            <Image
              className="m-4"
              width={210}
              height={150}
              src={Design}
              alt=""
            />
            <h5 className="text-lg font-semibold text-end mr-12">Web Design</h5>
          </div>
          <div className="border border-blue-500 mb-3 rounded-md backdrop-blur-lg bg-gray-700/50">
            <Image
              className="m-4"
              width={180}
              height={150}
              src={Solution}
              alt=""
            />
            <h5 className="text-lg font-semibold text-end mr-12">
              Real-Time Solution
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
