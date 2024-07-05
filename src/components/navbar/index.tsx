import React from "react";
import Search from "./search";
import HeadphoneTitle from "./headphoneTitle";
import Popup from "./Popup";

function Index() {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2">
        <div className="relative flex h-16 items-center justify-between">
          <HeadphoneTitle />
          <Popup />
        </div>
      </div>
    </nav>
  );
}

export default Index;
