import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How can I book a blood test?",
      answer:
        "You can book a blood test online through our website or contact our team directly. Simply select the test you need, choose a convenient date and time, and we'll handle the rest.",
    },
    {
      id: 2,
      question: "Is home sample collection available?",
      answer:
        "Yes, Dklean Healthcare provides home sample collection services in selected locations. Our trained professionals will visit your home or office at your preferred time.",
    },
    {
      id: 3,
      question: "When will I receive my reports?",
      answer:
        "Most reports are delivered within 24 to 48 hours depending on the test type. You'll receive notifications once your reports are ready through our online portal.",
    },
    {
      id: 4,
      question: "Which cities do you serve?",
      answer:
        "We currently provide services across Delhi NCR, Bihar, and selected surrounding locations. Check our website or contact us to confirm service availability in your area.",
    },
    {
      id: 5,
      question: "Do you conduct corporate health camps?",
      answer:
        "Yes, we organize corporate health check-up camps, blood testing camps, and wellness programs. Contact our team for customized packages and scheduling.",
    },
    {
      id: 6,
      question: "Do you provide physiotherapy services?",
      answer:
        "Yes, we offer physiotherapy consultation and treatment services through qualified professionals. Our physiotherapists provide personalized treatment plans for various conditions.",
    },
  ];

  const toggleFAQ = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-[#6d0101]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our healthcare services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 text-left"
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-[#6d0101] flex-shrink-0 transition-transform duration-300 ${
                    expandedId === faq.id ? "rotate-180" : ""
                  }`}
                  size="lg"
                />
              </button>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedId === faq.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-white rounded-2xl shadow-md p-8">
          <p className="text-gray-700 mb-4">
            Couldn't find the answer you're looking for?
          </p>
          <button className="px-8 py-3 bg-[#6d0101] text-white font-semibold rounded-lg hover:bg-black transition-colors duration-300">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
