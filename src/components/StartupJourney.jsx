import { journey } from "../assets/assets";
import JourneyHeader from "./JourneyHeader";

const StartupJourney = () => {
  return (
    <section className="py-20">
      <JourneyHeader />

      <div className="max-w-6xl mx-auto px-4">
        {journey.map((item, index) => (
          <div key={index} className="mb-28">
            
            {/* Step Heading */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">
                  {item.step}
                </span>
              </div>

              <div>
                <p className="text-xs uppercase text-blue-600">
                  Chapter {item.step}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Image + Text */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              
              {/* Image */}
              <div
                className={`relative h-72 md:h-96 rounded-2xl overflow-hidden 
                ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <img
                  src={item.Image}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 "></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-semibold text-white">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Text */}
              <div
                className={`flex flex-col justify-center 
                ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <p className="text-gray-500 mb-4 border-l-2 pl-4">
                  {item.desc}
                </p>

                <p className="font-medium">{item.extra}</p>

                <p className="text-xs text-gray-400 mt-4">
                  Industries: {item.industries}
                </p>
              </div>
            </div>

            {/* Feature Box */}
            <div className="backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl shadow-lg p-6 md:p-10">
              <div className="grid sm:grid-cols-2 gap-8">
                
                <div>
                  <h4 className="text-sm font-semibold text-blue-600 mb-3">
                    › Business & Strategy
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Problem validation & market clarity</li>
                    <li>Founder-market fit articulation</li>
                    <li>Business model structuring</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-600 mb-3">
                    › Pitch & Storytelling
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Complete pitch deck creation</li>
                    <li>Market sizing logic</li>
                    <li>Competitive landscape mapping</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-600 mb-3">
                    › Financial Planning
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>3-5 year financial models</li>
                    <li>Unit economics</li>
                    <li>Valuation benchmarking</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-600 mb-3">
                    › Legal & Compliance
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Company incorporation advisory</li>
                    <li>DPIIT & MSME registration</li>
                    <li>Cap table & ESOP readiness</li>
                  </ul>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-1">The Outcome</p>
                <p className="text-base font-semibold text-gray-800">
                  → Make the startup credible enough to be taken seriously.
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default StartupJourney;