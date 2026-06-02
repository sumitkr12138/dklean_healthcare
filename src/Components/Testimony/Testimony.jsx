import React, { useEffect, useState } from "react";
import testimonybg from "../../assets/home/testimony.webp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import img1 from "../../assets/kk.jpg.jpeg";
import img3 from "../../assets/rajesh.jpg.jpeg";
import img4 from "../../assets/srijan.jpg.jpeg";
import img5 from "../../assets/vishal.jpg.jpeg";
import "animate.css";
const testimonials = [
  {
    message:
      "Dklean Healthcare conducted a health screening camp for our employees with excellent professionalism and timely report delivery.",
    name: "A.P. Securitas Pvt. Ltd.",
    organization: "Corporate Health Camp",
    designation: "HR Head",
    rating: 5,
    image: img1,
    logo: img1,
  },
  {
    message:
      "The blood sample collection process was smooth, hygienic, and convenient. Reports were delivered on time.",
    name: "Prestige Apartment Residents Association",
    organization: "Prestige Towers",
    designation: "Residents Association Committee",
    rating: 5,
    image: img5,
  },
  {
    message:
      "Affordable pricing and quality diagnostic services. Highly recommended for preventive health checkups.",
    name: "Axis Max Life Insurance Employees",
    organization: "Axis Max Life Insurance",
    designation: "Group Wellness Program",
    rating: 5,
    image: img3,
  },
  {
    message:
      "Dklean's home sample collection and blood testing services made health screening very easy for our elderly residents.",
    name: "Greenfield Apartment Society",
    organization: "Greenfield Apartments",
    designation: "Resident Welfare Committee",
    rating: 5,
    image: img4,
  },
  {
    message:
      "Their physiotherapy support and diagnostic follow-up helped our patient care program stay on track.",
    name: "Sunrise Care Clinic",
    organization: "Sunrise Community Health",
    designation: "Clinic Coordinator",
    rating: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xLnaRMCI7BnCZvRZKnWr_5yznGy98gvfCw&s",
  },
];

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("animate__fadeIn"); // Initial animation class

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage("right");
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const changeImage = (direction) => {
    setAnimation("animate__fadeOut"); // Trigger fade-out animation

    setTimeout(() => {
      // Change index after the fade-out animation
      if (direction === "left") {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
        );
      } else {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
        );
      }
      setAnimation("animate__fadeIn"); // Trigger fade-in animation
    }, 500); // Match the duration of the fade-out animation
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className=" relative Testimony w-full py-16 md:py-20 lg:py-24 flex flex-col md:flex-row justify-center items-center text-center px-4"
      style={{
        backgroundImage: `url(${testimonybg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Arrow */}
      <div
        className="leftArrow grid place-content-center cursor-pointer bg-white rounded-full p-4 md:ml-10 ml-2 md:mb-0 mb-4 transition-transform duration-500 shadow-lg"
        aria-label="Previous Testimonial"
        onClick={() => changeImage("left")}
        style={{
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ArrowBackIosIcon
          sx={{ color: "black", fontSize: 30 }}
          className="hover:scale-125 transition-transform duration-300"
        />
      </div>

      {/* Testimonial Content */}
      <div className={`mid max-w-3xl animate__animated ${animation} px-4`}>
        <div className="bg-white/95 border border-gray-200 shadow-xl rounded-[2rem] p-6 md:p-8">
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold text-[#999999]">
              Testimonial
            </h2>
            <div className="text-2xl mb-4 flex flex-col md:flex-row align-middle justify-center">
              <div className="pr-2 text-5xl font-bold text-[#8f1b1b]">
                Trusted
              </div>
              <div className="pl-2 text-5xl">by Our Clients</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-red-700 text-lg font-semibold">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx} className="text-xl">
                  {idx < currentTestimonial.rating ? "★" : "☆"}
                </span>
              ))}
              <span className="text-sm text-gray-500">
                ({currentTestimonial.rating}.0)
              </span>
            </div>

            <div className="client images rounded-full overflow-hidden w-24 h-24 md:w-28 md:h-28 shadow-lg border border-gray-200">
              <img
                src={currentTestimonial.image}
                alt={`${currentTestimonial.name}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <blockquote className="testimony relative text-lg md:text-xl italic text-gray-700 my-6 px-4 md:px-8">
            <span className="absolute left-0 top-0 text-5xl text-red-700 leading-none">
              “
            </span>
            <span className="block mt-4">{currentTestimonial.message}</span>
          </blockquote>

          <div className="name-address text-center text-gray-900">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 md:gap-4 mb-2">
              <div>
                <h3 className="font-bold text-xl md:text-2xl">
                  {currentTestimonial.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {currentTestimonial.designation}
                </p>
              </div>
              {currentTestimonial.logo && (
                <div className="h-16 w-16 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src={currentTestimonial.logo}
                    alt={`${currentTestimonial.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            <p className="text-sm md:text-base text-gray-500">
              {currentTestimonial.organization}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-gray-600">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2">
              Blood Testing Services
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2">
              Home Sample Collection
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2">
              Physiotherapy Services
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2">
              Corporate Health Camps
            </span>
          </div>
        </div>

        {/* Right Arrow */}
        <div
          className="rightArrow grid place-content-center cursor-pointer bg-white rounded-full p-4 md:mr-10 mr-2 md:mb-0 mb-4 transition-transform duration-500 shadow-lg"
          aria-label="Next Testimonial"
          onClick={() => changeImage("right")}
          style={{
            position: "absolute",
            right: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <ArrowForwardIosIcon
            sx={{ color: "black", fontSize: 30 }}
            className="hover:scale-125 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
