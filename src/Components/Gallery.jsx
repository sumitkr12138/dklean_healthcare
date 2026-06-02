import React, { useState } from "react";
import "tailwindcss/tailwind.css";

import img1 from "../assets/gallery/a1.jpg.jpeg";
import img3 from "../assets/gallery/a2.jpg.jpeg";
import img4 from "../assets/gallery/a3.jpg.jpeg";
import img5 from "../assets/gallery/a4.jpg.jpeg";
import img6 from "../assets/gallery/a5.jpg.jpeg";
import img7 from "../assets/gallery/a6.jpg.jpeg";
import img8 from "../assets/gallery/a7.jpg.jpeg";
import img9 from "../assets/gallery/a8.webp";
import img10 from "../assets/gallery/a9.jpg.jpeg";
import img11 from "../assets/gallery/a10.jpg.jpeg";
import img12 from "../assets/gallery/a11.jpg.jpeg";
import img13 from "../assets/gallery/a12.jpg.jpeg";
import img14 from "../assets/gallery/a14.jpg.jpeg";
import img15 from "../assets/gallery/a15.jpg.jpeg";
import img16 from "../assets/gallery/a16.jpg.jpeg";
import img17 from "../assets/gallery/a17.jpg.jpeg";
import img18 from "../assets/gallery/a18.jpeg";
import img19 from "../assets/gallery/a19.jpeg";

const imagesData = [
  {
    src: img1,
    title: "Community Health Camp",
    location: "Nawada",
    date: "2024-09-12",
    description:
      "Free health screening and blood tests for the local community.",
    category: "Health Camps",
  },
  {
    src: img3,
    title: "Home Blood Collection",
    location: "Patna",
    date: "2024-10-02",
    description: "Hygienic home sample collection for senior citizens.",
    category: "Blood Collection",
  },
  {
    src: img4,
    title: "Physiotherapy Session",
    location: "Delhi",
    date: "2024-08-20",
    description: "Physiotherapy support at community center.",
    category: "Physiotherapy Services",
  },
  {
    src: img5,
    title: "Corporate Health Check",
    location: "Gurugram",
    date: "2024-07-18",
    description: "On-site corporate health camp for employee wellness.",
    category: "Corporate Health Camps",
  },
  {
    src: img6,
    title: "Award Ceremony",
    location: "Delhi",
    date: "2023-12-05",
    description:
      "Recognition for community service and diagnostics excellence.",
    category: "Awards & Recognition",
  },
  {
    src: img7,
    title: "Community Outreach",
    location: "Patna",
    date: "2024-03-22",
    description: "Mobile diagnostic van serving rural areas.",
    category: "Community Service",
  },
  {
    src: img8,
    title: "Blood Drive",
    location: "Nawada",
    date: "2024-05-10",
    description: "Partnering for a blood donation drive.",
    category: "Blood Collection",
  },
  {
    src: img9,
    title: "Health Camp Setup",
    location: "Delhi",
    date: "2024-09-12",
    description: "Medical tents and screening stations.",
    category: "Health Camps",
  },
  {
    src: img10,
    title: "Sample Processing",
    location: "Lab - Delhi",
    date: "2024-06-01",
    description: "Timely and accurate report processing.",
    category: "Blood Collection",
  },
  {
    src: img11,
    title: "Physio Workshop",
    location: "Patna",
    date: "2024-04-11",
    description: "Group physiotherapy workshop for seniors.",
    category: "Physiotherapy Services",
  },
  {
    src: img12,
    title: "Corporate Screening",
    location: "Gurugram",
    date: "2024-02-15",
    description: "Annual full-body screening for corporate employees.",
    category: "Corporate Health Camps",
  },
  {
    src: img13,
    title: "Community Free Camp",
    location: "Rural Area",
    date: "2023-11-08",
    description: "Free diagnostics for underserved populations.",
    category: "Community Service",
  },
  {
    src: img14,
    title: "Recognition Plaque",
    location: "Delhi",
    date: "2023-12-06",
    description: "Award for public health contribution.",
    category: "Awards & Recognition",
  },
  {
    src: img15,
    title: "Mobile Collection",
    location: "Patna",
    date: "2024-01-19",
    description: "On-site home collection van.",
    category: "Blood Collection",
  },
  {
    src: img16,
    title: "Camp Volunteers",
    location: "Nawada",
    date: "2024-09-12",
    description: "Volunteers assisting in community screening.",
    category: "Health Camps",
  },
  {
    src: img17,
    title: "Patient Assistance",
    location: "Delhi",
    date: "2024-06-08",
    description: "Assistance and counseling post-tests.",
    category: "Community Service",
  },
  {
    src: img18,
    title: "Corporate Team",
    location: "Gurugram",
    date: "2024-07-18",
    description: "Corporate client program photo.",
    category: "Corporate Health Camps",
  },
  {
    src: img19,
    title: "Diagnostic Lab",
    location: "Delhi Lab",
    date: "2024-05-30",
    description: "Lab team receiving award for accuracy.",
    category: "Awards & Recognition",
  },
];

