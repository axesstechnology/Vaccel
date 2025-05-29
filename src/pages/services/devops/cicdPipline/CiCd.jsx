import React, { useState } from "react";
import { motion } from "framer-motion";
import awsimg from "/src/assets/img/awsCloud.jpg";
import { MdArrowOutward } from "react-icons/md";

// Keep your existing icons or swap if needed

const CodePipelineIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);

const CodeBuildIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </svg>
);

const CodeDeployIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);

const EC2Icon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z" />
  </svg>
);

const CloudFormationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z" />
  </svg>
);

const CloudWatchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);

const EarthGlobe = () => (
  <motion.div 
    animate={{ 
      rotate: 360 
    }}
    transition={{ 
      duration: 40, 
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="relative w-40 h-40 rounded-full bg-blue-500 overflow-hidden"
  >
    {/* Continents */}
    <motion.div 
      animate={{
        y: [0, 5, 0, -5, 0],
        x: [0, 3, 0, -3, 0]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0"
    >
      <div className="absolute top-5 left-5 bg-green-700 w-10 h-5 rounded-full" />
      <div className="absolute top-10 left-20 bg-green-700 w-14 h-8 rounded-md" />
      <div className="absolute bottom-10 left-8 bg-green-700 w-10 h-10 rounded-md" />
      <div className="absolute right-5 top-12 bg-green-700 w-8 h-12 rounded-md" />
    </motion.div>
    
    {/* Shield overlay */}
    <div className="absolute inset-0 bg-blue-400 opacity-30 mix-blend-screen"></div>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description, isHovered, onHover }) => {
  return (
    <div
      className={`relative p-6 cursor-pointer transition-all duration-300 ${
        isHovered ? "bg-white shadow-xl border-gray-200 rounded-lg" : ""
      }`}
      onMouseEnter={() => onHover(title)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`transition-colors duration-300 ${isHovered ? "text-blue-600" : "text-gray-600"}`}>
        {Icon && <Icon />}
      </div>
      <h3 className="text-lg font-bold mt-4 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const Aws = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: CodePipelineIcon,
      title: "Continuous Integration",
      description: "Automated building and testing of code upon every commit to ensure code quality and detect errors early."
    },
    {
      icon: CodeBuildIcon,
      title: "Automated Testing",
      description: "Run unit, integration, and end-to-end tests automatically as part of the build process to guarantee reliability."
    },
    {
      icon: CodeDeployIcon,
      title: "Continuous Deployment",
      description: "Automatically deploy code changes to production or staging environments, ensuring rapid and safe delivery."
    },
    {
      icon: EC2Icon,
      title: "Infrastructure as Code",
      description: "Manage infrastructure configuration through code, enabling reproducibility, versioning, and automation."
    },
    {
      icon: CloudFormationIcon,
      title: "Pipeline Orchestration",
      description: "Define multi-stage pipelines that control the build, test, approval, and deployment workflow end-to-end."
    },
    {
      icon: CloudWatchIcon,
      title: "Monitoring & Feedback",
      description: "Continuously monitor pipeline health and application performance, providing feedback for continuous improvement."
    }
  ];

  return (
    <div className="relative bg-navy-900 min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={awsimg}
            alt="CI/CD Pipeline Background"
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ objectPosition: "center" }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-900 opacity-80"></div>

        {/* Content */}
        <div
          className="relative max-w-5xl mx-auto px-6 md:px-12 text-center"
        >
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Modern <span className="text-blue-500">CI/CD Pipeline</span> Implementation
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            Streamline your software delivery process with automated continuous integration and deployment pipelines. Increase velocity, reliability, and quality with our expert solutions.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="relative py-16 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <h2
          className="text-4xl font-bold text-white text-center mb-12"
        >
          CI/CD Pipeline Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map(({ icon, title, description }) => (
            <ServiceCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              isHovered={hoveredService === title}
              onHover={setHoveredService}
            />
          ))}
      </div>
      </section>
    </div>
  );
};

export default Aws;
