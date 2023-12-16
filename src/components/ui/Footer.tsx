import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-gray-900">
      <div className="max-w-7xl mx-auto flex justify-between py-12 px-4">
        <div>
          <p>2016 © Omar Faruk. All right reserved</p>
        </div>
        <div className="flex gap-2">
          <a
            href="https://www.facebook.com/profile.php?id=100023919873768"
            target="_black"
          >
            <FaFacebookSquare size={40} />
          </a>
          <a href="https://www.instagram.com/omarfaruk0005/" target="_black">
            <FaInstagramSquare size={40} />
          </a>
          <a href="https://www.linkedin.com/in/md-omar-faruk05" target="_black">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/Omarfaruk05" target="_blank">
            <FaGithubSquare size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
