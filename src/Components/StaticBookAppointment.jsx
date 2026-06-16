import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";
// ─── 🔧 REPLACE THESE WITH YOUR EMAILJS CREDENTIALS ───────────────────────────
const EMAILJS_SERVICE_ID = "service_sijawxl"; // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_3c185hn"; // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY = "jnxml7TxyLEZpOnIO"; // e.g. "aBcDeFgHiJkLmNoP"

const services = [
  "Blood Test",
  "Lipid Profile",
  "Thyroid Profile",
  "Kidney Function Test",
  "Liver Function Test",
  "HbA1c",
  "Vitamin D / B12",
  "CBC + ESR",
  "Accuprobe 1.1 Plus - ₹999",
  "Accuprobe 1.2 Plus - ₹1199",
  "Accuprobe Nirogyam Profile-3 - ₹1999",
  "Accuprobe Advance - ₹2699",
  "Accuprobe Executive - ₹3399",
  "Other",
];

const StaticBookAppointment = () => {
  const location = useLocation();
  const selectedPackage = location.state?.selectedPackage || "";
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: selectedPackage,
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim()))
      newErrors.phone = "Valid 10-digit phone number required";
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.date) newErrors.date = "Please select a preferred date";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
    if (sendError) setSendError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setSendError("");

    const templateParams = {
      from_name: form.name,
      phone: form.phone,
      email: form.email || "Not provided",
      service: form.service,
      preferred_date: form.date,
      message: form.message || "No additional notes",
    };

    try {
      // ================= EMAILJS =================
      await emailjs.send(
        "service_6zrv00b",
        "template_3c185hn",
        templateParams,
        "jnxml7TxyLEZpOnIO",
      );

      // ================= WHATSAPP =================
      const whatsappNumber = "918510090506";

      const whatsappMessage = `
🩺 New Appointment Request

👤 Name: ${form.name}

📞 Phone: ${form.phone}

📧 Email: ${form.email || "Not Provided"}

🧪 Service: ${form.service}

📅 Preferred Date: ${form.date}

📝 Notes:
${form.message || "No additional notes"}
    `;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage,
      )}`;

      window.open(whatsappURL, "_blank");

      // ================= SUCCESS =================
      setSubmitted(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);

      setSendError(
        "Something went wrong. Please try again or call us directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <Navbar userType="userDetails" />
      <section id="book-appointment" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Book An Appointment
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Fill in the form below and we will confirm your appointment
              shortly. Home collection available.
            </p>
          </div>

          {/* Need Immediate Assistance Section */}
          <div className="bg-red-50 rounded-lg p-6 mb-8 border border-red-100">
            <p className="text-center text-gray-700 font-semibold mb-3">
              Need Immediate Assistance?
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-bold">📞</span>
                <a
                  href="tel:+918510090506"
                  className="text-red-600 font-semibold hover:underline"
                >
                  +91 8510090506
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-bold">📞</span>
                <a
                  href="tel:+919355647906"
                  className="text-red-600 font-semibold hover:underline"
                >
                  +91 9355647906
                </a>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#6d0101]">
                2000+
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Blood Tests Completed
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#6d0101]">
                50+
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Health Camps Conducted
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#6d0101]">
                1000+
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Patients Served
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#6d0101]">
                10+
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Corporate Clients
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left info panel */}
            <div className="bg-[#6d0101] text-white rounded-2xl p-8 space-y-6 shadow-lg">
              <h3 className="text-2xl font-bold">Why Choose Us?</h3>
              {[
                {
                  icon: "🏠",
                  title: "Free Home Collection",
                  desc: "We collect samples from your doorstep — no travel needed.",
                },
                {
                  icon: "📋",
                  title: "PDF Reports by 8 PM",
                  desc: "Get your diagnostic reports digitally, same day.",
                },
                {
                  icon: "⏰",
                  title: "Timing: 7:30 AM – 3:30 PM",
                  desc: "Daily slots available. Book early for home collection.",
                },
                {
                  icon: "🔬",
                  title: "NABL Accredited Lab",
                  desc: "Certified lab partner — Accuprobe Diagnostics, Begumpur.",
                },
                {
                  icon: "📞",
                  title: "Call: 8510090506",
                  desc: "Reach us for queries or to confirm appointments.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-lg">{item.title}</div>
                    <div className="text-gray-200 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <CheckCircleIcon sx={{ fontSize: 64, color: "#16a34a" }} />
                  <h3 className="text-2xl font-bold text-gray-800">
                    Appointment Request Received!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Our team will call you shortly to confirm your appointment.
                    For urgent queries, call{" "}
                    <span className="font-bold text-[#6d0101]">8510090506</span>
                    .
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-[#6d0101] text-white px-6 py-2 rounded-md font-semibold hover:bg-black transition"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      <PersonIcon sx={{ fontSize: 16, mr: 0.5 }} /> Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#6d0101] ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      <PhoneIcon sx={{ fontSize: 16, mr: 0.5 }} /> Phone Number
                      *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#6d0101] ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      <EmailIcon sx={{ fontSize: 16, mr: 0.5 }} /> Email
                      (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#6d0101]"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      <MedicalServicesIcon sx={{ fontSize: 16, mr: 0.5 }} />{" "}
                      Select Service / Package *
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#6d0101] bg-white ${
                        errors.service ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">-- Select a service --</option>
                      {services.map((s, i) => (
                        <option key={i} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      <CalendarMonthIcon sx={{ fontSize: 16, mr: 0.5 }} />{" "}
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      min={today}
                      onChange={handleChange}
                      className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#6d0101] ${
                        errors.date ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any special requirements or queries..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#6d0101] resize-none"
                    />
                  </div>

                  {/* Send error */}
                  {sendError && (
                    <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                      {sendError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#6d0101] text-white py-3 rounded-lg font-semibold hover:bg-black transition duration-300 text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Request Appointment"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const whatsappNumber = "918510090506";
                      // const whatsappMessage =
                      //   "Hello, I would like to book an appointment.";
                      const whatsappMessage = `DKlean Healthcare Appointment Request

Name:
Mobile Number:
Service Required:
Preferred Date:
Location:

Please contact me to confirm my appointment.

Thank you.`;
                      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                      window.open(whatsappURL, "_blank");
                    }}
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 text-sm flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-xl" />
                    Book via WhatsApp
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    We'll call you within a few hours to confirm.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default StaticBookAppointment;
