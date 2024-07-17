import Image from "next/image";
import projectImg from "../../assects/projects/rent-nest.png";
import Cart from "./Cart";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiPrisma,
  SiTypescript,
  SiBootstrap,
  SiJsonwebtokens,
} from "react-icons/si";

const ProjectCart = ({ project }: any) => {
  return (
    <Cart>
      <div className=" space-y-3 max-w-[250px]">
        <div className="flex justify-center">
          <Image
            className="w-full rounded-lg"
            src={project?.images[0]}
            width={200}
            height={150}
            alt="project_photo"
          />
        </div>
        <div className="space-y-2">
          <p className="text-gray-500 uppercase">
            {project?.description}
          </p>
          <h2 className="text-2xl font-semibold ">{project?.name}</h2>
        </div>
        <div className="flex flex-wrap gap-[2px]">
          <div className="p-1 rounded-md border-gray-500 border w-fit">
            <RiNextjsFill className=" text-white w-6 h-6" />
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
      </div>
    </Cart>
  );
};

export default ProjectCart;
