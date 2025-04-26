// Drawer.jsx
import { useState } from 'react';
import { X } from 'lucide-react';

const Drawer = ({ isOpen, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleNext = (e) => {
    // Prevent any default form submission behavior
    e.preventDefault();
    e.stopPropagation();
    setStep(step + 1);
  };
  
  const handlePrevious = (e) => {
    // Prevent any default form submission behavior
    e.preventDefault();
    e.stopPropagation();
    setStep(step - 1);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data being submitted:", formData);
    onSubmit(formData);
    setStep(1);
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
  };
  
  // If drawer is not open, don't render anything
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      {/* Modal Drawer */}
      <div className="bg-white w-full md:w-1/2 h-full overflow-auto animate-slide-in shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Let's Connect</h2>
          <button 
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="p-1 rounded-full hover:bg-gray-200"
            type="button"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* Progress indicator */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4].map((num) => (
                  <div 
                    key={num}
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      step >= num ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Step 1: Name */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">What's your name?</h3>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            )}
            
            {/* Step 2: Email */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">What's your email?</h3>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            )}
            
            {/* Step 3: Phone */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">What's your phone number?</h3>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            )}
            
            {/* Step 4: Message */}
            {step === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Any message for us?</h3>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
              </div>
            )}
            
            {/* Form Navigation */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Previous
                </button>
              )}
              
              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ml-auto"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      
      {/* Adding animation */}
      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Drawer;