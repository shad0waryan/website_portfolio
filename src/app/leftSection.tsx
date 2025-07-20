export default function LeftSection() {
  return (
    <div className="flex flex-col w-108">
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
    <div className="flex gap-8 w-96 lg:justify-start justify-center align-middle">
      <img
        src="/linkedin.png"
        alt="LinkedIn Profile"
        title="LinkedIn Profile"
        width={30}
        className="opacity-60 hover:opacity-100  text-gray-400 hover:text-gray-100 cursor-pointer"
      />
      <img
        src="/github.png"
        alt="Github Profile"
        title="Github Profile"
        width={30}
        className="opacity-60 hover:opacity-100  text-gray-400 hover:text-gray-100 cursor-pointer"
      />
      <img
        src="/leetcode.png"
        alt="LeetCode Profile"
        title="LeetCode Profile"
        width={30}
        className="opacity-60 hover:opacity-100  text-gray-400 hover:text-gray-100 cursor-pointer"
      />
      <img
        src="/gfg.png"
        alt="GeeksForGeeks Profile"
        title="GeeksForGeeks Profile"
        width={40}
        className="opacity-60 hover:opacity-100  text-gray-400 hover:text-gray-100 cursor-pointer"
      />
    </div>
  );
}
