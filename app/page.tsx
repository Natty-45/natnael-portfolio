import Hero from "@/components/hero";
import SkillsTicker from "@/components/skills-ticker";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsTicker />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
