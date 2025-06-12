import Image from "next/image";
import projectsPhoto from "../../assects/projects.png";
import servicesPhoto from "../../assects/services.webp";
import Cart from "./Cart";
import SlideIn from "../motions/SlideIn";

const ProjectsAndServices = () => {
  return (
    <div className="space-y-4 md:flex md:flex-col justify-between">
      <SlideIn direction="right">
        <div className="relative overflow-hidden py-3 px-1 rounded-md bg-gradient-to-r from-[#262626] to-[#151515]">
          <div className="animate-marquee whitespace-nowrap flex gap-12 text-sm list-disc pl-full">
            <span className="flex gap-12 list-disc">
              <li>LATEST WORK AND FEATURED</li>
              <li>POWERFUL AND SECURE APPLICATION</li>
              <li>LATEST WORK AND FEATURED</li>
              <li>LATEST WORK AND FEATURED</li>
            </span>
          </div>
        </div>
      </SlideIn>
      <div className="rounded-xl grid grid-cols-2 gap-5 md:h-full">
        <SlideIn direction="top">
          <Cart path="/projects">
            <Image
              className="mx-auto"
              src={projectsPhoto}
              width={230}
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
        </SlideIn>
        <SlideIn direction="top" delay={0.2}>
          <Cart path="services">
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
        </SlideIn>
      </div>
    </div>
  );
};

export default ProjectsAndServices;
