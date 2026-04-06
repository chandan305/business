import { assets } from "../assets/assets";

const ContactLeft = () => {
  return (
    <div>
      <p className="text-xs tracking-[0.2em] uppercase text-blue-600 mb-4">
        Let's Build Together
      </p>

      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
        Ready to Build Your
        <span className="gradient-text"> Next Growth Phase?</span>
      </h2>

      <p className="text-gray-500 text-lg leading-relaxed mb-8">
        Whether you're preparing for your first fundraise, navigating seed-stage execution,
        or positioning for Series A & B — we work as your extended startup growth office.
      </p>

      <div className="space-y-4">

        <a href="mailto:hello@hosbharat.com" className="flex items-center gap-3">
          <div className=" bg-blue-100 w-10 h-10 rounded-lg border flex items-center justify-center">
            <img className="w-5 " src={assets.message} alt="" />
          </div>
          <span className="text-sm font-medium hover:text-blue-800">
            hello@hosbharat.com
          </span>
        </a>

        <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg border flex items-center justify-center">
           <img className="w-5" src={assets.phone} alt="" />
          </div>
          <span className="text-sm font-medium hover:text-blue-800">
            Schedule a Call
          </span>
        </a>

      </div>
    </div>
  );
};

export default ContactLeft;