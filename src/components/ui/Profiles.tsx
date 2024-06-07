import Container from "../shared/Container";
import Cart from "./Cart";
import Links from "./Links";

const Profiles = () => {
  return (
    <Cart>
      <div className="border border-gray-700 bg-gradient-to-l from-[#262626] to-[#151515] p-7 rounded-xl flex justify-center items-center w-full">
        <Links />
      </div>
      <div>
        <p className="text-xs uppercase font-extralight text-gray-400">
          Stay with me
        </p>
        <h3 className="font-semibold text-xl">Profiles</h3>
      </div>
    </Cart>
  );
};

export default Profiles;
