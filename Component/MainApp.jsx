import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AuthProvider, { useAuth } from '../Security/AuthContext';
// import AddAuction from './AddAuction';
import Login from './Login';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomePage from './HomePage';
import DriversLicenseVerification from './DriversLicenseVerification '
import ComplianceCertificate from './ComplianceCertificate'
import DVLARegistration from './DVLARegistration';
import VehicleTaxExemption from './VehicleTaxExemption'
import MOTEvidence from './MOTEvidence'
import InsuranceProof from './InsuranceProof'
import MyBotComponent from './MyBotComponent';
import SimpleWebsite from './SimpleWebsite';
import BasicInfoForm from './BasicInfoForm';
import { RegistrationProvider } from '../API/RegistrationContext';
import RegistrationContainer from './RegisterComponent/RegistrationComponent';
import RegistrationSuccess from './RegistrationSuccess';
import Register from './Register';


function AuthenticatedRoute({ children }) {
  const authContext = useAuth()


  if (authContext.isAuthenticated) {
   
    return children;
   
  }

  return <Navigate to="/login" />;
}

export default function MainApp() {
  return (
    <AuthProvider>
    <div className="FothebyApp">
      
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/register/*" element={<RegistrationContainer />} />
            <Route path="/registration-success" element={<RegistrationSuccess/>}/>
            <Route path ="/register" element={<Register/>}/>

            {/* <Route path='/' element ={<MyBotComponent/>}/>
          <Route path='/' element ={<SimpleWebsite/>}/> */}

     
            <Route path='/basicInfoForm' element={<BasicInfoForm/>}/>
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      
    </div>
    </AuthProvider>
  );
}


