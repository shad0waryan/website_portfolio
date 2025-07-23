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
      <a
        href="/resume.pdf"
        target="_blank"
        className="flex justify-between items-center bg-[#0f172a] hover:bg-[#1e293b] transition-colors duration-500 p-4 rounded-xl border border-gray-800 hover:border-gray-600 cursor-pointer opacity-60 hover:opacity-100  hover:scale-105"
      >
        <h2 className="text-2xl opacity-100 font-semibold text-gray-100 cursor-pointer select-none">
          Full Resume
        </h2>
        <img
          src="/top_right.png"
          alt=""
          width={16}
          height={16}
          className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 "
        />
      </a>

      <Projects />
    </div>
  );
}
