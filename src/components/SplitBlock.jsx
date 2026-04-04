import React from "react";
import { assets } from "../assets/assets";

const SplitBlock = () => {
  return (
    <div className="grid md:grid-cols-5 gap-8">
      {/* image */}
      <div className="md:col-span-3 relative h-80 md:h-96 rounded-2xl overflow-hidden">
        <img
          src={assets.hero_section1}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 from-black/70 to-transparent" />

        <div className="absolute bottom-0 p-8 text-white">
          <p className="text-lg font-semibold">
           We decode what investors actually look for — <br/> and position your startup to match that lens, without losing your authentic story.
          </p>
        </div>
      </div>

      {/* list */}
      <div className="md:col-span-2 space-y-6">
        <div className="p-6 border rounded-xl">
          <h4 className=" text-red-500 font-bold mb-3">Why Startups Fail</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
             <li className="flex items-center gap-2">
              <img src={assets.point} alt="" className="w-2" />
              Story misaligned
            </li>

            <li className="flex items-center gap-2">
              <img src={assets.point} alt="" className="w-2" />
              Weak numbers
            </li>

            <li className="flex items-center gap-2">
              <img src={assets.point} alt="" className="w-2" />
             Legal issues
            </li>

            <li className="flex items-center gap-2">
              <img src={assets.point} alt="" className="w-2" />
              No strategy
            </li>
          </ul>
        </div>

        <div className="p-6 border rounded-xl">
          <h4 className="font-bold mb-3 text-blue-900">How We Fix</h4>

          <ul className=" space-y-3 text-gray-500 text-sm">
            <li className="flex items-center gap-2">
              <img src={assets.p_arror} alt="" className="w-4 h-4" />
              Investor narrative
            </li>

            <li className="flex items-center gap-2">
              <img src={assets.p_arror} alt="" className="w-4 h-4" />
              Financial models
            </li>

            <li className="flex items-center gap-2">
              <img src={assets.p_arror} alt="" className="w-4 h-4" />
              Legal structure
            </li>

            <li className="flex items-center gap-2">
              <img src={assets.p_arror} alt="" className="w-4 h-4" />
              Disciplined process
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SplitBlock;
