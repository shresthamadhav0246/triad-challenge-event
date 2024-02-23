import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const BasicInfoForm = ({ onNext }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    licenseNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(userInfo); // Pass the state to the parent component or next form step
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={userInfo.address}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formLicenseNumber">
        <Form.Label>Driver's License Number</Form.Label>
        <Form.Control
          type="text"
          name="licenseNumber"
          value={userInfo.licenseNumber}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Next
      </Button>
    </Form>
  );
};

export default BasicInfoForm;
