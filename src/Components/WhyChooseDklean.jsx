import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFlask,
  faRupeeSign,
  faFileAlt,
  faHeadset,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const WhyChooseDklean = () => {
  const features = [
    {
      id: 1,
      icon: faHome,
      title: "Home Sample Collection",
      description: "Convenient blood sample collection at your home or office.",
    },
    {
      id: 2,
      icon: faFlask,
      title: "NABL Associated Labs",
      description:
        "Testing support through trusted and recognized diagnostic partners.",
    },
    {
      id: 3,
      icon: faRupeeSign,
      title: "Affordable Pricing",
      description:
        "Quality healthcare services at NGO-supported affordable rates.",
    },
    {
      id: 4,
      icon: faFileAlt,
      title: "Online Reports",
      description: "Fast and secure report delivery through digital channels.",
    },
    {
      id: 5,
      icon: faHeadset,
      title: "24/7 Support",
      description:
        "Dedicated support for appointments, reports, and healthcare assistance.",
    },
    {
      id: 6,
      icon: faCertificate,
      title: "Experienced Professionals",
      description:
        "Qualified healthcare experts, physiotherapists, and diagnostic staff.",
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-[#6d0101]">Dklean Healthcare</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted healthcare and diagnostic services with affordable NGO
            pricing and professional care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-[#6d0101] transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-[#6d0101] text-2xl group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseDklean;
