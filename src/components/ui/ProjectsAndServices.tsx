import Image from "next/image";
import projectsPhoto from "../../assects/projects.png";
import servicesPhoto from "../../assects/services.webp";
import NavigationButton from "../shared/NavigationButton";
import Cart from "./Cart";

const ProjectsAndServices = () => {
  return (
    <div className="space-y-4 md:space-y-12 md:flex md:flex-col justify-between">
      <div className=" p-2 rounded-full bg-gradient-to-r from-[#262626] to-[#151515]">
        <marquee>
          <ul className="flex gap-12 list-disc text-sm">
            <li> LATEST WORK AND FEATURED</li>
            <li>POWERFULL AND SECURE APPLICATION</li>
            <li> LATEST WORK AND FEATURED</li>
            <li> LATEST WORK AND FEATURED</li>
          </ul>
        </marquee>
      </div>
      <div className="rounded-xl grid grid-cols-2 gap-5 md:h-full">
        <Cart>
          <Image
            className="mx-auto"
            src={projectsPhoto}
            width={200}
            height={100}
            alt="projects_image"
          />
          <div>
            <p className="text-xs uppercase font-extralight text-gray-400">
              Showcase
            </p>
            <h3 className="font-semibold text-xl">Projects</h3>
          </div>
        </Cart>
        <Cart>
          <Image
            className="mx-auto"
            src={servicesPhoto}
            width={150}
            height={100}
            alt="projects_image"
          />
          <div>
            <p className="text-xs uppercase font-extralight text-gray-400">
              Get my servicess
            </p>
            <h3 className="font-semibold text-xl">Services</h3>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default ProjectsAndServices;
