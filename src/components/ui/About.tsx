/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div className="relative py-12 px-4 mt-16">
      <div className="absolute bottom-24 right-0 h-40 w-40 rotate-45 bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] blur-lg"></div>
      <div className="hidden xl:block absolute top-32 left-[2%] h-28 w-28 rounded-full bg-gradient-to-r from-[#5FBCFF] to-[#A471FB] blur-lg"></div>
      <div className="max-w-7xl mx-auto">
        {/* about divder  */}
        <div className="flex items-center gap-4 pb-8">
          <div className="w-full h-[3px] bg-blue-500 rounded-full"></div>
          <div>
            <h1 className="w-44 text-center text-3xl font-semibold">
              “About Me”
            </h1>
          </div>
          <div className="w-full h-[3px] bg-blue-500 rounded-full"></div>
        </div>
        {/* main content  */}
        <div className="py-4 px-4 md:px-8 lg:px-24">
          <p>
            Actually, I am completing my BSc in physics. But have strong
            knowledge of programming, especially React. As a BSc. student I love
            math and that's why I am shifted to programming. I teach math to my
            little brothers in my area. I am a hard-working individual with
            proficiency in JavaScript and MERN Stack as well as the ability to
            communicate effectively in a team setting. I like to Code, Design,
            Innovate, and Experiment. I am an enthusiastic and social person who
            loves to take up new challenges and learn new skills.
          </p>
          <h2 className="text-xl font-semibold my-8">“Personality”</h2>
          <p className="pr-40 pb-24">
            I’m a social person who likes to work with a team and be
            collaborative. I like to deal with honesty and transparency in order
            to gain the people around me. I am passionate about my work and love
            creativity and constant learning, you can tell when you get to know
            me
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
