import LeftSection from "./leftSection";
import RightSection from "./rightSection";
import NavBar from "./NavBar";
export default function Home() {
  return (
    <div className="main flex flex-col lg:flex-row justify-between mt-24 mb-24 px-6 lg:px-36 gap-16">
      <div className=" xl:ml-36 lg:fixed lg:top-24 lg:w-218 flex flex-col">
        <LeftSection />
        <div className="hidden lg:block">
          <NavBar />
        </div>
      </div>
      <div className="lg:ml-120 xl:ml-196">
        <RightSection />
      </div>
    </div>
  );
}
