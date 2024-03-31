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
      await axios.post("http://localhost:5000/login", {
        email,
        pass
      });
      const account = users.find((user) => user.email === email);
      if (account && account.pass === pass) {
        localStorage.setItem("authenticated", true);
        navigate("/LocList");
      } else {
        setError("Invalid email or password"); // Set error message if login fails
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Unable to login. Please try again later."); // Set generic error message
    }
  };

  return (
   

    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="Home">
            <div className="form">
              <Form onSubmit={loginUser}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
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
