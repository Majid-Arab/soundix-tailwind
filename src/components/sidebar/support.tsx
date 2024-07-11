import { IconPlus } from "@tabler/icons-react";
import React from "react";

function Support() {
  return (
    <div className="flex justify-center items-center max-w-sm sm:max-w-md lg:max-w-72">
      <div className="flex justify-around items-center flex-col gap-4 p-4 m-5 bg-[#A1D2FF] text-[#047979] rounded-2xl shadow-lg">
        <div className="bg-[#00E0C6] border-white border-4 rounded-full p-2 text-white font-semibold">
          <IconPlus stroke={4} width="24" height="24" />
        </div>
        <span className="text-[#016173] font-medium text-xl sm:text-xl lg:text-xl">
          Need Help
        </span>
        <p className="text-center text-sm sm:text-base lg:text-sm">
          About Account Management Ordering & Payment Refund And FAQ
        </p>
        <button
          type="button"
          className="border-white border-2 rounded-lg px-4 py-2 bg-[#EBFCFF] text-[#047979] text-sm sm:text-base font-semibold hover:border-[#047979] focus:outline-none focus:ring-2 focus:ring-[#047979] focus:ring-offset-2"
        >
          Customer Service
        </button>
      </div>
    </div>
  );
}

export default Support;
