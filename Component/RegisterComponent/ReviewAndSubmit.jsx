import React from 'react';
import { useRegistration } from '../../API/RegistrationContext';
import '../../Component/index.css'
import { addEscooterApi } from '../../API/AuctionAPIService';
import { Link, useNavigate } from 'react-router-dom';

const ReviewAndSubmit = () => {
  const { documents, uploadDocument, setDocuments } = useRegistration();

  const navigate = useNavigate();

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    uploadDocument(key, file);
  };

  const handleEditClick = (key) => {
    // Placeholder function for edit button - implement this to handle the editing of fields
    console.log(`Edit ${key}`);
  };

  const handleSubmit = () => {
    console.log('Submitting all information', documents);

    // Prepare the data to be sent
    const data = {
        modelOfEscooter: documents.modelOfEscooter || '',
        color: documents.color || '',
        yearOfManufacture: documents.yearOfManufacture || '',
        user: {
            id: 1, // Assuming you have a userId field in documents
        },
        driverLicenseFilePath: documents.driversLicense ? documents.driversLicense.name : null,
        complianceCertificateFilePath: documents.complianceCertificate ? documents.complianceCertificate.name : null,
        dvlaRegistrationFilePath: documents.dvlaRegistration ? documents.dvlaRegistration.name : null,
        vehicleTaxExemptionFilePath: documents.vehicleTaxExemption ? documents.vehicleTaxExemption.name : null,
        motEvidenceFilePath: documents.motEvidence ? documents.motEvidence.name : null,
        insuranceProofFilePath: documents.insuranceProof ? documents.insuranceProof.name : null
    };

    addEscooterApi(data)
        .then(response => {
            if (response.ok) {
                console.log('Escooter data saved successfully');
              
            } else {
                console.error('Failed to save escooter data');
                // Handle error, such as showing an error message to the user
            }
        })
        .catch(error => {
            console.error('Error occurred while saving escooter data:', error);
            // Handle error, such as showing an error message to the user
        });

        navigate("/registration-success")
};


  return (
    <div>
      <h2 className='m-4'>Review Your Information</h2>
      <div className="review-container">
        <div className="review-item">
          <div>
            <h5>Full Name:</h5>
          </div>
          <div>
            <p>{documents.fullName || 'Not provided'}</p>
          </div>
          <div>
            <button onClick={() => handleEditClick('fullName')}>Change</button>
          </div>
        </div>
        <div className="review-item">
          <div>
            <h5>Date of Birth:</h5>
          </div>
          <div>
            <p>{documents.dateOfBirth || 'Not provided'}</p>
          </div>
          <div>
            <button onClick={() => handleEditClick('dateOfBirth')}>Change</button>
          </div>
        </div>
        <div className="review-item">
          <div>
            <h5>Address:</h5>
          </div>
          <div>
            <p>{documents.address || 'Not provided'}</p>
          </div>
          <div>
            <button onClick={() => handleEditClick('address')}>Change</button>
          </div>
        </div>
        <div className="review-item">
          <div>
            <h5>Model of E-Scooter:</h5>
          </div>
          <div>
            <p>{documents.modelOfEscooter || 'Not provided'}</p>
          </div>
          <div>
            <button onClick={() => handleEditClick('modelOfEscooter')}>Change</button>
          </div>
        </div>
        <div className="review-item">
          <div>
            <h5>Color:</h5>
          </div>
          <div>
            <p>{documents.color || 'Not provided'}</p>
          </div>
          <div>
            <button onClick={() => handleEditClick('color')}>Change</button>
          </div>
        </div>
        <div className="review-item">
          <div>
            <h5>Year of Manufacture:</h5>
          </div>
          <div>
            <p>{documents.yearOfManufacture || 'Not provided'}</p>
          </div>
          <div>
            <button onClick={() => handleEditClick('yearOfManufacture')}>Change</button>
          </div>
        </div>
        {/* Repeat the pattern for other fields */}
        {['driversLicense', 'complianceCertificate', 'dvlaRegistration', 'vehicleTaxExemption', 'motEvidence', 'insuranceProof'].map(key => (
          <div key={key} className="review-item">
            <div>
              <h5>{key.split(/(?=[A-Z])/).join(" ")}:</h5>
            </div>
            <div>
              <p>{documents[key] ? documents[key].name : 'No file uploaded'}</p>
            </div>
            <div>
              <input
                id={`file-input-${key}`}
                type="file"
                onChange={(e) => handleFileChange(e, key)}
                style={{ display: 'none' }}
              />
              <label htmlFor={`file-input-${key}`}>
                <button>{documents[key] ? 'Change File' : 'Upload File'}</button>
              </label>
            </div>
          </div>
        ))}
      </div>
      <button className='m-4' onClick={handleSubmit}>Submit All Information</button>
    </div>
  );
};

export default ReviewAndSubmit;
