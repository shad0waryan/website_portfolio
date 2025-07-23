export default function LeftSection() {
  return (
    <div className="flex flex-col w-full max-w-lg xl:max-w-none items-center xl:items-start">
      <span className="block text-center text-4xl sm:text-5xl lg:text-6xl font-bold cursor-pointer select-none transition-transform duration-800  hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">
        <a href="/">Aryan Agrawal</a>
      </span>
      <span className="block text-right mt-4 text-lg sm:text-xl font-extralight cursor-default select-none ">
        Full Stack Developer
      </span>
    </div>
  );
}

export function Socials() {
  return (
    <div>
      <div className="flex flex-col text-gray-100 cursor-pointer gap-7">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=aryann7078@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="self-center opacity-60 hover:opacity-100  text-gray-400 cursor-pointer"
        >
          <span className="flex items-center gap-4">
            <img src="/email.png" alt="email" width={30} />
            aryann7078@gmail.com
          </span>
        </a>
        <span className="flex items-center gap-4 opacity-60 hover:opacity-100  text-gray-400 cursor-default`">
          <img src="/contact.png" alt="" width={30} />
          7078759357
        </span>
      </div>
      {/*socials*/}
      <div className="flex gap-6 flex-wrap xl:justify-start mt-16">
        <a
          href="https://www.linkedin.com/in/aryan-agrawal-512795179/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/linkedin.png"
            alt="LinkedIn Profile"
            title="LinkedIn Profile"
            width={30}
            className="opacity-60 hover:opacity-100  text-gray-400 cursor-pointer"
          />
        </a>
        <a
          href="https://github.com/shad0waryan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github.png"
            alt="Github Profile"
            title="Github Profile"
            width={30}
            className="opacity-60 hover:opacity-100  text-gray-400 cursor-pointer"
          />
        </a>
        <a
          href="https://leetcode.com/u/shad0w_070/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/leetcode.png"
            alt="LeetCode Profile"
            title="LeetCode Profile"
            width={30}
            className="opacity-60 hover:opacity-100  text-gray-400 cursor-pointer"
          />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/aryanagrawal84397/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/gfg.png"
            alt="GeeksForGeeks Profile"
            title="GeeksForGeeks Profile"
            width={40}
            className="opacity-60 hover:opacity-100  text-gray-400 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
