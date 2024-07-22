"use client";

import { IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";

function Search() {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center ">
        <button
          onClick={toggleSearch}
          className="p-1 focus:outline-none focus:shadow-outline"
        >
          <IconSearch stroke={2} />
        </button>
      </span>
      <input
        type="search"
        className={`py-2 text-xl text-gray-900 bg-white shadow-lg rounded-md pl-10 focus:outline-none ${
          isSearchOpen ? "block" : "hidden lg:block"
        }`}
        placeholder="Search Product"
      />
    </div>
  );
}

export default Search;
