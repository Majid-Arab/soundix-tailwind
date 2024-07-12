import Image from "next/image";
import { IconMail, IconBell } from "@tabler/icons-react";
import Avatar from "../../public/avatar.png";

function Footer() {
  return (
    <div className="flex justify-around items-center bg-white border-t-2 border-black h-20 sm:block md:hidden lg:hidden">
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
  );
}

export default Footer;
