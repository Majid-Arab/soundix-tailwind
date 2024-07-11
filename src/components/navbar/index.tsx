import React from "react";
import HeadphoneTitle from "./headphoneTitle";
import Popup from "./Popup";

function Index() {
  return (
    <div className="px-4">
      <div className="relative flex h-16 items-center justify-between">
        <HeadphoneTitle />
        <Popup />
      </div>
    </div>
  );
}

export default Index;
