import Container from "../shared/Container";
import myPhoto from "../../assects/profile1.png";
import Image from "next/image";
import NavigationButton from "../shared/NavigationButton";

const MyInfo = () => {
  return (
    <div className="relative w-fit cursor-pointer">
      <div className="grid grid-cols-2 gap-4 justify-center items-center bg-gradient-to-r from-gray-700 to-gray-900 w-fit p-4 md:p-8 lg:p-12 rounded-2xl">
        <div>
          <Image
            className="rounded-2xl bg-gradient-to-b from-slate-600 to-white  border border-white"
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
      <div className="absolute bottom-4 right-8">
        <NavigationButton />
      </div>
    </div>
  );
};

export default MyInfo;
