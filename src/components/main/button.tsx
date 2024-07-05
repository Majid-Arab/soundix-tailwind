import { IconHeartFilled } from "@tabler/icons-react";
import React from "react";

function button() {
  return (
    <div className="flex justify-start items-center gap-5 pt-5">
      <button
        type="button"
        className="relative rounded-xl p-3 text-[#047979] hover:text-[#da3535] border-2 border-[#047979] "
      >
        <span className="text-xs">
          <IconHeartFilled stroke={2} className="w-10 h-10" />
        </span>
      </button>
      <button
        type="button"
        className="relative text-2xl rounded-xl p-3 text-[#047979] border-2 border-[#047979] hover:bg-[#047979] hover:text-white "
      >
        Add to cart
      </button>
      <button
        type="button"
        className="relative text-2xl rounded-xl p-3 bg-[#047979] px-8 text-white border-2 border-[#047979] hover:bg-[#415353] "
      >
        Buy now
      </button>
    </div>
  );
}

export default button;
