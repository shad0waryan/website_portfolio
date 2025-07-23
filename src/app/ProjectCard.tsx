interface ProjectCardProps {
  image: string;
  title: string;
  link: string;
  description: string;
}

export default function ProjectCard({
  image,
  title,
  link,
  description,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 bg-[#0f172a] hover:bg-[#1e293b] transition-colors duration-300 p-4 rounded-xl border border-gray-800 hover:border-gray-600 cursor-pointer opacity-60 hover:opacity-100"
    >
      <img
        src={image}
        alt={title}
        className="w-28 h-20 object-cover rounded-md flex-shrink-0"
      />

      <div className="flex flex-col justify-center">
        <h3
          className="text-lg font-semibold text-gray-200 flex items-center gap-1 
                 group-hover:text-teal-300 transition-colors duration-300"
        >
          {title}
          <img
            src="/top_right.png"
            alt=""
            width={10}
            className="ml-2 text-gray-100 transition-transform duration-300 
                   group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>
    </a>
  );
}
