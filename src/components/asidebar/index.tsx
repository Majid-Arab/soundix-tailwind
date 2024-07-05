import { IconArrowNarrowRight, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import Avatar from "../../../public/headphone1.png";
import FeaturedCard from "./featuredCard";
import ProductTable from "./productTable";
import TableHead from "./tableHead";

function AsideBar() {
  return (
    <div className="flex flex-col">
      <FeaturedCard />
      <TableHead />
      <ProductTable />
    </div>
  );
}

export default AsideBar;
