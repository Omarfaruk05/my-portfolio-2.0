import Cart from "./Cart";
import Signeture from "../../assects/signeture.png";
import Image from "next/image";

const CredentialsCart = () => {
  return (
    <Cart>
      <div>
        <Image
          className="mx-auto"
          src={Signeture}
          height={250}
          width={200}
          alt="signeture"
        />
      </div>
      <div>
        <p className="text-xs uppercase font-extralight text-gray-400">
          More About Me
        </p>
        <h3 className="font-semibold text-xl">Credentials</h3>
      </div>
    </Cart>
  );
};

export default CredentialsCart;
