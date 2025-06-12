import SlideIn from "@/components/motions/SlideIn";
import Container from "@/components/shared/Container";
import Cart from "@/components/ui/Cart";
import CredentialsCart from "@/components/ui/CredentialsCart";
import MyInfo from "@/components/ui/MyInfo";
import Profiles from "@/components/ui/Profiles";
import ProjectsAndServices from "@/components/ui/ProjectsAndServices";
import SkillsCart from "@/components/ui/SkillsCart";
import SkillsChart from "@/components/ui/SkillsChart";
import TalkTogether from "@/components/ui/TalkTogether";

export default function Home() {
  return (
    <Container>
      <section className="px-4 py-2 grid gap-5 grid-cols-1 md:grid-cols-2">
        <MyInfo />
        <ProjectsAndServices />
      </section>
      <section className="px-4 py-2 grid gap-5 gird-cols-1 md:grid-cols-7">
        {/* profile info  */}
        <SlideIn className="md:col-span-2">
          <Profiles />
        </SlideIn>

        {/* skills info */}
        <SlideIn delay={0.2} className="md:col-span-3">
          <SkillsCart />
        </SlideIn>

        {/* credentials info  */}
        <SlideIn delay={0.4} className="md:col-span-2">
          <CredentialsCart />
        </SlideIn>
      </section>
      <section className="px-4 py-2 grid gap-5 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <SlideIn direction="left">
            <TalkTogether />
          </SlideIn>

          <SlideIn direction="left" delay={0.3}>
            <Cart path="/contact">
              <h2 className="text-4xl font-semibold  flex items-center py-10">
                THANKS FOR VISITING
              </h2>
            </Cart>
          </SlideIn>
        </div>
        <SlideIn direction="right">
          <SkillsChart />
        </SlideIn>
      </section>

      {/* <Hero />
      <MySkill />
      <About />
      <Projects />
      <ContactMe /> */}
    </Container>
  );
}
