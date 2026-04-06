import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const LegalDropdown = () => {
  const [legal, setLegal] = useState(false)

  return (
    <div className="relative">
      
      {/* Trigger (button nahi, simple clickable text) */}
      <div
        onClick={() => setLegal(!legal)}
        className="flex items-center gap-2 cursor-pointer text-sm font-medium px-4 py-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100"
      >
        Funding
        <img
          src={assets.down_arrow}
          alt=""
          className={`w-5 transition-transform ${legal ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      {legal && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border-2 border-gray-300 rounded-2xl shadow-lg overflow-hidden z-50">

          <NavLink
            to="/grants"
            className="block px-5 py-4 hover:bg-gray-50 border-b"
          >
            <p className="font-medium">Company Formation</p>
            <p className="text-sm text-gray-500">
              Incorporation & registrations
            </p>
          </NavLink>

          <NavLink
            to="/"
            className="block px-5 py-4 bg-gray-100 border-b"
          >
            <p className="font-medium">IP Protection</p>
            <p className="text-sm text-gray-500">
              Trademarks, patents & copyrights
            </p>
          </NavLink>

          <NavLink
            to="/debt"
            className="block px-5 py-4 hover:bg-gray-50"
          >
            <p className="font-medium">Compliance & Contracts</p>
            <p className="text-sm text-gray-500">
              Filings, agreements & fundraising legal
            </p>
          </NavLink>

        </div>
      )}

    </div>
  );
}

export default LegalDropdown