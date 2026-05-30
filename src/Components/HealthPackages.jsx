// import React, { useState } from "react";
// import CheckIcon from "@mui/icons-material/Check";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { useNavigate } from "react-router-dom";
// import StaticBookAppointment from "../Components/StaticBookAppointment";
// const packages = [
//   {
//     name: "Accuprobe 1.1 Plus",
//     originalPrice: "₹1780",
//     offerPrice: "₹999",
//     highlight: false,
//     tag: "Starter",
//     tests: [
//       { category: "Diabetes", test: "FBS" },
//       { category: "Heart", test: "Lipid Profile" },
//       { category: "Kidney", test: "Kidney Function Test" },
//       { category: "Liver", test: "Liver Function Test" },
//       { category: "Hormone", test: "Thyroid Profile" },
//       { category: "Infection", test: "CBC + ESR" },
//       { category: "Bone", test: "Calcium, Phosphorus" },
//       { category: "Anaemia", test: null },
//       { category: "Nerve", test: null },
//       { category: "Cancer", test: null },
//     ],
//   },
//   {
//     name: "Accuprobe 1.2 Plus",
//     originalPrice: "₹2580",
//     offerPrice: "₹1199",
//     highlight: false,
//     tag: "Basic",
//     tests: [
//       { category: "Diabetes", test: "FBS + HbA1c" },
//       { category: "Heart", test: "Lipid Profile" },
//       { category: "Kidney", test: "KFT" },
//       { category: "Liver", test: "LFT" },
//       { category: "Hormone", test: "Thyroid Profile" },
//       { category: "Infection", test: "CBC + ESR" },
//       { category: "Bone", test: "Calcium, Phosphorus" },
//       { category: "Anaemia", test: "Iron Panel Basic" },
//       { category: "Nerve", test: null },
//       { category: "Cancer", test: null },
//     ],
//   },
//   {
//     name: "Nirogyam Profile - 2 ",
//     originalPrice: "₹3680",
//     offerPrice: "₹1999",
//     highlight: true,
//     tag: "Popular",
//     tests: [
//       { category: "Diabetes", test: "FBS + HbA1c " },
//       { category: "Heart", test: "Lipid Profile" },
//       { category: "Kidney", test: "KFT + Urine R/M" },
//       { category: "Liver", test: "LFT" },
//       { category: "Hormone", test: "Thyroid Profile" },
//       { category: "Infection", test: "CBC + ESR" },
//       { category: "Bone", test: "Calcium, Phosphorus, Vitamin-D" },
//       { category: "Anaemia", test: "Iron Panel Basic" },
//       { category: "Nerve", test: "Vitamin B12" },
//       { category: "Cancer", test: null },
//     ],
//   },
//   // {
//   //   name: "Accuprobe Advance",
//   //   originalPrice: "₹6000",
//   //   offerPrice: "₹2699",
//   //   highlight: false,
//   //   tag: "Advanced",
//   //   tests: [
//   //     { category: "Diabetes", test: "FBS + HbA1c + Microalbumin" },
//   //     { category: "Heart", test: "Lipid Profile + CPKMB" },
//   //     { category: "Kidney", test: "KFT + Urine R/M + GFR" },
//   //     { category: "Liver", test: "LFT + HBsAg" },
//   //     { category: "Hormone", test: "Thyroid Profile" },
//   //     { category: "Infection", test: "CBC + ESR + Peripheral Blood Smear" },
//   //     { category: "Bone", test: "Calcium, Phosphorus, Vitamin-D" },
//   //     { category: "Anaemia", test: "Iron Panel Basic" },
//   //     { category: "Nerve", test: "Vitamin B12" },
//   //     { category: "Cancer", test: "CEA" },
//   //   ],
//   // },
//   // {
//   //   name: "Accuprobe Executive",
//   //   originalPrice: "₹7500",
//   //   offerPrice: "₹3399",
//   //   highlight: false,
//   //   tag: "Comprehensive",
//   //   tests: [
//   //     { category: "Diabetes", test: "FBS + HbA1c + Microalbumin + Insulin F" },
//   //     { category: "Heart", test: "Lipid Profile + CPKMB" },
//   //     { category: "Kidney", test: "KFT + Urine R/M + GFR" },
//   //     { category: "Liver", test: "LFT + HBsAg" },
//   //     { category: "Hormone", test: "Thyroid Profile" },
//   //     { category: "Infection", test: "CBC + ESR + Peripheral Blood Smear" },
//   //     { category: "Bone", test: "Calcium, Phosphorus, Vitamin-D" },
//   //     { category: "Anaemia", test: "Iron Panel Basic" },
//   //     { category: "Nerve", test: "Vitamin B12 + Reticulocyte Count" },
//   //     { category: "Cancer", test: "CEA + CA125 / PSA" },
//   //   ],
//   // },
// ];

