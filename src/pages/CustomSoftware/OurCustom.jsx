
import React from 'react';

const SoftwareSolutions = () => {
  return (
    <div className="bg-gradient-to-t from-white to-blue-100 py-12 px-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-[#b5824e] mb-12">
          Our Custom Software Solutions
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-14 flex flex-col">
            <h3 className="text-xl font-bold text-[#0A3E5B] mb-4">
              Customer Relationship Management (CRM)
            </h3>
            <p className="text-gray-600">
              Real-time customer insights, automated workflows, AI-driven analytics, mobile access.{' '}
              <strong>Boosts satisfaction, cuts sales cycles by 30%</strong>, integrates with your tools. A 2025 retailer lifted repeat sales 25% with our CRM—your customers deserve that edge.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-14 flex flex-col">
            <h3 className="text-xl font-bold text-[#0A3E5B] mb-4">
              Human Resource Management System (HRMS)
            </h3>
            <p className="text-gray-600">
              Empower your team with a custom HRMS—hiring, payroll, and performance, all simplified and tailored.{' '}
              <strong>Saves 40% on HR tasks</strong>, ensures 2025 compliance, improves retention. A 2025 tech firm halved onboarding time with our HRMS—your people, your power.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-14 flex flex-col">
            <h3 className="text-xl font-bold text-[#0A3E5B] mb-4">
              Content Management System (CMS)
            </h3>
            <p className="text-gray-600">
              Amplify your voice with a custom CMS—create, manage, and publish content your way.{' '}
              <strong>Speeds updates 45%</strong>, drives traffic, fits your brand. A 2025 media startup tripled visits with our CMS—your content, unleashed.
            </p>
          </div>

          {/* Fourth Card */}
          <div className="bg-white rounded-2xl shadow-md p-14 flex flex-col md:col-span-3">
            <h3 className="text-xl font-bold text-[#0A3E5B] mb-4">
              Enterprise Resource Planning (ERP)
            </h3>
            <p className="text-gray-600">
              Run your business seamlessly with a custom ERP—finance, supply chain, and ops, united in one platform.{' '}
              <strong>Real-time dashboards, inventory tools, financial tracking, cloud scalability.</strong> Cuts costs 20%, boosts visibility, scales with you. A 2025 manufacturer dropped downtime 35% with our ERP—your operations, optimized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolutions;
