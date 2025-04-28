import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function WhyManual() {

    
  return (
    <section id="businessModels" className="bg-gray-50 py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:space-x-16">

        {/* Left Side Sticky */}
        <div className="w-full md:w-5/12 mb-16 md:mb-0">
          <div className="sticky top-28">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#b5824e' }}>
              Why it Matters
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-10">
              UI/UX testing, functional testing, and regression testing are all critical components of ensuring a successful product.
              These testing types help create a seamless, reliable, and user-friendly application.
            </p>
            <a href="./contact-us.html" className="inline-flex items-center gap-3 bg-[#b5824e] hover:bg-[#9c6a3c] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all">
              Request a Quote
              <i className="icon icon-right-arrow"></i>
            </a>
          </div>
        </div>

        {/* Right Side Services */}
        <div className="w-full md:w-7/12 flex flex-col space-y-16">

          {/* Service Box 1 */}
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
            <h3 className="flex items-center text-2xl font-bold mb-5" style={{ color: '#b5824e' }}>
              <span className="w-14 h-14 mr-4 flex-shrink-0">
                <img
                  src="https://theninehertz.com/wp-content/themes/ninehertz/assets2024/images/icon-software-quality.webp"
                  alt="Enhanced Software Quality"
                  className="w-full h-full object-contain"
                />
              </span>
              Functional Testing
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Catches critical bugs, ensures seamless functionality, builds user trust.<br />
              A 2025 e-commerce client launched bug-free checkout with our testing—sales soared 20%. Your features deserve that polish.
            </p>
          </div>

          {/* Service Box 2 */}
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
            <h3 className="flex items-center text-2xl font-bold mb-5" style={{ color: '#b5824e' }}>
              <span className="w-14 h-14 mr-4 flex-shrink-0">
                <img
                  src="https://theninehertz.com/wp-content/themes/ninehertz/assets2024/images/icon-cost-effectiveness.webp"
                  alt="Cost Effectiveness"
                  className="w-full h-full object-contain"
                />
              </span>
              UI/UX Testing
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Boosts engagement, cuts bounce rates by 25%, perfects the user journey.<br />
              A 2025 app gained 4-star reviews after our UI tweaks—your users will love it too.
            </p>
          </div>

          {/* Service Box 3 */}
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
            <h3 className="flex items-center text-2xl font-bold mb-5" style={{ color: '#b5824e' }}>
              <span className="w-14 h-14 mr-4 flex-shrink-0">
                <img
                  src="https://theninehertz.com/wp-content/themes/ninehertz/assets2024/images/icon-competitive-advantages.webp"
                  alt="Competitive Advantages"
                  className="w-full h-full object-contain"
                />
              </span>
              Regression Testing
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Saves 30% on post-launch fixes, maintains reliability, speeds releases.<br />
              A 2025 SaaS firm rolled out updates glitch-free with our testing—your software stays steady.
            </p>
          </div>

        </div>

      </div>
    </div>
  </section>
  )
}

export default WhyManual