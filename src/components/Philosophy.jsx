import React from "react";
import SplitBlock from "./SplitBlock";
import FeatureCard from "./FeatureCard";
import { assets } from "../assets/assets";

const Philosophy = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* grid background */}
      <div className="absolute inset-0 opacity-5 " />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase font-semibold text-blue-600 mb-4">
            Our Investment Philosophy
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl">
            We Don't Just Prepare Pitches.
            <span className="text-blue-600">
              {" "}
              We Engineer Fundraising Outcomes.
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl">
            Most startups approach investors with hope. We approach them with
            infrastructure — the kind that turns conversations into term sheets.
          </p>
        </div>

        <SplitBlock />

        {/* bottom cards */}
        <div className="grid sm:grid-cols-2 gap-6 mt-16">
          <FeatureCard
            icon={<img src={assets.check} alt="" className="w-5" />}             
            title="Investor-Aligned Positioning"
            desc="We position your startup to match investor expectations and highlight growth potential."
          />

          <FeatureCard
            icon={<img src={assets.growth} alt="" className="w-5"/>}
            title="Metrics That Withstand Scrutiny"
            desc="We build strong financial metrics and projections that stand up to due diligence."
          />

          <FeatureCard
          icon={<img src={assets.growth} alt="" className="w-5"/>}
            title="Structural & Legal Readiness"
            desc="We prepare legal structure, compliance, and documentation to gain investor confidence."
          />

          <FeatureCard
          icon={<img src={assets.target} alt="" className="w-5"/>}
            title="Disciplined Execution Engine"
            desc="We manage fundraising with a structured and data-driven execution strategy."
          />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
