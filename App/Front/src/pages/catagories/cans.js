import '../../css/catagory.css';
import React from 'react';
import MyCarousel from '../../Components/Carousel';
import { Button } from 'react-bootstrap';


function Cans() {
  return (

    <div>
      <MyCarousel />
      <br />

      <div className="card-container">

        <div className="info-card">
          <h3 className='info-title'>How aluminum cans are made and recycled:</h3>
          <div className="info-text">
            <p>
              Aluminum cans are made from a process called extrusion, where molten aluminum is forced through a die to create the can shape. These cans can be recycled indefinitely without losing quality.
              <br />
              When recycled, aluminum cans save around 95% of the energy required to produce new aluminum from raw materials.
            </p>
            <hr />
            Recycling aluminum cans is crucial for environmental sustainability.
            <br />
            <Button href="/map">Find a Recycling Center!</Button>
          </div>
        </div>

        <img className="info-img" src="Images/Cans.png" alt="Aluminum Cans" />


        <div className="info-card" >
          <h3 className="info-title">How can we recycle aluminum cans?</h3>
          <p className="info-text">
            Recycling aluminum cans is simple and highly effective for reducing waste and conserving resources.
            <br />
            <br />
            <ul>
              <li>Collect aluminum cans and ensure they are empty and dry.</li>
              <hr />
              <li>Take them to a local recycling center or use curbside recycling programs if available in your area.</li>
              <hr />
              <li>Recycling aluminum cans not only saves energy and resources but also reduces landfill waste and greenhouse gas emissions.</li>
            </ul>
          </p>
        </div>
        
        <img className="info-img" src="Images/Cans.png" alt="Aluminum Cans" />

        
        
        <br />



        <div className="info-card" >
          <h3 className="info-title">Benefits of recycling aluminum cans:</h3>
          <p className="info-text">
            <ul>
              <li>Conserves natural resources: Recycling aluminum reduces the need for mining and processing virgin materials.</li>
              <hr />
              <li>Energy-efficient: Recycling aluminum requires only a fraction of the energy needed to produce new aluminum.</li>
              <hr />
              <li>Reduces landfill waste: Recycling aluminum cans helps divert waste from landfills, prolonging their lifespan.</li>
              <hr />
              <li>Environmental protection: Recycling aluminum reduces air and water pollution associated with mining and manufacturing processes.</li>
            </ul>
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Cans;
