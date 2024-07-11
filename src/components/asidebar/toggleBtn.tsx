"use client";

import React, { useState } from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import FeaturedCard from "./featuredCard";
import ProductTable from "./productTable";
import TableHead from "./tableHead";

function ToggleAsidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleAsidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        <IconChevronRight
          className="h-6 w-6 text-white"
          onClick={toggleAsidebar}
        />
      </button>
    </div>
  );
}

export default ToggleAsidebar;
