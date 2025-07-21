import LeftSection, { Socials } from "./leftSection";
import RightSection from "./rightSection";
import NavBar from "./NavBar";
export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-16 px-6 xl:px-24 py-24 min-h-screen">
      {/* Left Side */}
      <div className="xl:w-1/2 flex flex-col right-2 items-center xl:items-end">
        <div className="xl:sticky top-24">
          <LeftSection />
          <div className="hidden xl:block mt-12 w-fit ">
            <NavBar />
          </div>
          <div className="mt-12 w-full flex justify-center xl:justify-start xl:mt-80">
            <Socials />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full xl:w-3/5 mt-20 xl:mt-0 ">
        <RightSection />
      </div>
    </div>
  );
}
