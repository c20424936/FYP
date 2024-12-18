import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
import '../css/navbar.css';


function CustomNavbar() {
    const navigate = useNavigate();


    const handleLogout = () => {
        // Clear the authentication token from localStorage
        localStorage.removeItem('token');
        // Redirect the user to the login page
        navigate('/login');
      };

return (
        <Navbar className="custom-navbar"> 
        <div className="container">
            <Navbar.Brand href="/"> Why recycle?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
                    <Nav.Link as={Link} to="/map" className="nav-link">Map</Nav.Link>
                    <Nav.Link as={Link} to="/tips" className="nav-link">Tips</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="nav-link">About Us</Nav.Link>
                </Nav>
                <Button  onClick={handleLogout}>Logout</Button>
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default CustomNavbar;
