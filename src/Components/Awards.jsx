import React, { useState } from "react";
import img6 from "../assets/gallery/a5.jpg.jpeg";
import img14 from "../assets/gallery/a14.jpg.jpeg";
import img19 from "../assets/gallery/a19.jpeg";
import img15 from "../assets/gallery/a15.jpg.jpeg";
import img11 from "../assets/gallery/a10.jpg.jpeg";

const awardsData = [
  {
    title: "Award of Appreciation",
    presentedBy: "Prestige Apartment Association",
    date: "2024-03-10",
    description:
      "Recognition for outstanding healthcare and blood testing services.",
    image: img6,
    category: "Community Service",
  },
  {
    title: "Healthcare Excellence Award",
    presentedBy: "Corporate Health Camp Partner",
    date: "2023-12-05",
    description: "Recognition for delivering quality healthcare services.",
    image: img14,
    category: "Healthcare Excellence",
  },
  {
    title: "Certificate of Appreciation",
    presentedBy: "A.P. Securitas Pvt. Ltd.",
    date: "2024-01-20",
    description: "Appreciation for conducting employee health screening camps.",
    image: img19,
    category: "Corporate Recognition",
  },
  {
    title: "Community Impact Certificate",
    presentedBy: "Greenfield Society",
    date: "2024-02-14",
    description: "For outstanding community outreach and free health camps.",
    image: img15,
    category: "Certificates",
  },
  {
    title: "Diagnostic Excellence Trophy",
    presentedBy: "City Health Board",
    date: "2023-11-30",
    description: "Trophy awarded for accurate and timely diagnostics.",
    image: img11,
    category: "Awards",
  },
];

const categories = [
  "All",
  "Awards",
  "Certificates",
  "Corporate Recognition",
  "Community Service",
  "Healthcare Excellence",
];

const Awards = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered =
    selectedCategory === "All"
      ? awardsData
      : awardsData.filter((a) => a.category === selectedCategory);

  const openDetails = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const selected = filtered[selectedIndex] || filtered[0];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Awards & Recognition
        </h2>

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-[#6d0101] text-white"
                  : "bg-white border border-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((award, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col"
            >
              <div className="h-48 rounded-xl overflow-hidden mb-4">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-bold text-lg text-gray-800">{award.title}</h3>
              <div className="text-sm text-gray-600 mb-2">
                Presented by: {award.presentedBy}
              </div>
              <div className="text-xs text-gray-500 mb-3">
                {award.date} • {award.category}
              </div>

              <p className="text-sm text-gray-700 mb-4 flex-1">
                {award.description}
              </p>

              <div className="mt-auto">
                <button
                  onClick={() => openDetails(idx)}
                  className="w-full bg-[#6d0101] text-white py-2 rounded-lg hover:bg-black transition font-semibold"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && selected && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl font-bold"
              aria-label="Close"
            >
              ×
            </button>

            <div className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2 h-72 rounded-xl overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {selected.title}
                  </h3>
                  <div className="text-sm text-gray-600 mb-4">
                    Presented by: {selected.presentedBy}
                  </div>
                  <div className="text-xs text-gray-500 mb-4">
                    {selected.date} • {selected.category}
                  </div>
                  <p className="text-gray-700 mb-6">{selected.description}</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700">
                      Download Certificate
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 rounded-lg bg-[#6d0101] text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Awards;
