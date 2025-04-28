import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqItems = [
    {
      question: "What Is an Enterprise Software Development Company?",
      answer: "Enterprise Software development companies are basically entities that build different types of custom enterprise software to streamline the business process and enhance efficiency with digital product support."
    },
    {
      question: "How do you assist in the existing enterprise software development projects?",
      answer: "We assist the business with existing enterprise software to introduce new updates with advanced features and functionalities to make the software deliver the current requirements of present-day workflow."
    },
   
    {
      question: "What are the benefits of Enterprise Software Development Company for a business?",
      answer: "Enterprise Software Development Company optimizes the enterprise process, polishes the resource planning strategies, and automates the business workflow to secure increased revenue."
    },
    {
      question: "What enterprise software development services do you provide?",
      answer: "The NineHertz Provides a range of enterprise software development services including Custom Enterprise Software Development, Enterprise Mobility Development, Software Integration Services, Legacy Application Modernization, Enterprise Data Management, and Software Maintenance & Support."
    },
    {
      question: "What’s your policy for signing Non-Disclosure Agreement and Intellectual property?",
      answer: "The NineHertz keeps confidentiality at the top of the development process. Non-disclosure Agreement is our opening stage for any project to maintain Intellectual Property Rights."
    },
    {
      question: "How much does enterprise software development cost?",
      answer: "While the cost of Enterprise software development depends on a range of factors such as business requirements, technology utilization, third-party integration, maintenance, and much more, you can consider the average cost lying anywhere between $70,000 to $200,000."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-amber-700 mb-8">Frequently Asked Questions</h1>
      <p className="text-center text-gray-700 mb-10">
        Here are some questions you might have. If you have other questions, feel free to contact or have a consultation session-
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <div 
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className={`font-medium ${index === 0 ? "text-blue-600" : "text-gray-800"}`}>
                {item.question}
              </h3>
              <button className="text-gray-500">
                {openIndex === index ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                )}
              </button>
            </div>
            
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}