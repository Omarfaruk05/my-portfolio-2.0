import Container from "@/components/shared/Container";
import Cart from "@/components/ui/Cart";
import Mail from "@/components/ui/Mail";
import Profiles from "@/components/ui/Profiles";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-14 justify-center md:justify-between my-12 px-2 lg:px-12">
        <div className="md:col-span-2 mt-4 space-y-12">
          <h2 className="text-xl uppercase font-semibold">Contact Me</h2>
          <div className="pt-4 space-y-5">
            <div className="flex gap-5">
              <div className="flex justify-center items-center bg-gradient-to-r from-[#262626] to-[#181818] w-fit p-3 rounded-md">
                <p className="text-2xl mx-1">@</p>
              </div>
              <div>
                <p className=" font-semibold">Email</p>
                <p className="text-gray-400">mdomarfaruk149518@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex justify-center items-center bg-gradient-to-r from-[#262626] to-[#181818] w-fit p-4 rounded-md">
                <FaPhone className="w-6 h-6" />
              </div>
              <div>
                <p className=" font-semibold">Phone</p>
                <p className="text-gray-400">+880156900262</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex justify-center items-center bg-gradient-to-r from-[#262626] to-[#181818] w-fit p-4 rounded-md">
                <FaLocationDot className="w-6 h-6" />
              </div>
              <div>
                <p className=" font-semibold">Location</p>
                <p className="text-gray-400">Gazipur, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
          <div>
            <Profiles />
          </div>
        </div>
        <div className="md:col-span-3 mt-4 space-y-3">
          <Mail />
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
