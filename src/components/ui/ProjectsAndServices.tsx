import Image from "next/image";
import projectsPhoto from "../../assects/Business 1.png";
import NavigationButton from "../shared/NavigationButton";

const ProjectsAndServices = () => {
  return (
    <div className="space-y-12 ">
      <div className="border p-2 rounded-full bg-gradient-to-r from-[#262626] to-[#151515]">
        <marquee>
          LATEST WORK AND FEATURED POWERFULL AND SECURE APPLICATION LATEST WORK
          AND FEATURED LATEST WORK AND FEATURED
        </marquee>
      </div>
      <div className="rounded-xl flex gap-5 h-[70%]">
        <div className="cursor-pointer relative p-4 w-1/2 bg-gradient-to-r from-[#262626] to-[#151515] rounded-xl">
          <Image
            className="mx-auto"
            src={projectsPhoto}
            width={150}
            height={100}
            alt="projects_image"
          />
          <p className="text-xs uppercase font-extralight text-gray-400">
            Showcase
          </p>
          <h3 className="font-semibold text-xl">Projects</h3>
          <div className="absolute right-4 bottom-4">
            <NavigationButton />
          </div>
        </div>
        <div className="cursor-pointer relative p-4 w-1/2 bg-gradient-to-r from-[#262626] to-[#151515] rounded-xl">
          <Image
            className="mx-auto"
            src={projectsPhoto}
            width={150}
            height={100}
            alt="projects_image"
          />
          <p className="text-xs uppercase font-extralight text-gray-400">
            Get my servicess
          </p>
          <h3 className="font-semibold text-xl">Services</h3>
          <div className="absolute right-4 bottom-4">
            <NavigationButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsAndServices;
