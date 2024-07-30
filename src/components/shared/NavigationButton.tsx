import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const NavigationButton = ({ endpoint }: { endpoint: string }) => {
  return (
    <Link href={endpoint}>
      <IoArrowForwardCircleOutline className="w-8 h-8 text-gray-400 hover:text-white" />
    </Link>
  );
};

export default NavigationButton;
