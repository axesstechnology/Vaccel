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
import CustomSoftware from "./pages/services/CustomSoftware/CustomSoftware";
import Industries from "./pages/Industries/Industries";
import SaaS from "./pages/services/SaaS/SaaS";

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
        <Route path="/services/custom-software" element={<CustomSoftware />} />
        <Route path="/services/SaaS-Development" element={<SaaS />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </FormProvider>
  );
}

export default App;
