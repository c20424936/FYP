import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="/">Battery Collection!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
                    <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                    <Nav.Link as={Link} to="/map" className="nav-link">Map</Nav.Link>
                    <Nav.Link as={Link} to="/catagories" className="nav-link">Categories</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
