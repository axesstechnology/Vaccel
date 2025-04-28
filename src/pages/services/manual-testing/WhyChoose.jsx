import React from 'react'
import { motion } from 'framer-motion'

function WhyChoose() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white to-blue-50 px-6 md:px-20 py-16 space-y-16"
    >
      {/* Heading and Intro */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 60 } }
          }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
        Why Choose Our Manual Testing?
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } }
          }}
          className="text-gray-600 text-lg"
        >We facilitate agile software development testing that keeps things organized and helps to perform the different types of testing in a row to surface the best version of the software. The process helps in early detection of issues, increase security, reduce maintenance efforts, and ensure compliance and regulations.
        </motion.p>
      </div>

      {/* 3 Feature Boxes */}
      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-7xl"
      >
        {[
          { title: 'Human Precision', description: 'Spots nuances automation can’t—your quality, guaranteed.' },
          { title: 'Tailored Approach', description: 'Testing plans built for your app, your goals. 2025 Expertise: Deep knowledge of modern platforms, devices, and trends.' },
          { title: 'End-to-End Care', description: 'From planning to reporting, we cover it all.' },
        ].map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 20 } }
            }}
            className="bg-white shadow-2xl rounded-3xl p-8 hover:shadow-blue-200 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
            <p className="text-gray-600 text-md">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default WhyChoose