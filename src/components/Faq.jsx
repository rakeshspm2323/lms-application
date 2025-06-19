import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What is an LMS and how does it work?",
    answer: "An LMS (Learning Management System) is a platform that allows you to access online courses, track your progress, and earn certifications. It works by delivering educational content digitally through your browser or mobile device.",
  },
  {
    question: "Do I need any technical skills to use the LMS?",
    answer: "No technical skills are required. The platform is user-friendly and designed to be easily accessible by learners of all levels.",
  },
  {
    question: "Are the courses self-paced or live?",
    answer: "Most courses are self-paced, meaning you can learn at your own speed. Some advanced courses may also offer live sessions or webinars.",
  },
  {
    question: "Will I get a certificate after completing a course?",
    answer: "Yes, you’ll receive a digital certificate of completion after finishing all modules and assessments of a course.",
  },
  {
    question: "Can I access the LMS on my mobile device?",
    answer: "Yes! Our LMS is fully responsive and works on desktops, tablets, and smartphones.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="mb-8 md:text-[36px] text-2xl font-semibold text-black/80 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="border border-gray-100 rounded-lg p-4 transition-all duration-300 ease-in-out bg-white shadow-sm cursor-pointer"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left cursor-pointer"
            >
              <span className="md:text-md text-sm font-medium text-black/80">{item.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-500 text-sm" />
              ) : (
                <FaChevronDown className="text-gray-500 text-sm" />
              )}
            </button>
            <div
              className={`mt-2 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
