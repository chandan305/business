const framework = [
  {
    step: "01",
    week: "Week 1–2",
    title: "Investor Readiness",
    points: [
      "Pitch deck restructuring",
      "Financial model & valuation alignment",
      "Legal & compliance review",
    ],
  },
  {
    step: "02",
    week: "Week 2–4",
    title: "Investor Mapping & Outreach",
    points: [
      "Stage-aligned investor shortlisting",
      "Outreach strategy design",
      "Active tracking & follow-ups",
    ],
  },
  {
    step: "03",
    week: "Week 4–8",
    title: "Investor Interactions",
    points: [
      "Pitch preparation & rehearsal",
      "Live feedback-based refinements",
      "Investor Q&A handling",
    ],
  },
  {
    step: "04",
    week: "Week 8–10",
    title: "Due Diligence",
    points: [
      "Data room coordination",
      "Financial & legal clarifications",
      "Negotiation support",
    ],
  },
  {
    step: "05",
    week: "Week 10–12",
    title: "Term Sheet & Closure",
    points: [
      "Term sheet review & discussions",
      "Fund transfer & compliance filings",
      "Post-funding execution transition",
    ],
  },
];

const Framework = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl shadow-amber-200 mx-auto px-4">
        {/* Heading */}
        <div className="md:text-center mb-16">
          <p className="text-sx text-blue-600 mb-3">
            OUR FRAMWORK 
          </p>

          <h2 className="text-3xl md:text-5x2 font-bold mb-4">
            A Structured, <span className="text-blue-600">Time-Bound</span>{" "}
            Fundraising Process
          </h2>

          <p className="text-gray-500 text-2xl mx-auto">
            12 weeks. 5 phases. One clear outcome — a closed round with the <br/> right investors, at the right terms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-5 gap-4">
          {framework.map((item, index) => (
            <div
              key={index}
              className="bg-white border-none cursor-pointer border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold text-blue-600">
                  {item.step}
                </div>
                <span className="text-xs text-gray-400">{item.week}</span>
              </div>

              <h3 className="font-semibold text-sm mb-3">{item.title}</h3>

              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="text-xs text-gray-500 flex gap-2">
                    <span className="w-1 h-1 bg-blue-600 rounded-full mt-2"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center text-sm text-gray-500 mt-12">
          From readiness to closure —{" "}
          <span className="text-blue-600 font-medium">
            a proven, repeatable system.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Framework;
