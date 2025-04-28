// import React from 'react';

// export default function StartupSaasBundle() {
//   return (
//     <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', width: '100%' }}>
//       {/* Top Header */}
//       <div className="py-6 text-center">
//         <h2 className="text-3xl font-bold" style={{ color: '#c49557' }}>Startup SAAS Bundle</h2>
//         <p className="text-gray-700 text-sm mt-2 px-4 max-w-4xl mx-auto">
//           V-Accel delivers a robust SaaS package featuring HRMS, CRM, Accounting, and Project Management tools — designed to simplify operations, boost productivity, and fuel sustainable growth with fully integrated solutions.
//         </p>
//       </div>

//       {/* Navigation */}
//       <div style={{ backgroundColor: '#0a1526' }} className="py-4">
//         <div className="flex justify-center space-x-8 max-w-4xl mx-auto">
//           <div className="flex flex-col items-center px-6 py-3 rounded-lg" style={{ backgroundColor: '#102040' }}>
//             <div className="w-6 h-6 mb-1">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
//                 <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
//               </svg>
//             </div>
//             <span className="text-white text-xs">HRMS</span>
//           </div>
          
//           <div className="flex flex-col items-center px-6 py-3">
//             <div className="w-6 h-6 mb-1">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
//                 <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
//               </svg>
//             </div>
//             <span className="text-white text-xs">CRM</span>
//           </div>
          
//           <div className="flex flex-col items-center px-6 py-3">
//             <div className="w-6 h-6 mb-1">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
//                 <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
//               </svg>
//             </div>
//             <span className="text-white text-xs">Project<br/>Management</span>
//           </div>
          
//           <div className="flex flex-col items-center px-6 py-3">
//             <div className="w-6 h-6 mb-1">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
//                 <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v2z" />
//               </svg>
//             </div>
//             <span className="text-white text-xs">Account<br/>Management</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row pt-8 px-4 md:px-12 max-w-6xl mx-auto">
//         {/* Left Side */}
//         <div className="md:w-1/3 pr-6">
//           <h2 className="text-3xl font-bold mb-2" style={{ color: '#c49557' }}>HRMS</h2>
//           <p className="text-gray-700 text-sm mb-6">
//             HRMS empowers HR professionals by reducing manual efforts, improving efficiency, and enhancing employee experience through a centralized and data-driven approach.
//           </p>
          
//           <div className="space-y-3">
//             {[
//               'Employee Database & Management',
//               'Recruitment & Onboarding',
//               'Attendance & Payroll Management',
//               'Performance Management & Appraisals',
//               'Time Tracking & Task Allocation',
//               'Employee Benefits & Compliance',
//               'Employee Self-Service (ESS) Portal',
//               'Reports & Analytics'
//             ].map((item, index) => (
//               <div key={index} className="flex items-start">
//                 <div className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: '#c49557' }}>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
//                   </svg>
//                 </div>
//                 <span className="text-sm">{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Right Side - HRMS Diagram */}
//         <div className="md:w-2/3 mt-8 md:mt-0">
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <div className="relative w-full" style={{ minHeight: '450px' }}>
//               {/* Center HRMS */}
//               <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
//                 <div className="bg-white rounded-full p-4 shadow-lg" style={{ width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <span className="text-4xl font-bold text-gray-700">HRMS</span>
//                 </div>
//               </div>
              
