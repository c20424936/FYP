import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import '../css/info.css';



const ViewLocInfo = () => {
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [closingHours, setClosingHours] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [Type, setType] = useState("");
  const [Info, setInfo] = useState("");
  
  const { _id } = useParams();

  useEffect(() => {
    getLocById();
  }, []);

  const getLocById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/recycle/${_id}`);
      setAddress(response.data.Address);
      setLat(response.data.lat);
      setLong(response.data.long);
      setClosingHours(response.data.Closing_hours);
      setOpeningHours(response.data.Opening_hours);
      setType(response.data.Type);
      setInfo(response.data.Info)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <body>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Form>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formLat">
              <Form.Label>Latitude</Form.Label>
              <Form.Control
                type="number"
                value={lat}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formLong">
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                type="number"
                value={long}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formOpeningHours">
              <Form.Label>Opening Hours</Form.Label>
              <Form.Control
                type="text"
                value={openingHours}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formClosingHours">
              <Form.Label>Closing Hours</Form.Label>
              <Form.Control
                type="text"
                value={closingHours}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                value={Type}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label>Info</Form.Label>
              <Form.Control
              as="textarea"
                rows={5}
                value={Info}
                readOnly
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
    </body>
  );
};

export default ViewLocInfo;
