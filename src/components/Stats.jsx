import React from 'react'

const Stats = () => {
  return (
    <div className="mt-16 flex items-center gap-8 md:gap-12">
      
      <div className="flex items-baseline gap-2">
        <span className="text-2xl md:text-3xl font-bold text-blue-600">
          120+
        </span>
        <span className="text-xs text-gray-500">Startups</span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl md:text-3xl font-bold text-blue-600">
          700+
        </span>
        <span className="text-xs text-gray-500">Pitch Decks</span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl md:text-3xl font-bold text-blue-600">
          5+
        </span>
        <span className="text-xs text-gray-500">Sectors</span>
      </div>

    </div>
  );
};

export default Stats;