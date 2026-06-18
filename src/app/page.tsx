import LeftSection, { Socials } from "./leftSection";
import RightSection from "./rightSection";
import NavBar from "./NavBar";
export default function Home() {
  return (
    <div className="min-h-screen px-5 py-12 sm:px-6 sm:py-16 xl:px-24 xl:py-24">
      {/* Left Side */}
      <aside className="flex flex-col items-center xl:fixed xl:bottom-24 xl:left-64 xl:top-24 xl:w-[38%] xl:items-start">
        <div className="w-full xl:flex xl:h-full xl:flex-col xl:justify-between">
          <div>
            <LeftSection />
            <div className="hidden xl:block mt-12 w-fit ">
              <NavBar />
            </div>
          </div>
          <div className="mt-10 w-full flex justify-center xl:justify-start xl:mt-0">
            <Socials />
          </div>
        </div>
      </aside>

      {/* Right Side */}
      <main className="mt-8 w-full xl:ml-auto xl:mt-0 xl:w-[54%]">
        <RightSection />
      </main>
    </div>
  );
}
