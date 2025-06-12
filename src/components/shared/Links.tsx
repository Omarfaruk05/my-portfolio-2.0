import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import SlideIn from "../motions/SlideIn";

const Links = () => {
  return (
    <div className="flex gap-4">
      <SlideIn className="border h-fit w-fit border-gray-700 rounded-full p-2 hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-blue-700">
        <a
          href="https://www.facebook.com/profile.php?id=100023919873768"
          target="_black"
        >
          <FaFacebookF size={25} />
        </a>
      </SlideIn>
      <SlideIn
        delay={0.2}
        className="border h-fit w-fit border-gray-700 rounded-full p-2 hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-red-600"
      >
        <a href="https://www.instagram.com/omarfaruk0005/" target="_black">
          <FaInstagram size={25} />
        </a>
      </SlideIn>
      <SlideIn
        delay={0.4}
        className="border h-fit w-fit border-gray-700 rounded-full p-2 hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-blue-700"
      >
        <a href="https://www.linkedin.com/in/md-omar-faruk05" target="_black">
          <FaLinkedinIn size={25} />
        </a>
      </SlideIn>
      <SlideIn
        delay={0.6}
        className="border h-11 w-11 border-gray-700 rounded-full p-2 hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-blue-700"
      >
        <a href="https://github.com/Omarfaruk05" target="_blank">
          <FaGithub size={25} />
        </a>
      </SlideIn>
    </div>
  );
};

export default Links;
