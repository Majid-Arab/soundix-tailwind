import Image from "next/image";
import Avatar from "../../../public/avatar.png";
import { IconMail, IconBell } from "@tabler/icons-react";
import Search from "./search";

function Popup() {
  return (
    <div className="inset-y-0 right-0 flex items-center justify-between gap-5 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Search />
      <div className="relative hidden lg:flex gap-5">
        <button
          type="button"
          className="relative rounded-md bg-[#D8F9FF] p-3 text-[#047979] hover:text-white hover:bg-[#047979]"
        >
          <IconMail />
        </button>

        <button
          type="button"
          className="relative rounded-md bg-[#D8F9FF] p-3 text-[#047979] hover:text-white hover:bg-[#047979]"
        >
          <IconBell />
        </button>
        <div>
          <button
            type="button"
            className="relative flex rounded-full bg-[#D8F9FF] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <Image
              className="h-12 w-12 rounded-full"
              src={Avatar}
              alt=""
              width={500}
              height={500}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
