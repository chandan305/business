const JourneyHeader = () => {
  return (
    <div className="text-center mb-20">
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-blue-600 mb-4">
        What We Do
      </p>

      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        The Startup Journey —
        <span className="text-blue-600"> As We See It</span>
      </h2>

      <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
        Every great company follows a path. From the first spark of an idea
        to the boardroom where institutional capital meets proven execution —
        this is the journey we walk with founders.
      </p>
    </div>
  );
};

export default JourneyHeader;