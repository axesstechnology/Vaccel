

// import React from 'react';
// import saasAi from "/src/assets/img/saas.jpg";

// const HeroSection = () => {
//   return (
//     <div className="relative bg-navy-900 h-screen flex items-center justify-start overflow-hidden">
//       {/* Image as background for large screens */}
//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src={saasAi}
//           alt="SaaS AI"
//           className="w-full h-full object-cover "
//           loading="lazy"
//           style={{ objectPosition: 'center' }}
//         />
//       </div>

//       {/* Overlay to darken background slightly for better text visibility */}
//       <div className="absolute inset-0 bg-navy-900 opacity-80"></div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-start flex-col md:flex-row">
//         <div className="max-w-2xl text-center md:text-left">
//           {/* Top Small Text */}
//           <p className="text-blue-400 uppercase tracking-wider mb-2 font-semibold">
//             INNOVATING THE FUTURE WITH
//           </p>

//           {/* Small Line */}
//           <div className="w-12 h-1 bg-blue-400 mb-6 mx-auto md:mx-0"></div>

//           {/* Heading */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-500 mb-6 leading-tight">
//             AI-Driven SaaS <br /> Solutions
//           </h1>

//           {/* Paragraph */}
//           <p className="text-white text-lg mb-8 max-w-md mx-auto md:mx-0">
//             We’re committed to delivering our best—helping you build exceptional digital experiences that drive results and set you apart.
//           </p>

//           {/* Button */}
//           <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded mx-auto md:mx-0">
//             CONTACT US
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
//               <path d="M2 5a2 2 0 012-2h3.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0011.414 5H16a2 2 0 012 2v2H2V5z" />
//               <path fillRule="evenodd" d="M2 9h16v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9zm4 2a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Version of the Image */}
//       <div className="absolute left-0 bottom-10 w-2/3 z-10 md:hidden">
//         <img
//           src={saasAi}
//           alt="SaaS AI"
//           className="w-full h-auto object-cover rounded-xl shadow-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import saasAi from "/src/assets/img/saas.jpg";

const HeroSection = () => {
  return (
    <div className="relative bg-navy-900 h-screen flex items-center justify-start overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={saasAi}
          alt="SaaS AI"
          className="w-full h-full object-cover"
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
        className="relative z-10 container mx-auto px-6 h-full flex items-center justify-start flex-col md:flex-row"
      >
        <div className="max-w-2xl text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-blue-400 uppercase tracking-wider mb-2 font-semibold"
          >
            INNOVATING THE FUTURE WITH
          </motion.p>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-12 h-1 bg-blue-400 mb-6 mx-auto md:mx-0 origin-left"
          ></motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-500 mb-6 leading-tight"
          >
            AI-Driven SaaS <br /> Solutions
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-white text-lg mb-8 max-w-md mx-auto md:mx-0"
          >
            We’re committed to delivering our best—helping you build exceptional digital experiences that drive results and set you apart.
          </motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded mx-auto md:mx-0"
          >
            CONTACT US
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 5a2 2 0 012-2h3.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0011.414 5H16a2 2 0 012 2v2H2V5z" />
              <path fillRule="evenodd" d="M2 9h16v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9zm4 2a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </div>
      </motion.div>

     
    </div>
  );
};

export default HeroSection;