// const otherTests = [
//   { name: "Thyroid Profile", price: "₹199" },
//   { name: "Lipid Profile", price: "₹499" },
//   { name: "Kidney Profile", price: "₹499" },
//   { name: "Liver Profile", price: "₹499" },
//   { name: "HbA1c", price: "₹249" },
//   { name: "CBC", price: "₹229" },
// ];

// const HealthPackages = () => {
//   const navigate = useNavigate();

//   const scrollToForm = (pkgName) => {
//     navigate("/StaticBookAppointment", {
//       state: {
//         selectedPackage: pkgName,
//       },
//     });
//   };

//   return (
//     <section className="py-16 bg-white" id="packages">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block bg-[#6d0101]/10 text-[#6d0101] text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-3">
//             Accuprobe Diagnostics Partner
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Health Packages
//           </h2>
//           <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
//             Comprehensive diagnostic packages at discounted rates. Free home
//             collection available. Reports delivered as PDF by 8 PM.
//           </p>
//           <div className="w-16 h-1 bg-[#6d0101] mx-auto mt-4 rounded-full" />
//         </div>

//         {/* Discount banner */}
//         <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-xl p-4 mb-10 text-center font-bold text-lg shadow">
//           🎉 Extra 30% Discount for D.H.C.P.C.T Delhi Members
//         </div>

//         {/* Package Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
//           {packages.map((pkg, i) => (
//             <div
//               key={i}
//               className={`relative rounded-2xl border shadow-md flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl ${
//                 pkg.highlight
//                   ? "border-[#6d0101] ring-2 ring-[#6d0101]"
//                   : "border-gray-200"
//               }`}
//             >
//               {/* Tag */}
//               <div
//                 className={`px-4 py-2 text-xs font-bold uppercase tracking-wider text-center ${
//                   pkg.highlight
//                     ? "bg-[#6d0101] text-white"
//                     : "bg-gray-100 text-gray-600"
//                 }`}
//               >
//                 {pkg.tag}
//                 {pkg.highlight && (
//                   <span className="ml-2 bg-yellow-400 text-black px-2 py-0.5 rounded-full text-xs">
//                     ★ Best Value
//                   </span>
//                 )}
//               </div>

//               <div className="p-4 flex flex-col flex-1">
//                 <h3 className="font-bold text-gray-800 text-sm text-center mb-3 leading-tight">
//                   {pkg.name}
//                 </h3>

//                 {/* Price */}
//                 <div className="text-center mb-4">
//                   <div className="text-gray-400 line-through text-xs">
//                     {pkg.originalPrice}
//                   </div>
//                   <div className="text-2xl font-extrabold text-[#6d0101]">
//                     {pkg.offerPrice}
//                   </div>
//                   <div className="text-xs text-green-600 font-semibold">
//                     OFFER PRICE
//                   </div>
//                 </div>

