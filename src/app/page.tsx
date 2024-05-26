import Container from "@/components/shared/Container";
import About from "@/components/ui/About";
import ContactMe from "@/components/ui/ContactMe";
import Hero from "@/components/ui/Hero";
import MyInfo from "@/components/ui/MyInfo";
import MySkill from "@/components/ui/MySkill";
import Projects from "@/components/ui/Projects";
import ProjectsAndServices from "@/components/ui/ProjectsAndServices";

export default function Home() {
  return (
    <Container>
      <section className="grid gap-12 grid-cols-1 md:grid-cols-2 p-4">
        <MyInfo />
        <ProjectsAndServices />
      </section>
      <section></section>

      {/* <Hero />
      <MySkill />
      <About />
      <Projects />
      <ContactMe /> */}
    </Container>
  );
}
