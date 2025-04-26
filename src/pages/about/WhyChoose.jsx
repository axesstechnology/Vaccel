

import React from 'react';
import { motion, useInView } from 'framer-motion'; // Import framer-motion and useInView
import buildingImg from '/src/assets/img/officeBuilding.jpg';

const WhyChoose = () => {
  // Create a ref for scroll detection
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Variants for the feature grid items
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div 
      ref={ref}
      className="max-w-7xl mx-12 px-4 py-16 flex flex-col md:flex-row gap-12 items-center"
    >
      
      {/* Left Side - Content (with two icons in one row) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full md:w-1/2"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-[#b5824e]"
        >
          Why choose V-Accel AI?
        </motion.h2>

        {/* Line under heading */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-16 h-1 bg-[#b5824e] mb-8 origin-left"
        ></motion.div>

        {/* Feature grid with staggered animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-8 mb-12"
        >
          {/* Feature 1 */}
          <motion.div variants={featureVariants} className="flex items-center gap-5">
            <motion.div 
              whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center"
            >
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M8 4v16" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold">AI Driven Solutions</h3>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={featureVariants} className="flex items-center gap-5">
            <motion.div 
              whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10v5M9 10v5M12 10v5M3 10v5M21 10v5M12 3v7M12 15v6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold">End-to-End Development</h3>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-8 mb-12"
        >
          {/* Feature 3 */}
          <motion.div variants={featureVariants} className="flex items-center gap-5">
            <motion.div 
              whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold">Cloud-Native & Scalable</h3>
          </motion.div>

          {/* Feature 4 */}
          <motion.div variants={featureVariants} className="flex items-center gap-5">
            <motion.div 
              whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold">Industry-Specific Expertise</h3>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-8 mb-12"
        >
          {/* Feature 5 */}
          <motion.div variants={featureVariants} className="flex items-center gap-5">
            <motion.div 
              whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold">Security & Compliance</h3>
          </motion.div>

          {/* Feature 6 */}
          <motion.div variants={featureVariants} className="flex items-center gap-5">
            <motion.div 
              whileHover={{ scale: 1.1, backgroundColor: "#f0f9ff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="8" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold">Continuous Support & Maintenance</h3>
          </motion.div>
        </motion.div>

        {/* Button with hover effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-8"
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md flex items-center gap-2"
          >
            Get a Free Consultation
            <motion.div 
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              className="bg-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={isInView ? { scale: 1 } : { scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg relative"
        >
          <img src={buildingImg} alt="Office Building" className="w-full h-full object-cover" />
          
          {/* Overlay with subtle animation */}
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={isInView ? { opacity: 0 } : { opacity: 0.3 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChoose;