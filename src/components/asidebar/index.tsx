import React from "react";
import FeaturedCard from "./featuredCard";
import ProductTable from "./productTable";
import TableHead from "./tableHead";
import ToggleBtn from "./toggleBtn";

function AsideBar() {
  return (
    <div className="flex flex-col">
      <ToggleBtn />
      <FeaturedCard />
      <TableHead />
      <ProductTable />
    </div>
  );
}

export default AsideBar;
