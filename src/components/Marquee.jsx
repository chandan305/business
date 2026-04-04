import React from "react";

const items = [
  "Strategy",
  "Fundraising",
  "Pitch Decks",
  "Financial Models",
  "Legal Structuring",
  "Investor Mapping",
  "Due Diligence",
  "Term Sheets",
  "Cap Tables",
  "Growth Planning",
];

const Marquee = () => {
  return (
    <div className="w-full border-y border-gray-200 bg-gray-50 py-6 overflow-hidden">
      <div className="flex marquee-track items-center gap-8 whitespace-nowrap w-max animate-marquee">
        {[...items, ...items].map((text, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;