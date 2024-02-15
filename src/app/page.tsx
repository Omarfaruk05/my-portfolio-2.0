import About from "@/components/ui/About";
import ContactMe from "@/components/ui/ContactMe";
import Hero from "@/components/ui/Hero";
import MySkill from "@/components/ui/MySkill";
import Projects from "@/components/ui/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <MySkill />
      <About />
      <Projects />
      <ContactMe />
    </main>
  );
}
