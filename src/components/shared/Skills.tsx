import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiPrisma,
  SiTypescript,
  SiJsonwebtokens,
  SiNestjs,
  SiTypeorm,
} from "react-icons/si";
import SlideIn from "../motions/SlideIn";

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <SlideIn
        delay={0.1}
        className="flex-1 px-2 py-1 flex justify-center items-center gap-2 border border-gray-700 rounded-full  hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black"
      >
        <IoLogoJavascript
          className="rounded-sm bg-white text-black"
          width={40}
        />
        <h5>Javascript</h5>
      </SlideIn>
      <SlideIn
        delay={0.2}
        className="flex-1 px-2 py-1 flex justify-center items-center gap-2 border border-gray-700 rounded-full  hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black"
      >
        <SiTypescript className="rounded-sm bg-white text-black" width={40} />
        <h5>Typescript</h5>
      </SlideIn>
      <SlideIn className="flex-1 px-2 py-1 flex justify-center items-center gap-2 border border-gray-700 rounded-full   hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black">
        <FaReact className="animate-spin rounded-sm  text-white" width={40} />
        <h5>React.JS</h5>
      </SlideIn>

      <SlideIn
        delay={0.4}
        className="flex-1 px-2 py-1 flex justify-center items-center gap-2 border border-gray-700 rounded-full  hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black"
      >
        <SiNestjs className="rounded-sm bg-white text-black" width={40} />
        <h5>Next.JS</h5>
      </SlideIn>

      <SlideIn
        delay={0.5}
        className="flex-1 px-2 py-1 flex justify-center items-center gap-2 border border-gray-700 rounded-full  hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black"
      >
        <RiTailwindCssFill
          className="rounded-sm bg-white text-black"
          width={40}
        />
        <h5>TailwindCSS</h5>
      </SlideIn>

      <SlideIn
        delay={0.6}
        className="flex-1 px-2 py-1 flex justify-center items-center gap-2 border border-gray-700 rounded-full  hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black"
      >
        <SiTypeorm className="rounded-sm bg-white text-black" width={40} />
        <h5>TypeORM</h5>
      </SlideIn>
      <SlideIn
        delay={0.7}
        className="flex-1 px-2 py-1 flex justify-center items-center gap-2 border border-gray-700 rounded-full  hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black"
      >
        <SiPrisma className="rounded-sm bg-white text-black" width={40} />
        <h5>Prisma</h5>
      </SlideIn>

      <SlideIn
        delay={0.8}
        className="flex-1 px-2 py-1 flex justify-center items-center gap-2 border border-gray-700 rounded-full  hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black"
      >
        <FaNodeJs className="rounded-sm bg-white text-black" width={40} />
        <h5>Nest.JS</h5>
      </SlideIn>

      <SlideIn
        delay={0.9}
        className="flex-1 px-2 py-1 flex justify-center items-center gap-2 border border-gray-700 rounded-full  hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black"
      >
        <SiExpress className="rounded-sm bg-white text-black" width={40} />
        <h5>Express.JS</h5>
      </SlideIn>

      <SlideIn
        delay={1}
        className="flex-1 px-2 py-1 flex justify-center items-center gap-2 border border-gray-700 rounded-full  hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black"
      >
        <SiMongodb className="rounded-sm bg-white text-black" width={40} />
        <h5>MongoDB</h5>
      </SlideIn>

      <SlideIn
        delay={1.1}
        className="flex-1 px-2 py-1 flex justify-center items-center gap-2 border border-gray-700 rounded-full  hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black"
      >
        <SiPostgresql className="rounded-sm bg-white text-black" width={40} />
        <h5>PostgreSQL</h5>
      </SlideIn>

      <SlideIn
        delay={1.2}
        className="flex-1 px-2 py-1 flex justify-center items-center gap-2 border border-gray-700 rounded-full  hover:bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] hover:text-black"
      >
        <SiJsonwebtokens
          className="rounded-sm bg-white text-black"
          width={40}
        />
        <h5>JWT</h5>
      </SlideIn>
    </div>
  );
};

export default Skills;
