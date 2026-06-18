type ExperienceCardProps = {
  from: string;
  to: string;
  role: string;
  company: string;
  description: string;
  techStack: string[];
};

export default function ExperienceCard({
  from,
  to,
  role,
  company,
  description,
  techStack,
}: ExperienceCardProps) {
  return (
    <article className="reveal-card mt-6 rounded-xl border border-slate-800 bg-[#0f172a]/80 px-5 py-6 shadow-[0_0_20px_rgba(100,200,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-teal-300/40 hover:!opacity-100 hover:shadow-[0_0_40px_rgba(100,200,255,0.22)] group-hover:opacity-45 sm:px-8 sm:py-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
        <div className="w-full shrink-0 font-mono text-sm text-neutral-400 sm:w-40">
          {from} - {to}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-neutral-100">
            {role}
            <span className="text-lighttext"> at {company}</span>
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-neutral-300">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-[#1E2D3D] px-3 py-1 font-mono text-sm text-teal-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
