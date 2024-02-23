import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useRegistration } from '../../API/RegistrationContext'; // Import useRegistration hook
import { useNavigate } from 'react-router-dom';

const EscooterInformation = () => {
  const { documents, uploadDocument } = useRegistration(); // Access documents and uploadDocument from the context
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    makeAndModel: '',
    vin: '',
    color: '',
    yearOfManufacture: ''
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
    // Update e-scooter data in the context
    uploadDocument('modelOfEscooter', formData.makeAndModel);

    uploadDocument('color', formData.color);
    uploadDocument('yearOfManufacture', formData.yearOfManufacture);
    console.log("E-scooter data saved:", documents); // Log the updated documents
   
    navigate('/register/compliance-certificate');
 
  };

  return (
    <Container>
    <h1>E-scooter Registration</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="makeAndModel">
        <Form.Label>Make and Model</Form.Label>
        <Form.Control
          type="text"
          name="makeAndModel"
          placeholder="Enter the make and model of your bicycle"
          value={formData.makeAndModel}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="serialNumber">
        <Form.Label>Serial Number</Form.Label>
        <Form.Control
          type="text"
          name="serialNumber"
          placeholder="Enter the serial number of your bicycle"
          value={formData.serialNumber}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="color">
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          name="color"
          placeholder="Enter the color of your bicycle"
          value={formData.color}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="yearOfPurchase">
        <Form.Label>Year of Purchase</Form.Label>
        <Form.Control
          type="text"
          name="yearOfPurchase"
          placeholder="Enter the year of purchase of your bicycle"
          value={formData.yearOfPurchase}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
  );
};

export default EscooterInformation;
