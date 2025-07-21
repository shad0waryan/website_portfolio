import ExperienceCard from "./ExperienceCard";
import About from "./about";
import Experience from "./Experience";
import Projects from "./Projects";
export default function RightSection() {
  return (
    <div
      id="about"
      className="flex flex-col gap-28 max-w-2xl text-base sm:text-lg mx-auto text-left mb-48 scroll-mt-[150px]"
    >
      <About />
      <Experience />
      {/* <Projects /> */}
    </div>
  );
}
