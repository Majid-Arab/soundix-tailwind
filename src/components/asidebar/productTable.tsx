import React from "react";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import Headphone from "../../../public/headphone1.png";

const productItems = [
  {
    name: "Beats new Headphone",
    reviews: "256 Reviews, 2791 Orders",
    price: "$190",
    image: Headphone,
  },
  {
    name: "Beats new Headphone",
    reviews: "256 Reviews, 2791 Orders",
    price: "$190",
    image: Headphone,
  },
  {
    name: "Beats new Headphone",
    reviews: "256 Reviews, 2791 Orders",
    price: "$190",
    image: Headphone,
  },
  {
    name: "Beats new Headphone",
    reviews: "256 Reviews, 2791 Orders",
    price: "$190",
    image: Headphone,
  },
];

function ProductTable() {
  return (
    <ul>
      {productItems.map((item, index) => (
        <li key={index}>
          <a
            href="#"
            className="relative flex flex-row justify-between py-1 none text-gray-600 hover:text-gray-800 hover:underline my-3"
          >
            <div className="flex">
              <span className="inline-flex justify-center items-center ml-5">
                <Image
                  className="h-12 w-12 rounded-full"
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                />
              </span>
              <div className="ml-2">
                <span className="text-sm tracking-wide truncate font-semibold">
                  {item.name}
                </span>
                <p className="text-xs">{item.reviews}</p>
              </div>
            </div>
            <div className="ml-2">
              <span className="text-sm font-semibold pr-4">
                Price {item.price}
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ProductTable;
