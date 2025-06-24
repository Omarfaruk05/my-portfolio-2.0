import Image from "next/image";
import Cart from "./Cart";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiTypescript } from "react-icons/si";
import { CgMediaLive } from "react-icons/cg";

const ProjectCart = ({ project }: any) => {
  return (
    <Cart path={project?.liveLink}>
      <div className=" space-y-3 max-w-[250px]">
        <div className="flex justify-center">
          <Image
            className="w-full rounded-lg"
            src={project?.images[0]}
            width={200}
            height={100}
            alt="project_photo"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold ">{project?.name}</h2>
          <p className="text-gray-400 text-sm">
            {project?.description.slice(0, 50) + "..."}
          </p>
        </div>
        <div className="flex flex-wrap gap-[2px]">
          <div className="p-1 rounded-md border-gray-500 border w-fit">
            <RiNextjsFill className=" text-white w-6 h-6" />
          </div>
          <div className="p-1 rounded-md border-gray-500 border w-fit">
            <SiTypescript className=" text-white w-6 h-6" />
          </div>
          <div className="p-1 rounded-md border-gray-500 border w-fit">
            <RiTailwindCssFill className="text-sky-500 w-6 h-6" />
          </div>
          <div className="p-1 rounded-md border-gray-500 border w-fit">
            <FaReact className="text-cyan-500 w-6 h-6" />
          </div>

          <div className="p-1 rounded-md border-gray-500 border w-fit">
            <FaNodeJs className="text-green-400 w-6 h-6" />
          </div>
          <div className="p-1 rounded-md border-gray-500 border w-fit">
            <SiExpress className="text-white w-6 h-6" />
          </div>
          <div className="p-1 rounded-md border-gray-500 border w-fit">
            <SiMongodb className="text-green-500 w-6 h-6" />
          </div>
        </div>

        <div className="flex gap-2 text-sm py-1">
          <a
            href={project?.liveLink}
            target="_blank"
            className="flex items-center  gap-1 hover:underline hover:text-blue-500 transition-all transform ease-in-out duration-300 rounded-sm p-[1px]"
          >
            <span>
              <CgMediaLive className="text-red-500" />
            </span>{" "}
            <span>Live</span>
          </a>
          <a
            href={project?.githubLinks.frontend}
            target="_blank"
            className="flex items-center  gap-1 hover:underline hover:text-blue-500 transition-all transform ease-in-out duration-300 rounded-sm p-[1px]"
          >
            <span>
              <FaGithub />
            </span>{" "}
            <span>Frontend</span>
          </a>
          <a
            href={project?.liveLink}
            target="_blank"
            className="flex items-center  gap-1 hover:underline hover:text-blue-500 transition-all transform ease-in-out duration-300 rounded-sm p-[1px]"
          >
            <span>
              <FaGithub />
            </span>{" "}
            <span>Backend</span>
          </a>
        </div>
      </div>
    </Cart>
  );
};

export default ProjectCart;
