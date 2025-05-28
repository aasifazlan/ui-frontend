// src/pages/Ancient.jsx
import { useNavigate } from "react-router-dom";

const AncientHistory = () => {
  const navigate = useNavigate();

  const timelines = [
    { label: "Indus Valley Civilization", value: "indus-valley" },
    { label: "Vedic Period", value: "vedic-period" },
    { label: "Maurya Empire", value: "maurya-empire" },
    { label: "Gupta Empire", value: "gupta-empire" },
  ];

  return (
    <div className="h-screen flex mt-20">
      {/* Left vertical timeline - sticky and non-scrolling */}
      <div className="w-1/4 bg-gray-100 p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Timelines</h2>
        <div className="flex flex-col gap-4">
          {timelines.map((t) => (
            <button
              key={t.value}
              onClick={() => navigate(`/history/articles?period=${t.value}`)}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 text-left"
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right scrollable content */}
      <div className="w-3/4 h-screen overflow-y-scroll p-6">
        <h1 className="text-3xl font-bold mb-6">Ancient Indian History</h1>
        <p className="text-gray-700 mb-6">
          Explore the civilizations and empires that laid the foundation of Indian culture and philosophy.
        </p>

        {/* Example articles */}
        {[...Array(15)].map((_, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-xl font-semibold">Article Title {idx + 1}</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AncientHistory;
