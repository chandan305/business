import StatsCounter from "./StatsCounter";
import { assets } from "../assets/assets";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Counter */}
        <StatsCounter />

        {/* Heading */}
        <p className="text-sm text-blue-600 mb-4">WHY FOUNDER CHOOSE US</p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12 max-w-3xl">
          We Don't Promise Funding.
          <span className="">We Build Businesses That Deserve It.</span>
        </h2>

        {/* Points */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 mb-16">
          {[
            "We think like investors, not vendors",
            "We stay involved beyond decks and introductions",
            "We focus on long-term outcomes, not short-term optics",
            "We bring structure to chaotic fundraising processes",
            "We are transparent about feasibility and timelines",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="mt-1.5 w-3 h-3 rounded-full border-2 border-blue-600 shrink-0"></span>
              <p className="text-lg text-gray-500">{item}</p>
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <img
              src={assets.why_choose}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className=""></div>
            <p className="absolute bottom-6 left-6 text-sm text-white">
              From pitch to partnership
            </p>
          </div>

          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <img
              src={assets.why_choose1}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className=""></div>
            <p className="absolute bottom-6 left-6 text-sm text-white">
              Metrics that matter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
