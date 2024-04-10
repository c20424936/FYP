import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const EditLoc = () => {
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [closingHours, setClosingHours] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [Type, setType] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getLocById();
  }, []);

  const getLocById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/recycle/${id}`);
      setAddress(response.data.Address);
      setLat(response.data.lat);
      setLong(response.data.long);
      setClosingHours(response.data.Closing_hours);
      setOpeningHours(response.data.Opening_hours);
      setType(response.data.Type);
    } catch (error) {
      console.log(error);
    }
  };

  const updateLoc = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/recycle/${id}`, {
        Address: address,
        lat: lat,
        long: long,
        Closing_hours: closingHours,
        Opening_hours: openingHours,
        Type: Type
      });
      navigate("/LocList");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Form onSubmit={updateLoc}>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </Form.Group>
            <Form.Group controlId="formLat">
              <Form.Label>Latitude</Form.Label>
              <Form.Control
                type="number"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                placeholder="Latitude"
              />
            </Form.Group>
            <Form.Group controlId="formLong">
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                type="number"
                value={long}
                onChange={(e) => setLong(e.target.value)}
                placeholder="Longitude"
              />
            </Form.Group>
            <Form.Group controlId="formOpeningHours">
              <Form.Label>Opening Hours</Form.Label>
              <Form.Control
                type="text"
                value={openingHours}
                onChange={(e) => setOpeningHours(e.target.value)}
                placeholder="Opening Hours"
              />
            </Form.Group>
            <Form.Group controlId="formClosingHours">
              <Form.Label>Closing Hours</Form.Label>
              <Form.Control
                type="text"
                value={closingHours}
                onChange={(e) => setClosingHours(e.target.value)}
                placeholder="Closing Hours"
              />
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                value={Type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Type"
              />
            </Form.Group>
            <br/>
            <Button type="submit" variant="success">
              Update
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditLoc;
