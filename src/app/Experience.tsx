import ExperienceCard from "./ExperienceCard";
export default function Experience() {
  return (
    <section className="group pr-6 xl:mt-0 mt-20 ">
      <h2 className="text-2xl font-semibold text-lighttext mb-6 cursor-default select-none ">
        Experience
      </h2>
      <div id="experience" className="select-none scroll-mt-[170px]">
        <ExperienceCard
          from="Aug 2023"
          to="Present"
          role="Software Engineer"
          company="Tech Mahindra"
          description="Built and integrated responsive frontend interfaces for key HRMS modules using ReactJS, improving user experience and operational workflows. Resolved critical PL/SQL backend issues to ensure accurate fringe benefit processing. Contributed to multiple modules—Loans, Leave, Medical Claims, and more—while enhancing system security with role-based screen access controls."
          techStack={["React.js", "Oracle PL/SQL", "JavaScript"]}
        />
      </div>
      <div className="select-none">
        <ExperienceCard
          from="Feb 2023"
          to="Jul 2023"
          role="Full Stack Developer"
          company="Elysian Corptech - Growmax BI"
          description="Built and enhanced core business systems including order processing, product management, and customer support workflows. Delivered dynamic dashboards with real-time insights and visualizations. Focused on scalable, user-centric solutions to improve operational efficiency and decision-making across teams."
          techStack={[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Javascript",
          ]}
        />
      </div>
    </section>
  );
}
