import React, { createContext, useContext, useState } from 'react';

const RegistrationContext = createContext();

export const useRegistration = () => useContext(RegistrationContext);

export const RegistrationProvider = ({ children }) => {
  const [documents, setDocuments] = useState({
    fullName:null,
    dataOfBirth:null,
    address:null,
    modelOfEscooter:null,
    color:null,
    yearOfManufacture:null,
    driversLicense: null,
    complianceCertificate: null,
    dvlaRegistration: null,
    vehicleTaxExemption: null,
    motEvidence: null,
    insuranceProof: null,
  });

  const uploadDocument = (name, file) => {
    setDocuments(prevDocuments => ({
      ...prevDocuments,
      [name]: file
    }));
  };

  return (
    <RegistrationContext.Provider value={{ documents, uploadDocument }}>
      {children}
    </RegistrationContext.Provider>
  );
};
