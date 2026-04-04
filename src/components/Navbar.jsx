import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={assets.logo} alt="logo" className="h-10 md:h-12 w-auto" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink className="text-sm font-medium px-4 py-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-all duration-300" to="/" >Funding</NavLink>
          <NavLink className="text-sm font-medium px-4 py-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-all duration-300" to="/legal" >Legal</NavLink>
          <NavLink className="text-sm font-medium px-4 py-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-all duration-300" to="/philosophy" >Philosophy</NavLink>
          <NavLink className="text-sm font-medium px-4 py-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-all duration-300" to="/industries" >Industries</NavLink>
          <NavLink className="text-sm font-medium px-4 py-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-all duration-300" to="/services" >Services</NavLink>
          <NavLink className="text-sm font-medium px-4 py-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-all duration-300" to="/framework" >Framework</NavLink>
          <NavLink className="text-sm font-medium px-4 py-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-all duration-300" to="/caseStudies" >CaseStudies</NavLink>
          <NavLink  className="ml-4 px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:opacity-90">
            Let's Talk
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className=" w-8 md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <img src={assets.cross} alt="" /> : <img src={assets.toggle} alt="" /> }
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 pb-6 pt-4 flex flex-col gap-2">
          <NavLink onClick={()=>setOpen(false)} to="/" className="text-base font-medium px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100">Funding</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/legal" className="text-base font-medium px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100">Legal</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/philosophy" className="text-base font-medium px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100">Philosophy</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/industries" className="text-base font-medium px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100">Industries</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/services" className="text-base font-medium px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100">Services</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/framework" className="text-base font-medium px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100">Framework</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/caseStudies" className="text-base font-medium px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100">Case Studies</NavLink>

          <NavLink
            onClick={()=>setOpen(false)}
            to="/contact"
            className="mt-3 px-5 py-3 text-center text-sm font-semibold bg-blue-600 text-white rounded-lg">
            Let's Talk
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;