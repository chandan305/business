const ContactRight = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10">

      <p className="text-xl md:text-2xl font-semibold mb-6">
        Build with clarity.
        <br />
        Raise with confidence.
        <br />
        Scale with discipline.
      </p>

      <div className="space-y-4 mb-8">

        <div className="flex items-center gap-3">
          <span className=" text-blue-800 w-6 h-6 rounded-full border flex items-center justify-center text-xs">
            1
          </span>
          <span className="text-sm text-gray-500">
            Preparing for your first fundraise
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className=" text-blue-800 w-6 h-6 rounded-full border flex items-center justify-center text-xs">
            2
          </span>
          <span className="text-sm text-gray-500">
            Navigating seed-stage execution
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className=" text-blue-800 w-6 h-6 rounded-full border flex items-center justify-center text-xs">
            3
          </span>
          <span className="text-sm text-gray-500">
            Positioning for Series A or B
          </span>
        </div>

      </div>

      <a
        href="mailto:hello@hosbharat.com"
        className="w-full inline-flex items-center justify-center px-8 py-4 hover:bg-blue-500 bg-blue-600 text-white rounded-xl"
      >
        Start the Conversation →
      </a>

    </div>
  );
};

export default ContactRight;