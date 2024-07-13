import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Links = () => {
  return (
    <div className="flex gap-2">
      <a
        className="border h-fit w-fit border-gray-700 rounded-full p-2 hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-blue-700"
        href="https://www.facebook.com/profile.php?id=100023919873768"
        target="_black"
      >
        <FaFacebookF size={25} />
      </a>
      <a
        className="border h-fit w-fit border-gray-700 rounded-full p-2 hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-red-600"
        href="https://www.instagram.com/omarfaruk0005/"
        target="_black"
      >
        <FaInstagram size={25} />
      </a>
      <a
        className="border h-fit w-fit border-gray-700 rounded-full p-2 hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-blue-700"
        href="https://www.linkedin.com/in/md-omar-faruk05"
        target="_black"
      >
        <FaLinkedinIn size={25} />
      </a>
      <a
        className="border h-fit w-fit border-gray-700 rounded-full p-2 hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black"
        href="https://github.com/Omarfaruk05"
        target="_blank"
      >
        <FaGithub size={25} />
      </a>
    </div>
  );
};

export default Links;
