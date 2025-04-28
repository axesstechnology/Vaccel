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
import Aws from "./pages/services/aws/Aws";
import PrivacyPolicy from "./pages/footerPage/privacyPolicy/privacyPolicy";
import CustomSoftware from "./pages/services/SoftwareDevolopment/CustomSoftware/CustomSoftware";
import SaaS from "./pages/services/SoftwareDevolopment/SaaS/SaaS";


function App() {
  return (
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
        <Route path="/services/devops/aws" element={<Aws />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </FormProvider>
  );
}

export default App;