//               {/* Employee Identification - Top Left */}
//               <div className="absolute" style={{ left: '20%', top: '15%' }}>
//                 <div className="bg-green-500 rounded-full p-2 shadow-lg" style={{ width: '100px', height: '100px' }}>
//                   <div className="bg-white rounded-full p-2 w-full h-full flex flex-col items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-6 h-6">
//                       <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1 9h-4v1h4v5h-4v1h4a1 1 0 001-1v-5a1 1 0 00-1-1z" />
//                     </svg>
//                     <span className="mt-1 text-xs text-center text-green-600 font-medium">Employee Identification</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Attendance - Top Right */}
//               <div className="absolute" style={{ right: '20%', top: '15%' }}>
//                 <div className="bg-green-400 rounded-full p-2 shadow-lg" style={{ width: '100px', height: '100px' }}>
//                   <div className="bg-white rounded-full p-2 w-full h-full flex flex-col items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-6 h-6">
//                       <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
//                     </svg>
//                     <span className="mt-1 text-xs text-center text-green-600 font-medium">Attendance & Leave management</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* HR Helpdesk - Middle Left */}
//               <div className="absolute" style={{ left: '10%', top: '45%' }}>
//                 <div className="bg-teal-500 rounded-full p-2 shadow-lg" style={{ width: '100px', height: '100px' }}>
//                   <div className="bg-white rounded-full p-2 w-full h-full flex flex-col items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="teal" className="w-6 h-6">
//                       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//                     </svg>
//                     <span className="mt-1 text-xs text-center text-teal-600 font-medium">HR Helpdesk</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Payroll Management - Middle Right */}
//               <div className="absolute" style={{ right: '10%', top: '45%' }}>
//                 <div className="bg-yellow-500 rounded-full p-2 shadow-lg" style={{ width: '100px', height: '100px' }}>
//                   <div className="bg-white rounded-full p-2 w-full h-full flex flex-col items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-6 h-6">
//                       <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
//                     </svg>
//                     <span className="mt-1 text-xs text-center text-yellow-600 font-medium">Payroll Management</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Announcements - Bottom Left */}
//               <div className="absolute" style={{ left: '20%', bottom: '15%' }}>
//                 <div className="bg-blue-500 rounded-full p-2 shadow-lg" style={{ width: '100px', height: '100px' }}>
//                   <div className="bg-white rounded-full p-2 w-full h-full flex flex-col items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="w-6 h-6">
//                       <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
//                     </svg>
//                     <span className="mt-1 text-xs text-center text-blue-600 font-medium">Announcements</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Master Data - Bottom Right */}
//               <div className="absolute" style={{ right: '20%', bottom: '15%' }}>
//                 <div className="bg-orange-500 rounded-full p-2 shadow-lg" style={{ width: '100px', height: '100px' }}>
//                   <div className="bg-white rounded-full p-2 w-full h-full flex flex-col items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-6 h-6">
//                       <path d="M4 6h16v-2h-16v2zm0 12h16v-2h-16v2zm16-8h-16v2h16v-2zm0 4h-16v2h16v-2z" />
//                     </svg>
//                     <span className="mt-1 text-xs text-center text-orange-600 font-medium">Master Data Maintenance</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* People in Center */}
//               <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -20%)' }}>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="w-16 h-16 opacity-60">
//                   <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';

