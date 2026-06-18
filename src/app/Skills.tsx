const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Oracle DB",
      "Oracle SQL",
      "PL/SQL",
      "REST APIs",
      "JWT Auth",
      "RBAC",
    ],
  },
  {
    title: "Concepts",
    skills: [
      "React Hooks",
      "Context API",
      "State Management",
      "Redux",
      "Responsive Design",
      "Component Architecture",
      "Server-Side Rendering",
      "Agile",
      "SDLC",
      "SaaS",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
      "Figma",
      "Axios",
      "AWS",
      "Azure",
      "Render",
      "MongoDB Atlas",
    ],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      "GEN AI",
      "Prompt Engineering",
      "OpenRouter API",
      "LLM Integration",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-[100px] pr-0 sm:pr-6">
      <h2 className="mb-6 cursor-default select-none text-2xl font-semibold text-lighttext">
        Skills
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="reveal-card rounded-xl border border-slate-800 bg-[#0f172a]/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-300/40 hover:bg-[#172033]"
          >
            <h3 className="text-base font-semibold text-slate-100">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-teal-300/10 bg-teal-300/10 px-3 py-1 text-xs font-medium text-teal-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
