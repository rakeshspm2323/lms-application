import { FaUsers, FaBookOpen, FaAward, FaChartLine } from "react-icons/fa";

const StatusSection = () => {
  const stats = [
    {
      icon: <FaUsers size={30} />,
      value: "1,000+",
      color: "text-red-500",
      label: "Active Students",
    },
    {
      icon: <FaBookOpen size={30} />,
      value: "100+",
      color: "text-green-500",
      label: "Courses Available",
    },
    {
      icon: <FaAward size={30} />,
      value: "90%",
      color: "text-blue-500",
      label: "Success Rate",
    },
    {
      icon: <FaChartLine size={30} />,
      value: "24/7",
      color: "text-yellow-500",
      label: "Support Available",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 mb-5">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center ">
        {stats.map((item, index) => (
          <div key={index}>
            <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
              {item.icon}
            </div>
            <h3 className={`text-2xl font-bold ${item.color}`}>{item.value}</h3>
            <p className="text-gray-500 font-medium mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusSection;