export default function StartupSaasBundle() {
  // State to track which section is selected
  const [selectedSection, setSelectedSection] = useState('HRMS');

  // Function to switch content based on section
  const switchContent = (section) => {
    setSelectedSection(section);
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', width: '100%' }}>
      {/* Top Header */}
      <div className="py-6 text-center">
        <h2 className="text-3xl font-bold" style={{ color: '#c49557' }}>Startup SAAS Bundle</h2>
        <p className="text-gray-700 text-sm mt-2 px-4 max-w-4xl mx-auto">
          V-Accel delivers a robust SaaS package featuring HRMS, CRM, Accounting, and Project Management tools — designed to simplify operations, boost productivity, and fuel sustainable growth with fully integrated solutions.
        </p>
      </div>

      {/* Navigation */}
      <div style={{ backgroundColor: '#0a1526' }} className="py-4">
        <div className="flex justify-center space-x-8 max-w-4xl mx-auto">
          <div
            className="flex flex-col items-center px-6 py-3 rounded-lg cursor-pointer"
            style={{ backgroundColor: selectedSection === 'HRMS' ? '#102040' : 'transparent' }}
            onClick={() => switchContent('HRMS')}
          >
            <div className="w-6 h-6 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </svg>
            </div>
            <span className="text-white text-xs">HRMS</span>
          </div>

          <div
            className="flex flex-col items-center px-6 py-3 cursor-pointer"
            style={{ backgroundColor: selectedSection === 'CRM' ? '#102040' : 'transparent' }}
            onClick={() => switchContent('CRM')}
          >
            <div className="w-6 h-6 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
              </svg>
            </div>
            <span className="text-white text-xs">CRM</span>
          </div>

          <div
            className="flex flex-col items-center px-6 py-3 cursor-pointer"
            style={{ backgroundColor: selectedSection === 'Project Management' ? '#102040' : 'transparent' }}
            onClick={() => switchContent('Project Management')}
          >
            <div className="w-6 h-6 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
            </div>
            <span className="text-white text-xs">Project Management</span>
          </div>

          <div
            className="flex flex-col items-center px-6 py-3 cursor-pointer"
            style={{ backgroundColor: selectedSection === 'Account Management' ? '#102040' : 'transparent' }}
            onClick={() => switchContent('Account Management')}
          >
            <div className="w-6 h-6 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v2z" />
              </svg>
            </div>
            <span className="text-white text-xs">Account Management</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row pt-8 px-4 md:px-12 max-w-6xl mx-auto">
        <div className="md:w-1/3 pr-6">
          <h2 className="text-3xl font-bold mb-2" style={{ color: '#c49557' }}>{selectedSection}</h2>
          <p className="text-gray-700 text-sm mb-6">
            {selectedSection === 'HRMS' && 'HRMS empowers HR professionals by reducing manual efforts, improving efficiency, and enhancing employee experience through a centralized and data-driven approach.'}
            {selectedSection === 'CRM' && 'CRM helps in managing customer relationships, streamlining sales, and improving customer engagement, increasing the overall business efficiency.'}
            {selectedSection === 'Project Management' && 'Our Project Management tools are designed to help teams collaborate effectively, stay organized, and track the progress of projects.'}
            {selectedSection === 'Account Management' && 'Our Account Management tool simplifies financial operations, helping track and manage expenses, income, and ensure compliance.'}
          </p>
          <div className="space-y-3">
            {selectedSection === 'HRMS' && [
              'Employee Database & Management',
              'Recruitment & Onboarding',
              'Attendance & Payroll Management',
              'Performance Management & Appraisals',
              'Time Tracking & Task Allocation',
              'Employee Benefits & Compliance',
              'Employee Self-Service (ESS) Portal',
              'Reports & Analytics'
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 mb-10" style={{ color: '#c49557' }}>
                  <svg xmlns="" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
            {selectedSection === 'CRM' && [
              'Lead Management',
              'Sales Pipeline Tracking',
              'Customer Support Ticketing',
              'Marketing Campaigns',
              'Customer Feedback Analysis',
              'Reports & Analytics'
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 mb-10" style={{ color: '#c49557' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
            {selectedSection === 'Project Management' && [
              'Task Assignment & Tracking',
              'Gantt Charts',
              'Team Collaboration Tools',
              'Resource Allocation',
              'Project Budgeting',
              'Reports & Analytics'
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 mb-10" style={{ color: '#c49557' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
            {selectedSection === 'Account Management' && [
              'Expense Tracking',
              'Invoice Generation',
              'Tax Compliance',
              'Financial Reporting',
              'Budget Planning',
              'Reports & Analytics'
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 mb-10" style={{ color: '#c49557' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Diagram or additional content */}
        <div className="md:w-2/3 mt-8 md:mt-0">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative w-full" style={{ minHeight: '450px' }}>
              {selectedSection === 'HRMS' && (
                <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span className="text-4xl font-bold text-gray-700">HRMS Diagram</span>
                </div>
              )}
              {selectedSection === 'CRM' && (
                <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span className="text-4xl font-bold text-gray-700">CRM Diagram</span>
                </div>
              )}
              {selectedSection === 'Project Management' && (
                <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span className="text-4xl font-bold text-gray-700">Project Management Diagram</span>
                </div>
              )}
              {selectedSection === 'Account Management' && (
                <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span className="text-4xl font-bold text-gray-700">Account Management Diagram</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
