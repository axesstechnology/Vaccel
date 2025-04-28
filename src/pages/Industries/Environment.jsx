import React from 'react'
import { motion } from 'framer-motion';
import img from '../../assets/img/environment.png'

function Environment() {
  return (
    <motion.section
                                      initial="hidden"
                                      whileInView="visible"
                                      viewport={{ once: true, amount: 0.2 }}
                                      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-50 to-pink-100 overflow-hidden rounded-none shadow-xl"
                                    >
                                      
                                      {/* Left Side - Content */}
                                      <motion.div
                                        variants={{
                                          hidden: { opacity: 0, y: 150 },
                                          visible: { 
                                            opacity: 1, 
                                            y: 0, 
                                            transition: { type: "spring", stiffness: 60, damping: 18, duration: 1 }
                                          },
                                        }}
                                        className="w-full md:w-1/2 space-y-8 p-8"
                                      >
                                        <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                                          <span>🌱</span>Environmental & Sustainability
                                        </h2>
                                        <p className="text-gray-700 text-xl">
                                        Eco-conscious technology for a greener planet.
                                        </p>
                                
                                        {/* Staggered List */}
                                        <motion.ul
                                          initial="hidden"
                                          whileInView="visible"
                                          variants={{
                                            hidden: {},
                                            visible: {
                                              transition: {
                                                staggerChildren: 0.2, // Stagger animation for list
                                              }
                                            }
                                          }}
                                          className="space-y-4"
                                        >
                                          {[
                                            'Emission Tracking Systems',
                                            'Energy Optimization Tools',
                                            'Recycling & Waste Management Software',
                                            'Sustainability Dashboards'
                                          ].map((item, index) => (
                                            <motion.li
                                              key={index}
                                              variants={{
                                                hidden: { opacity: 0, x: -50 },
                                                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
                                              }}
                                              className="flex items-start gap-3 text-gray-800 text-lg"
                                            >
                                              <span className="text-green-500">✅</span>
                                              {item}
                                            </motion.li>
                                          ))}
                                        </motion.ul>
                                      </motion.div>
                                
                                      {/* Right Side - Image */}
                                      <motion.div
                                        variants={{
                                          hidden: { opacity: 0, y: 150, scale: 0.9 },
                                          visible: { 
                                            opacity: 1, 
                                            y: 0, 
                                            scale: 1,
                                            transition: { type: "spring", stiffness: 60, damping: 15, duration: 1, delay: 0.5 }
                                          },
                                        }}
                                        className="w-full md:w-1/2 flex justify-center p-8"
                                      >
                                        <img
                                          src={img}
                                          alt="Healthcare Technology"
                                          width={600}
                                          height={450}
                                          className="rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                                        />
                                      </motion.div>
                                
                                    </motion.section>
  )
}

export default Environment