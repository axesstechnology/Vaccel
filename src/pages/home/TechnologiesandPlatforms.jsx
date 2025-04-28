// import { useState, useEffect, useRef } from 'react';
// import { 
//   Database, Smartphone, FileText, Server, Cloud, 
//   GitBranch, Brain, Code, Monitor
// } from 'lucide-react';

// export default function TechnologiesPlatforms() {
//   const [activeCategory, setActiveCategory] = useState('Frontend');
//   const contentRef = useRef(null);
//   const sectionRefs = useRef({});
  
//   // Category definitions with proper icons and technology data
//   const categories = [
//     { 
//       id: 'Frontend', 
//       icon: <Monitor size={20} />,
//       technologies: [
//         { name: 'AngularJS', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/angular.svg" },
//         { name: 'ReactJS', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/react.svg" },
//         { name: 'JavaScript', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/javascript.svg" },
//         { name: 'CSS3', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/css3.svg" },
//         { name: 'HTML5', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/html5.svg" },
//         { name: 'Nextjs', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/nextdotjs.svg" }
//       ]
//     },
//     { 
//       id: 'Backend', 
//       icon: <Server size={20} />,
//       technologies: [
//         { name: 'Node.js', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/nodejs.svg" },
//         { name: 'Python', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/python.svg" },
//         { name: 'Java', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/java.svg" },
//         { name: 'Ruby', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/ruby.svg" },
//         { name: 'PHP', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/php.svg" },
//         { name: 'Go', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/go.svg" }
//       ]
//     },
//     { 
//       id: 'Mobile', 
//       icon: <Smartphone size={20} />,
//       technologies: [
//         { name: 'React Native', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/react.svg" },
//         { name: 'Flutter', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/flutter.svg" },
//         { name: 'Swift', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/swift.svg" },
//         { name: 'Kotlin', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/kotlin.svg" },
//         { name: 'Ionic', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/ionic.svg" },
//         { name: 'Xamarin', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/xamarin.svg" }
//       ]
//     },
//     { 
//       id: 'No Code', 
//       icon: <FileText size={20} />,
//       technologies: [
//         { name: 'Bubble', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/bubble.svg" },
//         { name: 'Webflow', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/webflow.svg" },
//         { name: 'Airtable', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/airtable.svg" },
//         { name: 'Zapier', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/zapier.svg" },
//         { name: 'Wix', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/wix.svg" },
//         { name: 'Shopify', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/shopify.svg" }
//       ]
//     },
//     { 
//       id: 'Databases', 
//       icon: <Database size={20} />,
//       technologies: [
//         { name: 'MongoDB', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/mongodb.svg" },
//         { name: 'PostgreSQL', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/postgresql.svg" },
//         { name: 'MySQL', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/mysql.svg" },
//         { name: 'Redis', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/redis.svg" },
//         { name: 'SQLite', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/sqlite.svg" },
//         { name: 'Oracle', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/oracle.svg" }
//       ]
//     },
//     { 
//       id: 'Cloud DB', 
//       icon: <Cloud size={20} />,
//       technologies: [
//         { name: 'AWS DynamoDB', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/amazondynamodb.svg" },
//         { name: 'Firebase', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/firebase.svg" },
//         { name: 'Google Firestore', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/googlecloud.svg" },
//         { name: 'Azure Cosmos DB', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/microsoftazure.svg" },
//         { name: 'Supabase', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/supabase.svg" },
//         { name: 'PlanetScale', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/planetscale.svg" }
//       ]
//     },
//     { 
//       id: 'DevOps', 
//       icon: <GitBranch size={20} />,
//       technologies: [
//         { name: 'Docker', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/docker.svg" },
//         { name: 'Kubernetes', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/kubernetes.svg" },
//         { name: 'Jenkins', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/jenkins.svg" },
//         { name: 'GitHub Actions', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/githubactions.svg" },
//         { name: 'Terraform', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/terraform.svg" },
//         { name: 'Ansible', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/ansible.svg" }
//       ]
//     },
//     { 
//       id: 'Artificial Intelligence', 
//       icon: <Brain size={20} />,
//       technologies: [
//         { name: 'TensorFlow', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/tensorflow.svg" },
//         { name: 'PyTorch', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/pytorch.svg" },
//         { name: 'OpenAI', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/openai.svg" },
//         { name: 'Hugging Face', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/huggingface.svg" },
//         { name: 'Scikit-learn', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/scikitlearn.svg" },
//         { name: 'Keras', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/keras.svg" }
//       ]
//     }
//   ];

