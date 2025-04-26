

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-gray-50 text-gray-800  px-12">
    <footer className="bg-gray-50 text-gray-800 py-12 ">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Links */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 lg:mb-0">
            {/* SERVICES */}
            <div>
              <h3 className="text-[#b5824e] font-bold text-2xl mb-4">SERVICES</h3>
              <ul className="space-y-3">
                <li><Link to="/services/software-development" className="hover:text-orange-500">Software Development</Link></li>
                <li><Link to="/services/mobile-app-development" className="hover:text-orange-500">Mobile App Development</Link></li>
                <li><Link to="/services/web-development" className="hover:text-orange-500">Web Development</Link></li>
                <li><Link to="/services/ai-development" className="hover:text-orange-500">AI Development Services</Link></li>
                <li><Link to="/services/ecommerce-development" className="hover:text-orange-500">Ecommerce Development</Link></li>
                <li><Link to="/services/digital-marketing" className="hover:text-orange-500">Digital Marketing</Link></li>
              </ul>
            </div>

            {/* INDUSTRIES */}
            <div>
              <h3 className="text-[#b5824e] font-bold text-2xl mb-4">INDUSTRIES</h3>
              <ul className="space-y-3">
                <li><Link to="/industries/logistics" className="hover:text-orange-500">Logistics</Link></li>
                <li><Link to="/industries/healthcare" className="hover:text-orange-500">Healthcare</Link></li>
                <li><Link to="/industries/real-estate" className="hover:text-orange-500">Real Estate</Link></li>
                <li><Link to="/industries/travel-hospitality" className="hover:text-orange-500">Travel & Hospitality</Link></li>
                <li><Link to="/industries/education" className="hover:text-orange-500">Education</Link></li>
                <li><Link to="/industries/media-entertainment" className="hover:text-orange-500">Media & Entertainment</Link></li>
                <li><Link to="/industries/on-demand" className="hover:text-orange-500">On-Demand</Link></li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-[#b5824e] font-bold text-2xl mb-4">COMPANY</h3>
              <ul className="space-y-3">
                <li><Link to="/about-us" className="hover:text-orange-500">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-orange-500">Careers</Link></li>
                <li><Link to="/contact-us" className="hover:text-orange-500">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Contacts */}
          <div className="mt-10 lg:mt-0">
            <h3 className="text-[#b5824e] font-bold text-2xl mb-4">CONTACTS</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="mr-3 text-xl">📞</span>
                <a href="tel:+917603846245" className="hover:text-orange-500">+91 76038 46245</a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-xl">📧</span>
                <a href="mailto:info@v-accel.ai" className="hover:text-orange-500">info@v-accel.ai</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-2"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs py-1">
  <div className="flex flex-wrap mb-2 md:mb-0">
    <a href="#" className="hover:text-orange-500 mr-2">Privacy Policy</a>
    <span className="text-gray-400 mx-1">|</span>
    <a href="#" className="hover:text-orange-500 mr-2">Disclaimer</a>
    <span className="text-gray-400 mx-1">|</span>
    <a href="#" className="hover:text-orange-500 mr-2">Terms and Conditions</a>
    <span className="text-gray-400 mx-1">|</span>
    <a href="#" className="hover:text-orange-500">Standard Policies</a>
  </div>
  <div className="text-center md:text-right">
    <p className="text-xs mb-0 font-bold ">Copyright © 2025 V-ACCEL AI Dynamics, All Rights Reserved.</p>
  </div>
</div>

      </div>
    </footer>
    </div>
  );
}