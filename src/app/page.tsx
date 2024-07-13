import Container from "@/components/shared/Container";
import About from "@/components/ui/About";
import ContactMe from "@/components/ui/ContactMe";
import CredentialsCart from "@/components/ui/CredentialsCart";
import Hero from "@/components/ui/Hero";
import MyInfo from "@/components/ui/MyInfo";
import MySkill from "@/components/ui/MySkill";
import Profiles from "@/components/ui/Profiles";
import Projects from "@/components/ui/Projects";
import ProjectsAndServices from "@/components/ui/ProjectsAndServices";
import SkillsCart from "@/components/ui/SkillsCart";
import SkillsChart from "@/components/ui/SkillsChart";
import TalkTogether from "@/components/ui/TalkTogether";

export default function Home() {
  return (
    <Container>
      <section className="px-4 pt-12 pb-2 grid gap-5 grid-cols-1 md:grid-cols-2">
        <MyInfo />
        <ProjectsAndServices />
      </section>
      <section className="px-4 py-2 grid gap-5 gird-cols-1 md:grid-cols-7">
        <div className="md:col-span-2">
          <Profiles />
        </div>
        <div className="md:col-span-3">
          <SkillsCart />
        </div>
        <div className="md:col-span-2">
          <CredentialsCart />
        </div>
      </section>
      <section className="px-4 py-2 grid gap-5 grid-cols-1 md:grid-cols-2">
        <TalkTogether />
        <SkillsChart />
      </section>

      {/* <Hero />
      <MySkill />
      <About />
      <Projects />
      <ContactMe /> */}
    </Container>
  );
}