//                 {/* Tests */}
//                 <ul className="space-y-2 flex-1 text-xs">
//                   {pkg.tests.map((t, j) => (
//                     <li key={j} className="flex items-start gap-1.5">
//                       {t.test ? (
//                         <CheckIcon
//                           sx={{ fontSize: 14, color: "#16a34a", mt: 0.2 }}
//                         />
//                       ) : (
//                         <RemoveIcon
//                           sx={{ fontSize: 14, color: "#d1d5db", mt: 0.2 }}
//                         />
//                       )}
//                       <div>
//                         <span className="font-semibold text-gray-600">
//                           {t.category}:{" "}
//                         </span>
//                         <span
//                           className={t.test ? "text-gray-700" : "text-gray-300"}
//                         >
//                           {t.test || "—"}
//                         </span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   onClick={() => scrollToForm(pkg.name)}
//                   className={`mt-5 w-full py-2.5 rounded-lg text-sm font-semibold transition duration-300 ${
//                     pkg.highlight
//                       ? "bg-[#6d0101] text-white hover:bg-black"
//                       : "border border-[#6d0101] text-[#6d0101] hover:bg-[#6d0101] hover:text-white"
//                   }`}
//                 >
//                   Book This Package
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Other Individual Tests */}
//         <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
//           <h3 className="text-center font-bold text-gray-700 text-lg mb-5">
//             Individual Tests
//           </h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//             {otherTests.map((t, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl border border-gray-200 p-3 text-center shadow-sm hover:shadow-md transition"
//               >
//                 <div className="text-sm font-semibold text-gray-700">
//                   {t.name}
//                 </div>
//                 <div className="text-lg font-bold text-[#6d0101] mt-1">
//                   {t.price}
//                 </div>
//                 <button
//                   onClick={() => scrollToForm(t.name)}
//                   className="mt-2 text-xs text-[#6d0101] underline hover:no-underline"
//                 >
//                   Book
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer note */}
//         <p className="text-center text-xs text-gray-400 mt-6">
//           * Calcium & Phosphorus available on request. Certified by NABL · ISO
//           9001:2015 · ICMR. Partner lab: Accuprobe Diagnostics, Delhi.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HealthPackages;

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HealthPackagesSlider = () => {
  const packages = [
    {
      name: "Advanced Health Package",
      price: 1499,
      tests: [
        "CBC",
        "HbA1c",
        "Lipid Profile",
        "Kidney Function",
        "Liver Function",
        "Vitamin D",
        "Vitamin B12",
      ],
    },
    {
      name: "Essential Health Checkup",
      price: 999,
      tests: [
        "FBS (Diabetes)",
        "Lipid Profile (Heart)",
        "Kidney Function Test",
        "Liver Function Test",
        "Thyroid Profile",
        "CBC + ESR",
        "Calcium + Phosphorus",
      ],
    },
    {
      name: "Advanced Health Checkup",
      price: 1199,
      tests: [
        "FBS + HbA1c",
        "Lipid Profile",
        "KFT",
        "LFT",
        "Thyroid Profile",
        "CBC + ESR",
        "Calcium + Phosphorus",
        "Iron Panel Basic",
      ],
    },
    {
      name: "Premium Full Body Checkup",
      price: 1999,
      tests: [
        "FBS + HbA1c + Microalbumin",
        "Lipid Profile",
        "KFT + Urine R/M",
        "LFT",
        "Thyroid Profile",
        "CBC + ESR",
        "Calcium + Phosphorus + Vitamin D",
        "Iron Panel Basic",
        "Vitamin B12",
      ],
    },
    {
      name: "Basic Health Package",
      price: 699,
      tests: [
        "CBC",
        "Blood Sugar",
        "Lipid Profile",
        "Kidney Function",
        "Liver Function",
        "Thyroid Profile",
      ],
    },
  ];

  const visibleCards = 4;
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= packages.length ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? packages.length - visibleCards : prev - 1,
    );
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visiblePackages = packages.slice(startIndex, startIndex + visibleCards);

  return (
    <div className="w-full py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Our <span className="text-red-700">Health Packages</span>
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visiblePackages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow hover:shadow-lg p-6"
            >
              <h2 className="font-bold text-lg mb-2 text-gray-800">
                {pkg.name}
              </h2>

              <h3 className="text-2xl font-bold text-red-700 mb-4">
                ₹{pkg.price}
              </h3>

              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                {pkg.tests.map((test, i) => (
                  <li key={i}>• {test}</li>
                ))}
              </ul>

              <Link
                to="/staticbookappointment"
                className="block w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800 text-center"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HealthPackagesSlider;
