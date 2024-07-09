"use client";
import SideTabs from "./sideTabs";
import Support from "./support";
import Header from "./header";
import { useState } from "react";
import { IconX, IconMenu2 } from "@tabler/icons-react";

function Index() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="navbar-burger flex items-center text-blue-600 p-3"
        >
          <svg
            className="block h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>
              {isSidebarOpen ? (
                <IconX className="w-full h-full" stroke={1.5} />
              ) : (
                <IconMenu2 className="w-full h-full" stroke={1.5} />
              )}
            </title>
            <path
              d={
                isSidebarOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3 12h18M3 6h18M3 18h18"
              }
            />
          </svg>
        </button>
      </div>
      <Header />
      <SideTabs />
      <Support />
    </div>
  );
}

export default Index;
