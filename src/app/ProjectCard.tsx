interface ProjectCardProps {
  image: string;
  title: string;
  liveLink: string;
  codeLink: string;
  description: string;
  techStack: string[];
  impactTags: string[];
  accent: string;
}

export default function ProjectCard({
  image,
  title,
  liveLink,
  codeLink,
  description,
  techStack,
  impactTags,
  accent,
}: ProjectCardProps) {
  return (
    <article
      className="reveal-card group relative flex flex-col gap-5 overflow-hidden rounded-xl border border-slate-800 bg-[#0f172a]/80 p-4 opacity-75 shadow-lg shadow-black/10 transition duration-300 ease-out hover:-translate-y-1 hover:border-teal-300/50 hover:bg-[#172033] hover:opacity-100 hover:shadow-teal-950/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 sm:flex-row"
    >
      <span
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="relative h-36 w-full overflow-hidden rounded-lg border border-slate-700/70 sm:h-24 sm:w-32 sm:flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <h3
          className="flex items-center gap-1 text-lg font-semibold text-gray-200 transition-colors duration-300 group-hover:text-teal-300"
        >
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-400">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {impactTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-600/50 bg-slate-900/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

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

        <div className="mt-5 flex flex-wrap gap-3 opacity-90 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-1 sm:opacity-70">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-teal-300/40 px-4 py-2 text-sm font-semibold text-teal-200 transition duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70"
          >
            Live
            <img
              src="/top_right.png"
              alt=""
              width={10}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center rounded-md border border-slate-600/70 px-4 py-2 text-sm font-semibold text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Code
          </a>
        </div>
      </div>
    </article>
  );
}
