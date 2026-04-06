import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const FundingDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      
      {/* Trigger (button nahi, simple clickable text) */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer text-sm font-medium px-4 py-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100"
      >
        Funding
        <img
          src={assets.down_arrow}
          alt=""
          className={`w-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border-2 border-gray-300 rounded-2xl shadow-lg overflow-hidden z-50">

          <NavLink
            to="/grants"
            className="block px-5 py-4 hover:bg-gray-50 border-b"
          >
            <p className="font-medium">Grants</p>
            <p className="text-sm text-gray-500">
              Government grant funding
            </p>
          </NavLink>

          <NavLink
            to="/"
            className="block px-5 py-4 bg-gray-100 border-b"
          >
            <p className="font-medium">Equity Fundraising</p>
            <p className="text-sm text-gray-500">
              Equity fundraising for startups
            </p>
          </NavLink>

          <NavLink
            to="/debt"
            className="block px-5 py-4 hover:bg-gray-50"
          >
            <p className="font-medium">Debt Funding</p>
            <p className="text-sm text-gray-500">
              Growth capital without dilution
            </p>
          </NavLink>

        </div>
      )}

    </div>
  );
};

export default FundingDropdown;