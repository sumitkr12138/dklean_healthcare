import dkum from "../assets/doctors/dkumar.jpg";
import sumit from "../assets/sumit.jpg.jpeg";
import sumit1 from "../assets/sumit1.jpeg";
import priyanka from "../assets/priyanka.jpeg";
import akanksha from "../assets/akanksha.jpeg";
import { Phone, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Leadership = () => {
  const teamMembers = [
    {
      name: "Mr. D. Kumar",
      designation: "Founder & Chairman",
      img: dkum,
      contact: "+91 8510090506",
      email: "dkleanngotrust@gmail.com",
      linkedin: "https://in.linkedin.com/",
    },

    {
      name: "Sumit Kumar",
      designation: "Co-Founder & Director",
      img: sumit1,
      contact: "+91 9472897710",
      email: "sumitkumar12138@gmail.com",
      linkedin: "https://in.linkedin.com/",
    },
    {
      name: "Mrs. Priyanka",
      designation: "Healthcare Operations Manager",
      img: priyanka,
      contact: "+91 9355647906",
      email: "dkleanhealthcare@gmail.com",
      linkedin: "https://in.linkedin.com/",
    },

    {
      name: "Ms. Akanksha",
      designation: "Community Outreach Manager",
      img: akanksha,
      contact: "+91 9355647906",
      email: "dkmarketing526@gmail.com",
      linkedin: "https://in.linkedin.com/",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-16 px-6">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-red-800 mb-12">
        Our Core Leadership
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-10 w-72"
          >
            {/* Profile Image */}
            <img
              src={member.img}
              alt={member.name}
              className="w-36 h-36 rounded-full object-cover border-4 border-gray-200 mb-6"
            />

            {/* Name & Designation */}
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {member.name}
            </h3>
            <p className="text-base text-gray-500 mb-5">{member.designation}</p>

            {/* Icons Row */}
            <div className="flex items-center justify-center gap-5 mb-4">
              <Phone className="w-5 h-5 text-gray-600 cursor-pointer hover:text-red-600 transition" />
              <Mail className="w-5 h-5 text-gray-600 cursor-pointer hover:text-red-600 transition" />
              <FaLinkedin className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
            </div>

            {/* Contact Number */}
            {/* {member.contact && (
              <div className="flex items-center gap-2 text-base text-red-600 font-semibold">
                <Phone className="w-4 h-4" />
                <span>{member.contact}</span>
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
