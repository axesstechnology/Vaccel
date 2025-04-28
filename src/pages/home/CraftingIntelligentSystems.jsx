import { useState, useEffect, useRef } from 'react'; 
import { ChevronRight, ChevronLeft } from 'lucide-react';
// Use a relative path from the public folder for the video
const hpV = '/assets/hpV.mp4';



export default function HeroSection() {
  const [activeContent, setActiveContent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const videoRef = useRef(null);

  // Content data for the hero section
  // Removed duplicate contentData declaration
  const contentData = [
    {
      // title: "Crafting Intelligent Systems that Evolve with Your Goals",
      subtitle: "Crafting Intelligent Systems that Evolve with Your Goals.",
      ctaText: "Get a Free Consultation",
      secondaryCtaText: "Know More",
    },
  ];

  // Animation phrases from the script
  const phrases = [
    "Application Development",
    "Software Testing",
    "Custom Software",
    "SaaS",
    "Digital Growth Solutions.",
    "HRMS",
    "CRM",
    "Project Management",
    "Finance Management",
    "DATA & AI",
  ];

  // Text animation logic using useEffect
  useEffect(() => {
    let index = 0;
    
    // Initial text setting
    setAnimatedText(phrases[0]);
    
    // Set up interval for changing text
    const intervalId = setInterval(() => {
      index = (index + 1) % phrases.length;
      setAnimatedText(phrases[index]);
    }, 2000); // Change every 2 seconds
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Auto-rotate content sections
  useEffect(() => {
    const contentIntervalId = setInterval(() => {
      changeContent((activeContent + 1) % contentData.length);
    }, 6000); // Change content every 6 seconds
    
    return () => clearInterval(contentIntervalId);
  }, [activeContent]);

  // Function to change content with transition effect
  const changeContent = (newIndex) => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveContent(newIndex);
      setTransitioning(false);
    }, 300);
  };

  // Ensure video plays on component mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Ensure video is muted
      videoRef.current.loop = true; // Ensure video loops
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src={hpV} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay to make the video darker for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Content Section - Centered */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <div className="w-full max-w-4xl mx-auto h-full flex items-center justify-center">
            {contentData.map((content, index) => (
              <div
                key={index}
                className={`absolute w-full transition-opacity duration-500 ease-in-out ${
                  activeContent === index
                    ? "opacity-100 z-20"
                    : "opacity-0 z-10"
                }`}
              >
                <h2 className="text-lg md:text-xl lg:text-4xl font-medium mb-4">
                  {content.subtitle}
                </h2>
                <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-10">
                  <span className="text-blue-400">{animatedText}</span>
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded flex items-center transition-all text-lg">
                    {content.ctaText}
                    <ChevronRight className="ml-2 h-6 w-6" />
                  </button>
                  <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded flex items-center transition-all text-lg">
                    {content.secondaryCtaText}
                    <ChevronRight className="ml-2 h-6 w-6" />
                  </button>
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                  >
                    <source src={hpV} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}

// import { useState, useEffect, useRef } from 'react'; 
// import { ChevronRight, ChevronLeft } from 'lucide-react';

// export default function HeroSection() {
//   const [activeContent, setActiveContent] = useState(0);
//   const [transitioning, setTransitioning] = useState(false);
//   const [animatedText, setAnimatedText] = useState("");
//   const videoRef = useRef(null);

//   // Content data for the hero section
//   const contentData = [
//     {
//       subtitle: "Crafting Intelligent Systems that Evolve with Your Goals.",
//       ctaText: "Get a Free Consultation",
//       secondaryCtaText: "Know More",
//     },
//   ];

//   // Animation phrases from the script
//   const phrases = [
//     "Application Development",
//     "Software Testing",
//     "Custom Software",
//     "SaaS",
//     "Digital Growth Solutions.",
//     "HRMS",
//     "CRM",
//     "Project Management",
//     "Finance Management",
//     "DATA & AI",
//   ];

//   // Text animation logic using useEffect
//   useEffect(() => {
//     let index = 0;
    
//     // Initial text setting
//     setAnimatedText(phrases[0]);
    
//     // Set up interval for changing text
//     const intervalId = setInterval(() => {
//       index = (index + 1) % phrases.length;
//       setAnimatedText(phrases[index]);
//     }, 2000); // Change every 2 seconds
    
//     // Clean up interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   // Auto-rotate content sections
//   useEffect(() => {
//     const contentIntervalId = setInterval(() => {
//       changeContent((activeContent + 1) % contentData.length);
//     }, 6000); // Change content every 6 seconds
    
//     return () => clearInterval(contentIntervalId);
//   }, [activeContent]);

//   // Function to change content with transition effect
//   const changeContent = (newIndex) => {
//     setTransitioning(true);
//     setTimeout(() => {
//       setActiveContent(newIndex);
//       setTransitioning(false);
//     }, 300);
//   };

//   // Ensure video plays on component mount
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = true; // Ensure video is muted
//       videoRef.current.loop = true; // Ensure video loops
      
//       // Add a play attempt on user interaction to handle autoplay restrictions
//       const playVideo = () => {
//         videoRef.current.play().catch((error) => {
//           console.error("Video playback failed:", error);
//         });
//       };
      
//       playVideo();
      
//       // Try to play the video again when the window gets focus
//       window.addEventListener('focus', playVideo);
      
//       // Clean up event listener
//       return () => {
//         window.removeEventListener('focus', playVideo);
//       };
//     }
//   }, []);

//   return (
//     <>
//       <div className="relative w-full h-screen overflow-hidden">
//         {/* Video Background */}
//         <div className="absolute inset-0 z-0">
//           <video
//             ref={videoRef}
//             className="w-full h-full object-cover"
//             autoPlay
//             muted
//             playsInline
//             loop
//           >
//             {/* Use the correct path to your video file */}
//             <source src="/src/assets/hpV.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           {/* Overlay to make the video darker for better text readability */}
//           <div className="absolute inset-0 bg-black bg-opacity-50" />
//         </div>

//         {/* Content Section - Centered */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
//           <div className="w-full max-w-4xl mx-auto h-full flex items-center justify-center">
//             {contentData.map((content, index) => (
//               <div
//                 key={index}
//                 className={`absolute w-full transition-opacity duration-500 ease-in-out ${
//                   activeContent === index
//                     ? "opacity-100 z-20"
//                     : "opacity-0 z-10"
//                 }`}
//               >
//                 <h2 className="text-lg md:text-xl lg:text-4xl font-medium mb-4">
//                   {content.subtitle}
//                 </h2>
//                 <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-10">
//                   <span className="text-blue-400">{animatedText}</span>
//                 </h1>
//                 <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
//                   <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded flex items-center transition-all text-lg">
//                     {content.ctaText}
//                     <ChevronRight className="ml-2 h-6 w-6" />
//                   </button>
//                   <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded flex items-center transition-all text-lg">
//                     {content.secondaryCtaText}
//                     <ChevronRight className="ml-2 h-6 w-6" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

