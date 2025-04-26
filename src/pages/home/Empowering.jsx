import React, { useState } from 'react';

export default function BusinessSoftwarePage() {
  const [activeService, setActiveService] = useState('software-development');
  
  // Service content data
  const serviceContent = {
    'software-development': {
      title: 'Software Development',
      description: 'We offer end-to-end application development services to create robust and scalable apps tailored to your business needs. Our solutions ensure seamless user experiences and high performance across platforms.',
      links: [
        { text: 'Custom Software Solutions', url: '#' },
        { text: 'SaaS Development', url: '#' }
      ]
    },
    'software-testing': {
      title: 'Software Testing',
      description: 'Our comprehensive testing services ensure your applications are bug-free and perform optimally under all conditions. We employ manual and automated testing methodologies to guarantee quality at every stage.',
      links: [
        { text: 'QA Automation', url: '#' },
        { text: 'Performance Testing', url: '#' }
      ]
    },
    'devops-cloud': {
      title: 'DevOps & Cloud Solutions',
      description: 'Streamline your development workflow with our DevOps practices and cloud infrastructure solutions. We help organizations implement CI/CD pipelines and optimize cloud resources for maximum efficiency.',
      links: [
        { text: 'CI/CD Implementation', url: '#' },
        { text: 'Cloud Migration', url: '#' }
      ]
    }
  };

  const handleServiceClick = (serviceKey) => {
    setActiveService(serviceKey);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Business Banner Section */}
      <div className="w-full bg-gray-100 py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6">
          Empowering Business with Future-Ready Solutions
        </h1>
        <p className="text-gray-800 max-w-4xl mx-auto text-base md:text-lg">
          At V Accel AI Dynamics, we drive digital transformation through our cutting-edge solutions. Our services are 
          designed to automate business workflows, enhance operational efficiency, and empower businesses to stay ahead
          in a competitive landscape.
        </p>
      </div>
      
      {/* Software Services Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Service Categories */}
            <div className="md:w-1/3 space-y-4">
              {/* Software Development */}
              <div 
                className={`${activeService === 'software-development' ? 'bg-blue-800 text-white' : 'bg-gray-100 text-black'} rounded-md p-4 flex items-center cursor-pointer hover:shadow-md transition-all`}
                onClick={() => handleServiceClick('software-development')}
              >
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h10v8H5V6z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6 7a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h4a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-bold">Software Development</span>
              </div>
              
              {/* Software Testing */}
              <div 
                className={`${activeService === 'software-testing' ? 'bg-blue-800 text-white' : 'bg-gray-100 text-black'} rounded-md p-4 flex items-center cursor-pointer hover:shadow-md transition-all`}
                onClick={() => handleServiceClick('software-testing')}
              >
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-bold">Software Testing</span>
              </div>
              
              {/* DevOps & Cloud Solutions */}
              <div 
                className={`${activeService === 'devops-cloud' ? 'bg-blue-800 text-white' : 'bg-gray-100 text-black'} rounded-md p-4 flex items-center cursor-pointer hover:shadow-md transition-all`}
                onClick={() => handleServiceClick('devops-cloud')}
              >
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                </div>
                <span className="font-bold">DevOps & Cloud Solutions</span>
              </div>
            </div>
            
            {/* Right Column - Service Description */}
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-8">{serviceContent[activeService].title}</h1>
              
              <div className="border border-gray-200 border-dashed rounded-lg p-6 mb-8">
                <p className="text-gray-800">
                  {serviceContent[activeService].description}
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                {serviceContent[activeService].links.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}