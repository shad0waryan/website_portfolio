import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="pr-6 xl:mt-0 mt-20">
      <h2 className="text-2xl font-semibold text-lighttext mb-6 cursor-default select-none">
        Projects
      </h2>

      <div
        id="projects"
        className="flex flex-col gap-10 h-screen scroll-mt-[160px]"
      >
        <ProjectCard
          image="/shad0wbucks.png"
          title="SHAD0WBUCKS"
          link="https://shad0wbucks.netlify.app/"
          description="Frontend clone of Starbucks built with React featuring dynamic routing (React Router DOM), smooth product carousels (Swiper.js), and responsive design (Tailwind CSS). Includes essential e-commerce features like add to cart, item deletion, and secure email/password login via Firebase Auth."
        />

        <ProjectCard
          image="/fluxbasket.png"
          title="FLUXBASKET"
          link="https://github.com/shad0waryan/fluxbasket"
          description="Clean, intuitive UI/UX with a fully functional cart management system. Leverages Next.js features like file-based routing and server-side rendering for performance, demonstrating component-based architecture and stateful logic."
        />

        <ProjectCard
          image="/triviatap.png"
          title="TRIVIATAP"
          link="https://github.com/shad0waryan/triviatap"
          description="Interactive quiz application built with React and dynamic state management. Features conditional rendering based on quiz progress and user interactions, with final score calculation and display for a seamless experience."
        />

        <ProjectCard
          image="/xoclash.png"
          title="XOCLASH"
          link="https://github.com/shad0waryan/xoclash"
          description="Turn-based Tic-Tac-Toe game, built in C++ with real-time input handling and smooth board rendering via SFML. Highlights object-oriented design principles and responsive gameplay mechanics."
        />
      </div>
    </section>
  );
}
