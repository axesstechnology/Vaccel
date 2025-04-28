export default function WhyChooseVAccel() {
    const features = [
      {
        title: "Cloud Expertise",
        description: "Built on AWS, Azure, Google Cloud—2025’s top platforms.",
      },
      {
        title: "Custom Fit",
        description: "SaaS tailored to your vision, users, and market.",
      },
      {
        title: "Fast to Market",
        description: "Launch-ready in weeks, not months.",
      },
      {
        title: "Ongoing Support",
        description: "Updates, scaling, and fixes—we’re with you post-launch.",
      },
    ];
  
    return (
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-800 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#b5824e] mb-16">
            Why Choose V-Accel for SaaS Development Services?
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md text-left">
                <h3 className="text-lg font-bold text-[#b5824e] mb-2 relative">
                  {feature.title}
                  <div className="w-10 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 mt-2"></div>
                </h3>
                <p className="text-gray-700 mt-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  