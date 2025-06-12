import SlideIn from "../motions/SlideIn";
import Links from "../shared/Links";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#262626] to-[#151515]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
        <SlideIn>2016 © Omar Faruk. All right reserved</SlideIn>
        <Links />
      </div>
    </div>
  );
};

export default Footer;
