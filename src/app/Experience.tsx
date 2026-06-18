import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section className="group pr-0 xl:mt-0 mt-20 sm:pr-6">
      <h2 className="mb-6 cursor-default select-none text-2xl font-semibold text-lighttext">
        Experience
      </h2>

      <div id="experience" className="select-none scroll-mt-[170px]">
        <ExperienceCard
          from="Aug 2023"
          to="Jun 2026"
          role="Software Engineer"
          company="Tech Mahindra"
          description="Developed and maintained 5+ React.js HRMS applications serving 5000+ employees. Built 14+ reusable React.js and TypeScript components, integrated Oracle-backed REST APIs, implemented screen-level RBAC, and delivered business-critical modules across payroll, claims, transfers, benefits, and employee lifecycle workflows."
          techStack={[
            "React.js",
            "TypeScript",
            "Oracle SQL",
            "PL/SQL",
            "REST APIs",
            "RBAC",
          ]}
        />
      </div>

      <div className="select-none">
        <ExperienceCard
          from="Feb 2023"
          to="Jul 2023"
          role="Web Developer"
          company="Elysian Corptech - Growmax BI"
          description="Built responsive business interfaces for order lifecycle management, fulfillment workflows, service request handling, SLA tracking, and sales analytics. Delivered dynamic forms, validation logic, search, filtering, and real-time dashboard modules for data-driven reporting."
          techStack={[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JavaScript",
          ]}
        />
      </div>
    </section>
  );
}
