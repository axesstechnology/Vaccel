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
import CustomSoftware from "./pages/CustomSoftware/CustomSoftware";
import ConnectButton from './components/ConnectButton';

function App() {
  return (
    <FormProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/custom-software" element={<CustomSoftware />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </FormProvider>
  );
}

export default App;
