import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import cicd from "../../../../assets/img/cicd.jpg";
import whatWeDoImg from '/src/assets/img/TeamWorking.jpg';
import buildingImg from '/src/assets/img/officeBuilding.jpg';

const CiCd = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Refs for scroll animations
  const expertiseRef = useRef(null);
  const whatWeAreRef = useRef(null);
  const whyChooseRef = useRef(null);
  
  // InView hooks
  const isExpertiseInView = useInView(expertiseRef, { once: true, threshold: 0.2 });
  const isWhatWeAreInView = useInView(whatWeAreRef, { once: true, amount: 0.3 });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.2 });

  // Expertise items
  const expertiseItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Web Development',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Software Development',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'AI Bot Development',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'SaaS Solutions',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud Solutions',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Quality Assurance',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Product Engineering',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Digital Marketing',
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-navy-900 min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full ">
          <img
            src={cicd}
            alt="SaaS AI"
            className="w-full h-full object-cover "
            loading="lazy"
            style={{ objectPosition: 'center' }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-900 opacity-80"></div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-start"
        >
          <div className="max-w-2xl text-center sm:text-left sm:pl-6 md:pl-12 lg:pl-20 pt-16 sm:pt-0">
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-blue-400 uppercase tracking-wider mb-2 font-semibold text-sm sm:text-base"
            >
              INNOVATING THE FUTURE WITH
            </motion.p>

            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-12 h-1 bg-blue-400 mb-4 sm:mb-6 mx-auto sm:mx-0 origin-left"
            ></motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#b5824e] mb-4 sm:mb-6 leading-tight"
            >
              AI-Driven SaaS <br className="hidden sm:block" /> Solutions
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-white text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto sm:mx-0 px-4 sm:px-0"
            >
              We're committed to delivering our best—helping you build exceptional digital experiences that drive results and set you apart.
            </motion.p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded mx-auto sm:mx-0 text-sm sm:text-base"
            >
              CONTACT US
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 5a2 2 0 012-2h3.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0011.414 5H16a2 2 0 012 2v2H2V5z" />
                <path fillRule="evenodd" d="M2 9h16v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9zm4 2a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Company Overview Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Company Overview content would go here - placeholder since it wasn't provided in the original code */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Overview</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              We're a leading AI SaaS development company dedicated to creating innovative solutions that transform businesses through advanced technology.
            </p>
          </div>
        </div>
      </div>

      {/* What We Are Section */}
      <div 
        ref={whatWeAreRef}
        className="flex flex-col md:flex-row gap-8 my-12 px-4 md:px-16 items-center"
      >
        {/* Left Side - Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isWhatWeAreInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
          animate={isWhatWeAreInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-3/5"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isWhatWeAreInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-2xl sm:text-3xl font-bold text-[#b5824e] mb-6 text-center md:text-left"
          >
            What We Are
          </motion.h2>

          {/* Line under heading */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isWhatWeAreInView ? { scaleX: 1 } : { scaleX: 0 }}
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
                animate={isWhatWeAreInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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

      {/* Why Choose Section */}
      <div
        ref={whyChooseRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12 items-center"
      >
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isWhyChooseInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full lg:w-1/2"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isWhyChooseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#b5824e]"
          >
            Why choose V-Accel AI?
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isWhyChooseInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-16 h-1 bg-[#b5824e] mb-8 origin-left"
          ></motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isWhyChooseInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12"
          >
            {/* Features */}
            {[
              { title: 'AI Driven Solutions', icon: 'M4 8h16M8 4v16' },
              { title: 'End-to-End Development', icon: 'M15 10v5M9 10v5' },
              { title: 'Cloud-Native & Scalable', icon: 'M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0-20 0' },
              { title: 'Industry-Specific Expertise', icon: 'M9.663 17h4.673M12 3v1' },
              { title: 'Security & Compliance', icon: 'M5 10l7-7m0 0l7 7m-7-7v18' },
              { title: 'Continuous Support & Maintenance', icon: 'M12 8v4l3 3' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                className="flex items-center gap-5"
              >
                <motion.div
                  whileHover={{ scale: 1.1, backgroundColor: '#f0f9ff' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold">{feature.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyChooseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md flex items-center gap-2"
            >
              Get a Free Consultation
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                className="bg-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isWhyChooseInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isWhyChooseInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg relative"
          >
            <img
              src={buildingImg}
              alt="Office Building"
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0.3 }}
              animate={isWhyChooseInView ? { opacity: 0 } : { opacity: 0.3 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Expertise Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" ref={expertiseRef}>
        <motion.div
          initial="hidden"
          animate={isExpertiseInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="relative inline-block font-bold mb-4">
            <span className="absolute inset-0 text-gray-100 text-4xl sm:text-5xl md:text-6xl -z-10 flex justify-center items-center">EXPERTISE</span>
            <span className="relative z-10 text-2xl sm:text-3xl flex justify-center items-center text-[#b58227]">Our Expertise</span>
          </h2>
        </motion.div>

        {/* Expertise Grid - Responsive layout with different column counts based on screen size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isExpertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-gray-800 mb-4 text-2xl md:text-3xl">{item.icon}</div>
              <h3 className="font-bold text-base md:text-lg text-gray-800">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Responsive layout for all screen sizes */}
        <div className="w-full bg-blue-600 rounded-lg md:rounded-2xl overflow-hidden relative p-6 md:p-8 lg:p-12 mt-12 md:mt-16">
          {/* Background shapes */}
          <div className="absolute left-0 bottom-0 w-48 h-48 md:w-64 md:h-64 bg-blue-400 opacity-70 rounded-full -translate-x-1/3 translate-y-1/3 transform rotate-45"></div>
          <div className="absolute right-0 top-0 w-64 h-64 md:w-96 md:h-96 bg-blue-400 opacity-20 rounded-full translate-x-1/3 -translate-y-1/3 transform rotate-45"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-8">
            <div className="text-white max-w-2xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Join the future of AI SaaS</h2>
              <p className="text-sm sm:text-base md:text-lg">
                We are shaping the future of AI-powered cloud software. Whether 
                you are a startup, SME, or enterprise, we deliver custom AI SaaS 
                solutions that accelerate innovation and drive success.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-white text-blue-500 hover:bg-blue-50 transition-colors font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-center whitespace-nowrap text-sm sm:text-base">
                LET'S BUILD THE NEXT BIG THING!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CiCd;