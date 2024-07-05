import React from "react";
import { IconBrandSafari, IconHome } from "@tabler/icons-react";

const tabItems = [
  { label: "Home", icon: <IconHome stroke={2} /> },
  { label: "Explore", icon: <IconBrandSafari stroke={2} /> },
  { label: "Saved", icon: <IconHome stroke={2} /> },
  { label: "Cart", icon: <IconHome stroke={2} /> },
  { label: "Selling", icon: <IconHome stroke={2} /> },
  { label: "Profile", icon: <IconHome stroke={2} /> },
  { label: "Purchase History", icon: <IconHome stroke={2} /> },
  { label: "Contact Us", icon: <IconHome stroke={2} /> },
  { label: "Settings", icon: <IconHome stroke={2} /> },
];

function SideTabs() {
  return (
    <nav className="pt-6">
      <ul>
        {tabItems.map((item, index) => (
          <li key={index} className="relative flex items-center">
            {index === 0 && (
              <span className="absolute left-0 w-4 h-6 bg-[#009292] rounded-md -ml-2"></span>
            )}
            <a
              href="#"
              className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6 my-3 ${
                index !== 0 ? "hover:border-indigo-500" : ""
              }`}
            >
              <span className="inline-flex justify-center items-center ml-5">
                {item.icon}
              </span>
              <span className="ml-6 text-md tracking-wide truncate font-semibold">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideTabs;
