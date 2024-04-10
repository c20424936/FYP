import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table, Container } from 'react-bootstrap';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="mt-5">
      <div className="Home">
        <h1>Users:</h1>
        <br />
        <Link to="add" className="btn btn-primary mb-3">
          Add New User
        </Link>
        <br/>
        <Link to="/LocList" className="btn btn-primary mb-3">
          View Recycling locations
        </Link>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.pass}</td>
                <td>
                  <Link to={`edit/${user._id}`} className="btn btn-info mr-1">
                    Edit
                  </Link>
                  <Button
                    onClick={() => deleteUser(user._id)}
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

export default UserList;
