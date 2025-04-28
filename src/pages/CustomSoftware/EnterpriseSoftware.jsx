import React from 'react';
import companyOverview from '/src/assets/img/companyOverview.jpg';
export default function EnterpriseSoftware() {
  return (
    <div className="bg-gray-50 min-h-screen mb-4 p-4  md:p-8 ">
      <div className="max-w-7xl mx-auto pl-24 flex flex-col md:flex-row items-center gap-8">
        {/* Left content area */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-3xl font-bold text-amber-600 mb-6">
            What Sets Us Apart as an Enterprise Software Development Company?
          </h1>
          
          <p className="text-gray-700 mb-8">
            Hundreds of Enterprises have chosen us to change the way they execute the process in their
            operations and here are some reasons why you should too-
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-medium">Agile Methodology</span>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-medium">15+ years of experience</span>
            </div>
            
            {/* Feature 3 */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <span className="font-medium">Complete suite of Enterprise Solutions</span>
            </div>
            
            {/* Feature 4 */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium">Customized Software Support</span>
            </div>
            
            {/* Feature 5 */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="font-medium">Dedicated team of developers</span>
            </div>
            
            {/* Feature 6 */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="font-medium">Multiple Engagement Models</span>
            </div>
          </div>
        </div>
        
        {/* Right image area */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
  <img 
    src={companyOverview} 
    alt="Enterprise Software Development" 
    className="rounded-lg shadow-lg max-w-full h-auto"
  />
</div>
      </div>
    </div>
  );
}