import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DriversLicenseVerification from '../DriversLicenseVerification ';
import ComplianceCertificate from '../ComplianceCertificate';
import DVLARegistration from '../DVLARegistration';
import VehicleTaxExemption from '../VehicleTaxExemption';
import MOTEvidence from '../MOTEvidence';
import InsuranceProof from '../InsuranceProof';

import { RegistrationProvider } from '../../API/RegistrationContext';
import ReviewAndSubmit from './ReviewAndSubmit';
import OwenerInformation from './OwenerInformation';
import EscooterInformation from './EscooterInformation';


const RegistrationContainer = () => {
  return (
    <RegistrationProvider>
      <Routes>
        <Route path="/drivers-license" element={<DriversLicenseVerification />} />
        <Route path="/compliance-certificate" element={<ComplianceCertificate />} />
        <Route path="/dvla-registration" element={<DVLARegistration />} />
        <Route path="/vehicle-tax-exemption" element={<VehicleTaxExemption />} />
        <Route path="/mot-evidence" element={<MOTEvidence />} />
        <Route path="/insurance-proof" element={<InsuranceProof />} />
        <Route path="/review" element={<ReviewAndSubmit/>}/>
        <Route path="/user-information" element={<OwenerInformation/>}/>
        <Route path="/escooter-information" element={<EscooterInformation/>}/>
        {/* Add other registration routes here */}
      </Routes>
    </RegistrationProvider>
  );
};

export default RegistrationContainer;