//   // Handle scrolling to update active category based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!contentRef.current) return;
      
//       // Get current scroll position
//       const scrollPosition = contentRef.current.scrollTop;
      
//       // Find which section is currently in view
//       let currentCategory = categories[0].id;
      
//       for (const catId in sectionRefs.current) {
//         const element = sectionRefs.current[catId];
//         if (!element) continue;
        
//         const position = element.offsetTop - contentRef.current.offsetTop;
        
//         // If we've scrolled past the beginning of this section
//         if (scrollPosition >= position - 100) {
//           currentCategory = catId;
//         }
//       }
      
//       if (currentCategory !== activeCategory) {
//         setActiveCategory(currentCategory);
//       }
//     };
    
//     const contentElement = contentRef.current;
//     if (contentElement) {
//       contentElement.addEventListener('scroll', handleScroll);
      
//       // Initial check
//       handleScroll();
      
//       return () => {
//         contentElement.removeEventListener('scroll', handleScroll);
//       };
//     }
//   }, [activeCategory]);
  
//   // Handle category click to scroll to that section
//   const scrollToCategory = (categoryId) => {
//     if (sectionRefs.current[categoryId] && contentRef.current) {
//       const sectionTop = sectionRefs.current[categoryId].offsetTop - contentRef.current.offsetTop;
//       contentRef.current.scrollTo({
//         top: sectionTop,
//         behavior: 'smooth'
//       });
      
//       setActiveCategory(categoryId);
//     }
//   };
//   useEffect(() => {
//     document.body.style.backgroundColor = '#f5f5f5';
//     return () => {
//       document.body.style.backgroundColor = '';
//     };
//   }, []);
//   return (
//     <div className="flex flex-col w-full max-w-6xl mx-auto p-6">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold text-amber-700 mb-4">Technologies and Platforms We Use</h1>
//         <p className="text-gray-700 max-w-4xl mx-auto">
//           We build mobile and web applications with a focus on performance and longevity, using cutting-edge technologies, frameworks, and tools. 
//           Every solution we craft aligns with industry best practices and is purpose-built to support your unique business objectives and long-term success.
//         </p>
//       </div>

//       {/* Main content */}
//       <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden h-96">
//         {/* Left sidebar - categories */}
//         <div className="w-full md:w-64 bg-gray-900 text-white p-4 overflow-y-auto">
//           <div className="space-y-4">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 className={`flex items-center space-x-3 w-full text-left p-2 rounded-md transition-colors ${
//                   activeCategory === category.id ? 'bg-blue-900 bg-opacity-50' : 'hover:bg-gray-800'
//                 }`}
//                 onClick={() => scrollToCategory(category.id)}
//               >
//                 <div className="text-xl flex items-center justify-center w-6 h-6">
//                   {category.icon}
//                 </div>
//                 <span className="font-medium">{category.id}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right content area with sections and scroll sync */}
//         <div 
//           ref={contentRef} 
//           className="flex-1 bg-gray-50 overflow-y-auto"
//         >
//           {categories.map((category) => (
//             <div 
//               key={category.id} 
//               ref={el => sectionRefs.current[category.id] = el}
//               className="min-h-full p-6 border-b border-gray-200 last:border-b-0"
//             >
//               <h2 className="text-xl font-bold text-gray-800 mb-4">{category.id}</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {category.technologies.map((tech) => (
//                   <div key={tech.name} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-center space-x-4">
//                     <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-md">
//                       <img src={tech.imgSrc} alt={tech.name} className="w-8 h-8" />
//                     </div>
//                     <span className="font-medium text-gray-800">{tech.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect, useRef } from 'react';
import { 
  Database, Smartphone, FileText, Server, Cloud, 
  GitBranch, Brain, Code, Monitor
} from 'lucide-react';

