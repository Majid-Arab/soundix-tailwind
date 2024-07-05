import React from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";

function Rating() {
  return (
    <div>
      <div className="flex items-center gap-2">
      <IconStarFilled stroke={1} className="w-5 h-5 text-yellow-400"/>
        <IconStarFilled stroke={1} className="w-5 h-5 text-yellow-400"/>
        <IconStarFilled stroke={1} className="w-5 h-5 text-yellow-400"/>
        <IconStarFilled stroke={1} className="w-5 h-5 text-yellow-400"/>
        <IconStar stroke={1} className="w-5 h-5"/>
        <p className="text-sm">(2000+ Reviews)</p>
      </div>
    </div>
  );
}

export default Rating;
