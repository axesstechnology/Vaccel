import React from 'react'
import { motion } from 'framer-motion';
import image from '../../../../assets/img/ui-ux-design.jpg';

function HeroUi() {
  return (
    <div className="relative bg-navy-900 h-screen flex items-center justify-start overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-70">
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

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-500 mb-6 leading-tight"
          >
            UI/UX Design Services
          </motion.h1>

          <motion.p 
            initial={{ opacity: 5, y: 20 }}
            animate={{ opacity: 5, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-black text-lg mb-8 max-w-md mx-auto md:mx-0"
          >
            Create stunning, user-centric digital experiences that captivate and convert.
          </motion.p>
        </div>
      </motion.div>

     
    </div>
  )
}

export default HeroUi