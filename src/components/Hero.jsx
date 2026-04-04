import React from "react";
import { NavLink } from "react-router-dom";
import Stats from "./Stats";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={assets.m_hero} alt="background"
          className="w-full h-full object-cover"/>
        {/* optional overlay */}
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28 pt-32">
        
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-gray-100 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-medium tracking-wider uppercase text-gray-500">
              The House of Startups
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight mb-8">
            <span>Building </span>
            <span className="text-blue-600">
              Fundable,<br />Scalable
            </span>
            <span> Companies</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
            From first capital to institutional growth — we partner with founders
            who are serious about building companies that deserve funding.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <NavLink
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Explore Our Work →
            </NavLink>

            <NavLink
              to="/philosophy"
              className="px-8 py-4 border text-gray-800 font-medium rounded-xl hover:bg-gray-100 transition-colors"
            >
              Our Philosophy
            </NavLink>
          </div>

          {/* Stats */}
          <Stats />

        </div>
      </div>
    </section>
  );
};

export default Hero;