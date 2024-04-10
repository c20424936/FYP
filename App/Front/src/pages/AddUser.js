import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [pass,setPassword]= useState("");
  const navigate = useNavigate();
 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
        pass,
      });
      navigate("/UserList");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="Home">
            <div className="form">
              <Form onSubmit={saveUser}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
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

                <Form.Group controlId="formBasicGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
 
export default AddUser;
