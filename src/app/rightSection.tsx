import About from "./about";
import Achievements from "./Achievements";
import BackToTop from "./BackToTop";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

export default function RightSection() {
  return (
    <>
      <div className="flex flex-col gap-20 max-w-2xl text-base sm:text-lg mx-auto text-left mb-32 scroll-mt-[150px] sm:gap-28 sm:mb-48">
        <div id="about" className="scroll-mt-[150px]">
          <About />
        </div>
        <Achievements />
        <Skills />
        <Experience />
        <section id="resume" className="scroll-mt-[100px] pr-0 sm:pr-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-card group flex items-center justify-between gap-5 rounded-xl border border-teal-300/20 bg-[#0f172a]/80 p-5 opacity-80 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-teal-300/60 hover:bg-[#172033] hover:opacity-100 hover:shadow-teal-950/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70"
          >
            <div>
              <h2 className="cursor-pointer select-none text-xl font-semibold text-gray-100 sm:text-2xl">
                View Full Resume
              </h2>
              <p className="mt-1 text-sm text-lighttext">
                Complete experience, certifications, skills, and project
                details.
              </p>
            </div>
            <img
              src="/top_right.png"
              alt=""
              width={16}
              height={16}
              className="shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </section>

        <Projects />
      </div>
      <BackToTop />
    </>
  );
}
