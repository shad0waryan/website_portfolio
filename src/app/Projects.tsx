import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="pr-6 xl:mt-0 mt-20">
      <h2 className="text-2xl font-semibold text-lighttext mb-6 cursor-default select-none">
        Projects
      </h2>

      <div
        id="projects"
        className="flex flex-col gap-10 h-fit scroll-mt-[160px]"
      >
        <ProjectCard
          image="/noblindspot.png"
          title="NoBlindSpot"
          link="http://noblindspot.onrender.com/"
          description="Full-stack AI knowledge management platform for creating, organizing, and visualizing interconnected knowledge maps. Integrates OpenRouter-powered generation for structured nodes, topic relationships, summaries, and learning pathways."
          techStack={[
            "React.js",
            "Node.js",
            "MongoDB",
            "JWT",
            "OpenRouter API",
          ]}
          accent="from-cyan-300 via-teal-300 to-emerald-300"
        />

        <ProjectCard
          image="/shad0wbucks.png"
          title="Shad0wbucks"
          link="https://shad0wbucks.netlify.app/"
          description="Starbucks-inspired frontend with authentication, cart management, responsive UI, dynamic routing, and smooth product carousels. Uses Firebase Authentication for secure email/password login."
          techStack={[
            "React.js",
            "React Router",
            "Swiper.js",
            "Tailwind CSS",
            "Firebase",
          ]}
          accent="from-emerald-300 via-lime-300 to-teal-300"
        />

        <ProjectCard
          image="/fluxbasket.png"
          title="FluxCart"
          link="https://fluxcart-0ptw.onrender.com/"
          description="Next.js e-commerce platform with product browsing and cart management. Built with reusable TypeScript components, type-safe API contracts, server-side rendering, and file-based routing for performance and SEO."
          techStack={["Next.js", "TypeScript", "Tailwind CSS", "SSR"]}
          accent="from-sky-300 via-indigo-300 to-fuchsia-300"
        />
      </div>
    </section>
  );
}
