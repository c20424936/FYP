import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/navbar.css'; // Import custom CSS file

function CustomNavbar() {
  
return (
        <Navbar className="custom-navbar"> 
        <div className="container">
            <Navbar.Brand href="/"> Why recycle?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
                    <Nav.Link as={Link} to="/map" className="nav-link">Map</Nav.Link>
                    <Nav.Link as={Link} to="/why-recycle" className="nav-link">Tips</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="nav-link">About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default CustomNavbar;
