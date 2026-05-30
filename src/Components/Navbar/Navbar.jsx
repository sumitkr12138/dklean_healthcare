// import React, { useEffect, useState } from "react";
// import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
// import CallIcon from "@mui/icons-material/Call";
// import MailIcon from "@mui/icons-material/Mail";
// // import logo from "../../assets/Puslecarelogo/PulseCare.png";
// import logo from "../../assets/Puslecarelogo/dkleanlogo.jpeg";
// import { Link, useNavigate } from "react-router-dom";
// import SmartNavbar from "./SmartNavbar";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import Avatar from "@mui/material/Avatar";

// const Navbar = (props) => {
//   const navigate = useNavigate();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useState({});

//   const roleBasedLinks = {
//     user: [
//       { to: "/patientlogin", name: "Book Appointment" },
//       { to: "/pApp", name: "All Appointments" },
//       { to: "/patientlogin", name: "Profile Setting" },
//       // { to: "/contactSupport", name: "Contact Support" }
//     ],
//     donor: [{ to: "/donate", name: "Donate Now" }],
//     doctor: [
//       { to: "/doctorDashboard", name: "Doctor Dashboard" },
//       { to: "/appointments", name: "Appointments" },
//       { to: "/doctorProfile", name: "Profile" },
//     ],
//     admin: [{ to: "/adminlogin", name: "Admin Panel" }],
//   };

//   useEffect(() => {
//     const loadDetails = () => {
//       // const storedDetails = localStorage.getItem(props.userType||"userDetails");
//       const storedDetails = localStorage.getItem(
//         [
//           props.userType,
//           "userDetails",
//           "donorDetails",
//           "doctorDetails",
//           "adminDetails",
//         ].find((key) => localStorage.getItem(key)), // ek ek value pe function chalya
//       );
//       // console.log(storedDetails);
//       if (storedDetails) {
//         //jisme value null nahi ayi use useState me bhej diya
//         setLoggedInUser(JSON.parse(storedDetails));
//         console.log(loggedInUser);
//       }
//     };
//     loadDetails();
//     // console.log(loggedInUser.isloggedIn+"sdkhaldfkhasdlkh");
//     if (loggedInUser.isloggedIn === undefined) {
//       setIsDropdownOpen(false);
//     }
//   }, [props.userType, loggedInUser.isloggedIn]);

//   const logout = () => {
//     localStorage.clear();
//     location.href = "/";
//   };

//   return (
//     <>
//       {/* Top Navbar */}

//       {/* Bottom Navbar */}
//       <div className="hidden lg:block lg:bg-custom-maroon lg:h-[19vh]">
//         <div className="flex justify-center items-center h-[12vh]">
//           <div className="flex justify-between items-center w-4/5">
//             {/* Logo Section */}
//             <div className="w-1/5 flex justify-center">
//               <Link to="/">
//                 <img
//                   src={logo}
//                   height={100}
//                   width={100}
//                   alt="PulseCare Logo"
//                   className="cursor-pointer"
//                 />
//               </Link>
//             </div>

//             {/* Working Hours */}
//             <div className="w-1/5 flex items-center space-x-2">
//               <QueryBuilderIcon sx={{ fontSize: 26, color: "white" }} />
//               <div className="pl-2">
//                 <div className="uppercase text-sm text-gray-300">
//                   Working Hours
//                 </div>
//                 <div className="font-semibold text-white">
//                   24/7 Service Available
//                 </div>
//               </div>
//             </div>

//             {/* Hotline */}
//             <div className="w-1/5 flex items-center space-x-2">
//               <CallIcon sx={{ fontSize: 26, color: "white" }} />
//               <div className="pl-2">
//                 <div className="uppercase text-sm text-gray-300">
//                   Hotline 24/7
//                 </div>
//                 <div className="text-white">+91-8510090506</div>
//                 <div className="text-white">+91-9355647906</div>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="w-1/5 flex items-center space-x-2">
//               <MailIcon sx={{ fontSize: 26, color: "white" }} />
//               <div className="pl-2">
//                 <div className="uppercase text-sm text-gray-300">Email Us</div>
//                 <div className="text-white">dkleanhealthcare@gmail.com</div>
//                 <div className="text-white">dkleanngotrust@gmail.com</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="tabs-bookanapp flex">
//           <div className="flex justify-center items-center h-[5vh] w-1/2">
//             <div className="flex space-x-8 h-full items-center">
//               {["Home", "About", "Services", "Gallery", "Contact Us"].map(
//                 (tab) => (
//                   <div
//                     className="hover:border-b-2 hover:border-white"
//                     key={tab}
//                   >
//                     <Link
//                       to={`/${tab.toLowerCase().replace(" ", "-")}`}
//                       className="text-white text-sm font-semibold relative group hover:text-gray-200 transition-all duration-300"
//                     >
//                       {tab}
//                     </Link>
//                   </div>
//                 ),
//               )}
//               <div className="flex items-center p-2 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-all duration-300">
//                 <FavoriteIcon sx={{ color: "white", fontSize: 20 }} />
//                 <Link
//                   to="/donate"
//                   className="text-white text-sm font-semibold ml-2 hover:text-gray-200 transition-all duration-300"
//                 >
//                   Donate
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Book Appointment Button */}
//           <div className="flex justify-center w-1/2 items-center space-x-6">
//             <button
//               onClick={() => navigate("/staticbookappointment")}
//               className="bg-[#6d0101] text-white px-6 py-2 text-sm font-semibold rounded-md hover:bg-black transition duration-300 transform"
//             >
//               Book An Appointment
//             </button>

