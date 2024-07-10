import SideTabs from "./sideTabs";
import Support from "./support";
import Header from "./header";
import ToggleSidebar from "./toggleSidebar";

function Index() {
  return (
    <div>
      <div className="flex">
        <Header />
        <ToggleSidebar />
      </div>
      <SideTabs />
      <Support />
    </div>
  );
}

export default Index;
