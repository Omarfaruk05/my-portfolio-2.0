const Nav = () => {
  return (
    <div className="backdrop-blur-lg fixed w-full top-0 z-30">
      <div className=" max-w-7xl mx-auto px-4 flex justify-center sm:justify-between items-center py-3">
        <h2 className="text-lg font-semibold hidden sm:block">OM</h2>

        <ul className="flex gap-2 items-center list-none ">
          <button>About</button>
          <button>Services</button>
          <button>Projects</button>
          <button>Blogs</button>
          <button className="transition duration-0 hover:duration-500 mx-2 px-2  hover:text-[#050C13] rounded-md px-4 py-1 bg-gradient-to-r from-[#5FBCFF] to-[#A471FB]">
            Resume
          </button>
        </ul>
      </div>
      <div className="shadow-lg"></div>
    </div>
  );
};

export default Nav;
