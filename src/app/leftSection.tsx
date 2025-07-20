import NavBar from "./NavBar";

export default function LeftSection() {
  return (
    <div className="flex flex-col">
      <span className="block text-center text-4xl sm:text-5xl lg:text-left lg:text-6xl font-bold cursor-default select-none">
        Aryan Agrawal
      </span>
      <span className="block text-center mt-4 text-lg sm:text-xl lg:text-left font-extralight cursor-default select-none">
        Full Stack Developer
      </span>
      {/* <NavBar /> */}
    </div>
  );
}
