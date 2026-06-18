interface ProjectCardProps {
  image: string;
  title: string;
  link: string;
  description: string;
  techStack: string[];
  accent: string;
}

export default function ProjectCard({
  image,
  title,
  link,
  description,
  techStack,
  accent,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-5 overflow-hidden rounded-xl border border-slate-800 bg-[#0f172a]/80 p-4 opacity-75 shadow-lg shadow-black/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-teal-300/50 hover:bg-[#172033] hover:opacity-100 hover:shadow-teal-950/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 sm:flex-row"
    >
      <span
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <img
        src={image}
        alt={title}
        className="h-36 w-full rounded-lg border border-slate-700/70 object-cover transition duration-300 group-hover:scale-[1.02] sm:h-24 sm:w-32 sm:flex-shrink-0"
      />

      <div className="flex flex-1 flex-col justify-center">
        <h3
          className="flex items-center gap-1 text-lg font-semibold text-gray-200 transition-colors duration-300 group-hover:text-teal-300"
        >
          {title}
          <img
            src="/top_right.png"
            alt=""
            width={10}
            className="ml-2 text-gray-100 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-400">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-teal-300/10 bg-teal-300/10 px-3 py-1 text-xs font-medium text-teal-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
