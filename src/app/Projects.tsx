import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="pr-6 xl:mt-0 mt-20">
      <h2 className="text-2xl font-semibold text-lighttext mb-6 cursor-default select-none">
        Projects
      </h2>

      {/* Outer group for dimming */}
      <div
        id="projects"
        className="flex flex-col gap-10 h-screen scroll-mt-[160px]"
      >
        <ProjectCard
          image="/shad0wbucks.png"
          title="shad0wbucks"
          link="https://shad0wbucks.netlify.app/"
          description="Video course that teaches how to build a web app with the Spotify Web API. Topics covered include REST APIs, user auth flows, Node, Express, React, Styled Components, and more."
        />
        <ProjectCard
          image="/shad0wbucks.png"
          title="shad0wbucks"
          link="https://shad0wbucks.netlify.app/"
          description="Video course that teaches how to build a web app with the Spotify Web API. Topics covered include REST APIs, user auth flows, Node, Express, React, Styled Components, and more."
        />
        <ProjectCard
          image="/shad0wbucks.png"
          title="shad0wbucks"
          link="https://shad0wbucks.netlify.app/"
          description="Video course that teaches how to build a web app with the Spotify Web API. Topics covered include REST APIs, user auth flows, Node, Express, React, Styled Components, and more."
        />
      </div>
    </section>
  );
}
