import React from 'react'
import { motion } from 'framer-motion';
import img from '../../../assets/img/testing-manual.avif'

function ManTest() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-50 to-blue-100 overflow-hidden rounded-none shadow-xl"
    >
      
      {/* Left Side - Image */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 150, scale: 0.9 },
          visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            transition: { type: "spring", stiffness: 60, damping: 15, duration: 1 }
          },
        }}
        className="w-full md:w-1/2 flex justify-center p-8"
      >
        <img
          src={img}
          alt="Logistics and Delivery"
          width={600}
          height={450}
          className="rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { type: "spring", stiffness: 60, damping: 18, duration: 1, delay: 0.5 }
          },
        }}
        className="w-full md:w-1/2 space-y-8 p-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
          <span>Manual</span>Testing
        </h2>
        <p className="text-gray-700 text-xl">
        In 2025, flawless software isn’t optional—it’s essential.Our Manual Testing Services ensure your applications perform perfectly, delivering quality your users can trust. With a human touch, we uncover what automation misses, specializing in Functional Testing, UI/UX Testing, and Regression Testing. Our skilled testers bring precision, insight, and reliability to every project, keeping your software rock-solid and user-ready. Ready to launch with confidence? Let’s test it right.
        </p>
      </motion.div>
      
    </motion.section>
  )
}

export default ManTest