import React from 'react'
import { motion } from 'framer-motion';
import img from '../../assets/img/Travel&Hospitality.jpg'

function Travel() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-20 py-14 bg-gray-50 overflow-hidden gap-4">
      {/* Left Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
          <span>🏥</span>Travel & Hospitality
        </h2>
        <p className="text-gray-600 text-lg mb-6">
        Enhancing experiences with intelligent travel solutions.
        </p>

        <ul className="space-y-4">
          {[
            'Booking & Reservation Systems',
            'Itinerary & Tour Management',
            'Guest Portals & Feedback',
            'Loyalty Programs'
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-3 text-gray-700 text-lg"
            >
              <span className="text-green-500">✅</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
      >
        <img
          src={img} // Replace with your actual image path
          alt="Healthcare Technology"
          className="rounded-2xl shadow-xl object-cover"
        />
      </motion.div>
    </section>
  )
}

export default Travel