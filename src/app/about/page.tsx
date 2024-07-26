import Container from "@/components/shared/Container";
import Cart from "@/components/ui/Cart";
import Image from "next/image";
import profiltImage from '../../assects/profile1.png'
import Links from "@/components/shared/Links";
import SkillsCart from "@/components/ui/SkillsCart";
import TalkTogether from "@/components/ui/TalkTogether";
const AboutPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:my-8">
        <div className="mx-auto text-center md:col-span-2">
          <Cart>
            <div className="md:m-2 lg:m-6">
              <Image
                className="border border-gray-400 rounded-2xl w-full bg-gradient-to-b from-slate-600 to-white "
                src={profiltImage}
                width={200}
                height={200}
                alt="profile_image"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold">Md. Omar Faruk</h2>
              <p className="text-xs text-gray-400">Full-Stack Web Developer</p>
            </div>
            <div className="border border-gray-700 bg-gradient-to-l from-[#262626] to-[#151515] p-7 rounded-xl flex justify-center items-center w-full">
              <Links />
            </div>
            <div>
              <button
                className="font-semibold mx-auto w-full bg-[#333333] hover:text-black hover:bg-white transition-all duration-200 ease-in-out p-2 rounded-lg cursor-pointer">Contact</button>
            </div>
          </Cart>
        </div>
        <div className="md:col-span-3 space-y-4">
          <div>
            <h1 className="text-3xl font-semibold uppercase">About Me</h1>
            <div className="text-gray-400 space-y-3 my-8">
              <p>Hi, I’m Omar Faruk, a full-stack web application developer with a passion for creating dynamic and user-friendly web applications. </p>
              <p> My Hobby I'm passionate about coding and constantly expending my knowledge learning new things.</p>
              <p>I enjoy learning new skills and exploring new challenges in the field of web development. I’m always open to new opportunities and collaborations.</p>
            </div>
          </div>
          <div>
            <SkillsCart />
          </div>
          <div>
            <TalkTogether />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
