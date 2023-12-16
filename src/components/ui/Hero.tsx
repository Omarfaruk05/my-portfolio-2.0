import React from "react";
import backgroundShape from "../../assects/herobg.png";
import profile from "../../assects/profile.png";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative my-4 px-4">
      <div className="absolute top-10 h-32 w-32 rotate-45 bg-gradient-to-l from-[#5FBCFF] to-[#A471FB] blur-xl"></div>
      <div className="hidden md:block absolute bottom-12 left-[600px] rotate-45 h-32 w-32 rotate- bg-gradient-to-t from-[#5FBCFF] to-[#A471FB] blur-md rounded-md"></div>
      {/* for tablet and destop  */}
      <div className="max-w-7xl mx-auto hidden md:grid grid-cols-2 relative">
        <div></div>
        <div className="absolute w-[600px] top-32 left-[10%] md:left-1 lg:left-[5%] xl:left-[8%] justify-center z-20 backdrop-blur-xl bg-white/10 border border-gray-400 p-4  rounded-md">
          <h5 className="text-lg">Hello, I am</h5>
          <div className="mx-4">
            <h3 className="text-3xl font-semibold">Mohammed Omar Faruk</h3>
            <p className="mb-6">Web Application Developer</p>
            <small>
              Full-stack developers excel in both front-end and back-end web
              development, seamlessly integrating user interfaces with
              server-side functionalities. Their expertise spans the entire tech
              stack, ensuring comprehensive and efficient solutions.
            </small>
            <div className="flex gap-2 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100023919873768"
                target="_black"
              >
                <FaFacebookSquare size={40} />
              </a>
              <a
                href="https://www.instagram.com/omarfaruk0005/"
                target="_black"
              >
                <FaInstagramSquare size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-omar-faruk05"
                target="_black"
              >
                <FaLinkedin size={40} />
              </a>
              <a href="https://github.com/Omarfaruk05" target="_blank">
                <FaGithubSquare size={40} />
              </a>
            </div>
          </div>
        </div>
        <div className="relative mt-40">
          <Image className="blur-sm" width={650} src={backgroundShape} alt="" />
          <Image
            className="absolute  -top-24  right-[0%]"
            width={350}
            src={profile}
            alt=""
          />
        </div>
      </div>
      {/* for mobile  */}
      <div className="max-w-7xl mx-auto  block md:hidden">
        <div className="mx-auto backdrop-blur-xl bg-white/10 border border-gray-400 p-4 rounded-md">
          <h5 className="text-lg">Hello, I am</h5>
          <div className="mx-4">
            <h3 className="text-3xl font-semibold">Mohammed Omar Faruk</h3>
            <p className="mb-6">Web Application Developer</p>
            <small>
              Full-stack developers excel in both front-end and back-end web
              development, seamlessly integrating user interfaces with
              server-side functionalities. Their expertise spans the entire tech
              stack, ensuring comprehensive and efficient solutions.
            </small>
            <div className="flex gap-2 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100023919873768"
                target="_black"
              >
                <FaFacebookSquare size={40} />
              </a>
              <a
                href="https://www.instagram.com/omarfaruk0005/"
                target="_black"
              >
                <FaInstagramSquare size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-omar-faruk05"
                target="_black"
              >
                <FaLinkedin size={40} />
              </a>
              <a href="https://github.com/Omarfaruk05" target="_blank">
                <FaGithubSquare size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
