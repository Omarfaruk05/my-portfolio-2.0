import { MdOutlineCloudDownload } from "react-icons/md";

const Nav = () => {
  return (
    <div className="backdrop-blur-lg fixed w-full top-0 z-30">
      <div className=" max-w-7xl mx-auto px-4 flex justify-center sm:justify-between items-center py-4">
        <h2 className="text-lg font-semibold hidden sm:block">OMAR FARUK</h2>

        <ul className="flex gap-1 items-center list-none text-gray-500">
          <button className="hover:outline-dashed hover:text-white outline-[1px] tranistion-all transform ease-in-out duration-300 rounded-sm py-[1px] px-2">
            About
          </button>
          <button className="hover:outline-dashed hover:text-white outline-[1px] tranistion-all transform ease-in-out duration-300 rounded-sm py-[1px] px-2">
            Services
          </button>
          <button className="hover:outline-dashed hover:text-white outline-[1px] tranistion-all transform ease-in-out duration-300 rounded-sm py-[1px] px-2">
            Projects
          </button>
          <button className="hover:outline-dashed hover:text-white outline-[1px] tranistion-all transform ease-in-out duration-300 rounded-sm py-[1px] px-2">
            Blogs
          </button>{" "}
          <a
            href={"/Omar-Faruk-Resume-Full-Stack.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className="flex items-center hover:text-white gap-2 transition duration-300 mx-2 px-4 hover:text-[#050C13] rounded-sm py-1 bg-gradient-to-r from-[#5FBCFF] to-[#A471FB]">
              <MdOutlineCloudDownload size={20} /> Resume
            </button>{" "}
          </a>
        </ul>
      </div>
      <div className="shadow-lg"></div>
    </div>
  );
};

export default Nav;
