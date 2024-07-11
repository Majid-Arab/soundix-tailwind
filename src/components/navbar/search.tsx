"use client";

import { IconAdjustmentsHorizontal, IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";

function Search() {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 sm:right-20 flex items-center">
        <button
          onClick={toggleSearch}
          className="p-1 focus:outline-none focus:shadow-outline"
        >
          <IconSearch stroke={2} />
        </button>
      </span>
      <input
        type="search"
        name="q"
        className={`py-2 text-xl text-white shadow-lg rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 ${
          isSearchOpen ? "block" : "hidden lg:block"
        }`}
        placeholder="Search Product"
      />

      <span className="absolute inset-y-0 right-0 flex items-center pl-2">
        <button
          type="submit"
          className={`p-1 focus:outline-none focus:shadow-outline ${
            isSearchOpen ? "block" : "hidden lg:block"
          }`}
        >
          <IconAdjustmentsHorizontal stroke={2} />
        </button>
      </span>
    </div>
  );
}

export default Search;
