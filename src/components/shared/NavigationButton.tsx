import Image from "next/image";
import navigationBtn from "../../assects/NavigationBtn.svg";

const NavigationButton = () => {
  return (
    <div>
      <Image
        className=""
        src={navigationBtn}
        height={50}
        width={50}
        alt="navigation_btn"
      />
    </div>
  );
};

export default NavigationButton;
