// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MdArrowForward as ArrowRight } from 'react-icons/md'; // Import ArrowRight icon

// export default function BusinessSoftwarePage() {
//   const [activeService, setActiveService] = useState('web-development');

//   const serviceContent = {
//     'web-development': {
//       title: 'Web Development',
//       description:
//         'We craft responsive and dynamic websites that are optimized for performance and user experience. From simple landing pages to complex web applications, we bring your vision to life.',
//       links: [
//         { text: 'Frontend Development', url: '#' },
//         { text: 'Backend Development', url: '#' },
//       ],
//     },
//     'software-development': {
//       title: 'Software Development',
//       description:
//         'Our software solutions are tailored to meet your unique business challenges, providing robust and scalable applications across platforms.',
//       links: [
//         { text: 'Custom Applications', url: '#' },
//         { text: 'Enterprise Solutions', url: '#' },
//       ],
//     },
//     'ai-bot-development': {
//       title: 'AI Bot Development',
//       description:
//         'Leverage artificial intelligence to automate customer interactions, streamline support services, and enhance user engagement with intelligent bots.',
//       links: [
//         { text: 'Chatbot Integration', url: '#' },
//         { text: 'Voice Assistant Solutions', url: '#' },
//       ],
//     },
//     'saas-solutions': {
//       title: 'SaaS Solutions',
//       description:
//         'We design and develop SaaS applications that are secure, scalable, and user-centric, helping businesses deliver services seamlessly over the cloud.',
//       links: [
//         { text: 'SaaS App Development', url: '#' },
//         { text: 'Subscription Management', url: '#' },
//       ],
//     },
//     'cloud-solutions': {
//       title: 'Cloud Solutions',
//       description:
//         'Transform your business with our cloud expertise — from cloud migration to optimization and management, we ensure your infrastructure is agile and cost-effective.',
//       links: [
//         { text: 'Cloud Migration', url: '#' },
//         { text: 'DevOps on Cloud', url: '#' },
//       ],
//     },
//     'quality-assurance': {
//       title: 'Quality Assurance',
//       description:
//         'Ensure flawless performance with our end-to-end testing services, including functional, performance, and automated testing solutions.',
//       links: [
//         { text: 'Automation Testing', url: '#' },
//         { text: 'Manual Testing', url: '#' },
//       ],
//     },
//     'product-engineering': {
//       title: 'Product Engineering',
//       description:
//         'We bring innovative products to life through comprehensive engineering practices, from ideation to deployment and beyond.',
//       links: [
//         { text: 'MVP Development', url: '#' },
//         { text: 'Full-Cycle Product Development', url: '#' },
//       ],
//     },
//     'digital-marketing': {
//       title: 'Digital Marketing',
//       description:
//         'Boost your online presence and generate more leads with our data-driven digital marketing strategies, SEO, PPC, and social media campaigns.',
//       links: [
//         { text: 'SEO Services', url: '#' },
//         { text: 'Social Media Marketing', url: '#' },
//       ],
//     },
//   };

//   const handleServiceClick = (serviceKey) => {
//     setActiveService(serviceKey);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Banner Section */}
//       <div className="w-full bg-gray-100 py-12 px-4 text-center">
//         <h1 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6">
//           Empowering Business with Future-Ready Solutions
//         </h1>
//         <p className="text-gray-800 max-w-4xl mx-auto text-base md:text-lg">
//           At V Accel AI Dynamics, we drive digital transformation through our cutting-edge solutions. 
//           Our services are designed to automate workflows, enhance efficiency, and empower businesses to stay competitive.
//         </p>
//       </div>

//       {/* Services Section */}
//       <div className="py-16 px-4">
//         <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
//           <div className="flex flex-col md:flex-row gap-8">
//             {/* Left Column - Services List */}
//             <div className="md:w-1/3 space-y-4">
//               {Object.keys(serviceContent).map((key) => (
//                 <motion.div
//                   key={key}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: 'spring', stiffness: 300 }}
//                   className={`${
//                     activeService === key
//                       ? 'bg-blue-800 text-white'
//                       : 'bg-gray-100 text-black'
//                   } rounded-md p-4 flex items-center cursor-pointer hover:shadow-md transition-colors duration-300`}
//                   onClick={() => handleServiceClick(key)}
//                 >
//                   <span className="font-semibold">{serviceContent[key].title}</span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Right Column - Animated Service Details */}
//             <div className="md:w-2/3 relative overflow-hidden min-h-[300px]">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeService}
//                   initial={{ x: 50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: -50, opacity: 0 }}
//                   transition={{ type: 'spring', stiffness: 60, damping: 15 }}
//                   className="absolute w-full"
//                 >
//                   <h1 className="text-2xl md:text-3xl font-bold mb-6">{serviceContent[activeService].title}</h1>
//                   <div className="border border-gray-200 border-dashed rounded-lg p-6 mb-8">
//                     <p className="text-gray-800">{serviceContent[activeService].description}</p>
//                   </div>
//                   <div className="flex flex-col md:flex-row gap-4">
//                     {serviceContent[activeService].links.map((link, index) => (
//                       <a
//                         key={index}
//                         href={link.url}
//                         className="text-blue-600 hover:text-blue-800 font-medium"
//                       >
//                         {link.text}
//                       </a>
//                     ))}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="max-w-7xl mx-auto px-4 w-full mt-16">
//         <div className="rounded-lg overflow-hidden bg-gradient-to-r from-blue-700 to-purple-600 p-8 md:p-12">
//           <div className="flex flex-col md:flex-row md:items-center justify-between">
//             <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0 md:mr-6 md:flex-1">
//               Tech powered success awaits — empower your journey!
//             </h2>
//             <button className="flex items-center bg-white text-blue-900 font-semibold px-6 py-3 rounded-full w-fit whitespace-nowrap">
//               Schedule a Call
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowForward as ArrowRight } from 'react-icons/md';

