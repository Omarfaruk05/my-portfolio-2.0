import Links from "../shared/Links";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#262626] to-[#151515]">
      <div className="max-w-7xl mx-auto flex justify-between py-12 px-4">
        <div>
          <p>2016 © Omar Faruk. All right reserved</p>
        </div>
        <Links />
      </div>
    </div>
  );
};

export default Footer;
