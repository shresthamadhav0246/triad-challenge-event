import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light m-3">
      <Container>
        <Row>
          <Col>
            <a href="#help">Help</a>
            <span> | </span>
            <a href="#privacy">Privacy</a>
            <span> | </span>
            <a href="#cookies">Cookies</a>
            <span> | </span>
            <a href="#accessibility">Accessibility statement</a>
            <span> | </span>
            <a href="#contact">Contact</a>
            <span> | </span>
            <a href="#terms">Terms and conditions</a>
          </Col>
          <Col className="text-right">
            <a href="#welsh">Rhestr o Wasanaethau Cymraeg</a>
          </Col>
          <Col xs={12} className="text-center mt-3">
            <span>All content is available under the </span>
            <a href="http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank" rel="noopener noreferrer">
              Open Government Licence v3.0
            </a>
            <span>, except where otherwise stated</span>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            © Crown copyright
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