//             {loggedInUser.isloggedIn && (
//               <Avatar
//                 sx={{ bgcolor: "red" }}
//                 onClick={() => setIsDropdownOpen((prevState) => !prevState)}
//               >
//                 {loggedInUser.name?.charAt(0) || "N"}
//               </Avatar>
//             )}
//           </div>

//           {isDropdownOpen && (
//             <div
//               className="z-50 bg-custom-maroon text-white absolute right-56 top-36 rounded-lg shadow-lg animate-fadeIn"
//               sx={{ bgcolor: "red" }}
//               onClick={() => setIsDropdownOpen((prevState) => !prevState)}
//             >
//               {loggedInUser?.role === "user" && (
//                 <>
//                   {roleBasedLinks[loggedInUser?.role]?.map((link, index) => (
//                     <Link
//                       key={index}
//                       to={link.to}
//                       className="block p-2 hover:bg-custom-maroon2 transition duration-300"
//                     >
//                       {link.name}
//                     </Link>
//                   ))}
//                 </>
//               )}
//               {loggedInUser?.role === "donor" && (
//                 <>
//                   {roleBasedLinks[loggedInUser?.role]?.map((link, index) => (
//                     <Link
//                       key={index}
//                       to={link.to}
//                       className="block p-2 hover:bg-custom-maroon2 transition duration-300"
//                     >
//                       {link.name}
//                     </Link>
//                   ))}
//                 </>
//               )}
//               {loggedInUser?.role === "admin" && (
//                 <>
//                   {roleBasedLinks[loggedInUser?.role]?.map((link, index) => (
//                     <Link
//                       key={index}
//                       to={link.to}
//                       className="block p-2 hover:bg-custom-maroon2 transition duration-300"
//                     >
//                       {link.name}
//                     </Link>
//                   ))}
//                 </>
//               )}
//               {loggedInUser?.role === "doctor" && (
//                 <>
//                   {roleBasedLinks[loggedInUser?.role]?.map((link, index) => (
//                     <Link
//                       key={index}
//                       to={link.to}
//                       className="block p-2 hover:bg-custom-maroon2 transition duration-300"
//                     >
//                       {link.name}
//                     </Link>
//                   ))}
//                 </>
//               )}

//               <div
//                 onClick={logout}
//                 className="block p-2 hover:bg-custom-maroon2 transition duration-300"
//               >
//                 Logout
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Smartphone Navbar */}

