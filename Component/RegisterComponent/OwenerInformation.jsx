import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useRegistration } from '../../API/RegistrationContext'; // Import useRegistration hook
import { useNavigate } from 'react-router-dom';

const OwnerInformation = () => {
  const { documents, uploadDocument } = useRegistration(); // Access documents and uploadDocument from the context
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    phoneNumber: '',
    email: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update owner data in the context
    uploadDocument('fullName', formData.fullName);
    uploadDocument('dateOfBirth', formData.dateOfBirth);
    uploadDocument('address', formData.address);
    console.log("Owner data saved:", documents); 
   
    navigate('/register/escooter-information');
  };

  return (
    <Container>
      <h1 className="m-4">E-scooter Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="dateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="m-5">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default OwnerInformation;
