import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import FeaturedCard from "./featuredCard";
import ProductTable from "./productTable";
import TableHead from "./tableHead";
import ToggleAsidebar from "./toggleBtn";

function AsideBar() {
  return (
    <div className="flex flex-col relative">
      <FeaturedCard />
      <TableHead />
      <ProductTable />
      <div className="block md:hidden lg:hidden">
        <ToggleAsidebar />
      </div>
    </div>
  );
}

export default AsideBar;
