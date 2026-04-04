import { useState } from "react";
import { sectors } from "../assets/assets";
import SectorHeader from "./SectorHeader";

const Industries = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
             <SectorHeader />
        <div className="grid md:grid-cols-12 gap-6">

          {/* Left Menu */}
          <div className="md:col-span-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {sectors.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition shrink-0 w-full
                ${
                  active === index
                    ? "bg-blue-100 border border-blue-400 shadow-sm"
                    : "hover:bg-gray-100 border border-transparent"
                }`}
              >
                {item.icon && (
                  <img src={item.icon} alt="" className="w-5 h-5" />
                )}
                <span className="text-sm font-medium">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="md:col-span-8">
            <div className="p-6 md:p-8 border rounded-xl h-full">

              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {sectors[active].title}
              </h3>

              <p className="text-gray-500 mb-6">
                {sectors[active].desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {sectors[active].metrics.map((m, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border"
                  >
                    {m}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Industries;