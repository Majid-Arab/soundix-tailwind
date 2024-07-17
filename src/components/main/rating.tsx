import React from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";

function Rating() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <IconStarFilled stroke={1} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
        <IconStarFilled stroke={1} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
        <IconStarFilled stroke={1} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
        <IconStarFilled stroke={1} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
        <IconStar stroke={1} className="w-3 h-3 md:w-4 md:h-4" />
        <p className="text-xs mdd:text-sm">(2000+ Reviews)</p>
      </div>
    </div>
  );
}

export default Rating;
