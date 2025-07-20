import NavBar from "./NavBar";

export default function LeftSection() {
  return (
    <div className="flex flex-col w-96">
      <span className="block text-center text-4xl sm:text-5xl lg:text-left lg:text-6xl font-bold cursor-default select-none">
        Aryan Agrawal
      </span>
      <span className="block text-center mt-4 text-lg sm:text-xl lg:text-left font-extralight cursor-default select-none">
        Full Stack Developer
      </span>
    </div>
  );
}
export function Socials() {
  return (
    <div className="flex gap-2 w-96 lg:justify-start justify-center">
      <span className=" text-gray-400 hover:text-gray-100 cursor-pointer ">
        LinkedIn
      </span>
      <span className=" text-gray-400 hover:text-gray-100 cursor-pointer ">
        Github
      </span>
      <span className=" text-gray-400 hover:text-gray-100 cursor-pointer ">
        GeeksforGeeks
      </span>
    </div>
  );
}
