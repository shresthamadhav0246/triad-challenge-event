import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationSuccess = () => {
  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2>Registration Successful!</h2>
          <p>Your registration has been successfully completed.</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