const categories = [
  "All",
  "Health Camps",
  "Blood Collection",
  "Physiotherapy Services",
  "Corporate Health Camps",
  "Awards & Recognition",
  "Community Service",
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? imagesData
      : imagesData.filter((img) => img.category === selectedCategory);

  const selectedImage = filteredImages[selectedIndex] || imagesData[0];

  const goPrev = () => {
    setSelectedIndex((current) =>
      current === 0 ? filteredImages.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setSelectedIndex((current) => (current + 1) % filteredImages.length);
  };

  return (
    <div
      className="relative bg-fixed bg-center bg-cover py-10"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
      }}
    >
      <div className="p-6 max-w-6xl mx-auto backdrop-blur-sm bg-white/60 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Our Gallery
        </h2>

        <div className="relative mb-8">
          {/* Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-center">
            <div className="p-4 bg-white/90 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#6d0101]">5000+</div>
              <div className="text-sm text-gray-600">Blood Tests Conducted</div>
            </div>
            <div className="p-4 bg-white/90 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#6d0101]">50+</div>
              <div className="text-sm text-gray-600">Health Camps</div>
            </div>
            <div className="p-4 bg-white/90 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#6d0101]">1000+</div>
              <div className="text-sm text-gray-600">Patients Served</div>
            </div>
            <div className="p-4 bg-white/90 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-[#6d0101]">20+</div>
              <div className="text-sm text-gray-600">Corporate Clients</div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 items-center mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedIndex(0);
                }}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition  ${
                  selectedCategory === cat
                    ? "bg-[#6d0101] text-white"
                    : "bg-white/90 text-gray-700 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={selectedImage.src || selectedImage}
              alt={`Gallery Image ${selectedIndex + 1}`}
              className="w-full h-[420px] object-cover transition duration-500 transform hover:scale-105 cursor-pointer"
            />
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 text-gray-800 p-3 shadow-lg hover:bg-white transition"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 text-gray-800 p-3 shadow-lg hover:bg-white transition"
              aria-label="Next image"
            >
              ›
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute right-4 bottom-4 rounded-full bg-[#6d0101] text-white px-5 py-2 font-medium shadow-lg hover:bg-black transition"
            >
              View Larger
            </button>
          </div>

          {/* Title & Description */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-800">
                {selectedIndex + 1}/{filteredImages.length} Featured Image
              </span>
              <span className="text-gray-500">
                Click thumbnails below to explore more photos.
              </span>
            </div>

            <div className="bg-white/80 p-4 rounded-lg border border-gray-100">
              <h3 className="font-bold text-lg text-gray-800">
                {selectedImage.title}
              </h3>
              <div className="text-sm text-gray-600">
                {selectedImage.location} • {selectedImage.date}
              </div>
              <p className="mt-2 text-sm text-gray-700">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((imgObj, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                setIsModalOpen(true);
              }}
              className={`overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 bg-white cursor-pointer ${
                selectedIndex === index
                  ? "ring-4 ring-[#6d0101] scale-105"
                  : "hover:scale-105"
              }`}
            >
              <img
                src={imgObj.src}
                alt={imgObj.title || `Gallery Image ${index + 1}`}
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-5 right-5 text-white text-4xl font-bold hover:text-red-400"
            aria-label="Close gallery modal"
          >
            ×
          </button>

          <button
            onClick={goPrev}
            className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/90 text-gray-800 p-3 shadow-lg hover:bg-white transition"
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={selectedImage.src || selectedImage}
            alt={`Gallery Image ${selectedIndex + 1}`}
            className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl object-contain"
          />
          <button
            onClick={goNext}
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/90 text-gray-800 p-3 shadow-lg hover:bg-white transition"
            aria-label="Next image"
          >
            ›
          </button>
          <div className="absolute bottom-20 text-white text-sm font-medium text-center w-full px-4">
            <div className="font-semibold">{selectedImage.title}</div>
            <div className="text-sm">
              {selectedImage.location} • {selectedImage.date}
            </div>
            <div className="mt-2 text-xs text-gray-200 max-w-2xl mx-auto">
              {selectedImage.description}
            </div>
          </div>
          <div className="absolute bottom-5 text-white text-sm font-medium">
            {selectedIndex + 1} of {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
