import React from 'react'
import { motion } from 'framer-motion';
import img from '../../assets/img/Education.jpeg'

function Education() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-50 overflow-hidden">
    {/* Left Side - Image */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
    >
      <img
        src={img} 
        alt="Logistics and Delivery"
        width={500}
        height={400}
        className="rounded-2xl shadow-xl object-cover"
      />
    </motion.div>

    {/* Right Side - Content */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full md:w-1/2"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
        <span>🚚</span>Education
      </h2>
      <p className="text-gray-600 text-lg mb-6">
      Enabling smart learning with powerful digital platforms.
      </p>

      <ul className="space-y-4">
        {[
          'LMS & eLearning Portals',
          'Virtual Classrooms',
          'Online Exams & Assessments',
          'School ERP Systems'
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
  </section>
  )
}

export default Education