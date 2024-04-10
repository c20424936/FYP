import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


function AddLoc() {
  const [Address, setAddress] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [Opening_hours, setOpeningHours] = useState("");
  const [Closing_hours, setClosingHours] = useState("");
  const [Type, setType] = useState("");
  const navigate = useNavigate();
 
  const saveRecycle = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/recycle", {
        Address,
        lat,
        long,
        Opening_hours,
        Closing_hours,
        Type
      });
      navigate("/LocList");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>    
    <div className="columns mt-5">
      <div className="column is-half">
      <div className="Home">
      <div className="form">
        <form onSubmit={saveRecycle}>
          <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Latitude</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={lat}
                onChange={(e) => setLat(parseFloat(e.target.value))}
                placeholder="Latitude"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Longitude</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={long}
                onChange={(e) => setLong(parseFloat(e.target.value))}
                placeholder="Longitude"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Opening Hours</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Opening_hours}
                onChange={(e) => setOpeningHours(e.target.value)}
                placeholder="Opening Hours"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Closing Hours</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Closing_hours}
                onChange={(e) => setClosingHours(e.target.value)}
                placeholder="Closing Hours"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Type</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Type"
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
 
export default AddLoc;
