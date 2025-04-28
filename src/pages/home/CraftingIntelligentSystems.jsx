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

// // Import directly from public folder instead - this approach often works better for videos
// // If this doesn't work, replace with your actual video path
// const videoSrc = '/assets/hpV.mp4';

// export default function HeroSection() {
//   const [activeContent, setActiveContent] = useState(0);
//   const [transitioning, setTransitioning] = useState(false);
//   const [animatedText, setAnimatedText] = useState("");
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);

//   // Content data for the hero section
//   const contentData = [
//     {
//       title: "Digital Growth Solutions.",
//       subtitle: "Crafting Intelligent Systems that Evolve with Your Goals",
//       ctaText: "Get a Free Consultation",
//       secondaryCtaText: "Know More",
//     },
//     {
//       title: "AI-Powered Technology.",
//       subtitle: "Crafting Intelligent Systems that Evolve with Your Goals",
//       ctaText: "Get a Free Consultation",
//       secondaryCtaText: "Know More",
//     },
//     {
//       title: "Enterprise Solutions.",
//       subtitle: "Crafting Intelligent Systems that Evolve with Your Goals",
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

//   // Enhanced text animation with smooth transitions
//   useEffect(() => {
//     let index = 0;
//     let fadeOutTimeout;
//     let changeTextTimeout;
    
//     // Initial text setting
//     setAnimatedText(phrases[0]);
    
//     const animateText = () => {
//       // Start fade out
//       containerRef.current?.classList.add('text-fade-out');
      
//       fadeOutTimeout = setTimeout(() => {
//         // Change text when invisible
//         index = (index + 1) % phrases.length;
//         setAnimatedText(phrases[index]);
        
//         // Start fade in
//         changeTextTimeout = setTimeout(() => {
//           containerRef.current?.classList.remove('text-fade-out');
//         }, 50);
//       }, 500); // Half the transition duration
//     };
    
//     // Set up interval for changing text
//     const intervalId = setInterval(animateText, 3000); // Change every 3 seconds
    
//     // Clean up interval and timeouts on component unmount
//     return () => {
//       clearInterval(intervalId);
//       clearTimeout(fadeOutTimeout);
//       clearTimeout(changeTextTimeout);
//     };
//   }, []);

//   // Auto-rotate content sections with improved transitions
//   useEffect(() => {
//     const contentIntervalId = setInterval(() => {
//       changeContent((activeContent + 1) % contentData.length);
//     }, 8000); // Change content every 8 seconds (give people more time to read)
    
//     return () => clearInterval(contentIntervalId);
//   }, [activeContent]);

//   // Improved transition effect for content change
//   const changeContent = (newIndex) => {
//     setTransitioning(true);
//     setTimeout(() => {
//       setActiveContent(newIndex);
//       setTimeout(() => {
//         setTransitioning(false);
//       }, 50);
//     }, 500);
//   };

//   // Advanced video handling for more reliable playback
//   useEffect(() => {
//     // Function to handle video loading and playing
//     const setupVideo = async () => {
//       if (!videoRef.current) return;
      
//       try {
//         // Set all properties to ensure playback
//         videoRef.current.muted = true;
//         videoRef.current.playsInline = true;
//         videoRef.current.loop = true;
//         videoRef.current.autoplay = true;
        
//         // Reset the video source to force reload
//         videoRef.current.load();
        
//         // Wait for the loadeddata event
//         const loadPromise = new Promise((resolve) => {
//           const handleLoaded = () => {
//             console.log("Video loaded successfully");
//             resolve();
//             videoRef.current.removeEventListener('loadeddata', handleLoaded);
//           };
//           videoRef.current.addEventListener('loadeddata', handleLoaded);
//         });
        
//         // Try to wait for loading with a timeout
//         await Promise.race([
//           loadPromise,
//           new Promise((_, reject) => setTimeout(() => reject(new Error("Video load timeout")), 5000))
//         ]);
        
//         // Play the video
//         await videoRef.current.play();
//         setIsVideoLoaded(true);
//         console.log("Video playing successfully");
//       } catch (error) {
//         console.error("Video setup error:", error);
        
//         // Try one more time after a delay
//         setTimeout(async () => {
//           try {
//             if (videoRef.current) {
//               await videoRef.current.play();
//               setIsVideoLoaded(true);
//               console.log("Video playing on second attempt");
//             }
//           } catch (retryError) {
//             console.error("Video retry failed:", retryError);
//           }
//         }, 1000);
//       }
//     };

//     // Call setup function when component mounts
//     setupVideo();

//     // Add visibility change handler
//     const handleVisibilityChange = () => {
//       if (!document.hidden && videoRef.current) {
//         videoRef.current.play().catch(err => console.error("Visibility play error:", err));
//       }
//     };
    
//     document.addEventListener("visibilitychange", handleVisibilityChange);
    
//     // Clean up event listener
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   return (
//     <>
//       {/* Custom CSS for smooth text transitions */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .hero-enter {
//           animation: fadeIn 0.8s ease-out forwards;
//         }
        
//         .hero-content {
//           transition: opacity 0.5s ease, transform 0.5s ease;
//         }
        
//         .text-fade-out {
//           opacity: 0;
//           transform: translateY(10px);
//         }
        
//         .text-container {
//           transition: opacity 0.5s ease, transform 0.5s ease;
//         }
        
//         .button-hover {
//           transition: all 0.3s ease;
//         }
        
//         .button-hover:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
//         }
//       `}</style>
    
//       <div className="relative w-full h-screen overflow-hidden hero-enter">
//         {/* Video Background with fallback */}
//         <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900 to-black">
//           <video
//             ref={videoRef}
//             className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
//             muted
//             playsInline
//             loop
//             preload="auto"
//             poster="/assets/video-poster.jpg" // Add a poster image for better UX while video loads
//           >
//             {/* Try both relative and direct path options */}
//             <source src={videoSrc} type="video/mp4" />
//             <source src="/hpV.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
          
//           {/* Overlay gradient for better text readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
//         </div>

//         {/* Content Section with enhanced responsiveness and transitions */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 md:px-8">
//           <div className="w-full max-w-5xl mx-auto h-full flex items-center justify-center">
//             {contentData.map((content, index) => (
//               <div
//                 key={index}
//                 className={`absolute w-full hero-content ${
//                   transitioning ? 'opacity-0 transform -translate-y-4' : 
//                   activeContent === index ? 'opacity-100 transform translate-y-0' : 'opacity-0'
//                 } transition-all duration-700 ease-in-out`}
//               >
//                 <h2 className="text-lg md:text-xl lg:text-4xl font-medium mb-4 sm:mb-6 md:mb-8">
//                   {content.subtitle}
//                 </h2>
                
//                 <div ref={containerRef} className="text-container mb-10">
//                   <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
//                     <span className="text-blue-400 inline-block">{animatedText}</span>
//                   </h1>
//                 </div>
                
//                 <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8">
//                   <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded flex items-center transition-all text-base sm:text-lg button-hover w-full sm:w-auto">
//                     {content.ctaText}
//                     <ChevronRight className="ml-2 h-5 w-5" />
//                   </button>
//                   <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded flex items-center transition-all text-base sm:text-lg button-hover w-full sm:w-auto mt-4 sm:mt-0">
//                     {content.secondaryCtaText}
//                     <ChevronRight className="ml-2 h-5 w-5" />
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