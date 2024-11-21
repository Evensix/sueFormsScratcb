// context/FormContext.ts

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';


// Define types for the context value
interface FormContextType {
  formData: FormData;
  updateFormData: (section: keyof FormData, data: Partial<FormData[keyof FormData]>) => void;
}

  
  // Define a type for the entire form data
  interface FormData {
    personalInfo: any;
    careHistory: any;
    contactDetails: any;
  }

// Create context with the correct type
const FormContext = createContext<FormContextType | undefined>(undefined);

// FormProvider component to wrap the app and provide form data
export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<FormData>({
        personalInfo: {},
        careHistory: { },
        contactDetails: {},
      });
    
      const updateFormData = (section: keyof FormData, data: Partial<FormData[keyof FormData]>) => {
        setFormData((prev) => ({
          ...prev,
          [section]: { ...prev[section], ...data },
        }));
      };

      useEffect(() => {
        console.log(formData);
      }, [formData]);
      
    return(
        <FormContext.Provider value={{ formData, updateFormData }}>
          {children}
        </FormContext.Provider>
      )

};

// Custom hook to use form context
export const useFormContext = (): FormContextType => {
    const context = useContext<FormContextType | undefined>(FormContext);
    if (!context) {
      throw new Error('useForm must be used within a FormProvider');
    }
    return context;
  };