import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/contact";
import { FormProvider } from './Context/FormContext';
import Industries from "./pages/Industries/Industries";
import Aws from "./pages/services/devops/aws/Aws";
import PrivacyPolicy from "./pages/footerPage/privacyPolicy/privacyPolicy";
import CustomSoftware from "./pages/services/SoftwareDevolopment/CustomSoftware/CustomSoftware";
import SaaS from "./pages/services/SoftwareDevolopment/SaaS/SaaS";
import ManualTesting from "./pages/services/manual-testing/ManualTesting";
import CiCd from "./pages/services/devops/cicdPipline/CiCd";
import DocAndKub from "./pages/services/devops/docAndKub/DocAndKub";
import ServerLess from "./pages/services/devops/serverLess/ServerLess";
import { DrawerProvider } from './context/DrawerContext';
import Drawer from './components/Drawer';
import { useDrawer } from './context/DrawerContext';
import FullStackMERN from "./pages/services/Webdevelopmennt/FullStackMERN";
import AutomationTesting from "./pages/services/AutomationTesting";

function DrawerWrapper() {
  const { isDrawerOpen, closeDrawer } = useDrawer();
  
  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <Drawer 
      isOpen={isDrawerOpen} 
      onClose={closeDrawer}
      onSubmit={handleSubmit}
    />
  );
}

function App() {
  return (
    <DrawerProvider>
      <FormProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/custom-software" element={<CustomSoftware/>} />
          <Route path="/services/SaaS-Development" element={<SaaS/>} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/SaaS-Development" element={<SaaS />} />
          <Route path="/services/testing/manual-testing" element={<ManualTesting />} />
          <Route path="/services/devops/aws" element={<Aws />} />
          <Route path="/services/devops/cicdPipline" element={<CiCd />} />
          <Route path="/services/Webdevelopmennt/mernstack" element={<FullStackMERN />} />
          <Route path="/services/AutomationTesting" element={<AutomationTesting />} />

          
          
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
        <DrawerWrapper />
      </FormProvider>
    </DrawerProvider>
  );
}

export default App;
