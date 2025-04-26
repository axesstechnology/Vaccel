

import React from 'react';
import { motion, useInView } from 'framer-motion';
import whatWeDoImg from '/src/assets/img/TeamWorking.jpg'; // Update with your actual image path

// Reusable motion variants
const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const WhatWeDo = () => {
  // Create a ref for scroll detection
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div 
      ref={ref}
      className="flex flex-col md:flex-row gap-8 my-12 mx-16 items-center"
    >
      {/* Left Side - Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mt-8 md:w-2/5 flex justify-center"
      >
        <div className="relative">
          <img 
            src={whatWeDoImg} 
            alt="Team working on SaaS solutions" 
            className="rounded-lg shadow-lg object-cover w-[350px] h-[500px] max-w-sm" 
          />
          
          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#b5824e] opacity-80 rounded-lg -z-10"
          ></motion.div>
        </div>
      </motion.div>

      {/* Right Side - Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-3/5"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-bold text-[#b5824e] mb-6"
        >
          What We Do
        </motion.h2>

        {/* Line under heading */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-16 h-1 bg-[#b5824e] mb-8 origin-left"
        ></motion.div>

        {/* Service items container with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={featureVariants} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              AI-Powered SaaS Development
            </h3>
            <p className="text-gray-600">
              We build custom AI-driven SaaS applications that leverage machine learning, automation, and cloud computing 
              to solve complex business challenges and improve your operations.
            </p>
          </motion.div>

          <motion.div variants={featureVariants} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Cloud-Based Solutions
            </h3>
            <p className="text-gray-600">
              Our cloud-first approach ensures scalability, security, and seamless integration, allowing businesses to operate 
              efficiently from anywhere in the world.
            </p>
          </motion.div>

          <motion.div variants={featureVariants} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Intelligent Automation
            </h3>
            <p className="text-gray-600">
              We integrate AI-powered automation into SaaS platforms, reducing manual work, enhancing productivity, and 
              enabling real-time decision-making.
            </p>
          </motion.div>

          <motion.div variants={featureVariants} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Data-Driven Insights
            </h3>
            <p className="text-gray-600">
              Our solutions harness the power of big data and AI analytics, helping businesses make smart, data-backed decisions 
              for growth and efficiency.
            </p>
          </motion.div>

          <motion.div variants={featureVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              API & Third-Party Integrations
            </h3>
            <p className="text-gray-600">
              We develop seamless integrations with existing business tools, CRMs, ERPs, and cloud platforms to ensure smooth 
              workflows and extended functionality.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
