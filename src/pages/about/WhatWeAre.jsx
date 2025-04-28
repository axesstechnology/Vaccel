import React from 'react';
import { motion, useInView } from 'framer-motion';
import whatWeDoImg from '/src/assets/img/TeamWorking.jpg'; // Update the path if needed

const WhatWeAre = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div 
      ref={ref}
      className="flex flex-col md:flex-row gap-8 my-12 px-4 md:px-16 items-center"
    >
      {/* Left Side - Image */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mt-8 md:w-2/5 flex justify-center"
      >
        <div className="relative">
          <img 
            src={whatWeDoImg} 
            alt="Team working on SaaS solutions" 
            className="rounded-lg shadow-lg object-cover w-full max-w-xs sm:max-w-sm md:w-[350px] md:h-[500px]"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Right Side - Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-3/5"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-2xl sm:text-3xl font-bold text-[#b5824e] mb-6 text-center md:text-left"
        >
          What We Are
        </motion.h2>

        {/* Line under heading */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-16 h-1 bg-[#b5824e] mb-8 origin-left mx-auto md:mx-0"
        ></motion.div>

        {/* Service items container */}
        <div className="space-y-6">
          {[
            {
              title: "AI-Powered SaaS Development",
              desc: "We build custom AI-driven SaaS applications that leverage machine learning, automation, and cloud computing to solve complex business challenges and improve your operations."
            },
            {
              title: "Cloud-Based Solutions",
              desc: "Our cloud-first approach ensures scalability, security, and reliability for your business applications."
            },
            {
              title: "Business Process Automation",
              desc: "We design and develop SaaS products that automate repetitive business processes, saving time and boosting productivity."
            },
            {
              title: "Custom SaaS Platforms",
              desc: "From idea to deployment, we create SaaS platforms tailored to your industry, your users, and your business model."
            },
            {
              title: "AI & ML Integration",
              desc: "Enhance your SaaS product with powerful AI and Machine Learning features like predictive analytics, intelligent recommendations, and natural language processing."
            },
            {
              title: "Consulting & Strategy",
              desc: "We help businesses validate their SaaS ideas, define MVPs, and create a scalable product roadmap."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.7 }}
              className="mb-4"
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeAre;
