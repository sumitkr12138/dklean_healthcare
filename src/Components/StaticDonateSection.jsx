import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const impacts = [
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 32, color: "#6d0101" }} />,
    label: "Free Health Camps",
    desc: "Organising diagnostic & health camps for underprivileged communities.",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32, color: "#6d0101" }} />,
    label: "Community Support",
    desc: "Supporting families with affordable healthcare access in Begumpur, Delhi.",
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 32, color: "#6d0101" }} />,
    label: "Blood Donation Drives",
    desc: "Coordinating blood donation camps to save lives in emergencies.",
  },
];

const amounts = [200, 500, 1000, 2000];

const StaticDonateSection = () => {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    if (!selectedAmount && !customAmount) return;
    setDone(true);
  };

  const finalAmount = customAmount || selectedAmount;

  return (
    <section
      className="py-16 bg-gradient-to-br from-[#6d0101]/5 to-white"
      id="donate-section"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <FavoriteIcon sx={{ fontSize: 40, color: "#6d0101" }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Donate Now
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
            Support{" "}
            <span className="font-semibold text-gray-700">
              Dklean Health Care Public Charitable Trust (NGO)
            </span>{" "}
            — helping underprivileged communities access quality healthcare in
            Delhi.
          </p>
          <div className="w-16 h-1 bg-[#6d0101] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Impact section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">
              Your Donation Makes a Difference
            </h3>
            {impacts.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <div className="bg-[#6d0101]/10 p-3 rounded-full flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold text-gray-800">{item.label}</div>
                  <div className="text-sm text-gray-500 mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-[#6d0101] text-white rounded-xl p-5 space-y-2">
              <div className="font-bold text-lg">Bank Transfer Details</div>
              <div className="text-sm space-y-1 text-gray-200">
                <p>
                  Account Name:{" "}
                  <span className="text-white font-semibold">
                    Dklean Health Care Public Charitable Trust
                  </span>
                </p>
                <p>
                  Contact:{" "}
                  <span className="text-white font-semibold">8510090506</span>
                </p>
                <p>
                  Email:{" "}
                  <span className="text-white font-semibold">
                    dkleanhealthcare@gmail.com
                  </span>
                </p>
              </div>
              <p className="text-xs text-gray-300 mt-2">
                For donation receipts or queries, please call or WhatsApp us.
              </p>
            </div>
          </div>

          {/* Donate form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            {done ? (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                <CheckCircleIcon sx={{ fontSize: 64, color: "#16a34a" }} />
                <h3 className="text-2xl font-bold text-gray-800">
                  Thank You! ❤️
                </h3>
                <p className="text-gray-500 text-sm">
                  Your intention to donate{" "}
                  <span className="font-bold text-[#6d0101]">
                    ₹{finalAmount}
                  </span>{" "}
                  has been recorded. Our team will reach out to you on{" "}
                  <span className="font-bold">{phone}</span> to complete the
                  process.
                </p>
                <button
                  onClick={() => {
                    setDone(false);
                    setSelectedAmount(null);
                    setCustomAmount("");
                    setName("");
                    setPhone("");
                  }}
                  className="mt-4 bg-[#6d0101] text-white px-6 py-2 rounded-md font-semibold hover:bg-black transition"
                >
                  Donate Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleDonate} className="space-y-5">
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  Make a Donation
                </h3>

                {/* Preset amounts */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amt);
                          setCustomAmount("");
                        }}
                        className={`py-2.5 rounded-lg text-sm font-bold border transition ${
                          selectedAmount === amt && !customAmount
                            ? "bg-[#6d0101] text-white border-[#6d0101]"
                            : "border-gray-300 text-gray-700 hover:border-[#6d0101] hover:text-[#6d0101]"
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom amount */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Or Enter Custom Amount (₹)
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="e.g. 1500"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#6d0101]"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#6d0101]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#6d0101]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!finalAmount || !name || !phone}
                  className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FavoriteIcon sx={{ fontSize: 18 }} />
                  Donate {finalAmount ? `₹${finalAmount}` : "Now"}
                </button>
                <p className="text-center text-xs text-gray-400">
                  We'll contact you to complete your donation securely.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticDonateSection;
