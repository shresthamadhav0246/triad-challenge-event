import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Component/index.css'
import { Link, useNavigate} from 'react-router-dom';
import { getAllAuctions, getAllCategoriesApi, getAllLotsApi } from '../API/AuctionAPIService';
import {Form, Button, Card, Col, Container, FormControl, Row, ListGroup, Accordion } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight} from 'react-icons/bs'

const HomePage = () => {

  // useEffect(() => {
  //   // Function to load a script
  //   const loadScript = (src, defer) => {
  //     const script = document.createElement('script');
  //     script.src = src;
  //     if (defer) script.defer = true;
  //     document.body.appendChild(script);
  //     return script;
  //   };

  //   // Load the scripts
  //    const botpressScript = loadScript('https://cdn.botpress.cloud/webchat/v1/inject.js', false);
  //   const botpressConfigScript = loadScript('https://mediafiles.botpress.cloud/167c7b8b-e9d3-40ac-be2c-5791f34e45e7/webchat/config.js', true);

  //   // Remove the scripts on component unmount
  //   return () => {
  //     // document.body.removeChild(botpressScript);
  //     document.body.removeChild(botpressConfigScript);
  //   };
  // }, []); 


  
  return (
    <Container>
  <h2 className='container-fluid bg-light p-3 w-90 d-flex flex-column align-items-start mt-3'>
  <span>Part of</span>
  <span>E-scooter registration: step by step</span>
</h2>

    <Row className="my-4">
    <Col md={8}>
  <div className="mt-4">
    <h1 className="mb-4 d-flex flex-column align-items-start">E-scooter registration</h1>
    <div>
      <h2 className="h4 mb-3 d-flex flex-column align-items-start ms-5 ">Contents</h2>
      <ul className="list-unstyled d-flex flex-column align-items-start ms-5">
        <li className="mb-2">— Overview</li>
        <li className="mb-2">— New and used vehicles</li>
        <li className="mb-2">— New registrations</li>
        <li className="mb-2">— New registrations fee</li>
        <li className="mb-2">— Rebuilt vehicles</li>
        <li className="mb-2">— Kit-built vehicles</li>
        <li className="mb-2">— Kit-converted vehicles</li>
        <li className="mb-2">— Radically altered vehicles</li>
        <li className="mb-2">— Old vehicles</li>
        <li className="mb-2">— Reconstructed classic vehicles</li>
        <li className="mb-2">— Vehicle identification number</li>
        <li className="mb-2">— 'Q' registration numbers</li>
      </ul>
    </div>
  </div>
</Col>

       <Col md={4}>
         
        </Col>
    </Row>

    <Row className="my-5">
        <Col>
          <h1 className="text-center">Overview</h1>
          <p className="text-center">Understand the steps to legally ride your e-scooter.</p>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <h2>Requirements</h2>
          <ul>
            <li>Category Q driver's license</li>
            <li>Certificate of compliance</li>
            <li>Registration with DVLA</li>
            <li>Evidence of vehicle tax exemption</li>
            <li>MOT for your e-scooter</li>
            <li>Valid insurance</li>
          </ul>
        </Col>
        <Col md={6}>
          <h2>How to Register</h2>
          <p>Follow our step-by-step guide to easily register your e-scooter and comply with the new legislation. Ensure you have all the necessary documents ready before starting your application.</p>
          {/* <Button variant="primary" href="/register/user-information">Start Registration</Button> */}
       <Link to="/login">Register</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="mt-5">FAQs</h2>
          <p>Got questions? We've got answers. Check out our FAQ section for more information about e-scooter registration, required documents, and more.</p>
          <Button variant="outline-secondary" href="/faqs">Visit FAQs</Button>
        </Col>
       
      </Row>

  </Container>
  );
};

export default HomePage;
