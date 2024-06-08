import Cart from "./Cart";
import Star from "../../assects/star.png";
import Image from "next/image";

const TalkTogether = () => {
  return (
    <div className="flex flex-col gap-4">
      <Cart>
        <div className="px-4 -mt-4">
          <Image src={Star} width={50} height={50} alt="star" />
        </div>
        <div className="space-y-3">
          <h1 className="text-5xl font-semibold">{"Let's"}</h1>
          <h1 className="text-5xl font-semibold">
            work <span className="text-sky-500">together.</span>
          </h1>
        </div>
      </Cart>
      <Cart>
        <h2 className="text-4xl font-semibold  flex items-center">
          THANKS FOR VISITING
        </h2>
      </Cart>
    </div>
  );
};

export default TalkTogether;
