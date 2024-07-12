"use client";
import React, { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import FeaturedCard from "./featuredCard";
import ProductTable from "./productTable";
import TableHead from "./tableHead";

function AsideBar() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        className={`top-0 right-0 text-white transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute -left-6 top-1/2 transform lg:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 z-50 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={toggleDrawer}
        >
          {drawerOpen ? (
            <IconChevronRight
              style={{ width: "100%", height: "100%" }}
              stroke={1.5}
            />
          ) : (
            <IconChevronLeft
              style={{ width: "100%", height: "100%" }}
              stroke={1.5}
            />
          )}
        </button>

        <div>
          <FeaturedCard />
          <TableHead />
          <ProductTable />
        </div>
      </div>
    </div>
  );
}

export default AsideBar;
