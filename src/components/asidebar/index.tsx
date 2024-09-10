"use client";
import React, { useState, useEffect } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import FeaturedCard from "./featuredCard";
import ProductTable from "./productTable";
import TableHead from "./tableHead";

function AsideBar() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1030px)");
    setDrawerOpen(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => {
      setDrawerOpen(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen((drawer) => !drawer);
  };

  return (
    <div className="relative h-full">
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] lg:w-[400px] bg-white text-white transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } lg:static lg:translate-x-0`}
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

        <FeaturedCard />
        <TableHead />
        <ProductTable />
      </div>
    </div>
  );
}

export default AsideBar;
