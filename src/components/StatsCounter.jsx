import { useEffect, useState } from "react";

const StatsCounter = () => {

  const stats = [
    { value: 120, label: "Startups Supported", suffix: "+" },
    { value: 700, label: "Pitch Decks Rebuilt", suffix: "+" },
    { value: 5, label: "Sectors Covered", suffix: "+" },
    { value: 4, label: "Fundraising Stages", suffix: "" }
  ];

  const [count, setCount] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {

      setCount(prev =>
        prev.map((item, i) => {
          if (item < stats[i].value) {
            return item + 1;
          }
          return item;
        })
      );

    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
      {stats.map((item, index) => (
        <div key={index} className="text-center">

          <p className="text-4xl md:text-5xl font-bold mb-2">
            {count[index]}
            {count[index] === item.value && item.suffix}
          </p>

          <p className="text-sm text-gray-500">
            {item.label}
          </p>

        </div>
      ))}
    </div>
  );
};

export default StatsCounter;