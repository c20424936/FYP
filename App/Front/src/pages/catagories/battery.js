import '../../css/catagory.css';
import React from 'react';
import MyCarousel from '../../Components/Carousel';
import { Button } from 'react-bootstrap';


function Battery() {
  return (

    <div>
      <MyCarousel />
      <br />
      <div className="card-container">

        <div className="info-card">
          <h3 className='info-title'>Where can we bring our batteries?</h3>
          <div className="info-text">
            <p>
              Small batteries can be recycled in any WEEE Ireland Blue Battery Boxes, at your local supermarket, newsagent and wherever you buy your batteries.
            </p>
            <hr />
            <p>
              Big and small batteries can be recycled at local recycle centres, which can be found via the map:
            </p>
            <Button href="/map">Go to the Map!</Button>
          </div>
        </div>


        <img className="info-img" src="Images/Batteryrecycle.png" alt="Recycle Type:" />

        <div className="info-card" >
          <h3 className="info-title">Why recycle batteries?:</h3>
          <p className="info-text">
            There are many reasons why we should recycle batteries.

            <ul>
              <li>The heavy metals and toxic chemicals such as lead, mercury, cadmium, and lithium in the batteries can leech into and contaminate the soil and water.</li>
              <hr />
              <li>Recycling helps conserve finite resources and reduces the need for raw material extraction, such as litium, cobalt and nickle. These scarse resources can be recovered and reused in production of more batteries.</li>
              <hr />
              <li>If not recycled correctly, batteries can end up in landfills. If crushed or handed incorrectly some batteries, such as litium battteries, can ignite and explode, causing huge landfill fires that are expremly hazardous to people and the environment </li>
            </ul>
          </p>
        </div>

        <img src="Images/BBC Battery Fire.png" alt="Battery Fire" style={{ padding: '15px' }} />


        <br />
      </div>
    </div>
  );
}

export default Battery;
