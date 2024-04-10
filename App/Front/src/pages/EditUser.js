import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [pass, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      setName(response.data.name);
      setEmail(response.data.email);
      setGender(response.data.gender);
      setPassword(response.data.pass);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
        pass,
      });
      navigate("/");
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
              <Form onSubmit={updateUser}>
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
                    type="text"
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
                <br/>
                
                <Button type="submit" variant="success">
                  Update
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EditUser;
