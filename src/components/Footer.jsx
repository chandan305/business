import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Top */}
        <div className="py-16 grid md:grid-cols-4 gap-12 md:gap-8">

          {/* Logo + About */}
          <div className="md:col-span-2">
            <img
              src={assets.logo}
              alt="HOS Bharat"
              className="w-24 mb-5"
            />

            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
              Startup growth and equity fundraising consultancy. From first
              capital to institutional growth — building companies that deserve funding.
            </p>

            <a
              href="mailto:hello@hosbharat.com"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
            >
              hello@hosbharat.com →
            </a>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-xs font-semibold uppercase text-gray-400 mb-4">
              Navigate
            </p>

            <ul className="space-y-3">
              <li><a href="#philosophy" className="text-sm text-gray-500 hover:text-black">Philosophy</a></li>
              <li><a href="#industries" className="text-sm text-gray-500 hover:text-black">Industries</a></li>
              <li><a href="#services" className="text-sm text-gray-500 hover:text-black">Services</a></li>
              <li><a href="#framework" className="text-sm text-gray-500 hover:text-black">Framework</a></li>
              <li><a href="#cases" className="text-sm text-gray-500 hover:text-black">Case Studies</a></li>
            </ul>
          </div>

          {/* Stages */}
          <div>
            <p className="text-xs font-semibold uppercase text-gray-400 mb-4">
              Stages We Cover
            </p>

            <ul className="space-y-3">
              <li className="text-sm text-gray-500">Pre-Seed & Early Stage</li>
              <li className="text-sm text-gray-500">Seed Stage</li>
              <li className="text-sm text-gray-500">Series A</li>
              <li className="text-sm text-gray-500">Series B</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-500">
            © 2026 HOS Bharat — The House of Startups. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Build with clarity. Raise with confidence. Scale with discipline.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;