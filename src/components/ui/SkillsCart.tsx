import Cart from "./Cart";
import Skills from "../shared/Skills";

const SkillsCart = () => {
  return (
    <Cart path="/about">
      <div>
        <Skills />
      </div>
      <div>
        <p className="text-xs uppercase font-extralight text-gray-400">
          Specialization
        </p>
        <h3 className="font-semibold text-xl">Skills</h3>
      </div>
    </Cart>
  );
};

export default SkillsCart;
