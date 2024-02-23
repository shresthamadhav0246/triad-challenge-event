
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../API/RegistrationContext';

const DVLARegistration = () => {
  const { uploadDocument } = useRegistration();
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    uploadDocument('dvlaRegistration', file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to next step
    navigate('/register/vehicle-tax-exemption');
  };

  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Upload DVLA Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="certificateFile" className="form-label">Choose File</label>
              <input type="file" className="form-control" id="certificateFile" onChange={handleFileChange} />
            </div>
            <button type="submit" className="btn btn-primary">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DVLARegistration;

