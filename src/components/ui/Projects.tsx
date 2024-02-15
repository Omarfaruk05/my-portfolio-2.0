import Image from "next/image";
import project1 from "../../assects/projects/rent-nest.png";
import project2 from "../../assects/projects/e-mart.png";
import project3 from "../../assects/projects/book-haven.png";
import project4 from "../../assects/projects/tech-next.png";
import { CiCircleChevRight } from "react-icons/ci";

const Projects = () => {
  return (
    <div className="relative mt-4 px-4">
      <div className="absolute top-40 right-[50%] h-32 w-32 rotate-45 bg-gradient-to-l from-[#5FBCFF] to-[#A471FB] blur-xl"></div>
      <div className="absolute bottom-12 left-[6%] rotate-45 h-32 w-32 bg-gradient-to-t from-[#5FBCFF] to-[#A471FB] blur-sm rounded-xl"></div>
      <div className="absolute bottom-32 right-[24%] rotate-45 h-60 w-60 bg-gradient-to-t from-[#5FBCFF] to-[#A471FB] blur-xl rounded-full"></div>
      {/* Skill divder  */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 pb-24">
          <div className="w-full h-[3px] bg-blue-500 rounded-full"></div>
          <div>
            <h1 className="w-44 md:w-72 text-center text-xl md:text-3xl font-semibold">
              “My Projects”
            </h1>
          </div>
          <div className="w-full h-[3px] bg-blue-500 rounded-full"></div>
        </div>
        {/* main part  */}
        <div className="lg:grid grid-cols-2 gap-2 ">
          <div className="grid grid-cols-3 gap-2 md:m-2 p-2 justify-center border border-blue-500 rounded-md backdrop-blur-lg bg-gray-700/50">
            <div>
              <Image className="rounded-md h-64" src={project1} alt="" />
            </div>
            <div className="col-span-2">
              <h2 className="text-xl font-semibold">Rent Nest</h2>
              <ul className="list-disc ml-4 mb-3">
                <li className="text-xs">
                  Anonline platform enabling house owners to list rental
                  properties and renters to find and rent houses.
                </li>
                <li className="text-xs">
                  Role-based access control with user, admin, and super admin
                  roles for comprehensive management of platform activities and
                  operations.
                </li>
              </ul>
              <div>
                <span className="text-sm bg-gradient-to-l from-[#5FBCFF] to-[#A471FB] py-[1px] px-[3px] rounded-sm">
                  Technologies
                </span>
                <div className="mt-1 text-xs flex gap-1 flex-wrap">
                  <button className="py-[1px] px-[4px] rounded-sm  bg-[#D6CDEA]">
                    Next.js
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Ant Design
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Redux
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Typescript
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    React Hook Form
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    TailwindCss
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Node.js
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Express.js
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Prisma
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Zod
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    JWT
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    bcrypt
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm bg-gradient-to-l from-[#5FBCFF] to-[#A471FB] py-[1px] px-[3px] rounded-sm">
                  Links
                </span>
                <div className="mt-1 text-xs flex gap-1 flex-wrap">
                  <a
                    href="https://property-beta-three.vercel.app/"
                    target="_blank"
                    className="py-[1px] px-[4px] rounded-sm  bg-slate-400"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Omarfaruk05/rent-nest-frontend"
                    target="_blank"
                    className="py-[1px] px-[4px] rounded-sm  bg-slate-400"
                  >
                    Front-end
                  </a>
                  <a
                    href="https://github.com/Omarfaruk05/rent-nest-backend"
                    target="_blank"
                    className="py-[1px] px-[4px] rounded-sm  bg-slate-400"
                  >
                    Backend
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 md:m-2 p-2 justify-center border border-blue-500 rounded-md backdrop-blur-lg bg-gray-700/50">
            <div>
              <Image className="rounded-md h-64" src={project2} alt="" />
            </div>
            <div className="col-span-2">
              <h2 className="text-xl font-semibold">E-Mart</h2>
              <ul className="list-disc ml-4 mb-3">
                <li className="text-xs">
                  Browse, shop, add to cart, and pay for a convenient online
                  shopping experience
                </li>
                <li className="text-xs">
                  Explore products, select items, and check out, ensuring
                  efficient and convenient online shopping.
                </li>
                <li className="text-xs">
                  Reduxis used for all API calls and stores all data in this
                  state.
                </li>
              </ul>
              <div>
                <span className="text-sm bg-gradient-to-l from-[#5FBCFF] to-[#A471FB] py-[1px] px-[3px] rounded-sm">
                  Technologies
                </span>
                <div className="mt-1 text-xs flex gap-1 flex-wrap">
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    React.js
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    DaisyUI
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Redux
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    React Router Dom
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    React Hook Form
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    TailwindCss
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Node.js
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Express.js
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Mongoose
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    JWT
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    bcrypt
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm bg-gradient-to-l from-[#5FBCFF] to-[#A471FB] py-[1px] px-[3px] rounded-sm">
                  Links
                </span>
                <div className="mt-1 text-xs flex gap-1 flex-wrap">
                  <a
                    href="https://heartfelt-tiramisu-5729e5.netlify.app"
                    target="_blank"
                    className="py-[1px] px-[4px] rounded-sm  bg-slate-400"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Omarfaruk05/e-mart-client"
                    target="_blank"
                    className="py-[1px] px-[4px] rounded-sm  bg-slate-400"
                  >
                    Front-end
                  </a>
                  <a
                    href="https://github.com/Omarfaruk05/e-mart-server"
                    target="_blank"
                    className="py-[1px] px-[4px] rounded-sm  bg-slate-400"
                  >
                    Backend
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 md:m-2 p-2 justify-center border border-blue-500 rounded-md backdrop-blur-lg bg-gray-700/50">
            <div>
              <Image className="rounded-md h-64" src={project3} alt="" />
            </div>
            <div className="col-span-2">
              <h2 className="text-xl font-semibold">Book Haven</h2>
              <ul className="list-disc ml-4 mb-3">
                <li className="text-xs">
                  Explore books, and organize wishlists, and authenticated users
                  can contribute by adding books.
                </li>
                <li className="text-xs">
                  Empowersusers to curate their reading experience with a
                  wishlist, reading, and finished sections, while enabling
                  contributions from authenticated users.
                </li>
              </ul>
              <div>
                <span className="text-sm bg-gradient-to-l from-[#5FBCFF] to-[#A471FB] py-[1px] px-[3px] rounded-sm">
                  Technologies
                </span>
                <div className="mt-1 text-xs flex gap-1 flex-wrap">
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    React.js
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    DaisyUI
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Redux
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Typescript
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    React Hook Form
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    TailwindCss
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Node.js
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Express.js
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Prisma
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Zod
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    JWT
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    bcrypt
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm bg-gradient-to-l from-[#5FBCFF] to-[#A471FB] py-[1px] px-[3px] rounded-sm">
                  Links
                </span>
                <div className="mt-1 text-xs flex gap-1 flex-wrap">
                  <a
                    href="https://book-haven-1335e.web.app/"
                    target="_blank"
                    className="py-[1px] px-[4px] rounded-sm  bg-slate-400"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Omarfaruk05/book-haven-frontend"
                    target="_blank"
                    className="py-[1px] px-[4px] rounded-sm  bg-slate-400"
                  >
                    Front-end
                  </a>
                  <a
                    href="https://github.com/Omarfaruk05/book-haven-backend"
                    target="_blank"
                    className="py-[1px] px-[4px] rounded-sm  bg-slate-400"
                  >
                    Backend
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 md:m-2 p-2 justify-center border border-blue-500 rounded-md backdrop-blur-lg bg-gray-700/50">
            <div>
              <Image className="rounded-md snap-y h-60" src={project4} alt="" />
            </div>
            <div className="col-span-2">
              <h2 className="text-xl font-semibold">Rent Nest</h2>
              <ul className="list-disc ml-4 mb-3">
                <li className="text-xs">
                  Anonline platform enabling house owners to list rental
                  properties and renters to find and rent houses.
                </li>
                <li className="text-xs">
                  Role-based access control with user, admin, and super admin
                  roles for comprehensive management of platform activities and
                  operations.
                </li>
              </ul>
              <div>
                <span className="text-sm bg-gradient-to-l from-[#5FBCFF] to-[#A471FB] py-[1px] px-[3px] rounded-sm">
                  Technologies
                </span>
                <div className="mt-1 text-xs flex gap-1 flex-wrap">
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Next.js
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Ant Design
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Redux
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Typescript
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    React Hook Form
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    TailwindCss
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Node.js
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Express.js
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Prisma
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Zod
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    JWT
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    bcrypt
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm bg-gradient-to-l from-[#5FBCFF] to-[#A471FB] py-[1px] px-[3px] rounded-sm">
                  Links
                </span>
                <div className="mt-1 text-xs flex gap-1 flex-wrap">
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Live
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Front-end
                  </button>
                  <button className="py-[1px] px-[4px] rounded-sm  bg-slate-400">
                    Backend
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center mt-4">
          <button className="flex gap-2 items-center transition duration-0 hover:duration-500 mx-2 px-4 hover:text-[#050C13] rounded-sm py-1 bg-gradient-to-r from-[#5FBCFF] to-[#A471FB]">
            See More <CiCircleChevRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
