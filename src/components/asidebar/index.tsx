// "use client"

import React, { useState } from "react";
import FeaturedCard from "./featuredCard";
import ProductTable from "./productTable";
import TableHead from "./tableHead";

function AsideBar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleAsidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col relative">
      {/* <button
        className="fixed bottom-1/2 right-0 transform translate-y-1/2 bg-teal-600 text-white p-2 rounded-l-md focus:outline-none md:hidden"
        onClick={toggleAsidebar}
      >
        {isOpen ? 'Close' : 'Open'}
      </button> */}
      <FeaturedCard />
      <TableHead />
      <ProductTable />
    </div>
  );
}

export default AsideBar;
