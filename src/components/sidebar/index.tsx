import SideTabs from "./sideTabs";
import Support from "./support";
import Header from "./header";
import ToggleSidebar from "./toggleSidebar";

function Index() {
  return (
    <>
      <div className="flex items-center">
        <div className="hidden sm:block lg:block">
          <Header />
        </div>
      </div>
      <div className="hidden sm:block lg:block">
        <SideTabs />
        <Support />
      </div>
    </>
  );
}

export default Index;
