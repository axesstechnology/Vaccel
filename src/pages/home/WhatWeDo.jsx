import React from 'react';

export default function WhatWeDo() {
  return (
    <div className="py-16 px-4" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#c49557' }}>
                What We Do – From Concept to Deployment
            </h1>
            <p className="text-black text-lg max-w-3xl mx-auto">
                We design, develop, test, and deploy powerful solutions tailored to your business goals.
            </p>
        </div>

        {/* First Row - Software Development and Testing */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            {/* Software Development */}
            <div className="flex items-center justify-end md:w-1/2">
                <div className="text-right mr-6">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#c49557' }}>Software Development</h2>
                    <p className="text-black">
                        We build scalable, secure, and high<br />
                        performance <span style={{ color: '#c49557' }}>solutions</span>
                    </p>
                </div>
                <div className="w-24 h-24 flex-shrink-0 rounded-lg" style={{ backgroundColor: '#e9a846' }}>
                    <img 
                        src="/api/placeholder/96/96" 
                        alt="Software Development Icon"
                        className="opacity-0" // Invisible placeholder just for sizing
                    />
                </div>
            </div>

            {/* Software Testing */}
            <div className="flex items-center md:w-1/2">
                <div className="w-24 h-24 flex-shrink-0 rounded-lg" style={{ backgroundColor: '#e069c5' }}>
                    <img 
                        src="/api/placeholder/96/96" 
                        alt="Software Testing Icon"
                        className="opacity-0" // Invisible placeholder just for sizing
                    />
                </div>
                <div className="text-left ml-6">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#c49557' }}>Software Testing</h2>
                    <p className="text-black">
                        We deliver <span style={{ color: '#e069c5' }}>bug-free</span>, secure, and high-<br />
                        quality solutions
                    </p>
                </div>
            </div>
        </div>

        {/* Second Row - QA and AI/ML */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            {/* Quality Assurance & Testing */}
            <div className="flex items-center justify-end md:w-1/2">
                <div className="text-right mr-6">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#c49557' }}>Quality Assurance & Testing</h2>
                    <p className="text-black">
                        We create <span style={{ color: '#5c9ce9' }}>responsive, secure</span> and<br />
                        scalable solutions
                    </p>
                </div>
                <div className="w-24 h-24 flex-shrink-0 rounded-lg" style={{ backgroundColor: '#4f8eed' }}>
                    <img 
                        src="/api/placeholder/96/96" 
                        alt="Quality Assurance Icon"
                        className="opacity-0" // Invisible placeholder just for sizing
                    />
                </div>
            </div>

            {/* AI and ML development */}
            <div className="flex items-center md:w-1/2">
                <div className="w-24 h-24 flex-shrink-0 rounded-lg" style={{ backgroundColor: '#5dc4ca' }}>
                    <img 
                        src="/api/placeholder/96/96" 
                        alt="AI and ML Icon" 
                        className="opacity-0" // Invisible placeholder just for sizing
                    />
                </div>
                <div className="text-left ml-6">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#c49557' }}>AI and ML development</h2>
                    <p className="text-black">
                        We build intelligent, data-driven solutions that<br />
                        <span style={{ color: '#5dc4ca' }}>Automate processes</span>
                    </p>
                </div>
            </div>
        </div>

        {/* Third Row - Digital Marketing (Centered) */}
        <div className="flex justify-center">
          <div className="text-center flex flex-col items-center">
            <div className="w-24 h-24 flex-shrink-0 rounded-lg mb-4" style={{ backgroundColor: '#896fe9' }}>
              <img 
                src="/api/placeholder/96/96" 
                alt="Digital Marketing Icon"
                className="opacity-0" // Invisible placeholder just for sizing
              />
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#c49557' }}>Digital Marketing</h2>
            <p className="text-black text-center max-w-3xl">
              Boost your brand's online presence with data-driven digital<br />
              marketing Powerful strategies <span style={{ color: '#896fe9' }}>for SEO ,Social Media</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}