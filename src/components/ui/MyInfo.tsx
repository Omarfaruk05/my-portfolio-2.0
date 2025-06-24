import myPhoto from "../../assects/profile1.png";
import Image from "next/image";
import Cart from "./Cart";
import SlideIn from "../motions/SlideIn";

const MyInfo = () => {
  return (
    <SlideIn direction="left">
      <div className=" w-fit cursor-pointer">
        <Cart path="/about">
          <div className="grid gird-cols-1 md:grid-cols-2 gap-3 items-center">
            <SlideIn direction="top" delay={0.2} className="lg:p-8">
              <Image
                className="border border-gray-400 rounded-2xl w-full bg-gradient-to-b from-slate-600 to-white "
                src={myPhoto}
                width={200}
                height={200}
                alt="profile_image"
              />
            </SlideIn>
            <SlideIn direction="right" delay={0.4} className="space-y-3">
              <h5 className="uppercase text-lg text-gray-400">
                A Full-Stack Developer
              </h5>
              <h3 className="uppercase text-3xl font-semibold">Omar Faruk</h3>
              <p className="text-gray-400">
                A full stack developer with years of real-world experience,
                passionate about building scalable, efficient, and user-friendly
                solutions.
              </p>
            </SlideIn>
          </div>
        </Cart>
      </div>
    </SlideIn>
  );
};

export default MyInfo;
