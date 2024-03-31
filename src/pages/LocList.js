import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table, Container } from 'react-bootstrap';

const LocList = () => {
  const [recycle, setRecycle] = useState([]);

  useEffect(() => {
    getRecycle();
  }, []);

  const getRecycle = async () => {
    try {
      const response = await axios.get("http://localhost:5000/recycle");
      setRecycle(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecycle = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/recycle/${id}`);
      getRecycle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      <div className="Home">
        <h1>Recycle Centers:</h1>
        <br />
        <Link to="add" className="btn btn-primary mb-3">
          Add New Recycle Center
        </Link>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Address</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Opening Hours</th>
              <th>Closing Hours</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recycle.map((recycle, index) => (
              <tr key={recycle._id}>
                <td>{index + 1}</td>
                <td>{recycle.Address}</td>
                <td>{recycle.lat}</td>
                <td>{recycle.long}</td>
                <td>{recycle.Opening_hours}</td>
                <td>{recycle.Closing_hours}</td>
                <td>{recycle.Type}</td>
                <td>
                  <Link to={`edit/${recycle._id}`} className="btn btn-info mr-1">
                    Edit
                  </Link>
                  <Button
                    onClick={() => deleteRecycle(recycle._id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default LocList;
