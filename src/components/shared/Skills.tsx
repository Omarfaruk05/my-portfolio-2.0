import { IoLogoJavascript } from "react-icons/io";
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

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 rounded-full hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <IoLogoJavascript
          className="rounded-sm bg-white text-black"
          width={40}
        />
        <h5>Jsvascript</h5>
      </div>
      <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 rounded-full hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <SiTypescript className="rounded-sm bg-white text-black" width={40} />
        <h5>Typescript</h5>
      </div>
      <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 rounded-full hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <FaReact className="rounded-sm bg-white text-black" width={40} />
        <h5>React.JS</h5>
      </div>
      <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 rounded-full hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <RiNextjsFill className="rounded-sm bg-white text-black" width={40} />
        <h5>Next.JS</h5>
      </div>
      <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 rounded-full hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <RiTailwindCssFill
          className="rounded-sm bg-white text-black"
          width={40}
        />
        <h5>TailwindCss</h5>
      </div>
      <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 rounded-full hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <SiBootstrap className="rounded-sm bg-white text-black" width={40} />
        <h5>Bootstrap</h5>
      </div>
      <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 rounded-full hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <SiPrisma className="rounded-sm bg-white text-black" width={40} />
        <h5>Prisma</h5>
      </div>
      <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 rounded-full hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <FaNodeJs className="rounded-sm bg-white text-black" width={40} />
        <h5>Node.JS</h5>
      </div>
      <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 rounded-full hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <SiExpress className="rounded-sm bg-white text-black" width={40} />
        <h5>Express.JS</h5>
      </div>

      <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 rounded-full hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <SiMongodb className="rounded-sm bg-white text-black" width={40} />
        <h5>MongoDB</h5>
      </div>

      <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 rounded-full hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <SiPostgresql className="rounded-sm bg-white text-black" width={40} />
        <h5>PostgreSQL</h5>
      </div>
      <div className="px-2 py-1 flex items-center gap-2 border border-gray-700 rounded-full hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <SiJsonwebtokens
          className="rounded-sm bg-white text-black"
          width={40}
        />
        <h5>JWT</h5>
      </div>
    </div>
  );
};

export default Skills;
