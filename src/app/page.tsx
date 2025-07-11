export default function Home() {
  return (
    <div className="main flex justify-between ml-80 mr-80 mt-48 mb-48 p-4 ">
      <div className="flex-col p-4">
        <span className="block text-6xl font-bold cursor-default select-none">
          Aryan Agrawal
        </span>
        <span className="block mt-5 text-xl font-extralight cursor-default select-none">
          Full Stack Developer
        </span>
      </div>
      <div className="flex-col justify-between p-4">
        <span className="block w-96">
          Full Stack Web Developer with hands-on experience in building fast,
          responsive web applications using React.js, Next.js and modern
          JavaScript/Typescript.
        </span>
        <span className="block w-96 mt-4">
          Strong programming foundation in C++ and experience working with
          databases like MongoDB and Oracle SQL.
        </span>
        <span className="block w-96 mt-4">
          Focused on writing clean, efficient code and continuously improving
          through real-world projects.
        </span>
      </div>
    </div>
  );
}
