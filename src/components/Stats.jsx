import React, { useEffect, useState } from "react";

const Stats = () => {
  const [startups, setStartups] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [sectors, setSectors] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {

      setStartups((prev) => {
        if (prev < 150) return prev + 1;
        return prev;
      });

      setPitch((prev) => {
        if (prev < 700) return prev + 1;
        return prev;
      });

      setSectors((prev) => {
        if (prev < 5) return prev + 1;
        return prev;
      });

    }, 20); // speed control

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 flex items-center gap-8 md:gap-12">

      <div className="flex items-baseline gap-2">
        <span className="text-2xl md:text-3xl font-bold text-blue-600">
          {startups}+
        </span>
        <span className="text-xs text-gray-500">Startups</span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl md:text-3xl font-bold text-blue-600">
          {pitch}+
        </span>
        <span className="text-xs text-gray-500">Pitch Decks</span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl md:text-3xl font-bold text-blue-600">
          {sectors}+
        </span>
        <span className="text-xs text-gray-500">Sectors</span>
      </div>

    </div>
  );
};

export default Stats;