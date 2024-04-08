import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";
import '../css/App.css'


function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [error, setError] = useState(""); // State variable for error message
  const navigate = useNavigate();
  const users = [{ email: "admin@gmail.com", pass: "admin123" }];

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your login endpoint
      const response = await axios.post("http://localhost:5000/login", {
        email,
        pass
      });
  
      // Assuming the response contains a token upon successful login
      const token = response.data.token;
  
      // Store the token in localStorage
      localStorage.setItem("token", token);
  
      // Redirect the user to the desired page
      navigate("/LocList");
    } catch (error) {
      // Handle login errors
      console.error("Login error:", error);
      setError("Unable to login. Please try again later.");
    }
  };
  

  return (
    <Container fluid className="login-page">
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6}>
          <div className="Home">
            <div className="form">
              <Form onSubmit={loginUser}>
                <h1>Login</h1>
                <h3>Welcome Back</h3>
                <br/>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={pass}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </Form.Group>

                {error && <Alert variant="danger">{error}</Alert>}
                <br/>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
