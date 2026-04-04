import React from 'react'

const SectorHeader = () => {
  return (
    <div className="mb-14">
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-blue-600 mb-4">
        Sector Expertise
      </p>

      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
        Deep Fundraising Knowledge{" "}
        <span className=" bg-blue-800 bg-clip-text text-transparent">
          Across Sectors
        </span>
      </h2>

      <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
        Every sector speaks a different investor language. We know each dialect.
      </p>
    </div>
  );
};

export default SectorHeader;