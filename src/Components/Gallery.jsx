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

const images = [
  img1,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedImage = images[selectedIndex];

  const goPrev = () => {
    setSelectedIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setSelectedIndex((current) => (current + 1) % images.length);
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
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={selectedImage}
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

          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-gray-600">
            <span className="font-semibold text-gray-800">
              {selectedIndex + 1}/{images.length} Featured Image
            </span>
            <span className="text-gray-500">
              Click thumbnails below to explore more photos.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
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
                src={src}
                alt={`Gallery Image ${index + 1}`}
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
            src={selectedImage}
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
          <div className="absolute bottom-5 text-white text-sm font-medium">
            {selectedIndex + 1} of {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
