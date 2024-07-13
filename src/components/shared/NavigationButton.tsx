import Image from "next/image";
import navigationBtn from "../../assects/NavigationBtn.svg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const NavigationButton = () => {
  return (
    <div>
      <IoArrowForwardCircleOutline className="w-8 h-8 text-gray-400 hover:text-blue-500" />
    </div>
  );
};

export default NavigationButton;
