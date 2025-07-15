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
    <div
      className="
    transition duration-300
    group-hover:opacity-40
    hover:!opacity-100
    hover:scale-[1.01]
    bg-[#0f172a]
    px-8
    py-8
    rounded-3xl
    cursor-pointer
    mt-8
    shadow-[0_0_20px_rgba(100,200,255,0.05)]
    hover:shadow-[0_0_40px_rgba(100,200,255,0.3)]
  "
    >
      <div className="flex flex-col sm:flex-row gap-6 ">
        <div className="w-32 text-sm text-neutral-400 font-mono">
          {from} — {to}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-neutral-100">
            {role}
            <span className="text-lighttext"> · {company}</span>
          </h3>

          <p className="text-sm text-neutral-300 leading-relaxed mt-2">
            {description}
          </p>

          <div className="flex flex-wrap mt-4 gap-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#1E2D3D] text-sm text-teal-300 px-3 py-1 rounded-md font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
