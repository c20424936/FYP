import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Login() {
  const [email, setEmail] = useState("");
  const [pass,setPassword]= useState("");
  const navigate = useNavigate();
  
  //Create the variable to authenticate and see if it already exists and if not set it to false
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ email: "admin@gmail.com", pass: "admin12" }];
 
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email,
        pass,
      });
      const account = users.find((user) => user.email === email);
      if (account && account.pass === pass) {
      setauthenticated(true)
      localStorage.setItem("authenticated", true);
      navigate("/UserList");
      }else{
        navigate("/");
      }
      
    } catch (error) {
      console.log(error);
    }
  };


      return (
        <>#
        <div className="columns mt-5">
      <div className="column is-half">
      <div className="Home">
      <div className="form">
        <form onSubmit={loginUser}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Pass</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={pass}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
          <br/>
          <div className="field">
            <div className="control">
              <Button type="submit" className="newbtn">
                Save
              </Button>
            </div>
          </div>
        </form>
       </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;