import React from 'react'
import { Link } from 'react-router-dom'

const About = () => { 

   
    const expertiseItems = [
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          title: 'Web Development',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          ),
          title: 'Software Development',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          title: 'AI Bot Development',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          ),
          title: 'SaaS Solutions',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          ),
          title: 'Cloud Solutions',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          title: 'Quality Assurance',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
          title: 'Product Engineering',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          title: 'Digital Marketing',
        },
      ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <div className="w-full md:w-2/3">
          <h2 className="text-xl font-bold text-amber-700">Company Overview</h2>
          <p className="mt-4 text-gray-700">
            At V-Accel, we empower businesses with <span className="font-medium">cutting-edge, AI-powered SaaS solutions</span> built for performance, automation, 
            and growth. As a trusted leader in AI-SaaS applications, we provide intelligent, integrative software that aligns with 
            your goals. Driven by innovation, we deliver smart automation, actionable insights, and seamless cloud integration—
            helping you stay competitive and future-ready in today's fast-moving digital world.
          </p>
        </div>
        <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <div className="bg-blue-600 text-white text-center py-2 rounded-md mb-3">
            Let's Connect
          </div>
          <div className="flex items-center justify-between">
            <img src="/api/placeholder/100/60" alt="Company team" className="rounded-md" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="w-full md:w-2/5">
          <div className="relative">
            <img 
              src="/api/placeholder/400/400" 
              alt="Team working together" 
              className="rounded-full" 
            />
            <div className="absolute -bottom-3 -right-3">
              <div className="flex">
                <div className="h-4 w-4 rounded-full bg-blue-500 mr-1"></div>
                <div className="h-4 w-4 rounded-full bg-red-500 mr-1"></div>
                <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-3/5">
          <h2 className="text-xl font-bold text-amber-700 mb-6">What we Do</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered SaaS Development</h3>
            <p className="text-gray-600">
              We build custom AI-driven SaaS applications that leverage machine learning, automation, and cloud computing to 
              solve complex business challenges and improve your operations.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Cloud-Based Solutions</h3>
            <p className="text-gray-600">
              Our cloud-first approach ensures scalability, security, and seamless integration, allowing businesses to operate
              efficiently from anywhere in the world.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Intelligent Automation</h3>
            <p className="text-gray-600">
              We integrate AI-powered automation into SaaS platforms, reducing manual work, enhancing productivity, and
              enabling real-time decision-making.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Data-Driven Insights</h3>
            <p className="text-gray-600">
              Our solutions harness the power of big data and AI analytics, helping businesses make smart, data-backed decisions
              for growth and efficiency.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">API & Third-Party Integrations</h3>
            <p className="text-gray-600">
              We develop seamless integrations with existing business tools, CRMs, ERPs, and cloud platforms to ensure smooth
              workflows and extended functionality.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-amber-700 mb-8">Why choose V-Accel AI?</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-3">
                <div className="p-2 border border-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">AI-Driven Solutions</h3>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 border border-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m-4 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">End-to-End Development</h3>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 border border-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Cloud-Native & Scalable</h3>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 border border-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Industry-Specific Expertise</h3>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 border border-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Security & Compliance</h3>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 border border-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Continuous Support & Maintenance</h3>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-blue-600 text-white px-4 py-3 rounded-md flex items-center">
              Get a Free Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="w-full md:w-1/2">
            <img 
              src="/api/placeholder/500/400" 
              alt="Office building" 
              className="rounded-lg w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
   
      <div className="text-center mb-16">
      <h2 className="relative inline-block text-4xl font-bold mb-4">
        <span className="absolute inset-0 text-gray-100 text-6xl -z-10 flex justify-center items-center">
          EXPERTISE
        </span>
        <span className="relative z-10 text-3xl flex justify-center items-center text-[#b5824e]">
          Our Expertise
        </span>
      </h2>
    </div>

        {/* Expertise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertiseItems.slice(0, 4).map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 flex flex-col items-center justify-center text-center border border-gray-100 rounded-lg"
          >
            <div className="text-gray-800 mb-4">
              {item.icon}
            </div>
            <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {expertiseItems.slice(4).map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 flex flex-col items-center justify-center text-center border border-gray-100 rounded-lg"
          >
            <div className="text-gray-800 mb-4">
              {item.icon}
            </div>
            <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="w-full bg-blue-600 rounded-2xl overflow-hidden relative p-8 md:p-12">
      {/* Background diagonal shapes */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-400 opacity-70 rounded-full -translate-x-1/3 translate-y-1/3 transform rotate-45"></div>
      <div className="absolute right-0 top-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full translate-x-1/3 -translate-y-1/3 transform rotate-45"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="text-white max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the future of AI SaaS</h2>
          <p className="text-base md:text-lg">
            We are shaping the future of AI-powered cloud software. Whether 
            you are a startup, SME, or enterprise, we deliver custom AI SaaS 
            solutions that accelerate innovation and drive success.
          </p>
        </div>
        
        <div className="w-full md:w-auto mt-6 md:mt-0">
          <button className="bg-white text-blue-500 hover:bg-blue-50 transition-colors font-bold py-4 px-8 rounded-lg text-center whitespace-nowrap">
            LET'S BUILD THE NEXT BIG THING!
          </button>
        </div>
      </div>
    </div>

    </div>



    </div>
  );
};



  
export default About