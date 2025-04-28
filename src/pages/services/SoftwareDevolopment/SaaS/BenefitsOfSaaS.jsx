
import { useState, useRef, useEffect } from 'react';
import { DollarSign, Shield, Users, Clock, Globe, Code } from 'lucide-react';

export default function SaaSBenefits() {
  const rightColumnRef = useRef(null);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  
  const benefits = [
    {
      icon: <DollarSign size={24} />,
      title: "Lower Cost",
      description: "SaaS cuts the entire cost by half and allows you to implement the most fitting on-premise solutions."
    },
    {
      icon: <Users size={24} />,
      title: "Carefree Management",
      description: "It provides the leeway to play effectively with the diversities of the virtual grounds."
    },
    {
      icon: <Shield size={24} />,
      title: "Data Security",
      description: "A prompt solution for data security and ease of doing business."
    },
    {
      icon: <Clock size={24} />,
      title: "Time Efficiency",
      description: "Save development time and get to market faster with pre-built infrastructure."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Accessibility",
      description: "Access your applications from anywhere in the world with an internet connection."
    },
    {
      icon: <Code size={24} />,
      title: "Continuous Updates",
      description: "Benefit from regular updates and improvements without manual installation."
    }
  ];

  // Handle scroll in right column
  const handleScroll = () => {
    if (rightColumnRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = rightColumnRef.current;
      // Check if scrolled to bottom with a small buffer
      setScrolledToBottom(scrollHeight - scrollTop - clientHeight < 5);
    }
  };

  // Prevent main page scroll until right column is scrolled to bottom
  useEffect(() => {
    const handleWheel = (e) => {
      if (!scrolledToBottom && e.deltaY > 0) {
        e.preventDefault();
        // Manually scroll the right column if not at bottom
        if (rightColumnRef.current) {
          rightColumnRef.current.scrollTop += e.deltaY;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [scrolledToBottom]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Main content container */}
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Left column - Fixed hero section */}
          <div className="md:w-1/2 lg:w-7/12 md:sticky md:top-8 md:self-start">
            <div className="bg-blue-800 text-white rounded-lg p-8">
              <h1 className="text-3xl font-bold text-[#b5824e] mb-6">
                Benefits Of SaaS Application Development for Your Business
              </h1>
              <p className="text-lg mb-8">
                An cloud-based SaaS product can scale up your business. Security, version upgrades, and ongoing improvements are additional components of SaaS software development. Therefore, when designing and developing a SaaS platform, you should know the benefits of it.
              </p>
              <button className="bg-white text-blue-800 font-medium py-3 px-6 rounded-full flex items-center">
                <span>Request a Quote</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right column - Scrollable content */}
          <div className="md:w-1/2 lg:w-5/12">
            <div 
              ref={rightColumnRef}
              className="flex flex-col space-y-4 overflow-y-auto max-h-96 md:max-h-screen pr-2 pb-4"
              onScroll={handleScroll}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <div className="text-black">{benefit.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#b5824e] mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}