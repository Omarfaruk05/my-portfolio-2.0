import About from "@/components/ui/About";
import Hero from "@/components/ui/Hero";
import MySkill from "@/components/ui/MySkill";

export default function Home() {
  return (
    <main className="bg-[#050C13] pt-14">
      <Hero />
      <About />
      <MySkill />
    </main>
  );
}
