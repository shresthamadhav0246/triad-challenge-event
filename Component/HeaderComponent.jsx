import React, { useState, useEffect } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./index.css"; // Import CSS for styling

function HeaderComponent() {
  const [zoomEnabled, setZoomEnabled] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Function to toggle zoom feature
  const toggleZoom = () => {
    setZoomEnabled(!zoomEnabled);
  };

  // Function to handle mousemove event
  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    if (zoomEnabled) {
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [zoomEnabled]);

  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container>
      
      <Navbar.Brand href="/" className="fw-bold">
          <img
            src="../logo.png"
            width="35" // Set the width as needed
            height="35" // Set the height as needed
            className="d-inline-block align-top"
            alt="GOV.UK logo"
          />
          {' '}GOV.UK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {}
          </Nav>
          <Nav>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              {}
            </NavDropdown>
            <NavDropdown title="Accessibility" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={toggleZoom}>
                {zoomEnabled ? "Disable Zoom" : "Enable Zoom"}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#search">
              <BsSearch color="white" size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {zoomEnabled && <MagnifyingGlass cursorPosition={cursorPosition} />}
      </Container>
    </Navbar>
  );
}

const MagnifyingGlass = ({ cursorPosition }) => {
  return (
    <div className="magnifying-glass" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
      <div className="zoom-circle"></div>
    </div>
  );
};

export default HeaderComponent;
