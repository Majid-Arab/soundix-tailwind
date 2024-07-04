import React from "react";
import Image from "next/image";
import Product from "../../public/headphone.png";
import {
  IconArrowNarrowRight,
  IconHeartFilled,
  IconMinus,
  IconPlus,
  IconPointFilled,
} from "@tabler/icons-react";
import Rating from "@/components/rating";

function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify- items-center gap-5 h-[400px] w-[1000px] p-4 rounded-2xl shadow-2xl">
        <div className="px-5 ">
          <span className="">
            <Image src={Product} alt="" width={600} height={500} />
          </span>
        </div>
        <div>
          <h2 className="font-bold text-2xl capitalize py-2">
            Summer headphones from top brands
          </h2>
          <Rating />
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem odio ullam officia eveniet nesciunt minima laboriosam
            quia ipsam reprehenderit autem veritatis, possimus praesentium sit
            totam corrupti modi debitis
          </p>

          <span className="text-2xl py-3  text-[#00D4BC]">Price $ 359.90</span>
          <div className="flex justify-between">
            <span className="flex items-center gap-3 text-2xl font-semibold py-2">
              Color
              <span className="w-6 h-6 rounded-full bg-[#047979]"></span>
              <span className="w-6 h-6 rounded-full bg-[#191dff]"></span>
              <span className="w-6 h-6 rounded-full bg-[#2bff18]"></span>
              <span className="w-6 h-6 rounded-full bg-[#fa1313]"></span>
            </span>
            <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1 text-black font-semibold h-8">
              <span className="bg-white rounded-full text-black">
                <IconMinus stroke={1} />
              </span>
              <span className="px-4 text-xl">1</span>
              <span className="bg-white rounded-full text-black">
                <IconPlus stroke={1} />
              </span>
            </div>
          </div>

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
              className="relative text-2xl rounded-xl p-3 text-[#047979]  border-2 border-[#047979] hover:bg-[#047979] hover:text-white "
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
        </div>
      </div>
    </div>
  );
}

export default Home;
