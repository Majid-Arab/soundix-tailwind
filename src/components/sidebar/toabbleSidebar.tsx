"use client";

import React, { useState } from "react";
import { IconX, IconMenu2 } from "@tabler/icons-react";
import SideTabs from "./sideTabs";
import Header from "./header";

function ToggleSidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-start items-center black gap-3 text-black">
        <div className="ml-auto">
          <button
            onClick={toggleSidebar}
            className="flex items-center text-blue-600 p-3 focus:outline-none"
          >
            {isSidebarOpen ? (
              <IconX className="h-6 w-6" />
            ) : (
              <IconMenu2 className="h-6 w-6" />
            )}
          </button>
        </div>
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40">
            <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white p-4">
              <Header />
              <SideTabs />
              <button
                onClick={toggleSidebar}
                className="absolute top-4 right-4 text-gray-700"
              >
                <IconX className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToggleSidebar;
