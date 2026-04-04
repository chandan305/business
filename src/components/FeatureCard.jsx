const FeatureCard = ({ title, desc, icon }) => {
  return (
    <div
      className=" p-6 border rounded-xl 
                    hover:border-blue-500 
                    hover:shadow-lg 
                    hover:-translate-y-1
                    transition duration-300
                    cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 shrink-0  flex items-center justify-center bg-blue-100 rounded-lg">
          {icon}
        </div>

        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-gray-500 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
