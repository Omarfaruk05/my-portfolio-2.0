import NavigationButton from "../shared/NavigationButton";

const Cart = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  return (
    <div className="h-full grid grid-cols-1 gap-6 justify-between relative cursor-pointer rounded-xl p-4 bg-gradient-to-r from-[#262626] to-[#151515]">
      {children}
      <div className="absolute right-4 bottom-4 min-h-40 ">
        <NavigationButton endpoint={path} />
      </div>
    </div>
  );
};

export default Cart;
