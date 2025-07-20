"use client";
export default function NavBar() {
  return (
    <div className="mt-24 top-1/3 flex flex-col gap-6 text-sm font-semibold tracking-wider text-gray-400">
      <NavItem label="ABOUT" href="#about" />
      <NavItem label="EXPERIENCE" href="#experience" />
      <NavItem label="PROJECTS" href="#projects" disabled />
    </div>
  );
}

function NavItem({
  label,
  href,
  disabled = false,
}: {
  label: string;
  href: string;
  disabled?: boolean;
}) {
  return (
    <a
      href={disabled ? "#" : href}
      onClick={(e) => disabled && e.preventDefault()}
      className={`group flex items-center gap-3 ${
        disabled ? "opacity-30 cursor-not-allowed" : "hover:text-gray-100"
      }`}
    >
      <span className="block w-8 h-[1px] bg-gray-400 group-hover:bg-gray-100 group-hover:scale-x-125 group-hover:translate-x-4 transition-transform origin-left" />
      <span className="group-hover:translate-x-4 transition-transform">
        {label}
      </span>
    </a>
  );
}
