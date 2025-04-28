import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import image from '../../assets/img/industries.webp'

function HeroInd() {
  return (
    <div className="relative bg-navy-900 h-screen flex items-center justify-start overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
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
            className="text-black uppercase tracking-wider mb-2 font-semibold"
          >
            We understand your industry like you do.

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
            Industries We<br />Empower
          </motion.h1>

          <motion.p 
            initial={{ opacity: 5, y: 20 }}
            animate={{ opacity: 5, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-black text-lg mb-8 max-w-md mx-auto md:mx-0"
          >
            Blending domain expertise with cutting-edge technology.<br/>
            We customize, scale, and optimize your digital journey.
          </motion.p>

          {/* <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded mx-auto md:mx-0"
          >
            CONTACT US
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 5a2 2 0 012-2h3.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0011.414 5H16a2 2 0 012 2v2H2V5z" />
              <path fillRule="evenodd" d="M2 9h16v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9zm4 2a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </motion.button> */}
        </div>
      </motion.div>

     
    </div>
  )
}

export default HeroInd