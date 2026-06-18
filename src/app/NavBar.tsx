"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "ABOUT", href: "#about", id: "about" },
  { label: "HIGHLIGHTS", href: "#achievements", id: "achievements" },
  { label: "SKILLS", href: "#skills", id: "skills" },
  { label: "EXPERIENCE", href: "#experience", id: "experience" },
  { label: "RESUME", href: "#resume", id: "resume" },
  { label: "PROJECTS", href: "#projects", id: "projects" },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveSection = () => {
      const viewportAnchor = window.innerHeight * 0.35;

      const sectionPositions = navItems
        .map((item) => {
          const section = document.getElementById(item.id);

          if (!section) {
            return null;
          }

          return {
            id: item.id,
            top: section.getBoundingClientRect().top,
          };
        })
        .filter(Boolean);

      const lastPastAnchor = [...sectionPositions]
        .reverse()
        .find((section) => section!.top <= viewportAnchor);

      if (lastPastAnchor) {
        setActiveSection(lastPastAnchor.id);
      } else if (sectionPositions[0]) {
        setActiveSection(sectionPositions[0].id);
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="mt-16 top-1/3 flex w-96 flex-col gap-7 text-sm font-semibold tracking-wider text-gray-400">
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          href={item.href}
          isActive={activeSection === item.id}
          onClick={() => setActiveSection(item.id)}
        />
      ))}
    </nav>
  );
}

function NavItem({
  label,
  href,
  isActive,
  onClick,
}: {
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive ? "true" : undefined}
      className={`group flex items-center gap-3 transition-colors duration-300 ${
        isActive ? "text-gray-100" : "hover:text-gray-100"
      }`}
    >
      <span className="relative block h-[1px] w-12 overflow-hidden bg-slate-700">
        <span
          className={`absolute inset-y-0 left-0 bg-current transition-all duration-300 ease-out ${
            isActive ? "w-full" : "w-8 group-hover:w-10"
          }`}
        />
      </span>
      <span
        className={`transition-transform duration-300 ${
          isActive ? "translate-x-2" : "group-hover:translate-x-2"
        }`}
      >
        {label}
      </span>
    </a>
  );
}
