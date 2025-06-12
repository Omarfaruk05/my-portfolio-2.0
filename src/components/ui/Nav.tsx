import Link from "next/link";
import { MdOutlineCloudDownload } from "react-icons/md";

const Nav = () => {
  return (
    <div className="backdrop-blur-lg fixed w-full top-0 z-30">
      <div className=" max-w-7xl mx-auto px-4 flex justify-center sm:justify-between items-center py-4">
        <Link href={"/"} className="text-lg font-semibold hidden sm:block">
          MD. OMAR FARUK
        </Link>

        <ul className="flex gap-1 items-center list-none text-gray-500">
          <Link
            href={"about"}
            className="hover:outline-dashed hover:text-white outline-[1px] tranistion-all transform ease-in-out duration-300 rounded-sm py-[1px] px-2"
          >
            About
          </Link>
          <Link
            href={"services"}
            className="hover:outline-dashed hover:text-white outline-[1px] tranistion-all transform ease-in-out duration-300 rounded-sm py-[1px] px-2"
          >
            Services
          </Link>
          <Link
            href={"projects"}
            className="hover:outline-dashed hover:text-white outline-[1px] tranistion-all transform ease-in-out duration-300 rounded-sm py-[1px] px-2"
          >
            Projects
          </Link>
          <Link
            href={"contact"}
            className="hover:outline-dashed hover:text-white outline-[1px] tranistion-all transform ease-in-out duration-300 rounded-sm py-[1px] px-2"
          >
            Contact
          </Link>
          <a
            href={"/omar-faruk-full-stack-one-year-exp.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className="hidden md:flex items-center outline-[1px] hover:outline-dashed text-black hover:text-white gap-2 transition ease-in-out duration-300 mx-2 px-4 rounded-sm py-1 bg-gradient-to-r from-[#5FBCFF] to-[#A471FB]">
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