export default function TechnologiesPlatforms() {
  const [activeCategory, setActiveCategory] = useState('All');
  const contentRef = useRef(null);
  const sectionRefs = useRef({});
  
  // Category definitions with proper icons and technology data
  const originalCategories = [
    { 
      id: 'Software Development', 
      icon: <Monitor size={20} />,
      technologies: [
        
        
       
        { name: 'HTML5', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/html5.svg" },
        { name: 'CSS3', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/css3.svg" },
        { name: 'Bootstrap', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/bootstrap.svg" },
        { name: 'Tailwind CSS', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/tailwindcss.svg" },
        { name: 'JavaScript', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/javascript.svg" },
        { name: 'ReactJS', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/react.svg" },
        { name: 'React native', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/react.svg" },
        { name: 'Flutter', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/flutter.svg" },
        { name: 'Node.js', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/nodejs.svg" },

      ]
    },
    // { 
    //   id: 'Backend', 
    //   icon: <Server size={20} />,
    //   technologies: [
    //     { name: 'Node.js', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/nodejs.svg" },
    //     { name: 'Python', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/python.svg" },
    //     { name: 'Java', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/java.svg" },
    //     { name: 'Ruby', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/ruby.svg" },
    //     { name: 'PHP', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/php.svg" },
    //     { name: 'Go', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/go.svg" }
    //   ]
    // },
    // { 
    //   id: 'Mobile', 
    //   icon: <Smartphone size={20} />,
    //   technologies: [
    //     { name: 'React Native', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/react.svg" },
    //     { name: 'Flutter', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/flutter.svg" },
    //     { name: 'Swift', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/swift.svg" },
    //     { name: 'Kotlin', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/kotlin.svg" },
    //     { name: 'Ionic', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/ionic.svg" },
    //     { name: 'Xamarin', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/xamarin.svg" }
    //   ]
    // },
    // { 
    //   id: 'No Code', 
    //   icon: <FileText size={20} />,
    //   technologies: [
    //     { name: 'Bubble', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/bubble.svg" },
    //     { name: 'Webflow', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/webflow.svg" },
    //     { name: 'Airtable', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/airtable.svg" },
    //     { name: 'Zapier', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/zapier.svg" },
    //     { name: 'Wix', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/wix.svg" },
    //     { name: 'Shopify', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/shopify.svg" }
    //   ]
    // },
    { 
      id: 'Software Testing', 
      icon: <Database size={20} />,
      technologies: [
        { name: 'Python', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/python.svg" },
        { name: 'Java', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/java.svg" },
        { name: 'Selenium', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/selenium.svg" },
        { name : 'playwright', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/playwright.svg" },
        { name : 'Rest Assured', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/restassured.svg" },
        { name: 'jmeter', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/jmeter.svg" },
        { name: 'Jest', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/jest.svg" },
        { name: 'Cypress', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/cypress.svg" },
        { name: 'JUnit', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/junit.svg" },
        { name: 'Postman', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/postman.svg" },
        { name: 'Mocha', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/mocha.svg" }
        
      ]
    },
    { 
      id: 'Cloud & DevOps', 
      icon: <Cloud size={20} />,
      technologies: [
        { name: 'AWS DynamoDB', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/amazondynamodb.svg" },
        { name: 'Azure', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/microsoftazure.svg" },
        { name: 'Docker', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/docker.svg" },
        { name: 'Kubernetes', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/kubernetes.svg" },
        { name: 'Jenkins', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/jenkins.svg" },
        { name: 'GitHub Actions', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/githubactions.svg" },
        // { name: 'Firebase', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/firebase.svg" },
        // { name: 'Google Firestore', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/googlecloud.svg" },
        // { name: 'Azure Cosmos DB', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/microsoftazure.svg" },
        // { name: 'Supabase', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/supabase.svg" },
        // { name: 'PlanetScale', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/planetscale.svg" }
      ]
    },
    { 
      id: ' Databases ', 
      icon: <Database size={20} />,
      technologies: [
        { name: 'MongoDB', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/mongodb.svg" },
        { name: 'PostgreSQL', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/postgresql.svg" },
        { name: 'MySQL', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/mysql.svg" },
        { name: 'firebase', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/firebase.svg" },
      ]
    },
    // { 
    //   id: 'Databases', 
    //   icon: <Database size={20} />,
    //   technologies: [
    //     { name: 'MongoDB', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/mongodb.svg" },
    //     // { name: 'PostgreSQL', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/postgresql.svg" },
    //     // { name: 'MySQL', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/mysql.svg" },
    //     // { name: 'Redis', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/redis.svg" },
    //     // { name: 'SQLite', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/sqlite.svg" },
    //     // { name: 'Oracle', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/oracle.svg" }
    //   ]
    // },
    { 
      id: 'Artificial Intelligence', 
      icon: <Brain size={20} />,
      technologies: [
        { name: 'TensorFlow', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/tensorflow.svg" },
        { name: 'PyTorch', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/pytorch.svg" },
        { name: 'Scikit-learn', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/scikitlearn.svg" },
        { name: 'Keras', imgSrc: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/keras.svg" }
      ]
    }
  ];

  // Create the "All" category with all technologies
  const allTechnologies = [];
  originalCategories.forEach(category => {
    category.technologies.forEach(tech => {
      allTechnologies.push(tech);
    });
  });

  // Add "All" category as the first in our categories list
  const categories = [
    {
      id: 'All',
      icon: <Code size={20} />,
      technologies: allTechnologies
    },
    ...originalCategories
  ];

  // Handle scrolling to update active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      // Get current scroll position
      const scrollPosition = contentRef.current.scrollTop;
      
      // Find which section is currently in view
      let currentCategory = categories[0].id;
      
      for (const catId in sectionRefs.current) {
        const element = sectionRefs.current[catId];
        if (!element) continue;
        
        const position = element.offsetTop - contentRef.current.offsetTop;
        
        // If we've scrolled past the beginning of this section
        if (scrollPosition >= position - 100) {
          currentCategory = catId;
        }
      }
      
      if (currentCategory !== activeCategory) {
        setActiveCategory(currentCategory);
      }
    };
    
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
      
      // Initial check
      handleScroll();
      
      return () => {
        contentElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, [activeCategory]);
  
  // Handle category click to scroll to that section
  const scrollToCategory = (categoryId) => {
    if (sectionRefs.current[categoryId] && contentRef.current) {
      const sectionTop = sectionRefs.current[categoryId].offsetTop - contentRef.current.offsetTop;
      contentRef.current.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      
      setActiveCategory(categoryId);
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#f5f5f5';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-amber-700 mb-4">Technologies and Platforms We Use</h1>
        <p className="text-gray-700 max-w-4xl mx-auto">
          We build mobile and web applications with a focus on performance and longevity, using cutting-edge technologies, frameworks, and tools. 
          Every solution we craft aligns with industry best practices and is purpose-built to support your unique business objectives and long-term success.
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden h-96">
        {/* Left sidebar - categories */}
        <div className="w-full md:w-64 bg-gray-900 text-white p-4 overflow-y-auto">
          <div className="space-y-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center space-x-3 w-full text-left p-2 rounded-md transition-colors ${
                  activeCategory === category.id ? 'bg-blue-900 bg-opacity-50' : 'hover:bg-gray-800'
                }`}
                onClick={() => scrollToCategory(category.id)}
              >
                <div className="text-xl flex items-center justify-center w-6 h-6">
                  {category.icon}
                </div>
                <span className="font-medium">{category.id}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right content area with sections and scroll sync */}
        <div 
          ref={contentRef} 
          className="flex-1 bg-gray-50 overflow-y-auto"
        >
          {categories.map((category) => (
            <div 
              key={category.id} 
              ref={el => sectionRefs.current[category.id] = el}
              className="min-h-full p-6 border-b border-gray-200 last:border-b-0"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">{category.id}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((tech) => (
                  <div key={`${category.id}-${tech.name}`} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-center space-x-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-md">
                      <img src={tech.imgSrc} alt={tech.name} className="w-8 h-8" />
                    </div>
                    <span className="font-medium text-gray-800">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}