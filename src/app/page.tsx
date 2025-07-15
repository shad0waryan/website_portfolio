import ExperienceCard from "./ExperienceCard";

export default function Home() {
  return (
    <div className="main flex flex-col mt-24 mb-24 ml-6 mr-6 lg:flex-row lg:mr-52 lg:ml-96 lg:my-44 justify-between px-6 lg:px-4 py-4 gap-16">
      {/* Left Section */}
      <div className="flex flex-col">
        <span className="block text-center text-4xl sm:text-5xl lg:text-left lg:text-6xl font-bold cursor-default select-none">
          Aryan Agrawal
        </span>
        <span className="block text-center mt-4 text-lg sm:text-xl lg:text-left font-extralight cursor-default select-none">
          Full Stack Developer
        </span>
      </div>
      {/* Right Section */}
      <div className="flex flex-col gap-28 max-w-2xl text-base sm:text-lg mx-auto text-left">
        <div className="flex flex-col gap-4">
          <span className="text-lighttext">
            Full Stack Web Developer with hands-on experience in building fast,
            responsive web applications using React.js, Next.js and modern
            JavaScript/Typescript.
          </span>
          <span className="text-lighttext">
            Strong programming foundation in C++ and experience working with
            databases like MongoDB and Oracle SQL.
          </span>
          <span className="text-lighttext">
            Focused on writing clean, efficient code and continuously improving
            through real-world projects.
          </span>
        </div>
        <section className="group pr-6 ">
          <h2 className="text-2xl font-semibold text-lighttext mb-4 cursor-default">
            Experience
          </h2>

          <ExperienceCard
            from="Aug 2023"
            to="Present"
            role="Software Engineer"
            company="Tech Mahindra"
            description="hello"
            techStack={["React.js", "Oracle PL/SQL", "JavaScript"]}
          />
          <div>
            <ExperienceCard
              from="Aug 2023"
              to="Present"
              role="Software Engineer"
              company="Tech Mahindra"
              description="hello"
              techStack={["React.js", "Oracle PL/SQL", "JavaScript"]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
