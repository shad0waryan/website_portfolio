import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="pr-6 xl:mt-0 mt-20">
      <h2 className="text-2xl font-semibold text-lighttext mb-6 cursor-default select-none">
        Projects
      </h2>

      <div id="projects" className="flex flex-col gap-8 h-fit scroll-mt-[160px]">
        <ProjectCard
          image="/noblindspot.png"
          title="NoBlindSpot"
          liveLink="http://noblindspot.onrender.com/"
          codeLink="https://github.com/shad0waryan/NoBlindSpot"
          description="Full-stack AI knowledge management platform for creating, organizing, and visualizing interconnected knowledge maps. Integrates OpenRouter-powered generation for structured nodes, topic relationships, summaries, and learning pathways."
          impactTags={["AI SaaS", "Auth", "Knowledge Maps"]}
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
          liveLink="https://shad0wbucks.netlify.app/"
          codeLink="https://github.com/shad0waryan/shad0wbucks"
          description="Starbucks-inspired frontend with authentication, cart management, responsive UI, dynamic routing, and smooth product carousels. Uses Firebase Authentication for secure email/password login."
          impactTags={["E-commerce", "Firebase Auth", "Cart"]}
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
          liveLink="https://fluxcart-0ptw.onrender.com/"
          codeLink="https://github.com/shad0waryan/fluxCart"
          description="Next.js e-commerce platform with product browsing and cart management. Built with reusable TypeScript components, type-safe API contracts, server-side rendering, and file-based routing for performance and SEO."
          impactTags={["SSR", "Type Safe", "E-commerce"]}
          techStack={["Next.js", "TypeScript", "Tailwind CSS", "SSR"]}
          accent="from-sky-300 via-indigo-300 to-fuchsia-300"
        />
      </div>
    </section>
  );
}