export default function BusinessSoftwarePage() {
  const [activeService, setActiveService] = useState('web-development');
  const contentRef = useRef(null);

  const serviceContent = {
    'web-development': {
      title: 'Web Development',
      description:
        'We craft responsive and dynamic websites that are optimized for performance and user experience. From simple landing pages to complex web applications, we bring your vision to life.',
      links: [
        { text: 'Frontend Development', url: '#' },
        { text: 'Backend Development', url: '#' },
      ],
    },
    'software-development': {
      title: 'Software Development',
      description:
        'Our software solutions are tailored to meet your unique business challenges, providing robust and scalable applications across platforms.',
      links: [
        { text: 'Custom Applications', url: '#' },
        { text: 'Enterprise Solutions', url: '#' },
      ],
    },
    'ai-bot-development': {
      title: 'AI Bot Development',
      description:
        'Leverage artificial intelligence to automate customer interactions, streamline support services, and enhance user engagement with intelligent bots.',
      links: [
        { text: 'Chatbot Integration', url: '#' },
        { text: 'Voice Assistant Solutions', url: '#' },
      ],
    },
    'saas-solutions': {
      title: 'SaaS Solutions',
      description:
        'We design and develop SaaS applications that are secure, scalable, and user-centric, helping businesses deliver services seamlessly over the cloud.',
      links: [
        { text: 'SaaS App Development', url: '#' },
        { text: 'Subscription Management', url: '#' },
      ],
    },
    'cloud-solutions': {
      title: 'Cloud Solutions',
      description:
        'Transform your business with our cloud expertise — from cloud migration to optimization and management, we ensure your infrastructure is agile and cost-effective.',
      links: [
        { text: 'Cloud Migration', url: '#' },
        { text: 'DevOps on Cloud', url: '#' },
      ],
    },
    'quality-assurance': {
      title: 'Quality Assurance',
      description:
        'Ensure flawless performance with our end-to-end testing services, including functional, performance, and automated testing solutions.',
      links: [
        { text: 'Automation Testing', url: '#' },
        { text: 'Manual Testing', url: '#' },
      ],
    },
    'product-engineering': {
      title: 'Product Engineering',
      description:
        'We bring innovative products to life through comprehensive engineering practices, from ideation to deployment and beyond.',
      links: [
        { text: 'MVP Development', url: '#' },
        { text: 'Full-Cycle Product Development', url: '#' },
      ],
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      description:
        'Boost your online presence and generate more leads with our data-driven digital marketing strategies, SEO, PPC, and social media campaigns.',
      links: [
        { text: 'SEO Services', url: '#' },
        { text: 'Social Media Marketing', url: '#' },
      ],
    },
  };

  const serviceOrder = Object.keys(serviceContent);

  const handleServiceClick = (serviceKey) => {
    setActiveService(serviceKey);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const currentIndex = serviceOrder.indexOf(activeService);
        let nextIndex;
        if (e.key === 'ArrowDown') {
          nextIndex = (currentIndex + 1) % serviceOrder.length;
        } else {
          nextIndex = (currentIndex - 1 + serviceOrder.length) % serviceOrder.length;
        }
        setActiveService(serviceOrder[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeService]);

  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Banner Section */}
      <div className="w-full bg-gray-100 py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6">
          Empowering Business with Future-Ready Solutions
        </h1>
        <p className="text-gray-800 max-w-4xl mx-auto text-base md:text-lg">
          At V Accel AI Dynamics, we drive digital transformation through our cutting-edge solutions.
          Our services are designed to automate workflows, enhance efficiency, and empower businesses to stay competitive.
        </p>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Left Scrollable Piano Menu */}
            <div className="md:w-1/3 overflow-y-auto max-h-[500px] pr-2">
              {serviceOrder.map((serviceKey) => (
                <motion.div
                  key={serviceKey}
                  className="relative mb-4 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleServiceClick(serviceKey)}
                >
                  <motion.div
                    className="bg-teal-900 text-white py-6 px-8 rounded-l-3xl flex items-center"
                    animate={{
                      width: activeService === serviceKey ? '100%' : '85%',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <span className="text-lg font-medium">{serviceContent[serviceKey].title}</span>
                  </motion.div>

                  
                </motion.div>
              ))}
            </div>

            {/* Right Scrollable Content Box */}
            <div
              ref={contentRef}
              className="md:w-2/3 bg-white p-6 rounded-lg shadow-lg overflow-y-auto max-h-[500px]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-4"
                >
                  <h2 className="text-2xl font-bold mb-4">{serviceContent[activeService].title}</h2>
                  <p className="text-gray-700 mb-6">{serviceContent[activeService].description}</p>

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h3 className="font-medium mb-3">Our Services Include:</h3>
                    <div className="flex flex-wrap gap-3">
                      {serviceContent[activeService].links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 w-full mt-16">
        <div className="rounded-lg overflow-hidden bg-gradient-to-r from-blue-700 to-purple-600 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0 md:mr-6 md:flex-1">
              Tech powered success awaits — empower your journey!
            </h2>
            <button className="flex items-center bg-white text-blue-900 font-semibold px-6 py-3 rounded-full w-fit whitespace-nowrap">
              Schedule a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
