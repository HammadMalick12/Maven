import React, { useState } from "react";

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Starts from $500 depending on complexity and features.",
  },
  {
    question: "Do you work with US and international clients?",
    answer: "Yes, we work with US, UK, Canada & Australia clients.",
  },
  {
    question: "What is the typical development timeline?",
    answer: "Small projects: 2–4 weeks, larger platforms: 6–12 weeks.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, including maintenance, updates & monitoring.",
  },
  {
    question: "Can you build mobile apps?",
    answer: "Yes, we develop native & cross-platform apps for iOS & Android.",
  },
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-50 text-white rounded-full p-6 shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        style={{ backgroundColor: "#000080" }}
        aria-label="Frequently Asked Questions"
      >
        <svg
          className={`w-12 h-12 transition-all duration-300 ${
            isHovered ? "rotate-12 scale-110" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="fixed bottom-20 right-6 z-40 w-[95vw] sm:w-[400px] max-h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-y-auto font-roboto animate-slide-up"
          role="dialog"
          aria-label="FAQ Panel"
        >
          <div
            className="p-4 text-white font-semibold flex justify-between items-center rounded-t-2xl"
            style={{ backgroundColor: "#000080" }}
          >
            <span className="text-lg">Frequently Asked Questions</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 text-2xl transition-transform hover:scale-110"
              aria-label="Close FAQ"
            >
              ✕
            </button>
          </div>

          <div className="p-4 space-y-3 bg-white">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 text-gray-800 font-medium flex justify-between items-center hover:bg-gray-200 transition-colors"
                  aria-expanded={activeIndex === index}
                >
                  <span itemProp="name">{faq.question}</span>
                  <span
                    style={{ color: "#000080" }}
                    className="font-bold text-lg transition-transform duration-300 transform"
                  >
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div 
                    className="px-4 pb-4 text-gray-600 text-sm animate-fade-in"
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <span itemProp="text">{faq.answer}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default Faq;