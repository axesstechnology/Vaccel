import { useState, useEffect, useRef } from 'react'; 
import { ChevronRight, ChevronLeft } from 'lucide-react';
import hpV from '../../assets/hpV.mp4'; // adjust the path if needed



export default function HeroSection() {
  const [activeContent, setActiveContent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const videoRef = useRef(null);

  // Content data for the hero section
  const contentData = [
    {
      title: "Digital Growth Solutions.",
      subtitle: "Crafting Intelligent Systems that Evolve with Your Goals",
      ctaText: "Get a Free Consultation",
      secondaryCtaText: "Know More",
    },
    {
      title: "AI-Powered Technology.",
      subtitle: "Crafting Intelligent Systems that Evolve with Your Goals",
      ctaText: "Get a Free Consultation",
      secondaryCtaText: "Know More",
    },
    {
      title: "Enterprise Solutions.",
      subtitle: "Crafting Intelligent Systems that Evolve with Your Goals",
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
                <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-4">
                  {content.subtitle}
                </h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
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
// import hpV from '../../assets/hpV.mp4'; // adjust the path if needed

// export default function HeroSection() {
//   const [activeContent, setActiveContent] = useState(0);
//   const [transitioning, setTransitioning] = useState(false);
//   const [animatedText, setAnimatedText] = useState("");
//   const videoRef = useRef(null);

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

//   // Fix for video playback
//   useEffect(() => {
//     const playVideo = async () => {
//       if (videoRef.current) {
//         try {
//           // Force video properties
//           videoRef.current.muted = true;
//           videoRef.current.autoplay = true;
//           videoRef.current.loop = true;
//           videoRef.current.playsInline = true;
          
//           // Force play with await to catch any errors
//           await videoRef.current.play();
//           console.log("Video playing successfully");
//         } catch (error) {
//           console.error("Video playback error:", error);
          
//           // Fallback approach - try again after a short delay
//           setTimeout(async () => {
//             try {
//               await videoRef.current.play();
//               console.log("Video playing after retry");
//             } catch (retryError) {
//               console.error("Video playback retry failed:", retryError);
//             }
//           }, 1000);
//         }
//       }
//     };

//     // Add event listener for when the document becomes visible
//     document.addEventListener("visibilitychange", () => {
//       if (!document.hidden && videoRef.current) {
//         playVideo();
//       }
//     });

//     // Initial play attempt
//     playVideo();

//     // Clean up
//     return () => {
//       document.removeEventListener("visibilitychange", playVideo);
//     };
//   }, []);

//   return (
//     <>
//       <div className="relative w-full h-screen overflow-hidden">
//         {/* Video Background */}
//         <div className="absolute inset-0 z-0">
//           <video
//             ref={videoRef}
//             className="w-full h-full object-cover"
//             muted
//             playsInline
//             loop
//             preload="auto"
//           >
//             <source src={hpV} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           {/* Overlay to make the video darker for better text readability */}
//           <div className="absolute inset-0 bg-black bg-opacity-50" />
//         </div>

//         {/* Content Section - Centered with adjusted text positioning */}
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
//                 <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-4">
//                   {content.subtitle}
//                 </h2>
//                 <div className="flex flex-col items-center">
//                   <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-left">
//                     We Empower Startup
//                   </h1>
//                   <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
//                     companies with <span className="text-blue-400">{animatedText}</span>
//                   </h1>
//                 </div>
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

// import { useState, useEffect, useRef } from 'react'; 
// import { ChevronRight, ChevronLeft } from 'lucide-react';
// // Try importing with a different approach
// import hpV from '../../assets/hpV.mp4'; 

// export default function HeroSection() {
//   const [activeContent, setActiveContent] = useState(0);
//   const [transitioning, setTransitioning] = useState(false);
//   const [animatedText, setAnimatedText] = useState("");
//   const videoRef = useRef(null);
//   const [videoError, setVideoError] = useState(false);

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

//   // Text animation logic using useEffect
//   useEffect(() => {
//     let index = 0;
//     setAnimatedText(phrases[0]);
//     const intervalId = setInterval(() => {
//       index = (index + 1) % phrases.length;
//       setAnimatedText(phrases[index]);
//     }, 2000);
//     return () => clearInterval(intervalId);
//   }, []);

//   // Auto-rotate content sections
//   useEffect(() => {
//     const contentIntervalId = setInterval(() => {
//       changeContent((activeContent + 1) % contentData.length);
//     }, 6000);
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

//   // Extremely robust video initialization
//   useEffect(() => {
//     let attempts = 0;
//     let maxAttempts = 5;
    
//     const initializeVideo = () => {
//       if (!videoRef.current) return;
      
//       // Check if the video source is correctly loaded
//       if (!videoRef.current.src || videoRef.current.src === '') {
//         console.log("Video source not loaded correctly, trying to set it manually");
//         try {
//           // Try both ways to set source
//           videoRef.current.src = hpV;
//         } catch (e) {
//           console.error("Error setting video source:", e);
//         }
//       }

//       // Configure video attributes
//       videoRef.current.muted = true;
//       videoRef.current.playsInline = true;
//       videoRef.current.loop = true;
//       videoRef.current.autoplay = true;
//       videoRef.current.controls = false;
      
//       // Force play with recovery
//       const playAttempt = () => {
//         attempts++;
//         console.log(`Attempting to play video (attempt ${attempts}/${maxAttempts})`);
        
//         const playPromise = videoRef.current.play();
        
//         if (playPromise !== undefined) {
//           playPromise.then(() => {
//             console.log("Video playback started successfully");
//             setVideoError(false);
//           }).catch(error => {
//             console.error("Video playback error:", error);
            
//             if (attempts < maxAttempts) {
//               setTimeout(playAttempt, 1000); // Retry after 1 second
//             } else {
//               console.error("Maximum play attempts reached. Video might not autoplay.");
//               setVideoError(true);
//             }
//           });
//         }
//       };
      
//       // Initialize play
//       playAttempt();
//     };
    
//     // Initial setup
//     initializeVideo();
    
//     // Setup event listeners for window focus changes
//     const handleVisibilityChange = () => {
//       if (!document.hidden && videoRef.current) {
//         attempts = 0; // Reset attempts counter
//         initializeVideo();
//       }
//     };
    
//     // Reload video if window is resized (sometimes helps with rendering issues)
//     const handleResize = () => {
//       if (videoRef.current) {
//         // Pause and play on resize can help in some browsers
//         videoRef.current.pause();
//         setTimeout(() => {
//           attempts = 0;
//           initializeVideo();
//         }, 100);
//       }
//     };
    
//     document.addEventListener("visibilitychange", handleVisibilityChange);
//     window.addEventListener("resize", handleResize);
    
//     // Setup alternative approach with a MutationObserver
//     // This will detect if the video node is replaced or removed
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.type === 'childList') {
//           if (videoRef.current) {
//             attempts = 0;
//             initializeVideo();
//           }
//         }
//       });
//     });
    
//     const videoParent = document.querySelector('.absolute.inset-0.z-0');
//     if (videoParent) {
//       observer.observe(videoParent, { childList: true });
//     }
    
//     // Cleanup
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//       window.removeEventListener("resize", handleResize);
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <>
//       <div className="relative w-full h-screen overflow-hidden">
//         {/* Video Background with fallback */}
//         <div className="absolute inset-0 z-0">
//           {/* Video element */}
//           <video
//             ref={videoRef}
//             className="w-full h-full object-cover"
//             muted
//             playsInline
//             loop
//             autoPlay
//             preload="auto"
//             onError={(e) => {
//               console.error("Video error event:", e);
//               setVideoError(true);
//             }}
//           >
//             {/* Try multiple source formats for compatibility */}
//             <source src={hpV} type="video/mp4" />
            
//             {/* Add WebM source as fallback if you have it */}
//             {/* <source src={hpVWebm} type="video/webm" /> */}
            
//             Your browser does not support the video tag.
//           </video>
          
//           {/* Fallback background if video fails */}
//           {videoError && (
//             <div 
//               className="w-full h-full bg-gradient-to-b from-blue-900 to-black"
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 zIndex: 1
//               }}
//             />
//           )}
          
//           {/* Overlay to make content more readable */}
//           <div className="absolute inset-0 bg-black bg-opacity-50" 
//                style={{ zIndex: videoError ? 2 : 1 }} />
//         </div>

//         {/* Content Section - Centered with adjusted text positioning */}
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
//                 <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-4">
//                   {content.subtitle}
//                 </h2>
//                 <div className="flex flex-col items-center">
//                   <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-left">
//                     We Empower Startup
//                   </h1>
//                   <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
//                     companies with <span className="text-blue-400">{animatedText}</span>
//                   </h1>
//                 </div>
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