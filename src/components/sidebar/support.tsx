import { IconPlus } from "@tabler/icons-react";
import React from "react";

function Support() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-around items-center flex-col gap-2 p-4 m-5 bg-[#A1D2FF] text-[#047979] rounded-2xl">
        <div>
          <div className="bg-[#00E0C6] border-white border-4 relative rounded-full p-2 text-white font-semibold">
            <IconPlus
              stroke={4}
              width="24"
              height="24"
              className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
            />
          </div>
        </div>
        <span className="text-[#016173] font-md text-xl">Need Help</span>
        <p className="text-center  text-sm">
          About Account Management Ordering & Payment Refund And FAQ
        </p>
        <button
          type="button"
          className="bg-white border-white border-2 relative rounded-lg px-4 py-2  text-[#047979] text-sm font-semibold hover:border-2 hover:border-[#047979]  focus:outline-none focus:ring-2 focus:ring-[#047979] focus:ring-offset-2"
        >
          Customer Service
        </button>
      </div>
    </div>
  );
}

export default Support;
