// FormContext.jsx
import { createContext, useContext, useState } from 'react';
import Drawer from '../components/Drawer';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const openDrawer = () => {
    console.log("Opening drawer");
    setIsDrawerOpen(true);
  };
  
  const closeDrawer = () => {
    console.log("Closing drawer");
    setIsDrawerOpen(false);
  };
  
  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
    // Here you would typically send the data to your backend
    // e.g., axios.post('/api/submit-form', formData);
    alert('Form submitted successfully!');
  };
  
  return (
    <FormContext.Provider value={{ isDrawerOpen, openDrawer, closeDrawer }}>
      {children}
      <Drawer 
        isOpen={isDrawerOpen} 
        onClose={closeDrawer} 
        onSubmit={handleFormSubmit} 
      />
    </FormContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useDrawer must be used within a FormProvider');
  }
  return context;
};