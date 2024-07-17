import React from "react";
import HeadphoneTitle from "./headphoneTitle";
import Popup from "./Popup";
import ToggleSidebar from "../sidebar/toggleSidebar";

function Index() {
  return (
    <div className="px-4">
      <div className="relative flex h-16 items-center justify-between">
        <HeadphoneTitle />
        <div className="flex gap-5">
          <Popup />
          <div className="block md:hidden lg:hidden">
            <ToggleSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
