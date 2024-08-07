import myPhoto from "../../assects/profile1.png";
import Image from "next/image";
import Cart from "./Cart";

const MyInfo = () => {
  return (
    <div className="relative w-fit cursor-pointer">
      <Cart path="/about">
        <div className="grid gird-cols-1 md:grid-cols-2 gap-3 items-center">
          <div className="lg:p-8">
            <Image
              className="border border-gray-400 rounded-2xl w-full bg-gradient-to-b from-slate-600 to-white "
              src={myPhoto}
              width={200}
              height={200}
              alt="profile_image"
            />
          </div>
          <div className="space-y-3">
            <h5 className="uppercase font-extralight text-lg text-gray-400">
              A Full-Stack Developer
            </h5>
            <h3 className="uppercase text-3xl font-semibold">Omar Faruk</h3>
            <p className="text-gray-400">
              A MERN Stack & Apps developer with a passion for creating dynamic
              and user-friendly applications.
            </p>
          </div>
        </div>
      </Cart>
    </div>
  );
};

export default MyInfo;
