import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const techStack = {
  Frontend: [
    { name: "AngularJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Nextjs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  ],
  Backend: [],
  Mobile: [],
  "No Code": [],
  Databases: [],
  "Cloud DB": [],
  DevOps: []
};

const TechStackTabs = () => {
  const [selectedTab, setSelectedTab] = useState("Frontend");

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center text-amber-700 mb-4">
        Technologies and Platforms We Use
      </h2>
      <p className="text-center text-gray-600 mb-10">
        We build mobile and web applications with a focus on performance and longevity, using cutting-edge technologies, frameworks, and tools.
      </p>
      <div className="flex rounded-2xl shadow-lg overflow-hidden">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} orientation="vertical" className="flex w-full">
          <TabsList className="bg-slate-900 text-white flex flex-col w-60 p-4 gap-2 overflow-y-auto">
            {Object.keys(techStack).map(category => (
              <TabsTrigger key={category} value={category} className="text-left px-4 py-2 rounded-md hover:bg-slate-700 focus:outline-none">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <ScrollArea className="flex-1 bg-white p-6 max-h-[400px] overflow-y-auto">
            {Object.entries(techStack).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {items.length > 0 ? (
                    items.map((tech, index) => (
                      <div key={index} className="p-4 border rounded-2xl shadow-sm flex items-center gap-4">
                        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                        <div className="text-lg font-medium">{tech.name}</div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No technologies listed yet.</p>
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  );
};

export default TechStackTabs;