//       {!loggedInUser.isloggedIn && (
//         <div className="sm:block lg:hidden md:hidden">
//           <SmartNavbar />
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import SmartNavbar from "./SmartNavbar";
import logo from "../../assets/Puslecarelogo/dkleanlogo.jpeg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const roleBasedLinks = {
    user: [
      { to: "/patientlogin", name: "Book Appointment" },
      { to: "/pApp", name: "All Appointments" },
      { to: "/patientlogin", name: "Profile Setting" },
    ],
    donor: [{ to: "/donate", name: "Donate Now" }],
    doctor: [
      { to: "/doctorDashboard", name: "Doctor Dashboard" },
      { to: "/appointments", name: "Appointments" },
      { to: "/doctorProfile", name: "Profile" },
    ],
    admin: [
      { to: "/adminDashboard", name: "Admin Panel" },
      { to: "/manageUsers", name: "Manage Users" },
      { to: "/reports", name: "Reports & Analytics" },
    ],
  };

  useEffect(() => {
    const keys = [
      "userDetails",
      "donorDetails",
      "doctorDetails",
      "adminDetails",
    ];
    for (let key of keys) {
      const stored = localStorage.getItem(key);
      if (stored) {
        setLoggedInUser(JSON.parse(stored));
        break;
      }
    }
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .blinking {
            animation: blink 1.6s step-start infinite;
          }
        `}
      </style>

      {/* Desktop Navbar */}
      <div className="hidden lg:block sticky top-hidden z-50 bg-custom-maroon pb-2">
        {/* Top Bar */}
        <div className="font-semibold text-yellow-300 text-xs text-center py-1">
          "दिल्ली सरकार व भारत सरकार से मान्यता प्राप्त ट्रस्ट" (N.G.O)
        </div>

        {/* Blinking Free Test Info */}
        <div className="text-yellow-300 text-sm font-semibold whitespace-nowrap text-right pr-4">
          <span className="text-yellow blinking">
            Free Home Blood Test Sample Collection Service
          </span>
        </div>

        <br />

        {/* Logo & Info */}
        <div className="flex justify-center items-center h-[12vh]">
          <div className="flex justify-between items-center w-4/5">
            {/* Logo */}
            <Link to="/" className="w-1/5 flex justify-center items-center">
              <img
                src={logo}
                height={120}
                width={120}
                alt="DKLEAN Logo"
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
              />
              <span className="text-white text-xs font-semibold leading-tight ml-2">
                Health Care Public Charitable Trust (NGO)
              </span>
            </Link>

            {/* Working Hours */}
            <div className="w-1/5 flex items-center space-x-2">
              <QueryBuilderIcon sx={{ fontSize: 26, color: "white" }} />
              <div className="pl-2">
                <div className="uppercase text-sm text-gray-300">
                  Working Hours
                </div>
                <div className="font-semibold text-white">
                  24/7 Service Available
                </div>
              </div>
            </div>

            {/* Hotline */}
            <div className="w-1/5 flex items-center space-x-2">
              <CallIcon sx={{ fontSize: 26, color: "white" }} />
              <div className="pl-2">
                <div className="uppercase text-sm text-gray-300">
                  Hotline 24/7
                </div>
                <p className="text-lg font-bold text-yellow-300">
                  +91 8510090506
                </p>
                <p className="text-lg font-semibold text-white">
                  +91 9355647906
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="w-1/5 flex items-center space-x-2">
              <MailIcon sx={{ fontSize: 26, color: "white" }} />
              <div className="pl-2">
                <div className="uppercase text-sm text-gray-300">Email Us</div>
                <div className="text-white">Dkleanhealthcare@gmail.com</div>
                <div className="text-white mt-1">Dkleanngotrust@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex pt-4 items-center justify-between w-4/5 mx-auto">
          {/* Left - Links */}
          <div className="flex items-center gap-8">
            {["Home", "About", "Services", "Gallery", "Contact Us"].map(
              (tab) => {
                const path = `/${tab.toLowerCase().replace(" ", "-")}`;
                const isActive =
                  location.pathname === path ||
                  (tab === "Home" && location.pathname === "/");

                return (
                  <Link
                    key={tab}
                    to={path}
                    className={`text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                        : "text-white hover:text-gray-300"
                    }`}
                  >
                    {tab}
                  </Link>
                );
              },
            )}

            <Link
              to="/donate"
              className="flex items-center gap-2 px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md font-semibold transition-all"
            >
              <FavoriteIcon sx={{ fontSize: 20 }} />
              Donate
            </Link>
          </div>

          {/* Right - Appointment/Login + Dropdown */}
          <div className="flex items-center gap-4 relative" ref={dropdownRef}>
            <button
              onClick={() => navigate("/staticbookappointment")}
              className="bg-[#6d0101] text-white px-6 py-2 text-sm font-semibold rounded-md hover:bg-black transition duration-300"
            >
              Book An Appointment
            </button>
            {/* 
            {loggedInUser?.isloggedIn ? (
              <Avatar
                sx={{ bgcolor: "red", cursor: "pointer" }}
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                {loggedInUser.name?.charAt(0) || "N"}
              </Avatar>
            ) : (
              <button
                onClick={() => navigate("/patientlogin")}
                className="text-white border border-white px-4 py-2 rounded-md hover:bg-gray-200 hover:text-black font-semibold transition-all duration-300"
              >
                Login / Signup
              </button>
            )} */}

            {/* {isDropdownOpen && (
              <div className="absolute right-0 mt-12 w-52 bg-custom-maroon text-white rounded-lg shadow-lg animate-fadeIn">
                {roleBasedLinks[loggedInUser?.role]?.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.to}
                    className="block px-4 py-2 hover:bg-custom-maroon2 transition duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
                <div
                  onClick={logout}
                  className="block px-4 py-2 hover:bg-custom-maroon2 transition duration-300 cursor-pointer"
                >
                  Logout
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <SmartNavbar
          isLoggedIn={loggedInUser?.isloggedIn}
          role={loggedInUser?.role}
        />
      </div>
    </>
  );
};

export default Navbar;
